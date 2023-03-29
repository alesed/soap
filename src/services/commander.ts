import { Client } from "./client";

const BUY_THRESHOLD = 5000;
const SELL_THRESHOLD = 6000;

export class Commander {
  private readonly client: Client;
  private readonly accountId: string;
  private stocks = 0;

  constructor(client: Client, accountId: string) {
    this.client = client;
    this.accountId = accountId;
  }

  public async start() {
    while (true) {
      const shouldBuy = await this.shouldBuy();
      const canBuy = await this.canBuy();
      if (shouldBuy && canBuy) {
        await this.buy();
      }
      const shouldSell = await this.shouldSell();
      const canSell = this.canSell();
      if (shouldSell && canSell) {
        await this.sell();
      }

      const toFinish = await this.howMuchToFinish();
      if (toFinish <= 0) {
        console.log("Finished!!!");
        break;
      }
    }
  }

  private async shouldBuy(): Promise<boolean> {
    const price = await this.client.info({ stock: "KB" });
    if (price <= BUY_THRESHOLD) {
      return true;
    }
    return false;
  }

  private async canBuy(): Promise<boolean> {
    const balance = await this.client.balance({ accountId: this.accountId });
    const price = await this.client.info({ stock: "KB" });
    if (balance >= price) {
      return true;
    }
    return false;
  }

  private async buy() {
    await this.client.buy({
      accountId: this.accountId,
      stock: "KB",
      amount: 1,
    });
    this.stocks++;
  }

  private async shouldSell(): Promise<boolean> {
    const price = await this.client.info({ stock: "KB" });
    if (price >= SELL_THRESHOLD) {
      return true;
    }
    return false;
  }

  private canSell(): boolean {
    if (this.stocks > 0) {
      return true;
    }
    return false;
  }

  private async sell() {
    await this.client.sell({
      accountId: this.accountId,
      stock: "KB",
      amount: 1,
    });
    this.stocks--;
  }

  private async howMuchToFinish(): Promise<number> {
    const howMuch = await this.client.howMuchToFinish({
      accountId: this.accountId,
    });
    const balance = await this.client.balance({ accountId: this.accountId });
    console.log(
      `How much to finish: ${howMuch}\nBalance: ${balance}\n================`
    );
    return howMuch;
  }
}

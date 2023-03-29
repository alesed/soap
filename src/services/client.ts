import { createClientAsync } from "soap";
import {
  IbalanceInput,
  IbuyInput,
  IhowMuchToFinishInput,
  IinfoInput,
  IsellInput,
  IStockMarketImplPortSoap,
} from "../models/wsdl/StockMarket/StockMarketImplPort";

const soap = require("soap");

export class Client {
  private client: IStockMarketImplPortSoap = {} as IStockMarketImplPortSoap;

  constructor(private readonly url: string, private readonly mail: string) {}

  public async setup(): Promise<void> {
    this.client = (await createClientAsync(
      this.url
    )) as unknown as IStockMarketImplPortSoap;
  }

  public async createAccount(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.createAccount({ email: this.mail }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.return);
        }
      });
    });
  }

  public async howMuchToFinish(input: IhowMuchToFinishInput): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client.howMuchToFinish(input, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.return);
        }
      });
    });
  }

  public async info(input: IinfoInput): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client.info(input, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.return);
        }
      });
    });
  }

  public async balance(input: IbalanceInput): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client.balance(input, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.return);
        }
      });
    });
  }

  public async buy(input: IbuyInput): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.buy(input, (err, _) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  public async sell(input: IsellInput): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.sell(input, (err, _) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export class Client {
  constructor(private readonly url: string, private readonly mail: string) {}

  public logProps(): void {
    console.log(this.url, this.mail);
  }

  public async ensureClientSetup(): Promise<void> {
    //
  }
}

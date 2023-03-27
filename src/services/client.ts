export class Client {
  constructor(private url: string, private mail: string) {}

  public logProps() {
    console.log(this.url, this.mail);
  }
}

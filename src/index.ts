import { Client } from "./services/client";
import { Commander } from "./services/commander";

const main = async () => {
  const client = new Client(
    "http://andromeda.fi.muni.cz/~xbatko/homework2?wsdl",
    "527399@mail.muni.cz"
  );

  await client.setup();

  const accId = await await client.createAccount();
  const commander = new Commander(client, accId);

  await commander.start();
};

main();

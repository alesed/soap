import { Client } from "./services/client";

const main = () => {
  const client = new Client(
    "http://andromeda.fi.muni.cz/~xbatko/homework2",
    "527399@mail.muni.cz"
  );

  client.logProps();
};

main();

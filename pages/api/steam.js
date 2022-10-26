
import { Client } from "multiversus.js";

export default async function handler(req, res) {

  const steamLogin = process.env.STEAM_LOGIN
  const steamPass = process.env.STEAM_PASS

  const client = new Client()

  client.login(steamLogin, steamPass)

  console.log(client?.steamUser?.steamID)

  await (async () => {

    if (client?.steamUser?.steamID) return

    await client.login(steamLogin, steamPass)

  })();

  res.status(200).send(await client?.profiles.search('next'))



}

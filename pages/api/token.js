
import { Client } from "multiversus.js";


export default async function handler(req, res) {

  const token = process.env.TOKEN

  const client = new Client(token);

  res.status(200).send(await client.searchByUsername('next'))


}

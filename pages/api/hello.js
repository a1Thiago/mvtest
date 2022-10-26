
import { Client } from "multiversus.js";

export default async function handler(req, res) {

    const client = new Client()

    res.status(200).send({ 1: 2 })

}

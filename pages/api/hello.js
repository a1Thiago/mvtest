// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { search } from "../../test"

export default async function handler(req, res) {

  const t = await search()

  console.log(t)

  res.status(200).json({ name: t })
}

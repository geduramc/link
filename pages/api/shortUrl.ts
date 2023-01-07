// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { url } = req.body
  const shortUrl = Math.random().toString(36).substring(2, 7)

  try {
    prisma.shortener_Link.create({
      data: { url, shortUrl }
    }).then(data => {
      console.info(data)
      return res.status(200).json({ url, shortUrl })
    })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ err })
  }
}

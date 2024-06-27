import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.article.findMany()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' })
  }
}

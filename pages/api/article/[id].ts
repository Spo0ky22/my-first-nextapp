// pages/api/post/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' })
  }

  try {
    const result = await prisma.article.findUnique({
      where: { id: parseInt(id) },
    })

    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json({ error: 'Post not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' })
  }
}

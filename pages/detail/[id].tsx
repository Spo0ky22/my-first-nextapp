import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Detail from '@/components/Detail'

interface IProps {
  children?: ReactNode
}

const DetailPage: FC<IProps> = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Detail id={id as string} />
    </div>
  )
}

export default memo(DetailPage)

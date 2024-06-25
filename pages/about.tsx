import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AboutPage: FC<IProps> = () => {
  return <div>AboutPage</div>
}

export default memo(AboutPage)

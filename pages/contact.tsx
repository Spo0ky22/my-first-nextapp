import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ContactPage: FC<IProps> = () => {
  return <div>ContactPage</div>
}

export default memo(ContactPage)

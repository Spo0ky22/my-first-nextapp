import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import Sidebar from './Sidebar'
import Main from './Main'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div className={styles.home}>
      <Main />
      <div className={styles.divider}></div>
      <Sidebar />
    </div>
  )
}

export default memo(Home)

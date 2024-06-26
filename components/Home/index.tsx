import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import Sidebar from './Sidebar'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>main</div>
      <div className={styles.divider}></div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  )
}

export default memo(Home)

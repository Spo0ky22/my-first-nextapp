import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'

interface IProps {
  children?: ReactNode
}

const Sidebar: FC<IProps> = () => {
  return (
    <div className={styles.sidebar_content}>
      <div className={styles.tags}>
        <h3>标签云</h3>
        <div className={styles.tags_content}></div>
        <div className={styles.more}></div>
      </div>
      <div className={styles.category}>
        <h3>分类</h3>

        <div className={styles.category_content}></div>
      </div>
    </div>
  )
}

export default memo(Sidebar)

import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { SIGNS, CATEGORIES } from '@/utils/constants'

interface IProps {
  children?: ReactNode
}

const Sidebar: FC<IProps> = () => {
  return (
    <div className={styles.sidebar_content}>
      <div className={styles.tags}>
        <h3>标签云</h3>
        <div className={styles.tags_content}>
          {SIGNS.map((item, index) => (
            <div key={index} className={styles.tag}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.more}>See more topics</div>
      </div>
      <div className={styles.category}>
        <h3>分类</h3>
        <div className={styles.category_content}>
          {CATEGORIES.map((item, index) => (
            <div key={index} className={styles.category}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(Sidebar)

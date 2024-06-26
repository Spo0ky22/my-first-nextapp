import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { ART_LIST } from '@/utils/constants'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return <div className={styles.main}>
    <ul className={styles.list}>
      {ART_LIST.map((item, index) => (<li>
        <div className={styles.left}>
          <div className={styles.info}>
            <img className={styles.avatar} src={item.avatar} alt="" />
            <div className={styles.author}>{item.author}</div>
            <div className={styles.circle}></div>
            <div className={styles.date}>
              {item.date}
            </div>
          </div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.content}>{item.content}</div>

          <div className={styles.tags}></div>
        </div>
        <div className={styles.right}>

          <div className={styles.img}><img src={item.picture} alt="" /></div>

          <div className={styles.watch_like}>

            <div className={styles.watch}></div>
            <div className={styles.like}></div>
          </div>
        </div>
      </li>))}
    </ul>
  </div>
}

export default memo(Main)

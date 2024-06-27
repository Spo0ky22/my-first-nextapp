import React, { memo, useCallback, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { ART_LIST } from '@/utils/constants'
import { LikeOutlined, EyeOutlined } from '@ant-design/icons'
import { formatNumber } from '@/utils/utils'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/article')
      const data = await response.json()
      setArtList(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.main}>
      <ul className={styles.list}>
        {artList.map((item: any, index) => (
          <li key={index}>
            <div className={styles.left}>
              <div className={styles.info}>
                <img className={styles.avatar} src={item.avatar} alt="" />
                <div className={styles.author}>{item.author}</div>
                <div className={styles.circle}></div>
                <div className={styles.date}>{item.date}</div>
              </div>
              <Link className={styles.title} href={`/detail/${item.id}`}>
                {item.title}
              </Link>
              <div className={styles.content}>{item.context}</div>

              <div className={styles.tags}>
                {item.tags.map((tag: any, index: number) => (
                  <div key={index} className={styles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.img}>
                <img src={item.picture} alt="" />
              </div>

              <div className={styles.watch_like}>
                <div className={styles.watch}>
                  <EyeOutlined />
                  <span>{formatNumber(item.watch)}</span>
                </div>
                <div className={styles.like}>
                  <LikeOutlined />
                  <span>{formatNumber(item.like)}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Main)

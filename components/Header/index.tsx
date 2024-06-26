import Link from 'next/link'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { Input } from 'antd'
import { SearchOutlined, EditOutlined } from '@ant-design/icons'
import avatar from '@/public/img/旦旦8.png'
import Image from 'next/image'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">首页</Link>
              </li>
              <li>
                <Link href="/contact">专题</Link>
              </li>
              <li>
                <Link href="/about">关于</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
          </div>
          <div className={styles.edit}>
            <EditOutlined style={{ fontSize: 24 }} />
            <span>Write</span>
          </div>
          <div className={styles.user}>
            <Image style={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#fff' }} src={avatar} alt="Example image" />
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  )
}

export default memo(Header)

import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { ART_LIST } from '@/utils/constants'
import { LikeOutlined, CommentOutlined, FolderAddOutlined, PlayCircleOutlined, ShareAltOutlined, SmallDashOutlined } from '@ant-design/icons'
import { formatNumber } from '@/utils/utils'

interface IProps {
  children?: ReactNode
  id?: number
}

const Detail: FC<IProps> = (props) => {
  const { id } = props

  const art = ART_LIST[id as number]

  function convertNewLinesToParagraphs(text: string) {
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim()
      return trimmedLine ? <p key={index}>{trimmedLine}</p> : null
    })
  }
  return (
    <div className={styles.detail}>
      <div className={styles.title}>{art?.title}</div>
      <div className={styles.auth_info}>
        <img src={art?.avatar} alt="" />
        <div className={styles.info}>
          <div className={styles.top}>
            <div className={styles.author}>{art?.author}</div>
            <div className={styles.circle}></div>
            <div className={styles.follow}>Follow</div>
          </div>

          <div className={styles.bottom}>
            Published in
            <div className={styles.publish}>{art?.publish}</div>
            <div className={styles.circle}></div>
            <div className={styles.read}>4 min read</div>
            <div className={styles.circle}></div>
            <div className={styles.date}>{art?.date}</div>
          </div>
        </div>
      </div>
      <div className={styles.tools}>
        <div className={styles.left}>
          <div className={styles.like}>
            <LikeOutlined style={{ fontSize: 22 }} />
            <span>{formatNumber(art?.like)}</span>
          </div>
          <div className={styles.comment}>
            <CommentOutlined style={{ fontSize: 22 }} />
            <span>{formatNumber(art?.comment)}</span>
          </div>
        </div>
        <div className={styles.right}>
          <FolderAddOutlined style={{ fontSize: 22 }} />
          <PlayCircleOutlined style={{ fontSize: 22 }} />
          <ShareAltOutlined style={{ fontSize: 22 }} />
          <SmallDashOutlined style={{ fontSize: 22 }} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.pic}>
          <img src={art?.picture} />
        </div>
        <div className={styles.art}>{convertNewLinesToParagraphs(art.content)}</div>
      </div>
    </div>
  )
}

export default memo(Detail)

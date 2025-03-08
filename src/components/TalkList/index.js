import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { NextSeo } from 'next-seo'

import { BLOG_HOST, BLOG_SUBTITLE, BLOG_TITLE } from 'lib/constants'
import * as S from './styled'
import Image from 'next/image'

const TalkList = ({ talks }) => {
  const sortedTalks = talks.sort((talk1, talk2) =>
    new Date(talk1.date) > new Date(talk2.date) ? -1 : 1
  )

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(
    sortedTalks.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    if (current.length === sortedTalks.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(sortedTalks.slice(count.prev + 10, count.next + 10))
    )

    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }))
  }

  return (
    <>
      <NextSeo
        title={`Talks | ${BLOG_TITLE}`}
        description={BLOG_SUBTITLE}
        openGraph={{
          images: [
            {
              url: `https://${BLOG_HOST}/assets/img/blog-cover.png`,
              width: 1200,
              height: 630,
              alt: `${BLOG_TITLE} Blog`
            }
          ]
        }}
      />
      <div className="pt-2 pb-5">
        <div className="container">
          <div className="list-group">
            <InfiniteScroll
              dataLength={current.length}
              next={getMoreData}
              hasMore={hasMore}
            >
              {current.map((talk, i) => (
                <a 
                  key={i} 
                  href={talk.frontmatter.link} 
                  target="_blank" rel="noreferrer"
                  className="list-group-item list-group-item-action" 
                  aria-current="true"
                >
                  <div className="d-flex">
                    <div className="d-flex">
                      <S.ImageContainer>
                        <Image 
                          src={talk.frontmatter.image} 
                          className="img-fluid"
                          width={320} height={180}
                          alt={talk.frontmatter.title}
                        />
                      </S.ImageContainer>
                    </div>
                    <div className="w-100 ps-2">
                      <div className="d-flex w-100 justify-content-between">
                        <S.Title className="mb-1">{talk.frontmatter.title}</S.Title>
                        <small>{talk.frontmatter.date}</small>
                      </div>
                      <S.Description className="mb-1">{talk.frontmatter.description}</S.Description>
                      <S.TagContainer>
                        {talk.frontmatter.tags.map((tag, i) => (
                          <S.Tag key={i} className="badge text-bg-primary">{tag}</S.Tag>
                        ))}
                      </S.TagContainer>
                    </div>
                  </div>
                </a>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  )
}

export default TalkList

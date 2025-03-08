import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NextSeo } from 'next-seo';

import { BLOG_HOST, BLOG_SUBTITLE, BLOG_TITLE } from 'lib/constants';
import * as S from './styled';

const BlogList = ({ posts }) => {
  // Filtra apenas posts que têm frontmatter válido e título
  const validPosts = posts.filter(post => post?.frontmatter?.title);

  // Ordena os posts por data (posts sem data vão para o final)
  const sortedPosts = validPosts.sort((post1, post2) => {
    if (!post1.date) return 1;
    if (!post2.date) return -1;
    return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
  });

  const [count, setCount] = useState({ prev: 0, next: 10 });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(sortedPosts.slice(count.prev, count.next));

  const getMoreData = () => {
    if (current.length === sortedPosts.length) {
      setHasMore(false);
      return;
    }

    setCurrent(
      current.concat(sortedPosts.slice(count.prev + 10, count.next + 10))
    );

    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }));
  };

  return (
    <>
      <NextSeo
        title={`Posts | ${BLOG_TITLE}`}
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
              {current.map((post, i) => (
                <a key={i} href={post.slug} className="list-group-item list-group-item-action" aria-current="true">
                  <div className="d-flex w-100 justify-content-between">
                    <S.Title className="mb-1">{post.frontmatter.title}</S.Title>
                    <small>{post.frontmatter.date || 'Data não disponível'}</small>
                  </div>
                  <S.Description className="mb-1">{post.frontmatter.description}</S.Description>
                  <S.TimeToRead>{post.timeToRead}</S.TimeToRead>
                  <S.TagContainer>
                    {(post.frontmatter.tags || []).map((tag, i) => (
                      <S.Tag key={i} className="badge text-bg-primary">{tag}</S.Tag>
                    ))}
                  </S.TagContainer>
                </a>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
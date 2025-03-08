import styled from 'styled-components'
import media from 'styled-media-query'

export const CommentWrapper = styled.div`
  border-top: 1px solid var(--gray-color);
  padding-top: 10px;
`

export const PostDate = styled.div`
  font-size: 1.1rem;
  font-weight: 100;
  padding-bottom: 1.4rem;
  padding-top: 1.4rem;
`

export const PostHeader = styled.header`
  color: var(--postColor);
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
  `}
`
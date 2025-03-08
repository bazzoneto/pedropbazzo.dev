import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
  max-width: 300px;

  ${media.lessThan('large')`
    order: 2;
    margin: 0 0 1rem;
    max-width: 100%;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none !important;
  padding: 0;

  a {
    color: var(--texts);
    text-decoration: none;

    &:hover {
      color: var(--highlight);
    }
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`

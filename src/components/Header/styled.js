import styled from 'styled-components'
import media from 'styled-media-query'

export const Hamburger = styled.div`
  
  svg {
    color: var(--main-color);
    width: 25px;
  }

  ${media.lessThan('medium')`
    svg {
      display: block;
    }
  `}
`

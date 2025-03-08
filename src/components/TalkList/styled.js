import styled from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h5`
font-family: "GothanRoundedMedium";
`

export const Description = styled.p`

`

export const TimeToRead = styled.small`
  font-family: "GothanRoundedLight";
`

export const TagContainer = styled.p`
  padding-top: 10px;
`
export const Tag = styled.span`
  font-family: "GothanRoundedLight";
  margin-right: 3px;
`

export const ImageContainer = styled.div`
  ${media.lessThan('medium')`
    display: none;
  `}
`
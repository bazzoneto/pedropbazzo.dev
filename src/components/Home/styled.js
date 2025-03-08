import styled from 'styled-components'
import media from 'styled-media-query'

export const Callout = styled.div`
  font-family: "GothanRoundedLight";
  max-width: 500px;
  margin-top: 20px;
  text-align: start;

  ${media.lessThan('medium')`
    text-align: center;
  `}
`

export const Title = styled.h1`
  font-family: "GothanRoundedMedium";
`

export const Name = styled.span`
  color: var(--main-color);
  display: block;
  font-family: "GothanRoundedMedium";
  font-size: 25px;
`

export const Text = styled.p`
  letter-spacing: 1px;
  line-height: 20px;
  font-family: "GothanRoundedLight";
  font-size: 18px;
  text-align: start;

  ${media.lessThan('medium')`
    text-align: center;
  `}
`

export const Hello = styled.h3`
  text-align: start;

  ${media.lessThan('medium')`
    text-align: center;
  `}
`

export const Card = styled.div`
  cursor: pointer;
`

export const ImageContainer = styled.div`
  ${media.lessThan('medium')`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
  `}
`
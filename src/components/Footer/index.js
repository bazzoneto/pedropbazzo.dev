import SocialLinks from 'components/SocialLinks'
import * as S from './styled'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <S.FooterWrapper>
      <div className="container text-center">
        <footer className="align-items-center text-center">
          <div className="py-3 align-items-center">
            <S.FooterText>All rights reserved © deploy de sexta {year}</S.FooterText>
            <div className="align-items-center pt-3 pt-md-0">
              <SocialLinks hideStyle />
            </div>
          </div>
        </footer>
      </div>
    </S.FooterWrapper>
  )
}

export default Footer
import Image from "next/image"

import * as S from './styled'

const SelfPresentation = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-3">
        <S.ImageContainer>
          <Image 
            src={'/assets/icons/cartoon.png'} 
            alt="Minha foto de avatar" 
            width={200} height={140} 
          />
        </S.ImageContainer>
      </div>
      <div className="col-12 col-md-9">
        <S.Hello>Prazer! Me chamo Pedro mas pode me chama de Bjorn.</S.Hello>
        <S.Text>
          Trabalho com tecnologia desde 2010 especificamente com bancos a mais de dez anos atualmente sou 
          <span className="gotham-bold"> Especialista <span className="gotham" style={{color: '#ff0000'}}>Java </span></span> 
          no <span className="gotham-bold" style={{color: '#4169e1'}}> Agibank </span>.
          As minhas intenções com esse blog é documentar meus aprendizados 
          e compartilhar com você o conhecimento obtido nessa jornada infinita do roadmap em tecnologia.
        </S.Text>
      </div>
    </div>
  </div>
)

export default SelfPresentation
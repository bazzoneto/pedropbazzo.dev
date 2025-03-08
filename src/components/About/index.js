
import {
  Quote,
  Text,
  Title
} from './styled'

const About = () => (
  <>
    <div className="container">
      <Title>Sobre mim</Title>
      <Text>
        💻 Comecei minha jornada em 2011, o Java mudou minha vida e pode mudar a sua, apenas comece...
      </Text>
      <Text>
        Especialista Java 🇧🇷
      </Text>
      <Text>
        💬 Converse comigo sobre: 
        Clean Architecture, Functional Programming, Vavr, Arrow Kt, Kotlin, Java, 
        Reactive Stack, SOLID, Spring Boot, Spring Cloud, Web Development, 
        JavaScript, VueJs, React, SSR, NodeJS, DevOps, AWS, Maven, Gradle, etc..
      </Text>
      
      <Quote>
      “Nada no mundo se compara à persistência. Nem o talento; não há nada mais comum do que homens malsucedidos e com talento. Nem a genialidade; a existência de gênios não recompensados é quase um provérbio. Nem a educação; o mundo está cheio de negligenciados educados. A persistência e determinação são, por si sós, onipotentes.”
      Calvin Coolidge (Presidente dos Estados Unidos em 1923).
      </Quote>
      <br/>
      
      <Title>Contato</Title>
      <Text>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </Text>
      <br/>
      <br/>
    </div>
  </>
)

export default About

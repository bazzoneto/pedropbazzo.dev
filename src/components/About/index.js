
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
        💻 Comecei minha jornada em 2014, onde atuava em projetos com Spring Framework escritos em Java 7 para o Back-end e 
        uma salada de fruta de ChaplinJs Controllers com BackboneJs MVVM no Front-end 
        (acho que nessa época o termo FullStack nem era tão falado assim, mas sempre gostei de conhecer os dois mundos).
      </Text>
      <Text>
        Dois anos depois veio a Era dos monolítos com Spring Boot + Java 8, provendo REST APIs para SPAs em Angular Js. 
        Em 2017 minha última aventura na Software House foi explorando o mundo mobile, onde trabalhei como desenvolvedor Android e iOS.
      </Text>
      <Text>
        Em dezembro de 2017 entrei para o Mercado Livre, onde comecei a explorar o mundo de microserviços
        em larga escala. Pude participar do desenvolvimento de um produto muito chave para a companhia que
        conta com mais de 100 microserviços, 300K RPM de leitura no serviço principal, 30K usuários concorrentes ativos, 
        gestão de 1BI documentos fiscais e mantendo um excelente UPTIME e baixa latência.
      </Text>
      <Text>
        Hoje em dia meu foco não é mais tanto contribuir ativamente com código, mas sim uma contribuição mais estratégica
        onde controlo o roadmap técnico, com visão mais longo prazo, garantindo alinhamento entre os Tech Leads e 
        direcionando as decisões arquiteturais para cumprir com os objetivos da empresa. Além disso, executo um papel 
        fundamental em mentoria para os desenvolvedores e os Tech Leads para que desenvolvam suas skills técnicas, 
        garantindo a construição de serviços escaláveis na Cloud.
      </Text>
      <Text>
        No meu período livre, trabalho na minha Startup Contrata Show e compartilhando conteúdo aqui.
      </Text>
      <Text>
        Tech Lead from Brasil 🇧🇷
      </Text>
      <Text>
        💬 Converse comigo sobre: 
        Clean Architecture, Functional Programming, Vavr, Arrow Kt, Kotlin, Java, 
        Reactive Stack, SOLID, Spring Boot, Spring Cloud, Web Development, 
        JavaScript, VueJs, React, SSR, NodeJS, DevOps, AWS, Maven, Gradle, etc..
      </Text>
      
      <Quote>
      “I love programming. I enjoy the challenge to not only make a working program, but to do so with style. Programming is like poetry. It conveys a message, not only to the computer, but to those who modify and use your program. With a program, you build your own world with your own rules. You create your world according to your conception of both the problem and the solution. Masterful programmers create worlds with programs that are clear and succinct, much like a poem or essay.”
      Jonathan Bartlett (Programming from the Ground Up, p. 7).
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

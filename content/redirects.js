
function redirectTo(source, destination, permanent = false) {
  return {
    source,
    destination,
    basePath: false,
    permanent,
  }
}

module.exports = [
  // Socials
  redirectTo('/goto/youtube', 'https://www.youtube.com/channel/UCmwV8WOaoVlhokrcqTtF9YA'),
  redirectTo('/goto/instagram', 'https://www.instagram.com/deploy_desexta/'),
  redirectTo('/goto/twitch', 'https://www.twitch.tv/stifl0w'),
  redirectTo('/goto/twitter', 'https://twitter.com/gabrielsuaki'),
  // Others...
  redirectTo('/goto/caelum-fj11-java-poo', 'https://www.caelum.com.br/apostila/apostila-java-orientacao-objetos.pdf'),
  redirectTo('/goto/engineering-list', 'https://twitter.com/i/lists/1352291452706058240'),
  redirectTo('/goto/oo-solid-para-ninjas', 'https://www.casadocodigo.com.br/products/livro-oo-solid'),
  redirectTo('/goto/oo-conceitos-casadocodigo', 'https://www.casadocodigo.com.br/products/livro-oo-conceitos'),
  redirectTo('/goto/vire-o-jogo-spring-framework', 'https://www.casadocodigo.com.br/products/livro-spring-framework'),
  redirectTo('/goto/java-8-pratico', 'https://www.casadocodigo.com.br/products/livro-java8'),
  redirectTo('/goto/backend-java-microservicos-spring-k8s', 'https://www.casadocodigo.com.br/products/livro-backend-java'),
  redirectTo('/goto/refatoracao-java-casadocodigo', 'https://www.casadocodigo.com.br/products/livro-refatoracao-java'),
  redirectTo('/goto/java-efetivo-3rd', 'https://www.amazon.com.br/Java-Efetivo-Melhores-Pr%C3%A1ticas-Plataforma-ebook/dp/B07YBG67VP/ref=sr_1_4'),
  redirectTo('/goto/tdd-mundo-real-casadocodigo', 'https://www.casadocodigo.com.br/products/livro-tdd'),
  redirectTo('/goto/java-concurrency-in-practice', 'https://www.amazon.com.br/dp/B004V9OA84/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1'),
  redirectTo('/goto/gof-padroes-de-projetos', 'https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100/ref=asc_df_8573076100'),
  redirectTo('/goto/implementando-ddd', 'https://www.amazon.com.br/Implementando-Domain-Driven-design-Vernon/dp/8576089521/ref=sr_1_3'),
  redirectTo('/goto/software-architecture-hard-parts', 'https://www.amazon.com.br/Software-Architecture-Hard-Parts-English-ebook/dp/B09H2H5QKC/ref=sr_1_2'),
  redirectTo('/goto/fundamentals-of-software-architecture', 'https://www.amazon.com.br/Fundamentals-Software-Architecture-Neal-Ford/dp/1492043451/ref=sr_1_1'),
  redirectTo('/goto/o-programador-pragmatico', 'https://www.amazon.com.br/Programador-Pragm%C3%A1tico-Aprendiz-Mestre-ebook/dp/B019HM0H90'),
  redirectTo('/goto/java-retrospectiva-novidades-desde-11-ao-17', '/goto/java-retrospectiva-novidades-desde-11-ao-17'),
  redirectTo('/goto/mit-6824', 'https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB'),
];

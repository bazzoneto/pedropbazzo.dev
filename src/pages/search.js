import { NextSeo } from 'next-seo'

import Search from 'components/Search'

const SearchPage = () => {
  return (
    <>
      <NextSeo
        title="Search | Deploy de Sexta"
        description="Busque por conteúdo"
      />
      <Search />
    </>
  )
}

export default SearchPage

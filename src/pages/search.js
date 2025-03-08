import { NextSeo } from 'next-seo'

import Search from 'components/Search'

const SearchPage = () => {
  return (
    <>
      <NextSeo
        title="Search | Pedro P. Bazzo"
        description="Busque por conteúdo"
      />
      <Search />
    </>
  )
}

export default SearchPage

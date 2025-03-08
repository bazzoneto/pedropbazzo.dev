import algoliasearch from 'algoliasearch'
import { InstantSearch, Stats } from 'react-instantsearch-dom'

import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

import * as S from './styled'

const algolia = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => {
  return (
    <div className="container">
      <S.SearchWrapper className={"algolia-search"}>
        <InstantSearch 
          searchClient={searchClient} 
          indexName={algolia.indexName}
        >
          <SearchBox />
          <Stats
            translations={{
              stats(nbHits, timeSpentMS) {
                return nbHits === 1
                  ? `${nbHits} resultado encontrado em ${timeSpentMS}ms`
                  : `${nbHits} resultados encontrados em ${timeSpentMS}ms`
              }
            }}
          />
          <SearchResult />
        </InstantSearch>
        <S.SearchTitle>
          Powered by Algolia
          <S.AlgoliaIcon />
        </S.SearchTitle>
      </S.SearchWrapper>
    </div>
  )
}

export default Search

{/* <Configure hitsPerPage={200} distinct />
        <SearchBox
          translations={{ placeholder: 'Pesquisar...' }}
          autoFocus={true}
        />
        <Stats
          translations={{
            stats(nbHits, timeSpentMS) {
              return nbHits === 1
                ? `${nbHits} resultado encontrado em ${timeSpentMS}ms`
                : `${nbHits} resultados encontrados em ${timeSpentMS}ms`
            }
          }}
        />
        <Hits hitComponent={Hit} /> */}

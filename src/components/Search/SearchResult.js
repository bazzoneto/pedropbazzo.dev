import { connectStateResults } from 'react-instantsearch-dom';

import Hit from './Hit';

function SearchResults({ searchState, searchResults }) {
  // checking if the query length is >= 3
  // (since 3 is the minimum Algolia query length)
  const validQuery = searchState.query?.length >= 3
  const length = searchResults?.hits.length || 0

  return searchState.query && validQuery ? (
    <div className={'search-hits'}>
      {
        length === 0 && 
          <div>No results found!</div>
      }

      {
        length > 0 &&
          searchResults.hits.map(
            (hit, i) => ( <Hit key={i} hit={hit} /> )
          )
      }
    </div>
  ) : null;
}
export default connectStateResults(SearchResults);
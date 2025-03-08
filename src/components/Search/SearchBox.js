import { connectSearchBox } from "react-instantsearch-dom"

function SearchBox({ refine }) {
    return (
      <input
        className="form-control" 
        type="search"
        placeholder="Pesquisar..."
        onChange={(e) => refine(e.currentTarget.value)}
      />
    )
}
export default connectSearchBox(SearchBox)
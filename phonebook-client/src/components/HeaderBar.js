import { faArrowDownAZ, faSearch, faUserPlus, faArrowUpAZ } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function BtnAsc ({ sort, setSort }) {
  return (
    <button className="btnSort" onClick={() => { setSort('desc') }}>
      <FontAwesomeIcon icon={faArrowUpAZ} />
    </button>
  )
}

function BtnDesc  ({ sort, setSort }) {
  return (
    <button className='btnSort' onClick={() => { setSort('asc') }}>
      <FontAwesomeIcon icon={faArrowDownAZ} />
    </button>
  )
}

export default function HeaderBar({ keyword, setKeyword, sort, setSort }) {
  const searchBar = (event) => {
    const { value } = event.target
    setKeyword(value)
  }

  return (
    <div className="header">
      {sort === 'asc' || sort.sort === 'asc' ? <BtnAsc sort={sort} setSort={setSort}/> : <BtnDesc sort={sort} setSort={setSort}/> }
      <div className="searchBar">
        <button className="logoIcon"><FontAwesomeIcon icon={faSearch} /></button>
        <input className="search" type="search" value={keyword} onInput={searchBar}></input>
      </div>
      <Link to={'/add'}>
        <button className="btnAdd">
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </Link>
    </div >
  )

}
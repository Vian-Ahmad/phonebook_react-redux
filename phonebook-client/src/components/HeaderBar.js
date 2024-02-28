import { faArrowDownAZ, faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function HeaderBar() {
  return (
    <div className="header">
      <button className="btnSort">
        <FontAwesomeIcon icon={faArrowDownAZ} />
      </button>
      <div className="searchBar">
        <button className="logoIcon"><FontAwesomeIcon icon={faSearch} /></button>
        <input className="search"></input>
      </div>
      <Link to={'/add'}>
        <button className="btnAdd">
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </Link>
    </div >
  )

}
import "./sidebar.scss"
import logo from "../../assets/credit 1.svg"
import { Link } from "react-router"
import { useState } from "react"

export function Sidebar() {

  const [sidebarBehaviour, setSidebarBehaviour] = useState<boolean>(false)

  const sidebarClick = () => {
    setSidebarBehaviour(!sidebarBehaviour)
  }

  return (
    <aside className={sidebarBehaviour ? "sidebar--open" : "sidebar--close"}>
      <button onClick={sidebarClick}>
        <img src={logo} alt="" />
      </button>
      <nav>
        <ul>
          <Link to={"/home"}>
            <li>
              Início
            </li>
          </Link>
          <Link to={"/login"}>
            <li>
              Entrar
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  )
}
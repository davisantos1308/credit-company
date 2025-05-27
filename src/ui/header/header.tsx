import { Input } from "../input/input"
import "./header.scss"

export function Header(){
  return(
    <header className="header-home">
      <Input type="search" className="input__secondary" placeholder="Pesquisar"/>
    </header>
  )
}
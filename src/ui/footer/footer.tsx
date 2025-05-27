import { Link } from "react-router"
import "./footer.scss"

export function Footer(){
  return(
    <footer className="footer">
      <ul>
        <li>
          Sobre nós
        </li>
        <li>
          Trabalhe conosco
        </li>
        <li>
          SAC
        </li>
        <li>
          Termos
        </li>
        <li>
          Ajuda
        </li>
      </ul>

      <p className="footer__title">Est. 2023</p>
      
      <ul>
        <li>@creditcompany_</li>
        <li>@creditcompany_</li>
        <li>@creditcompany_</li>
        <li>@creditcompany_</li>
        <li>@creditcompany_</li>
      </ul>
    </footer>
  )
}
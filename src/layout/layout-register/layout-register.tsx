import { ReactElement } from "react"
import Logo from "../../assets/credit 1.svg"
import "./layout-register.scss"

interface LayoutRegisterProps {
  children: ReactElement<any, any>
}

export function LayoutRegister({ children }: LayoutRegisterProps) {
  return (
    <section className="register">
      <header className="header-register">
        <div className="header-register__conteiner">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <main className="content-register">
        {children}
      </main>
    </section>
  )
}
import { ReactElement } from "react";
import { Footer } from "../../ui/footer/footer";
import { Sidebar } from "../../ui/sidebar/sidebar";
import { Header } from "../../ui/header/header";
import "./layout-primary.scss"

interface LayoutPrimaryProps {
  children: ReactElement<any, any>
}

export function LayoutPrimary({ children }: LayoutPrimaryProps) {
  return (
    <div>
      <div className="conteiner">
        <Sidebar />
        <div className="conteiner__content">
          <Header/>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
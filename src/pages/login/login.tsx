import { useNavigate } from "react-router";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import "./login.scss"

export function Login() {

  const navigate = useNavigate()

  const buttonBehaviour = () => {
    navigate("/home")
  }

  return (
    <form>
      <div className="login__content">
        <label>Email: <Input type="text" className="input__primary" classNameDiv="w100" placeholder="Digite seu email" /></label>
        <label>Senha: <Input type="password" className="input__primary" classNameDiv="w100" placeholder="Digite sua senha" /></label>
      </div>
      <div>
        <Button type="button" onClick={buttonBehaviour} classname="button__primary">ENTRAR</Button>
      </div>
    </form>
  )
}
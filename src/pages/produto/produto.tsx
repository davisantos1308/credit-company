import { useEffect, useState } from "react"
import "./produto.scss"
import axios from "axios"
import { ProductProxy } from "../../models/proxies/product.proxy"
import { useParams } from "react-router"
import { Button } from "../../ui/button/button"

export function Produto() {

  const { id } = useParams();
  const [produto, setProduto] = useState<ProductProxy[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/produtos")
      .then(response => setProduto(response.data))
      .catch(error => console.error(error))
  }, [])

  const produtoSelecionado = id ? produto.find((userId) => String(userId.id) === id) : undefined

  console.log(produtoSelecionado)

  return (
    <main className="conteiner__home">
        {produtoSelecionado && (

          <div className="conteiner-card">
            <img src={produtoSelecionado.imagem} alt="" />
            <div className="conteiner-card__info">
              <div>
                <h1>{produtoSelecionado.nome}</h1>
                <h2>R$ {produtoSelecionado.preco}</h2>
              </div>
              <Button type="button" className="button__size" disabled>{produtoSelecionado.tamanho_produto}</Button>
              <div>
                <Button type="button" className="button__secondary">Comprar agora</Button>
              </div>
            </div>
          </div>

        )}
    </main>
  )
}
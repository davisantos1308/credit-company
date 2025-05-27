import { useEffect, useState } from "react"
import { ProductCard } from "../../ui/product-card/product-card"
import "./home.scss"
import axios from "axios"
import { ProductProxy } from "../../models/proxies/product.proxy"

export function Home() {

  const [produto, setProdutos] = useState<ProductProxy[]>([])

  useEffect(() => {
    axios.get("http://localhost:3000/produtos")
    .then(response => setProdutos(response.data))
    .catch(error => console.error(error))
  })

  return (
    <main className="conteiner__home">
      <div className="conteiner__home__products">
        {produto.map((produto) => (
          <ProductCard id={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagem} />
        ))}
      </div>
    </main>
  )
}
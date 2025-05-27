import { Link } from "react-router"
import "./product-card.scss"

interface ProductCardProps{
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export function ProductCard({id, nome, preco, imagem}: ProductCardProps) {

  return (
    <div className="card">
      <Link to={`/produtos/${id}`}>
        <img src={imagem} alt="" className="card__image" />
        <div className="card__description">
          <h5>{nome}</h5>
          <span>R$ {preco}</span>
        </div>
      </Link>
    </div>
  )
}
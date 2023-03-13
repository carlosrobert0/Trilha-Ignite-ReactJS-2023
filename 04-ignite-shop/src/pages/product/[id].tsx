import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In autem expedita qui deserunt praesentium accusamus cum atque ducimus ad nisi fugiat ipsum, accusantium molestiae voluptatum optio corporis fugit facere obcaecati?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
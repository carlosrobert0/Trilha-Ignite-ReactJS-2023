import { ImageContainer } from "@/styles/pages/product";
import { SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul, <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyound the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Volta ao catálogo
      </Link>
    </SuccessContainer>
  )
}
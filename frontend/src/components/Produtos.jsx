import { card } from "../assets/assets"
import { promocoes } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const Produtos = () => {
  return (
    <section className="w-full my[0] mx-[auto]" id="produtos">
      <h1 className="text-gradient text-center mb-[50px]  text-[42px]">
        Nossas ofertas de hoje
      </h1>
      <marquee scrollamount="5" direction="left" className="w-[100%]  rounded-full h-[40px] flex items-center justify-center" bgcolor="#5ce1e6">
        <h4 className="text-slate-900  font-bold text-[25px] p-0 ">{promocoes[0].nome} - R${promocoes[0].preço}  {"     "}  /  {promocoes[1].nome} - R${promocoes[1].preço} {"     "} /  {promocoes[2].nome} - R${promocoes[2].preço}</h4>
      </marquee>
    </section>
  )
}
export default Produtos

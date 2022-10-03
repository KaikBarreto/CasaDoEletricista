import styles from "../style"
import { discount } from "../assets/assets/"
import { robot2 } from "../assets/assets/"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Até
            <span className="text-white"> 20% de desconto</span> em toda a loja
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            A <br className="sm:block hidden" />{" "}
            <span className="text-gradient">melhor</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          loja de artigos elétricos.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nossa equipe trabalha com afinco visando levar o melhor atendimento e
          experiência possíveis ao cliente
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot2}
          alt="billing"
          className="min-w-[144%] min-h-[70%]
          sm:translate-y-5 md:translate-y-0 relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] roundef-full bottom-40 white__gradient pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient pink__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}
export default Hero

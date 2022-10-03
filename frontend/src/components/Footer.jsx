import styles from "../style"
import { logo } from "../assets/assets"
import { socialMedia } from "../constants"

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    id="footer"
  >
    <div
      className={`${styles.flexStart} flex-col items-center gap-0  
    mb-8 w-full`}
    >
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[256px] h-[72px] object-contain "
        /> */}
        <h2 className="text-gradient text-[32px] text-center">LOGO AQUI</h2>
        <p className={`${styles.paragraph} mt-4 text-center max-w-[310px]`}>
          Sua melhor opção em produtos de elétrica
        </p>
      </div>
      <div>
        <h2 className="text-gradient text-[40px] sm:text-[32px] md:text-[36px] ">
          Nossas redes sociais
        </h2>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 Casa do Eletricista &copy; Todos os direitos reservados
      </p>

      <div className="flex flex-row md:mt-0 mt-6 items-center justify-between ">
        {socialMedia.map((social, index) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[36px] h-[36px] object-contain cursor-pointer mr-20 transition  hover:scale-[1.3] ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
)
export default Footer

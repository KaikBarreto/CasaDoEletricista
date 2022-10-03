import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col" id="contato">
      <h2 className={`${styles.heading2} text-[24px]`}>
        Nos envie uma mensagem!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px mt-5]`}>
        Estamos prontos para atendê-lo da forma mais profissional possível.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a
        className="whatsapp-link2 items-center flex justify-center  hover:-translate-y-3"
        href="https://web.whatsapp.com/send?phone=5521970117921?"
        target="_blank"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  </section>
)
export default CTA

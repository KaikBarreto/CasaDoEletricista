import styles from "./style"

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Produtos,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components"

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Produtos />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      <a
        className="whatsapp-link"
        href="https://web.whatsapp.com/send?phone=5521970117921?"
        target="_blank"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  )
}

export default App

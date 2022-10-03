const Button = ({ styles }) => {
  return (
    <a href="#contato">
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
      >
        Entrar em contato
      </button>
    </a>
  )
}
export default Button

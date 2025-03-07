type prop = {
    text?: string;
    styles?: string;
    onclick?: () => void;
  }
  const Button = ({text = "Get Started",styles, onclick}:prop) => {
    return (
      <button onClick={onclick} className={`w-fit bg-grad text-white text-sm  py-3 rounded-full font-open-sans xl:py-4 xl:text-lg
        shadow-xl cursor-pointer hover:opacity-80 md:w-fit md:px-12 lg:px-16 ${styles}`}>
          {text}
      </button>
    )
  }
  
  export default Button
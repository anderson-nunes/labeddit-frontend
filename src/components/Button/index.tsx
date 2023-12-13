import style from './style.module.css'

type ButtonProps = {
  children: React.ReactNode
  variant: "primary" | "secondary"
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`${style.button} ${style[`button-${props.variant}`]}`}>
      {props.children}
    </button>
  )
}

export default Button

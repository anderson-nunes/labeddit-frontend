import style from './style.module.css'

type InputProps = {
  placeholder: string
  type: string
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      className={style.input}
      placeholder={props.placeholder}>
    </input>
  )
}

export default Input

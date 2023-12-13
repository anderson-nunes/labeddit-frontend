import style from './style.module.css'
import iconClose from '../../assets/icon-close.svg'
import { MouseEventHandler } from 'react'

type HeaderProps = {
  btnClose?: MouseEventHandler<HTMLButtonElement>,
  btnAction: MouseEventHandler<HTMLButtonElement>,
  logo: string,
  labelAction: string
}

export const Header = (props: HeaderProps) => {

  return (
    <header className={style['header-container']}>
      <div className={style['header-item']}>
        {props.btnClose && (<button
          className={style['header-btn-close']}
          onClick={props.btnClose}>
          <img src={iconClose} alt="icone para fechar o header" />
        </button>)}

      </div>
      <div className={style['header-item']}>
        <img src={props.logo} alt="logo da aplicação" />
      </div>
      <div className={style['header-item']}>
        <button
          className={style['header-btn-action']}
          onClick={props.btnAction}>
          <p>{props.labelAction}</p>
        </button>
      </div>
    </header>
  )
}
import { useState } from "react"
import style from './style.module.css'
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import HorizontalLine from "../../components/HorizontalLine"
import { login } from "../../services/authentication"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const [email, setEmail] = useState('astrodev@email.com')
  const [password, setPassword] = useState('astrodev99')

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {

      const response = await login(
        {
          email,
          password
        }
      )
      console.log(response);

      navigate('/posts')

    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div className={style['login-container']}>
      <Logo />
      <form
        onSubmit={handleSubmit}
        className={style['login-form']}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="E-mail"
          type="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Senha"
          type="password"
        />

        <Button
          onClick={handleSubmit}
          variant="primary"
          type="submit"
        >
          Continuar
        </Button>

        <HorizontalLine />

        <Button
          onClick={() => console.log('signup')}
          variant="secondary"
          type="button"
        >
          Crie uma conta!
        </Button>
      </form>
    </div>
  )
}

export default Login

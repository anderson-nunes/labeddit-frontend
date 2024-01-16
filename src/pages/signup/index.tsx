import { Header } from "../../components/Header";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import style from './style.module.css'
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmitSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await signup(
        {
          name,
          email,
          password
        }
      )

      console.log('@reponse_signup', response)

      navigate('/posts')

    } catch (error) {
      console.log('error')
    }
  };

  return (
    <>
      <Header
        logo={logo}
        btnAction={handleSubmitSignup}
        labelAction="Entrar"
      />
      <div className={style['signup-container']}>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
        <form className={style['signup-form']}>
          <Input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Apelido"
            type="text"
            required
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="E-mail"
            type="text"
            required
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Senha"
            type="text"
            required
          />

          <Checkbox />

          <Button
            onClick={handleSubmitSignup}
            variant="primary"
            type="button"
          >
            Cadastrar
          </Button>

        </form>
      </div>
    </>
  );
};

export default Signup;


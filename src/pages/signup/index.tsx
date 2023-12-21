import { Header } from "../../components/Header";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import style from './style.module.css'

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleBtnAction = () => {
    console.log('Botão de ação clicado');
  };

  return (
    <>
      <Header
        logo={logo}
        btnAction={handleBtnAction}
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
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="E-mail"
            type="text"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Senha"
            type="text"
          />

          <Checkbox />

          <Button
            onClick={() => console.log('login')}
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


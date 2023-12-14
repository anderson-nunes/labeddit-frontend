import { Header } from "../../components/Header";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { useState } from "react";

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleBtnAction = () => {

    console.log('Botão de ação clicado');
  };

  return (
    <div>
      <Header
        logo={logo}
        btnAction={handleBtnAction}
        labelAction="Entrar"
      />
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <form>

        <Input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Apelido"
          type="text"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Apelido"
          type="text"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Apelido"
          type="text"
        />

      </form>
    </div>
  );
};

export default Signup;


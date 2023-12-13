
import './App.css';
import { Header } from './components/Header';
import logo from '../src/assets/logo.svg'
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Header
        btnClose={() => console.log('close')}
        btnAction={() => console.log('btn-action')}
        labelAction='label'
        logo={logo}
      />
      <Button variant='primary'>
        Continuar
      </Button>
      <Button variant='secondary'>
        Continuar
      </Button>
      <Input
        placeholder='E-mail'
        type='email'
      />
      {/* <Checkbox /> */}
      {/* <PostCard /> */}

    </div>
  );
}

export default App;

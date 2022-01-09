import logo from './logo.svg';
import './App.css';
import Box from './components/box/Box';
import Form from './components/form/Form';
import Button from './components/button/Button'
import {useState} from 'react';


function App() {
  const [form, setForm] = useState();

  const buildForm = () => {
    setForm(<Form></Form>);
    
  }

  return (
    <div>
      <Box>  
        <Button label_name='Enviar Cupom' class='Button' callback={buildForm}></Button>
        <Button label_name='Listar Cupons' class='Button'></Button>
      </Box>
    </div>
  );
}

export default App;

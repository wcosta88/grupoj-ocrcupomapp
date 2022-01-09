import './App.css';
import { Routes, Route } from 'react-router-dom';
import{HomePage, SendReceiptPage, ListInvalidReceipt, ListValidReceipt} from './pages/pages'


function App() {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<HomePage />}/>
        <Route path='/sendReceipt' element={<SendReceiptPage />}/>
        <Route path='/listValidReceipt' element={<ListValidReceipt />}/>
        <Route path='/listInvalidReceipt' element={<ListInvalidReceipt />}/>
      </Routes>
    </div>
  );
}

export default App;

import { api_key } from '../utils/globals';
import { useState, useEffect } from 'react';
import Box from '../components/box/Box';
import {Link} from 'react-router-dom';
import Form from '../components/form/Form';
import '../components/button/Button.css';
import './pages.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import{ httpGet } from '../httpClient/httpClientBe';
import ReceiptList from '../components/listValidReceipt/listReceipt'
import { LoggerInUI } from '../utils/logger_functions';

export const HomePage = () => {
    return <Box>  
        <nav>
            <ul>
                <li className='List'><Link to='sendReceipt' className='Button'>Enviar Cupom</Link></li>
                <li className='List'><Link to='listValidReceipt' className='Button'>Listar Cupons Validos</Link></li>
                <li className='List'><Link to='listInvalidReceipt' className='Button'>Listar Cupons Invalidos</Link></li>
            </ul>
        </nav>
  </Box>
}

export const SendReceiptPage = () => {
    return <div>
            <Box >
                <Form></Form>
                <div id='processing' className='Box-Processando'><p id='processing-text'></p></div>
            </Box>
            
            
            <Link to='/' className='Back-Button'><FaArrowAltCircleLeft size={50} /></Link>
    </div>

}

export const ListValidReceipt = () => {
    const [receipts, setReceitps] = useState('Buscando Cumpons');

    useEffect(async () => {
        let response = await httpGet(`http://localhost:4566/restapis/${api_key}/test/_user_request_/cupons-validos`)

        setReceitps(response.data);
    }, []);
    
    if(receipts === 'Buscando Cumpons') 
        return <div >
                <Box  >
                    <p>{receipts}</p>
                </Box>
                <Link to='/' className='Back-Button'><FaArrowAltCircleLeft size={50} /></Link>
        </div>
    else 
        return <div >
                <div className='Box-Cards'>
                        {receipts.map((data) => {
                            return <ReceiptList data={data}/>
                        })}      
            </div>
            <Link to='/' className='Back-Button'><FaArrowAltCircleLeft size={50} /></Link>
        </div>

}

export const ListInvalidReceipt = () => {
    const [receipts, setReceitps] = useState('Buscando Cumpons');

    useEffect(async () => {
        let response = await httpGet(`http://localhost:4566/restapis/${api_key}/test/_user_request_/cupons-invalidos`)

        setReceitps(response.data);
    }, []);
    
    if(receipts === 'Buscando Cumpons') 
        return <div >
                <Box  >
                    <p>{receipts}</p>
                </Box>
                <Link to='/' className='Back-Button'><FaArrowAltCircleLeft size={50} /></Link>
        </div>
    else 
        return <div >
                <div className='Box-Cards'>
                        {receipts.map((data) => {
                            return <ReceiptList data={data}/>
                        })}      
            </div>
            <Link to='/' className='Back-Button'><FaArrowAltCircleLeft size={50} /></Link>
        </div>
}
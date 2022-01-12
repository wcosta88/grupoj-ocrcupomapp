//import './Receipt.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../../pages/pages.css'

const ReceiptList = (props) => {
    let consumidor = props.data.consumidor;
    let estabelecimento = props.data.estabelecimento;
    let produtos = props.data.produtos;
    let ranking = props.data.ranking; //accuracy of the OCR process in Azure
    let status = props.data.status_cupom;
    console.log(props.data)
    return (         
        <div className='Card-Div-1'>
            <div className='Card-Div-2'>
                <Card.Header className='Card-Header-Local'>Valor Total: {props.data.valor_total}</Card.Header>
                <span className='Span-List-Card Padding-L-5'>ESTABELECIMENTO</span>
                {Object.keys(estabelecimento).map(key => {
                    return <Card.Text className='Padding-L-10'>{`${key.toUpperCase()}: ${estabelecimento[key]}`}</Card.Text>
                })}
                <div style={{'border-bottom': '1px solid #e6e6e6'}}></div>
                <span className='Span-List-Card Padding-L-5'>CONSUMIDOR</span>
                {Object.keys(consumidor).map(key => {
                    return <Card.Text className='Padding-L-10'>{`${key.toUpperCase()}: ${consumidor[key]}`}</Card.Text>
                })}
                <div style={{'border-bottom': '1px solid #e6e6e6'}}></div>
                <span className='Span-List-Card Padding-L-5'>PRODUTOS</span>
                {produtos.map(produto => {
                    return <Card.Text className='Padding-L-10'>{Object.keys(produto).map(key => {
                        return ` ${key}: ${produto[key]}`;
                    })}</Card.Text>
                })}
                <div style={{'border-bottom': '1px solid #e6e6e6'}}></div>
                <span className='Span-List-Card Padding-L-5'>RANKING</span>
                <Card.Text className='Padding-L-10'>Assertividade: {ranking}</Card.Text>
                <div style={{'border-bottom': '1px solid #e6e6e6'}}></div>
                <span className='Span-List-Card Padding-L-5'>STATUS</span>
                <Card.Text className='Valid-Cupom'>{status}</Card.Text>
            </div>

        </div>
    )
}

export default ReceiptList;


//<Card.Text>{`${_key}: ${_value}`}</Card.Text>
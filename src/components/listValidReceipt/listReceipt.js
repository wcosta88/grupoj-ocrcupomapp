//import './Receipt.css';
import Card from 'react-bootstrap/Card';
import '../../pages/pages.css'

const ReceiptList = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header className='Card-Header-Local'>Valor Total: {props.data.valor_total}</Card.Header>
                <Card.Text>Estabelecimento: {props.data.estabelecimento.nome}</Card.Text>
                <Card.Text>End: {props.data.estabelecimento.endereco}</Card.Text>
                <Card.Text>CNPJ: {props.data.estabelecimento.cnpj}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default ReceiptList;
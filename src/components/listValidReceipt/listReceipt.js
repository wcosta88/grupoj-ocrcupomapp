//import './Receipt.css';
import Card from 'react-bootstrap/Card';

const ReceiptList = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>{props.data.valor_total}</Card.Header>
                <Card.Text>{props.data.estabelecimento.nome}</Card.Text>
                <Card.Text>{props.data.estabelecimento.endereco}</Card.Text>
                <Card.Text>{props.data.estabelecimento.cnpj}</Card.Text>
                <Card.Text>{props.data.status_cupom}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default ReceiptList;
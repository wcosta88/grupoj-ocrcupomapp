import { LoggerInUI } from '../utils/logger_functions';

// @param data: string
// @return boolean
const findCnpj = (data) => {
    let cnpfPattern = /.*cnpj.*/i
    if(data.search(cnpfPattern) != -1) {
        return true;
    }
    else {
        //console.log('Nao encontramos um CNPJ valida no seu cupom, por favor certifique-se que existe o campo CNPJ no cupom,\
        //caso ele exista por favor enviar o cupom novamente com o CNPJ legivel.');
        LoggerInUI('CNPJ não encontrado no cupom fiscal');
        return false;
    }
}

// @param data: string
// @return string
const extractCnpj = (data) => {
    let cnpfPattern = /.*cnpj.*$/im
    
    return data.match(cnpfPattern)[0].replace(/cnpj/i, '').replace(/\s/g, '');
}

export { findCnpj, extractCnpj };
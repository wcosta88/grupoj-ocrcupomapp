import { useState } from 'react';

const loggerFunction = (logMessage) => {
    if(logMessage.status === 'recognizing text')
        console.log(logMessage.progress.toPrecision(2));
        return logMessage.progress.toPrecision(2);
}

const LoggerInUI = (logMessage) => {
    let processing_text = document.querySelector('#processing-text');
    if(logMessage.status === 'recognizing text') {
        if(logMessage.progress.toPrecision(2) === '1.0') {
            processing_text.textContent = 'Finalizando Processamento'
        } else {
            processing_text.textContent = 'Processando Cupom' + ' ' + logMessage.progress.toPrecision(2) + '%';
        }
    }

    if(logMessage === 'Cupom Processado com Sucesso') {
        processing_text.textContent = logMessage;
    }

    if(logMessage === 'Cupom Inválido') {
        processing_text.textContent = logMessage;
    }

    if(logMessage === 'CNPJ não encontrado no cupom fiscal') {
        processing_text.textContent = logMessage;
    }
}

export { loggerFunction, LoggerInUI } 
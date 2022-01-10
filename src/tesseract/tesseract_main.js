import { api_key } from '../utils/globals';
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
import { findCnpj, extractCnpj } from './tesseract_helpers';
import { encodeImgToBase64 } from '../utils/helper_functions';
import { LoggerInUI } from '../utils/logger_functions';
import { httpPost } from '../httpClient/httpClientBe';

const recognizeImage = async (file) => {
  const ts_worker = createWorker({
    logger: logMessage => LoggerInUI(logMessage),
    errorHandler: errorMessage => LoggerInUI(errorMessage)
  });
  console.log('Worker created');

  await ts_worker.load();
  console.log('Worker loaded');

  await ts_worker.loadLanguage('por');
  console.log('Pt-br language loaded');
  
  await ts_worker.initialize('por');
  console.log('Worker Initialized');

  const data = await ts_worker.recognize(file);

  if(findCnpj(data.data.text)) {
    let encodedFile = await encodeImgToBase64(file);

    let requestHeaders = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    let cnpj = extractCnpj(data.data.text);

    let requestBody = {'cupom': encodedFile,
                       'cnpj': cnpj};
    
    await httpPost(`http://localhost:4566/restapis/${api_key}/test/_user_request_/processamento-ocr-cupom`, requestHeaders, requestBody);
  }
  else
    console.log('CNPJ nao encontrado no cupom fiscal');

}

export default recognizeImage

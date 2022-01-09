import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
import { findCnpj, extractCnpj } from './tesseract_helpers';
import { encodeImgToBase64 } from '../utils/helper_functions';
import { loggerFunction } from '../utils/logger_functions';
import { httpPost, httpGet } from '../httpClient/httpClientBe';

import image from '../eng_bw.png';
import image2 from '../cupom_test.jpeg';
import image3 from '../cupom2_test.jpeg';


const recognizeImage = async (file) => {
  const ts_worker = createWorker({
    logger: logMessage => loggerFunction(logMessage),
    errorHandler: errorMessage => console.log(errorMessage)
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
    
    await httpPost('http://localhost:4566/restapis/sdj660yyyi/test/_user_request_/processamento-ocr-cupom', requestHeaders, requestBody);
    await httpGet('http://localhost:4566/restapis/sdj660yyyi/test/_user_request_/cupons-validos');
    await httpGet('http://localhost:4566/restapis/sdj660yyyi/test/_user_request_/cupons-invalidos');
  }
  else
    console.log('CNPJ nao encontrado no cupom fiscal');

}

export default recognizeImage

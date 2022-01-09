import { Buffer } from 'buffer';
import { findCnpj } from '../tesseract/tesseract_helpers';
import { fromByteArray } from 'base64-js';


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result
        .replace("data:", "")
        .replace(/^.+,/, ""));
    reader.onerror = error => reject(error);
});

const toRawBinary = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

// @param data: file to be converted
// @return file converted to base64 string
const encodeImgToBase64 = async (file) =>  {
    let fileBase64 = await toBase64(file);

    return fileBase64
}


export { encodeImgToBase64 } 
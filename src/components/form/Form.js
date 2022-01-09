import './Form.css';
import FormLabel from '../form_label/FormLabel';
import FormInput from '../form_input/FormInput';
import Button from '../button/Button';
import recognizeImage from '../../tesseract/tesseract_main';

const enviarCupom = (event) => {
    event.preventDefault();
    recognizeImage(document.getElementById('form-input').files[0]);
  }

const Form = () => {
    return (
        <form>
            <FormLabel 
                label_name='Cupom Fiscal'>
            </FormLabel>
            <FormInput
                type='file'
                id='form-input'
                >
            </FormInput>
            <Button label_name='Enviar Cupom' callback={enviarCupom}></Button>
        </form>    
    )
}

export default Form;
import './Button.css';
import {useState} from 'react';

import recognizeImage from '../../tesseract/tesseract_main';

const tessseract_function = () => {
    //event.preventDefault();
    recognizeImage(document.getElementById('form-input').files[0]);
}

const Button = (props) => {
    //const [label_name, setLabel] = useState(props.label_name);

    return (
        <button
            className='Button-Form'
            onClick={props.callback}
            >{props.label_name}</button>
    )
}

export default Button;
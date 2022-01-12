import './FormInput.css';

const FormInput = (props) => {
    return (
        <input
            className='Input'
            accept=".jpg, .bmp, .png"
            type={props.type}
            id={props.id}>       
        </input> 
    )
}

export default FormInput;
import './FormLabel.css';

const FormLabel = (props) => {
    return (
        <label 
            className='Label'>
            {props.label_name}
        </label>     
    )
}

export default FormLabel;
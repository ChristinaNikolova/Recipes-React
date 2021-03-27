import InputError from "../InputError/InputError.jsx";

function Input({ type, name, label, value, valid, onChange, errorMessage }) {
    let className = 'form-control';

    if (value !== '') {
        if (valid) {
            className = 'form-control is-valid';
        } else {
            className = 'form-control is-invalid';
        }
    }

    return (
        <div className='form-group'>
            <label className='form-control-label' htmlFor={name}>{label}</label>
            {name === 'content'
                ? <textarea className={className} id={name} type={type} onChange={onChange} cols="10" rows="7"></textarea>
                : <input className={className} id={name} type={type} name={name} value={value} onChange={onChange} />
            }
            {value !== '' && !valid && <InputError>{errorMessage}</InputError>}
        </div>
    )
}

export default Input;
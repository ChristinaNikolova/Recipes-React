import InputError from "../InputError/InputError.jsx";

function Input({ type, name, label, onChange, error }) {
    return (
        <div className='form-group'>
            <label className='form-control-label' htmlFor={name}>{label}</label>
            {name === 'content'
                ? <textarea className='form-control' id={name} type={type} cols="10" rows="7"></textarea>
                : <input className='form-control' id={name} type={type} name={name} onChange={onChange} />
            }
            {error ? (<InputError>{error}</InputError>) : null}
        </div>
    )
}

export default Input;
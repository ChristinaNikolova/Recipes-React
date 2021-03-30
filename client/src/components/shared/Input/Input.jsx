import InputError from "../InputError/InputError.jsx";

function Input({ type, name, label, error }) {
    return (
        <div className='form-group'>
            <label className='form-control-label' htmlFor={name}>{label}</label>
            {name === 'content'
                ? <textarea
                    className='form-control'
                    id={name}
                    type={type}
                    name={name}
                    cols="10"
                    rows="7"
                ></textarea>
                : <input
                    className='form-control'
                    id={name}
                    type={type}
                    name={name}
                />
            }
            {(error !== '' && error !== undefined) ? (<InputError>{error}</InputError>) : null}
        </div>
    )
}

export default Input;
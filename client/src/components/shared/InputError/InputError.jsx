import './InputError.css';

function InputError({ children }) {
    if (!children) {
        return null;
    }

    return (
        <div className="input-error-message">
            { children}
        </div >
    );
}

export default InputError;
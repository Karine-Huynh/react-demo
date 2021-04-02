import PropTypes from 'prop-types';

const FormInput = (
    {
        name,
        type,
        id,
        placeholder,
        label,
        onChange
    }
) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                onChange={onChange}
                placeholder={placeholder}/>
        </div>
    );
};

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default FormInput;

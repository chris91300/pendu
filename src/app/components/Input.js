import React from 'react';


function Input( {label, type, name, word, onChange, onFocus, error}){


    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="input_container">
            <label htmlFor={label} >{label}</label>
            <input type={type} name={name} id={name} value={word} onChange={handleChange} onFocus={onFocus}/>
            {error && <p className="error_format">le mot doit contenir uniquement des lettres sans accent.</p>}
        </div>
    )
}


export default Input;
import React, { useState, useContext } from 'react';

const FormContext = React.createContext("")

export const Form = ({onSubmit}, {...props}) => {
    
    const [value, setValue] = useState({})

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValue({...value, [name]: value});
    }

    return (
        <FormContext.Provider value = {handleChange}>
            <form onSubmit={onSubmit(value)} {...props} >
            {/* render props para meter Inputs aquí dentro. Ver bien cómo
            por ejemplo, metiendo una prop "inputs" con los inputs a renderizar y haciendo un map */}
            </form>
        </FormContext.Provider>
    )
}

export const Input = ({name, type}, {...props}) => {
    const handleChange = useContext(FormContext);
    return (
        <input name={name} type={type}onChange={handleChange} {...props}  />
    )
}

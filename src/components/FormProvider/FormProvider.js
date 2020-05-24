import React, { useState, useContext } from 'react';

const FormContext = React.createContext("")

export const Form = ({onSubmit, ...props}) => {
    
    const [data, setData] = useState({})

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("state data: ", data)
        setData({...data, [name]: value});
    }

    const submitFunc = (event) => {
        event.preventDefault();
        onSubmit(data);
    }

    return (
        <FormContext.Provider value = {handleChange}>
            <form onSubmit={submitFunc} {...props} >
                 {props.children}
            </form>
        </FormContext.Provider>
    )
}

export const Input = ({name, type, ...props}) => {
    const handleChange = useContext(FormContext);
    return (
        <>
        <label for={name} > {name} </label>
        <input name={name} type={type}onChange={handleChange} {...props}  />
        </>
    )
}

export const Select = ({name, options, ...props}) => {
    const handleChange = useContext(FormContext);
    return (
        <>
        <label for={name} > {name} </label>
        <select name={name} onChange={handleChange} {...props} >
            {options.map(item => {
                if(item !== null) { 
                    return <option value={item}>{item}</option> 
                } else { 
                return null; 
                }})}
        </select>
        </>
    )
}

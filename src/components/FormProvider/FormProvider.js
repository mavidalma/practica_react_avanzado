import React, { useState, useContext } from 'react';

const FormContext = React.createContext("")

export const Form = ({submitFunc, ...props}) => {
    
    const [data, setData] = useState({})

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("state data: ", data)
        setData({...data, [name]: value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submitFunc(data);
    }

    return (
        <FormContext.Provider value = {handleChange}>
            <form onSubmit={onSubmit} {...props} >
                 {props.children}
            </form>
        </FormContext.Provider>
    )
}

export const Input = ({name, type, ...props}) => {
    const handleChange = useContext(FormContext);
    return (
        <input name={name} type={type}onChange={handleChange} {...props}  />
    )
}

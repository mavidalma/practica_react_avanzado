import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Button } from "react-bootstrap";


const FormContext = React.createContext({
    data: {},
    files: {},
    handleChange: () => {},
    clearForm: () => {},
});

export const Form = ({onSubmit, initialState, ...props}) => {
    
   const [data, setData] = useState(initialState)
   const [files, setFiles] = useState()

    const handleChange = event => {
        console.log("type: ", event.target.type)
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const file = target.files;
        console.log("state files: ", files)
        console.log("state data: ", data)
        if( target.type === "file") {
            setFiles({...files, [name]: file[0]});
        } else {
            setData({...data, [name]: value});
        }
    }

    const submitFunc = (event) => {
        event.preventDefault();
        onSubmit(data, files);
    };

    const clearForm = (event) => {
        setData(initialState);
        if (event.target.hasAttribute("relaunch")) {onSubmit(initialState)}
    }

    return (
        <FormContext.Provider value = {{data, handleChange, clearForm}}>
                <form onSubmit={submitFunc} {...props} >
                    {props.children}
                </form>
        </FormContext.Provider>
    )
}

export const Input = ({name, type, ...props}) => {
    const {data, files, handleChange} = useContext(FormContext);
   // console.log("Input value: ", data[name]);
    return (
        <>
        <label for={name} > {name} </label>
        {data.type === "file" && <input name={name} type={type} onChange={handleChange} {...props} /> }
        {data.type !== "file" && <input name={name} type={type} onChange={handleChange} value={data[name]} {...props}  /> }
        </>
    )
}

export const Select = ({name, options, defaultOption, ...props}) => {
    const {data, handleChange} = useContext(FormContext);
  //  if (data[name] === undefined) {data[name]= defaultOption};
    return (
        
        <>
        <label for={name} > {name} </label>
        <select name={name} onChange={handleChange} value={data[name]} {...props} >
            {options.map((item, i) => {
                if(item !== null) { 
                    return item !== defaultOption ? <option value={item} key={i}>{item}</option> : <option value={item} key={i} selected>{item}</option> 
                } else { 
                return null; 
                }})}
        </select>
        </>
    )
}

export const Clear = ({message, relaunch, ...props}) => {
    const {clearForm} = useContext(FormContext);
    return <Button onClick={clearForm} relaunch={relaunch} {...props}> {message}</Button>

}

import React from 'react';
import   "../Input/input.scss";


function isInvalid({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched
}

const Input = props =>{
    const inputType =props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    // if(true){
    //     cls.push(classes.invalid)
    // } sra tex@ inputi koxer@ karmir lini, u mi qich erkari

    return(
        <div>
            <label htmlFor="">{props.label}</label>
                <input
                 type={inputType}
                 placeholder={inputType}
                 id={htmlFor}
                 value ={props.value}
                 onChange={props.onChange}
                />

                {
                    isInvalid(props)
                    ? <span>{props.errorMessage || "Wirte valid "}</span>
                    :null
                }
                
        </div>
    )
}

export default Input
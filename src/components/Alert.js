import React from 'react'

export default function Alert(props) {

    const capital=(word)=>{
        // const lower=word.toUpperCase
        return word.charAt(0).toUpperCase()+word.slice(1)

    }
    return (
        <div style={{
            height:'50px'
        }}>

        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        </div>
    )
}

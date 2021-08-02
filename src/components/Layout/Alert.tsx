import React from 'react'

const Alert = (props: any) => {

     return (
        <div className={`alert ${props.className}`}>
            { props.children }
        </div>
    )

}

export default Alert

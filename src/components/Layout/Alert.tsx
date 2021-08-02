import React from 'react'

interface AlertProps {
    children: React.ReactNode,
    className?: string
}

const Alert = ({ children, className }: AlertProps) => {

     return (
        <div className={`alert ${className}`}>
            { children }
        </div>
    )

}

export default Alert

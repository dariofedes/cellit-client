import React from 'react'

const Error = ({ message }) => {
    return (
        <div className="error">
            <span className="error__title">Ups...</span>
            <p className="error__message">{message}</p>
        </div>
    )
}

export default Error

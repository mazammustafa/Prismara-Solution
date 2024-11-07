import React from 'react'
import './ValueWorks.css'

const ValueWorks = ({img, headingvalue, text}) => {
    return (
        <>
            <div className="wrapper-content">
                <img src={img} alt="" />
                <h4 className='sub-text'>{headingvalue}</h4>
                <p className='text'>{text}</p>
            </div>
        </>
    )
}

export default ValueWorks

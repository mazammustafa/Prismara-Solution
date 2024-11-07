import React from 'react'
import { BtnPrimary } from '../Buttons/Button'
import './ContentInfoWithBtn.css'

const ContentInfoWithBtn = ({ paddingValues, gapValue, imgClass, contentImg, mainHeading, subTextAlt, subText, text, backgroundValue }) => {
  return (
    <>
    <section className='content' style={{ padding: `${paddingValues}`, background: `${backgroundValue}` }}>
        <div className="container">
            <div className="content-wrapper" style={{gap: `${gapValue}`}}>
                <div className="content-img"><img src={contentImg} className={imgClass} alt="img" /></div>
                <div className="content-details">
                    <h4 className='sub-text secondary-color'>{subText}</h4>
                    <h2 className="main-heading">{mainHeading}</h2>
                    <h6 className='sub-text-alt'>{subTextAlt}</h6>
                    <p className="text">{text}</p>
                    <div className="btnContainer" >
                        <BtnPrimary btnText={"Contact Us"}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default ContentInfoWithBtn

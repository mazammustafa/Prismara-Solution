import React from 'react'
import './ContentInfo.css'

const ContentInfo = ({ paddingValues, gapValue, imgClass, contentImg, mainHeading, subTextAlt, subText, text, flexDirectionValue, maxWidthValues, backgroundValue }) => {
    return (
        <>
            <section className='content' style={{ padding: `${paddingValues}`, background: `${backgroundValue}` }}>
                <div className="container">
                    <div className="content-wrapper" style={{gap: `${gapValue}`, flexDirection: `${flexDirectionValue}`, justifyContent: 'space-between'}}>
                        <div className="content-img"><img src={contentImg} className={imgClass} alt="img" /></div>
                        <div className="content-details" style={{ maxWidth: `${maxWidthValues}`, width: '100%', }}>
                            <h4 className='sub-text secondary-color'>{subText}</h4>
                            <h2 className="main-heading">{mainHeading}</h2>
                            <h6 className='sub-text-alt'>{subTextAlt}</h6>
                            <p className="text">{text}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentInfo

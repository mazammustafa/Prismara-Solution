import React from 'react'
import './OurValue.css'
import ValueWorks from '../ValueWorks/ValueWorks'
import values01 from '../../assets/values-01.png'
import values02 from '../../assets/values-02.png'
import values03 from '../../assets/values-03.png'
import values04 from '../../assets/values-04.png'

const OurValue = ({ paddingValues, mainHeading, subTextAlt, subText, backgroundValue }) => {
    return (
        <>
            <section className='content' style={{ padding: `${paddingValues}`, background: `${backgroundValue}` }}>
                <div className="container">
                    <div className="value-content-wrapper" >
                        <div className="content-details" >
                            <h4 className='sub-text secondary-color'>{subText}</h4>
                            <h2 className="main-heading">{mainHeading}</h2>
                            <h6 className='sub-text-alt'>{subTextAlt}</h6>
                        </div>
                    </div>

                    <div className='ValueWorks'>
                        <div className="container">
                            <div className="ValueWorks-wrapper">
                                <ValueWorks img={values01} headingvalue={'Integrity'} text={'We conduct our business with the highest level of ethical standards, ensuring transparency and trust in all our relationships.'} />
                                <ValueWorks img={values02} headingvalue={'Innovation'} text={'We embrace change and continuously seek out new ways to deliver superior solutions to our clients.'} />
                                <ValueWorks img={values03} headingvalue={'Excellence'} text={'We are committed to providing the highest quality services, driven by our focus on client satisfaction and continuous improvement.'} />
                                <ValueWorks img={values04} headingvalue={'Collaboration'} text={'We work closely with our clients, building strong partnerships to achieve shared goals.'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default OurValue

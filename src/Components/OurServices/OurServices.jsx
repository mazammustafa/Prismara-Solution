import React from 'react'
import './OurServices.css'
import exploreServices from '../../assets/explore-services-01.png'
import exploreServices02 from '../../assets/explore-services-02.png'
import exploreServices03 from '../../assets/explore-services-03.png'
import exploreServices04 from '../../assets/explore-services-04.png'
import exploreServices05 from '../../assets/explore-services-05.png'

const OurServices = ({paddingValues, backgroundValue, subText, mainHeading, subTextAlt}) => {
    return (
        <>
            <section className='content' style={{ padding: `${paddingValues}`, background: `${backgroundValue}` }}>
                <div className="container">
                    <div className="value-content-wrapper" >
                        <div className="content-details" >
                            <h4 className='sub-text secondary-color'>{subText}</h4>
                            <h2 className="main-heading">{mainHeading}</h2>
                            <h6 className='sub-text-alt'>{subTextAlt}</h6>

                            <div className='services'>
                                <div className="service">
                                    <img src={exploreServices} alt="img" />
                                    <h5 className='sub-text'>Scientific and Medical Solutions</h5>
                                </div>
                                <div className="service">
                                    <img src={exploreServices02} alt="img" />
                                    <h6 className='sub-text'>Professional and Administrative Services</h6>
                                </div>
                                <div className="service">
                                    <img src={exploreServices03} alt="img" />
                                    <h6 className='sub-text'>Facilities Management</h6>
                                </div>
                                <div className="service">
                                    <img src={exploreServices04} alt="img" />
                                    <h6 className='sub-text'>IT Services</h6>
                                </div>
                                <div className="service">
                                    <img src={exploreServices05} alt="img" />
                                    <h6 className='sub-text'>Environmental Services</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    )
}

export default OurServices

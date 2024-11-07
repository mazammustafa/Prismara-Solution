import React from 'react';
import HomeBannerImg from '../../assets/home-banner.png';
import { BtnSecondary } from '../Buttons/Button';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <section className="banner" style={{ backgroundImage: `url(${HomeBannerImg})`}}
            >
                <div className="container">
                    <div className="banner-wrapper">
                        <h1 className="main-heading">
                            Welcome to <span className='secondary-alt-color'>Prismara</span> <span className='secondary-color'>Solutions</span>, LLC
                        </h1>
                        <h4 className='sub-text'>
                            Innovative Solutions for a Better Tomorrow
                        </h4>
                        <p className='text'>
                            Prismara Solutions is a Service Disabled Veteran Owned Small
                            Business <span className='secondary-color'>(SDVOSB)</span> committed to delivering excellence across
                            a broad spectrum of professional services.
                        </p>

                        <BtnSecondary btnText={'Get Started'} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;

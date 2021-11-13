import React from 'react';
import img1 from '../../../images/blaz-erzetic-CnTiAl1fpRU-unsplash-removebg-preview.png'
import img2 from '../../../images/blaz-erzetic-lVPeU3K44I8-unsplash-removebg-preview.png'
import img3 from '../../../images/blaz-erzetic-rg72M-LQ7ic-unsplash-removebg-preview.png'

const TopSlider = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div>
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <div class="row align-items-center bg-dark bg-gradient text-white">
                            <div class="col-lg-5 ps-5">
                                <h1 style={{ color: '#0d6efd' }}>Focal Celestee</h1>
                                <p>The Celestee is one of the best closed-back headphones styled with premium materials. It combines elegant design with remarkable audio performance and a wide frequency range. Perfect for anyone looking for an uncompromised, dynamic sound.</p>
                                <p>Available now with FREE 2-Day Shipping</p>
                            </div>
                            <div className="col-lg-7 pe-5">
                                <img src={img1} class="d-block w-100 h-50" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="row align-items-center bg-dark bg-gradient text-white">
                            <div class="col-lg-5 ps-5">
                                <h1 style={{ color: '#0d6efd' }}>Sennheiser HD 280 Pro</h1>
                                <p>The Sennheiser HD 280 Pro is the epitome of boring, utilitarian design; inside and out, there really are no fancy features to speak of. All you do to start up is plug the 3.5mm jack in and you’re ready to go. You might even go wild and use the included 1/4 inch adapter, but that’s really it. </p>
                                <p>Available now with FREE 2-Day Shipping</p>
                            </div>
                            <div className="col-lg-7 pe-5">
                                <img src={img2} class="d-block w-100 h-50" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="row align-items-center bg-dark bg-gradient text-white">
                            <div class="col-lg-5 ps-5">
                                <h1 style={{ color: '#0d6efd' }}>Beach Stealth 700</h1>
                                <p>The Turtle Beach Stealth 700 Gen 2 is a wireless gaming headset built for the PlayStation 4, 5, and PC. Unfortunately, while the new generation of consoles has arrived, it didn’t bring a new ear of cross-platform compatibility, so you’ll need to get the Xbox version if you play on the Xbox One and Xbox Series X.</p>
                                <p>Available now with FREE 2-Day Shipping</p>
                            </div>
                            <div className="col-lg-7 pe-5">
                                <img src={img3} class="d-block w-100 h-50" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default TopSlider;
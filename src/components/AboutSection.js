import React from 'react'
import Home1 from '../img/home1.png'

function AboutSection() {
    return (
        <div>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <div className='hide'>
                        <h2>
                        Your <span>dreams</span>come
                        </h2>
                    </div>
                    <div className='hide'>
                        <h2>
                        true.
                        </h2>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed commodi eveniet hic repellendus harum, placeat atque asperiores animi odio, ipsum quo eius earum dignissimos.</p>
                <button>Contact Me</button>
            </div>
            <img src={Home1} alt=""/>
        </div>
    )
}

export default AboutSection

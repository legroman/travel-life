import React, {useEffect} from "react";
import slide0 from "../img/slide-0.jpg";
import slide1 from "../img/slide-1.jpg";
import slide2 from "../img/slide-2.png";
import slide3 from "../img/slide-4.jpg";
import slide4 from "../img/slide-3.jpg";


export default function Slider() {
    useEffect(() => {
        const elems = document.querySelectorAll('.slider');
        window.M.Slider.init(elems, {});
    }, []);

    return (
        <section className="slider">
            <ul className="slides">
                <li>
                    <img src={slide0} alt="slide0"/>
                    <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src={slide1} alt="slide1"/>
                    <div className="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src={slide2} alt="slide2"/>
                        <div className="caption right-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                </li>
                <li>
                    <img src={slide3} alt="slide3"/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                </li>
                <li>
                    <img src={slide4} alt="slide4"/>
                    <div className="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
            </ul>
        </section>
    )
}
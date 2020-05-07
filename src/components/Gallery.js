import React, {useEffect} from "react";

export default function Gallery() {
    useEffect(() => {
        let mb = document.querySelectorAll('.materialboxed');
        window.M.Materialbox.init(mb, {});
    }, []);
    return (
        <section id="gallery" className="section section-gallery scrollspy">
            <div className="container">
                <h4 className="center"><span className="teal-text">Photo</span> Gallery</h4>
                <div className="row">
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?beach" alt="beach"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?travel" alt="travel"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?nature" alt="nature"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?beach,travel" alt="beach,travel"
                             className="materialboxed responsive-img"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?water" alt="water"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?building" alt="building"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?trees" alt="trees"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?cruise" alt="cruise"
                             className="materialboxed responsive-img"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?beaches" alt="beaches"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?traveling" alt="traveling"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?bridge" alt="bridge"
                             className="materialboxed responsive-img"/>
                    </div>
                    <div className="col s12 m3">
                        <img src="https://source.unsplash.com/1600x900/?travel,boat" alt="travel,boat"
                             className="materialboxed responsive-img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from "react";

export default function PopularPlaces() {
    return (
        <section id="popular" className="section section-popular scrollspy">
            <div className="container">
                <div className="row">
                    <h4 className="center"><span className="teal-text">Popular</span> Places</h4>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="https://bit.ly/2xEHx6Y"
                                    alt="mexico"/>
                                <span className="card-title">Mexico</span>
                            </div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ratione veniam.
                                Earum magni quam suscipit.
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="https://bit.ly/3b9swYw"
                                    alt="mexico"/>
                                <span className="card-title">Rome</span>
                            </div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ratione veniam.
                                Earum magni quam suscipit.
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="https://bit.ly/2Wxc13f"
                                    alt="mexico"/>
                                <span className="card-title">Paris</span>
                            </div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ratione veniam.
                                Earum magni quam suscipit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
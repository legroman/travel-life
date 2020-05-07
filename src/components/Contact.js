import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="section section-contact scrollspy">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card-panel teal white-text center">
                            <i className="material-icons fa-email">email</i>
                            <h5>Contact Us For Booking</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto at eligendi
                                laboriosam nihil omnis perferendis provident quod sint soluta.</p>
                        </div>
                        <ul className="collection with-header">
                            <li className="collection-header"><h5>Location</h5></li>
                            <li className="collection-item">Travel Life Agency</li>
                            <li className="collection-item">Ivano-Frankivsk, Nezalezhnosti 55</li>
                            <li className="collection-item">tel. (099)20-26-700</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <div className="card-panel grey lighten-3">
                            <h5 className="form-title">Please fill out this form</h5>
                            <div className="input-field">
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Phone"/>
                            </div>
                            <div className="input-field">
                                <textarea placeholder="Enter Message" className="materialize-textarea" ></textarea>
                            </div>
                            <input type="submit" value="Submit" className="btn"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
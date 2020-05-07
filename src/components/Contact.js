import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="section section-contact scrollspy">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card-panel teal white-text center">
                            <i className="material-icons">email</i>
                            <h5>Contact Us For Booking</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto at eligendi
                                laboriosam nihil omnis perferendis provident quod sint soluta.</p>
                        </div>
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Location</h4></li>
                            <li className="collection-item">Travel Life Agency</li>
                            <li className="collection-item">555 Beach Rd, Suite 55</li>
                            <li className="collection-item">Miami, SL 55555</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <div className="card-panel grey lighten-3">
                            <h5>Please fill out this form</h5>
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
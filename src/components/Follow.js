import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faLinkedin, faGooglePlus, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Follow() {
    return(
        <section className="section section-follow teal darken-2 white-text center">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4>Follow Travel Life</h4>
                        <p>Follow us on social media for special offers</p>
                        <a href="#!" className="white-text">
                            <FontAwesomeIcon className="fa-4x" icon={faFacebookSquare} size="4x"/>
                        </a>
                        <a href="#!" className="white-text">
                            <FontAwesomeIcon className="fa-4x" icon={faTwitter} size="4x"/>
                        </a>
                        <a href="#!" className="white-text">
                            <FontAwesomeIcon className="fa-4x" icon={faLinkedin} size="4x"/>
                        </a>
                        <a href="#!" className="white-text">
                            <FontAwesomeIcon className="fa-4x" icon={faGooglePlus} size="4x"/>
                        </a>
                        <a href="#!" className="white-text">
                            <FontAwesomeIcon className="fa-4x" icon={faPinterest} size="4x"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
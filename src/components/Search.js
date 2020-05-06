import React from "react";

export default function Search() {
    return(
        <section id="search" className="section section-search teal darken-1 white-text center scrollspy">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3>Search Destinations</h3>
                        <div className="input-field">
                            <input
                                type="text"
                                className="white grey-text autocomplete"
                                id="autocomplete-input"
                                placeholder="search..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
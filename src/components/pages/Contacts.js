import React, {Component} from "react";
import {Consumer} from '../../context';

import Contact from "../contacts/Contact";

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    /* render something based on the context value */
                    const {contacts} = value;

                    return (
                        <div>
                            <h2>Afficher les contacts</h2>

                            {contacts.map((contact, index) => {
                                return <Contact key={index} contact={contact}/>

                            })}

                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default Contacts;

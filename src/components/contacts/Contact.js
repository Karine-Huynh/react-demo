import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Consumer} from "../../context";

class Contact extends Component {
    state = {
        showEmail: false
    }

    maybeShowDetails = () => {
        this.setState({showEmail: !this.state.showEmail});
    }

    deleteContact(id, dispatch) {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    }

    render() {
        const {id, name, email} = this.props.contact;
        const {showEmail} = this.state;
        let text = showEmail ? 'Cacher' : 'Voir +';

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;

                    return (
                        <article className="card card-body mb-3">
                            <p><Link to={`/view/contact/${id}`}>Voir details</Link></p>
                            <p>{name}</p>
                            {showEmail ? <p>{email}</p> : null}

                            <div className="row">
                                <button className="btn btn-xs btn-info" onClick={this.maybeShowDetails}>{text}</button>
                                {/*// On récupère l'id  et dispatch et on les remonte à la méthode deleteContact */}
                                <button className="btn btn-xs btn-danger" onClick={this.deleteContact.bind(this, id, dispatch)}>Effacer le
                                    Contact
                                </button>
                            </div>
                        </article>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class Clients extends Component {
  render() {
    const { clients } = this.props;

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2 className="">
                <i className="fas fa-users" />
                Users
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <Link
                    to={`/client/${client.id}`}
                    className="btn btn-secondary bg-secondary btn-sm"
                  >
                    <i className="fas fa-arrow-circle-right" /> Details
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
  }))
)(Clients);

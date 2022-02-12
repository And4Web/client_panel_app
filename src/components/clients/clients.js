import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "8484847337",
        firstName: "John",
        lastName: "Smith",
        email: "john@gmail.com",
        balance: "400.567",
      },
      {
        id: "848443747477",
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@gmail.com",
        balance: "100.786",
      },
      {
        id: "8434747483929",
        firstName: "Karen",
        lastName: "Doe",
        email: "Karen@gmail.com",
        balance: "40.2",
      },
    ];

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
export default Clients;

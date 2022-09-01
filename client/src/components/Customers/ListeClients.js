import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Form.module.css";
import OneCustomer from "./OneCustomer";

export default function ListeClients() {
  const [tabClients, setTabClients] = useState([]);
  useEffect(() => {
    axios.get(`/api/clients`).then((response) => {
      setTabClients(response.data);
    });
  }, []);

  if (tabClients) {
    return (
      <div>
      <div className="row d-flex">
        <h6 className="col-md-9 flex-fill display-4">Liste des clients</h6>

        <div className="col-md-2">
          <Link to="/addClient" className="btn bg-blue m-4 p-2">
            Ajouter <BiAddToQueue></BiAddToQueue>
          </Link>
        </div>
      </div>
      {tabClients.length > 0 ? (
          <div className="card col m-3 px-2">
          {tabClients.map((p) => {
            return <OneCustomer client={p} key={p._id}></OneCustomer>;
          })}
               </div>
        ) : (
          <div className="text-center">
            <img
              src={require("../../assets/images/nothing.png")}
              alt="nothing to display"
            />{" "}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <div className="text-success display-6">
          Les données sont en cours de chargement... veuillez patienter !
          <div className="fetching">
            <FaSpinner className="spinner"></FaSpinner>
          </div>
        </div>
      </div>
    );
  }
}

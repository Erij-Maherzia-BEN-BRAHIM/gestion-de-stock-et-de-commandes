import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiAddToQueue } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Form.module.css";
import OneFournisseur from "./OneFournisseur";

export default function ListeFournisseur() {
  const { t } = useTranslation();

  const [tabF, setTabFournisseurs] = useState([]);

  useEffect(() => {
    axios.get(`/api/fournisseurs`).then((response) => {
      setTabFournisseurs(response.data);
    });
  }, []);

  if (tabF) {
    return (
      <div>
        <div className="row d-flex">
          <h6 className="col-md-9 flex-fill display-4">
          {t('page.fournisseurs.list')}          </h6>

          <div className="col-md-2">
            <Link to="/addFournisseur" className="btn bg-blue m-4 p-2">
              {t("buttons.new")} <BiAddToQueue></BiAddToQueue>
            </Link>
          </div>
        </div>
        {tabF.length > 0 ? (
          <div className="card col m-3 px-2">
            {tabF.map((f) => {
              return (
                <OneFournisseur fournisseur={f} key={f._id}></OneFournisseur>
              );
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
      <div className="fetching">
        <FaSpinner className="spinner"></FaSpinner>
      </div>
    );
  }
}

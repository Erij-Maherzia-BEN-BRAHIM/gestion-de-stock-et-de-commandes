import React from "react";
import {
  FcCalendar,
  FcCalculator,
  FcMultipleSmartphones,
  FcHighPriority,
  FcPlus,
  FcViewDetails,
  FcSearch
} from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Achats() {
  return (
    <>
      <h1 className="display-3">Achats</h1> <hr />
      <div className="container">
        <div className="row card  my-2 p-4 shadow">
          <div className="d-flex align-items-center">
            <div className="col-2">
              <FcCalculator size={70}></FcCalculator>
            </div>
            <div className="col-6">
              <h3 className="display-5">Factures d'achat</h3>
            </div>

            <div className="col-2">
              <Link to="/historique-achat" className="nav-link">
                <FcViewDetails size={50}> </FcViewDetails><br/>
                Historique
              </Link>
            </div>
            <div className="col-2">
              <Link to="/ajout-facture-achat" className="nav-link">
                <FcPlus size={50}></FcPlus>
                <br />
                Ajouter
              </Link>
            </div>
          </div>
        </div>

        <div className="row card  my-2 p-4 shadow">
          <div className="d-flex align-items-center">
            <div className="col-2">
              <FcHighPriority size={70}></FcHighPriority>
            </div>
            <div className="col-6">
              <h3 className="display-4"> Avoirs sur achat</h3>
            </div>
            <div className="col-2">
              <Link to="/historique-avoir-achat" className="nav-link">
                <FcViewDetails size={50}> </FcViewDetails><br/>
                Historique
              </Link>
            </div>
            <div className="col-2">
              <Link to="/ajout-avoir-achat" className="nav-link">
                <FcPlus size={50}></FcPlus>
                <br />
                Ajouter
              </Link>
            </div>
          </div>
        </div>

          <div className="row card  my-2 p-4 shadow">
            <div className="d-flex align-items-center">
              <div className="col-2">
                <FcCalendar size={70}></FcCalendar>
              </div>
              <div className="col-7">
                <h3 className="display-4"> Echéances à venir</h3>
              </div>
              <div className="col-3">
              <Link to="/echeances" className="nav-link">
                <FcSearch size={50}> </FcSearch><br/>
                Voir
              </Link>
            </div>
            </div>
          </div>
          <div className="row card  my-2 p-4 shadow">
            <div className="d-flex align-items-center">
              <div className="col-2">
                <FcMultipleSmartphones size={70}></FcMultipleSmartphones>
              </div>
              <div className="col-6">
                <h3 className="display-4"> Appels d'offre</h3>
              </div>
              <div className="col-2">
              <Link to="/historique-appel-doffre" className="nav-link">
                <FcViewDetails size={50}> </FcViewDetails><br/>
                Historique
              </Link>
            </div>
            <div className="col-2">
              <Link to="/ajout-appel-doffre" className="nav-link">
                <FcPlus size={50}></FcPlus>
                <br />
                Ajouter
              </Link>
            </div>
            </div>
          </div>
      </div>
    </>
  );
}

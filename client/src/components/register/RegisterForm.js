import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaBan, FaSave, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../store/userContext";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

const _ = require("lodash");

export default function RegisterForm() {
  const { t } = useTranslation();

  let navigate = useNavigate();
  let refemail = useRef("");
  let refrole = useRef("");
  let refpassword = useRef("");
  let refemploye = useRef("");
  const [tabStaff, setTabStaff] = useState([]);
  useEffect(() => {
    axios.get(`/api/staff`).then((response) => {
      setTabStaff(response.data);
    });
  }, []);

  let ctx = useContext(UserContext);
  const tabNotFiltred = _.map(ctx.listeUsers, "email");
  function verifyEmail(email) {
    var regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    var is_email = regex.test(email);
    if (is_email) {
      //alert("ok");
      return true;
    } else {
      //alert("not ok");
      return false;
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    const c = tabStaff.find((p) => p._id === refemploye.current.value);

    let newUser = {
      email: refemail.current.value,
      role: refrole.current.value,
      password: refpassword.current.value,
      employe_id: c._id,
    };
    //verification de l'adresse email
    //Guard clause
    if (!verifyEmail(refemail.current.value)) {
      swal({
        title: "Echec",
        text: "Mauvais format de l'adresse email !",
        icon: "error",
      });
      return;
    } else {
    }
    if (tabNotFiltred.includes(newUser.email)) {
      swal({
        title: "Echec",
        text: "cet email d'utilisateur existe déjà, veuillez entrer un email différent!",
        icon: "error",
      });
    } else {
      ctx.addUser(newUser);
      swal({
        title: "Opération réussie!",
        text: "L'utilisateur est bien ajouté!",
        icon: "success",
      });
      setTimeout(() => {
        e.target.reset();
        navigate("/profiles");
        window.location.reload();
      }, 2000);
    }
  }

  if (tabStaff) {
    return (
      <div className="container">
        <div style={{ display: "flex" }}>
          <div className="container-fluid">
            <h6 className="display-6 mb-4">Créer un compte utilisateur</h6>{" "}
            <hr />
            <div className="row card">
              <form
                onSubmit={submitHandler}
                method="post"
                className="shadow p-4 bg-white"
              >
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control mb-4"
                    type="email"
                    ref={refemail}
                    name="email"
                  ></input>
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    className="form-control mb-4"
                    type="password"
                    ref={refpassword}
                    name="password"
                    autoComplete="on"
                  ></input>
                  <label htmlFor="employe_id">Employé</label>
                  <select
                    name="employe_id"
                    className="form-select  mb-4"
                    ref={refemploye}
                  >
                    <option>--veuillez choisir l'employé--</option>

                    {tabStaff.map((f) => {
                      return (
                        <option key={f._id} value={f._id}>
                          {f.prenom} {f.nom}{" "}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="role">Role</label>
                  <select
                    name="role"
                    className="form-select  mb-4"
                    ref={refrole}
                  >
                    <option>--veuillez choisir le role--</option>
                    <option value="magasinier_appro">
                      Magasinier d'approvisionnement
                    </option>
                    <option value="magasinier_bati">
                      Magasinier du batiment
                    </option>
                    <option value="chef_serv_achat">
                      Chef de service achat
                    </option>
                    <option value="chef_serv_vente">
                      Chef de service vente
                    </option>
                    <option value="directeur_direction">
                      Directeur de direction
                    </option>
                    <option value="employe">Employé</option>
                    <option value="admin">Admin</option>
                  </select>
                  <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                      <button className="btn bg-green my-2 " type="submit">
                        {t("buttons.confirm")} <FaSave></FaSave>
                      </button>
                    </div>
                    <div className="p-2">
                      <Link to="/profiles" className="btn btn-danger my-2 mr-2">
                        {t("buttons.cancel")} <FaBan></FaBan>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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

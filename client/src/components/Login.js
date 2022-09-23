import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };


  const handleSubmit = async (event) =>{
    event.preventDefault();
    const {email, password} = user;
    try {
      const res = await fetch('/api/auth/login', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({  email, password})
      });

      if(res.status === 401 || !res){
        swal({
          title: "Connexion échouée",
          text: "Identifiants invalides!",
          icon: "error",
        })
        //window.alert("Identifiants invalides")
      }else{
        swal({
          title: "Connexion réussie!",
          text: "Vous êtes bien connecté(e)!",
          icon: "success",
        });
        //window.alert("Connexion réussie");
        localStorage.setItem('token', res['token']);
        localStorage.setItem('email', email);
        navigate('/welcome-page');
        window.location.reload();
        // Token is generated When we Logged In.
  
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ marginTop: 20 + "vh" }}>
      {/*         <h1 className='text-center display-1 bg-dark p-3 fw-bold' style={{color: "#09ff00" }}> Nodes Storage Manager </h1>
       */}{" "}
      <div className="container shadow my-5 bg-white">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column align-items-center 
text-white justify-content-center form order-2 bg-black"
          >
            <h1 className="display-4 fw-bolder" style={{ color: "#09ff00" }}>
              Bon Retour !
            </h1>
            <div className="lead text-center">
              Entrez vos identifiants pour vous connecter{" "}
            </div>
          </div>
          <div className="col-md-6 p-5 ">
            <h1 className="display-6 fw-bolder mb-3">CONNEXION</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Entrer votre email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Entrer votre mot de passe"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-dark w-100 mt-4 rounded-pill"
              >
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {

let navigate= useNavigate()


const [user, setUser] = useState({
  email : '',
  password : ''
});

// Handle Input
const handleChange = (event) =>{
  let name = event.target.name
  let value = event.target.value

  setUser({...user, [name]:value})
}

// Handle Login
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

    if(res.status === 400 || !res){
      window.alert("Coordonnées invalides")
    }else{
      window.alert("Connexion réussie");
      navigate('/welcome-page')
      // Token is generated When we Logged In.

    }

  } catch (error) {
    console.log(error);
  }
}
  return (
    <div style={{marginTop:20+"vh"}}>
{/*         <h1 className='text-center display-1 bg-dark p-3 fw-bold' style={{color: "#09ff00" }}> Nodes Storage Manager </h1>
 */}    <div className="container shadow my-5">
      <div className="row justify-content-end">
        <div
          className="col-md-5 d-flex flex-column align-items-center 
text-white justify-content-center form order-2 bg-dark"
        >
          <h1 className="display-4 fw-bolder"  style={{color: "#09ff00" }}>Bon Retour !</h1>
          <div className="lead text-center">
          Entrez vos identifiants pour vous connecter          </div>
         
        </div>
        <div className="col-md-6 p-5">
          <h1 className="display-6 fw-bolder mb-5">CONNEXION</h1>
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
                placeholder="Enter email"
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
                placeholder="Password"
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
  )
}

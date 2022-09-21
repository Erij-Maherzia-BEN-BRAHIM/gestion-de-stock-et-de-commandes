import React, { useContext, useRef } from 'react';
import { FaBan, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { fournisseurtCtx } from '../../store/fournisseurContext';
import swal from 'sweetalert';
const _ = require ('lodash')

export default function AddFournisseurForm() {
  let navigate= useNavigate()
  const fctx=useContext(fournisseurtCtx)
  const tabNotFiltred=_.map(fctx.tabFournisseurs,"email")
  function verifyPhoneNumber(nb) {
    var regex = new RegExp("^([234579]{1})([0-9]{7})$");
    var is_phone = regex.test(nb);
    if (is_phone) {
      //alert("ok");
      return true;
    } else {
      //alert("not ok");
      return false;
    }
  }
  function verifyEmail(email) {
    var regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    var is_email = regex.test(email);
    if (is_email) {
      //alert("ok");
      return true;
    } else {
      //alert("not ok");
      return false;
    }
  }
  const refNom=useRef('')
  const refTel=useRef('')
  const refAdresse=useRef('')
  const refEmail=useRef('')
  const refLogo=useRef('')
  function submitHandler(e){
    e.preventDefault()
    let newFournisseur={
      nom_commercial: refNom.current.value,
      numero_de_tel: refTel.current.value,
      adresse: refAdresse.current.value,
      email:refEmail.current.value,
      logo:refLogo.current.value,
          }
     //verification du numero de tel
    //Guard clause
    if (!verifyPhoneNumber(refTel.current.value)) {
      swal({
        title: "Echec",
        text: "Mauvais format de numéro de téléphone!",
        icon: "error",
      });
      return;
    } else {
    }
    //verification de l'adresse email
    //Guard clause
    if (!verifyEmail(refEmail.current.value)) {
      swal({
        title: "Echec",
        text: "Mauvais format de l'adresse email !",
        icon: "error",
      });
      return;
    } else {
    }      
    if(tabNotFiltred.includes(newFournisseur.email)){
      swal({
        title: "Echec",
        text: "cet email de fournisseur existe déjà, veuillez entrer un email différent!",
        icon: "error",
      })
      }else{
     
        fctx.addNewFournisseur(newFournisseur)
        swal({
         title: "Opération réussie!",
         text: "Le fournisseur est bien ajouté!",
         icon: "success",
       });
        e.target.reset()
        navigate('/fournisseurs')
        window.location.reload()
      }

        //alert('cet email de fournisseur existe déjà, veuillez entrer un email différent')
      

    }
  return (
    <div className="container">
    <div style={{ display: "flex" }}>
  <div className="container-fluid">
<h6 className="display-6 my-4">  Ajouter un fournisseur </h6>            <hr />
<form onSubmit={submitHandler} method="post"  className="container shadow p-3 bg-light">
        <label htmlFor='nom_commercial' >Nom Commercial</label>
        <input type="text" name="nom_commercial" ref={refNom}className="form-control" required/>
        <label htmlFor="numero_de_tel">Numéro de téléphone</label>
        <input type="number" name="numero_de_tel" ref={refTel} className="form-control" required/>
        <label htmlFor="adresse">Adresse</label>
      <input type="text" name="adresse" ref={refAdresse} className="form-control" required/>
        <label htmlFor="email">Email</label>
      <input type="email" name="email" ref={refEmail} className="form-control" required/>
        <label htmlFor="email">Logo</label>
      <input type="url" name="logo" ref={refLogo} className="form-control" placeholder='entrer un lien Url'/>
      <div className='d-flex flex-row-reverse'>
                <div className='p-2'>
             <button className="btn bg-green my-2 " type="submit">Confirmer <FaSave></FaSave></button>    
                </div>
                <div className='p-2'>
             <Link to="/fournisseurs" className="btn btn-danger my-2 mr-2">Annuler <FaBan></FaBan> </Link>
                </div>
                
               </div>

      </form>
    </div>
    </div>
    </div>
  )
}

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaSpinner, FaTrash } from 'react-icons/fa';
import { ligneVenteCtx } from "../../../store/ligneVenteContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
export default function UneLigneVente(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
    const [tabProduits, setTabProduits] = useState([]);
    useEffect(() => {
      axios.get(`/api/produits`).then((response) => {
        setTabProduits(response.data);
      });
    }, []);
    const [tabLignes, setTabLignes] = useState([]);
    useEffect(() => {
      axios.get(`/api/vente/addToInvoice`).then((response) => {
        setTabLignes(response.data);
      });
    }, []);  
    let articleId=props.ligne.article.article_id;
    console.log('articleId', articleId)
    let a=tabProduits.find((p)=>p._id===articleId);
      console.log("article",a);
      const [line, setLine]=useState(props.ligne._id)
    function handleInputChange ( event) {
      const { name, value } = event.target
    
      setLine({ ...line, [name]: value })
    }
    let ligneCtx=useContext(ligneVenteCtx)
    function removeC(){
      // eslint-disable-next-line no-restricted-globals
      var result =  confirm('Etes-vous sûr de bien vouloir effectuer la suppression?');
    
      if(result){
    
        ligneCtx.removeOneLigneVente(props.ligne._id)
        window.location.reload()
      }
}
      if(a){        
  return (
    <>
    <tr >
    <td>{a.title}</td>
    <td className='text-center'>{a.price_v}</td>  
    <td className='text-center'>{props.ligne.quantite_s}</td> 
    <td>{props.ligne.total}</td> 
    <td >
    <Button className=' btn btn-outline-dark mx-1'  onClick={handleOpen}>
      <FaEdit/>

    </Button>
    </td>
    <td className='text-center'>
      <button className=' btn btn-outline-danger mx-1'onClick={removeC} >

      <FaTrash/>
      </button>
      </td>
</tr>
<Modal
    keepMounted
    open={open}
    onClose={handleClose}
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
  >
    <Box sx={style}>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
      <b>Modifier la quantité commandée</b> 
      </Typography>
      <form onSubmit={event => {
         event.preventDefault()
         ligneCtx.updateLigneVente(props.ligne._id,line);
        window.location.reload() }}>

      
           <label htmlFor="quantite_s" className="my-2">Quantité</label>
           <input className="form-control" type="number" name="quantite_s" value={line.quantite_s} onChange={handleInputChange} ></input>
           
         <button className="btn btn-success my-3" type="submit">Modifier</button>

      </form>
    </Box>
  </Modal> 

</>
)
}
else{
return (
<tr>      
<td className='text-success display-6'>Les données sont en cours de chargement... veuillez patienter !
<div className="fetching">      
<FaSpinner className="spinner"></FaSpinner>
</div>
</td>          
</tr>
)
} 
} 


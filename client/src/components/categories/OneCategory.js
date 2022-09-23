import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useRef } from "react";
import { AiFillDropboxCircle } from "react-icons/ai";
import { FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";
//import { categorieCtx } from "../../store/categoryContext";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { DeleteCategory, selectCategorie, UpdateCategory } from "../../features/category/categorySlice";

const _ = require("lodash");

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
export default function OneCategory(props) {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const TabCategories = useSelector(selectCategorie)

/*   useEffect(()=>{
    dispatch(GetCategoryById(props.categorie._id))
  }, []) */
  //let ctx = useContext(categorieCtx);
  function removeC() {
    swal({
      title: "Suppression",
      text: "Etes-vous sur de bien vouloir supprimer cette catégorie?",
      icon: "warning",
      buttons: [t('buttons.cancel'), t('buttons.delete')],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(DeleteCategory(props.categorie._id))
        //ctx.removeOneCategorie(props.categorie._id);
        swal("Catégorie supprimée avec succès", {
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        swal("Catégorie selectionnée non supprimée");
      }
    });

    // if (window.confirm('Etes-vous sur de bien vouloir supprimer cette catégorie ? Sachant que tous les produits y inclus seront supprimés ainsi'))
  }

  const tabNotFiltred = _.map(TabCategories, "name");
  console.log(tabNotFiltred);
  const refName = useRef("");

  function submitHandler(e) {
    e.preventDefault();
    let uCategory = {
      name: refName.current.value,
    };
    if (tabNotFiltred.includes(uCategory.name)) {
      swal({
        title: "Echec",
        text: "ce nom de catégorie existe déjà, veuillez entrer un nom différent!",
        icon: "error",
      });
    } else {
      dispatch(UpdateCategory(props.categorie._id , uCategory))
      //ctx.updateCategorie(props.categorie._id, uCategory);
      swal({
        title: "Opération réussie!",
        text: "La catégorie a été bien mise à jour!",
        icon: "success",
      });
     e.target.reset();
      window.location.reload(); 
    }
  }

  return (
    <>
      <div className="row mb-1 mr-0 custom-border ">
        <div className="col-md-6 custom-border-right py-3  text-left">
          <div>
            <FaInfoCircle></FaInfoCircle> Libellé: {props.categorie.name}
          </div>
          <div>
            <AiFillDropboxCircle></AiFillDropboxCircle> Nombre de produits:{" "}
            {props.categorie.nb_produits}
          </div>
        </div>
        <div className="col-md-3 custom-border-right py-4 text-center">
          <button className=" btn btn-outline-success " onClick={handleOpen}>
            {t("buttons.update")} <FaEdit />
          </button>
        </div>
        <div className="col-md-3 my-4 px-4 text-center">
          <button className=" btn btn-outline-danger" onClick={removeC}>
            {t("buttons.delete")} <FaTrash />
          </button>
        </div>
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <b>Modifier le libellé de la catégorie</b>
          </Typography>
          <form onSubmit={submitHandler}>
            <label htmlFor="name" className="my-2">
              Nouveau Libellé
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue={props.categorie.name}
              ref={refName}
            ></input>

            <button className="btn btn-success my-3" type="submit">
              Modifier
            </button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
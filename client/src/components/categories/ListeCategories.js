import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import { BiAddToQueue } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import CategoryForm from "./CategoryForm";
import OneCategory from "./OneCategory";
import { selectCategorie , GetCategories } from "../../features/category/categorySlice";
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

export default function ListeCategories() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const TabCategories = useSelector(selectCategorie)
console.log('TabCategories', TabCategories)
useEffect(()=>{
  dispatch(GetCategories())
},[])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

/*   const [TabCategories, setTabCategories] = useState([]);

  useEffect(() => {
    axios.get(`/api/categories`).then((response) => {
      setTabCategories(response.data);
    });
  }, []); */

  if (TabCategories) {
    return (
      <div>
        <div className="row d-flex">
          <h6 className="col-md-9 flex-fill display-4">Liste des catégories</h6>

          <div className="col-md-2">
            <button onClick={handleOpen} className="btn bg-blue m-4 p-2">
              {t("buttons.new")} <BiAddToQueue></BiAddToQueue>
            </button>
          </div>
        </div>
      {TabCategories.length > 0 ? ( 
          <div className="card col m-3 px-2">
            {TabCategories.map((p) => {
              return <OneCategory categorie={p} key={p._id}></OneCategory>;
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
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <div>
              <CategoryForm></CategoryForm>
            </div>
          </Box>
        </Modal>
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
 
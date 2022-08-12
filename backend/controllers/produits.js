const Produit = require("../models/Produit");
const Categorie = require("../models/Categorie");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
//const produit_validator = require("../models/Produit");
const Stock = require("../models/Stock")
const _ = require("lodash");


//creer un nouveau produit
exports.createProduit = async (req, res) => {
 /*  let res_validation = produit_validator.validate(req.body);
  if (res_validation.error)
    return res.status(400).send(res_validation.error.details[0].message); */
/*  let stockId=  req.body.stock_id;
  console.log('L1' , stockId);
  let stock=await Stock.findById(stockId); */
 // console.log('L2' , stock); 
  let categorieId = req.body.categorie;
  let categorie = await Categorie.findById(categorieId);
  if (!categorie) return res.status(400).send("Categorie Id not Found");

  var newProduit = new Produit({
    title: req.body.title,
    description: req.body.description,
    price_a: req.body.price_a,
    price_v: req.body.price_v,
    stock:req.body.stock,
    categorie: {
      categorie_id: categorie._id,
    },
  });

  try {
    const saved_produit = await newProduit.save();
    categorie.nb_produits += 1;
    categorie.produits.push(saved_produit);
    await categorie.save();
    res
      .status(201)
      .json({ message: "Le nouveau produit est bien ajouté !", saved_produit });
  } catch (err) {
    res.status(400).send(`Error : ${err.message}`);
  }
};
//récupérer un employé
exports.getOneProduit = (req, res, next) => {
  Produit.findOne({ _id: req.params.id })
    .then((produit) => res.status(200).json(produit))
    .catch((err) => {
      console.log(err);
      next();
    });
};
//modifier un employé
exports.updateOneProduit = async (req, res) => {
  var old_category_id;
  var category;
  let produit = await Produit.findById(req.params.id);
  if (!produit) 
       return res.status(404).send(`Product with this id is missing`);

  if (req.body.categorie.categorie_id) {
    old_category_id = produit.categorie.categorie_id;
    category = await Categorie.findById(req.body.categorie.categorie_id)
    if (!category)
      return res.status(400).send(`Category not found for the given ID`);
  }

  produit = _.merge(produit, req.body);
  try {
  
    const saved_produit = await produit.save();
    category.nb_produits += 1;
    await category.save();
    //decrement of products in category
    category = await Categorie.findById(old_category_id);
    category.nb_produits -= 1;
    await category.save();
    res.status(200).send(saved_produit);
  } catch (err) {
    res.status(400).send(`Error : ${err.message}`);
  }
};
//supprimer un employé
exports.deleteOneProduit = async (req, res) => {
  const produit = await Produit.findByIdAndRemove({ _id: req.params.id });
  if (!produit)
    return res
      .status(404)
      .json({
        message:
          "Aucun produit est trouvé avec cet ID, veuillez vérifier le ID !",
      });
  const category = await Categorie.findById(produit.categorie.categorie_id);
  category.nb_produits -= 1;
  var index = category.produits.indexOf((emp) => emp.id == _id);
  category.produits.splice(index);
  await category.save();
  res.send(produit);
};

//récupérer tous les employés
exports.getAllProduits = (req, res, next) => {
  Produit.find()
    .then((produits) => res.status(200).json(produits))
    .catch((err) => {
      console.log(err);
      next();
    });
};

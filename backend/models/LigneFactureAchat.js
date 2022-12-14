const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const LigneArticleAchatSchema = new mongoose.Schema({
  article: {
    article_id: { type: ObjectId, ref: "Produit" },
    //title: { type: String, required: false },
    //price_a: { type: Number, required: false },
  },
  quantite_a: { type: Number, required: true, default: 1 },
  total: {type: Number, required: false},
  facture_id: { type: ObjectId, ref: "FactureAchat" },

  
});

LigneArticleAchatSchema.methods.calculTotal=function(){
 
          return this.article.price_a * this.quantite_a
}
module.exports = mongoose.model("LigneCdeAchat", LigneArticleAchatSchema);

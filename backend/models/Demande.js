const mongoose=require('mongoose')


const demandeEmployeSchema = new mongoose.Schema({
    dateDemande:{type:Date,required: true, default: Date.now()},
    objet:{type:String, required: true},
    detailsDemande:{type:String, required: true},
    etat:{type:String, required: true, enum:["non_traitee","traitee"], default:"non_traitee"},
    employe_id:{ type: mongoose.Schema.Types.ObjectId, ref:'Employe'}
})
module.exports= mongoose.model('DemandeEmploye',demandeEmployeSchema)
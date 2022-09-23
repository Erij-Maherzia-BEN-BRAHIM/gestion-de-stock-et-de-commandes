import axios from "axios";
import { requests } from "../requests"

export async function CreateLigneVenteOrdinaire(values){
    try {
        const res = await axios.post(requests.ligneVenteOrdinaireAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateLigneVenteOrdinaire(data){
    try {
        const res = await axios.put(requests.ligneVenteOrdinaireAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetAllLignesVentesOridinaires(){
    try{
        const res = await axios.get(requests.ligneVenteOrdinaireAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetOneLigneVenteOrdinaireById(id){
    try{
        const res = await axios.get(requests.ligneVenteOrdinaireAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteOneLigneVenteOrdinaire(id){
    try{
        const res = await axios.delete(requests.ligneVenteOrdinaireAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
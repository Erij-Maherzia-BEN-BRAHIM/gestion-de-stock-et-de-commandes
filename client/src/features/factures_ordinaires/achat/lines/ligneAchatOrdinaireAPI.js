import axios from "axios";
import { requests } from "../requests"

export async function CreateLigneAchatOrdinaire(values){
    try {
        const res = await axios.post(requests.ligneAchatOrdinaireAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateLigneAchatOrdinaire(data){
    try {
        const res = await axios.put(requests.ligneAchatOrdinaireAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetAllLignesAchatsOridinaires(){
    try{
        const res = await axios.get(requests.ligneAchatOrdinaireAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetOneLigneAchatOrdinaireById(id){
    try{
        const res = await axios.get(requests.ligneAchatOrdinaireAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteOneLigneAchatOrdinaire(id){
    try{
        const res = await axios.delete(requests.ligneAchatOrdinaireAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
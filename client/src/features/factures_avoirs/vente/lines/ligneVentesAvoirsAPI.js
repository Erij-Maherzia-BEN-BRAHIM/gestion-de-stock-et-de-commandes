import axios from "axios";
import { requests } from "../requests"

export async function CreateLigneVentesAvoirs(values){
    try {
        const res = await axios.post(requests.ligneVentesAvoirsAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateLigneVentesAvoirs(data){
    try {
        const res = await axios.put(requests.ligneVentesAvoirsAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetAllLignesVentesAvoirs(){
    try{
        const res = await axios.get(requests.ligneVentesAvoirsAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetLigneVentesAvoirsById(id){
    try{
        const res = await axios.get(requests.ligneVentesAvoirsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteLigneVentesAvoirs(id){
    try{
        const res = await axios.delete(requests.ligneVentesAvoirsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
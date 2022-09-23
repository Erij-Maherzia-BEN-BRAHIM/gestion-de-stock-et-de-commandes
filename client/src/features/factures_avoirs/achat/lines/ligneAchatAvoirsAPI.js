import axios from "axios";
import { requests } from "../requests"

export async function CreateLigneAchatsAvoirs(values){
    try {
        const res = await axios.post(requests.ligneAchatAvoirsAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateLigneAchatsAvoirs(data){
    try {
        const res = await axios.put(requests.ligneAchatAvoirsAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetAllLignesAchatsAvoirs(){
    try{
        const res = await axios.get(requests.ligneAchatAvoirsAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetLigneAchatsAvoirsById(id){
    try{
        const res = await axios.get(requests.ligneAchatAvoirsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteLigneAchatsAvoirs(id){
    try{
        const res = await axios.delete(requests.ligneAchatAvoirsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
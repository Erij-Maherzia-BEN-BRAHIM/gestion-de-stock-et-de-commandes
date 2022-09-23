import axios from "axios";
import { requests } from "../requests"

export async function CreateDemande(values){
    try {
        const res = await axios.post(requests.demandesAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateDemande(data){
    try {
        const res = await axios.put(requests.demandesAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetDemandes(){
    try{
        const res = await axios.get(requests.demandesAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetDemandeById(id){
    try{
        const res = await axios.get(requests.demandesAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}

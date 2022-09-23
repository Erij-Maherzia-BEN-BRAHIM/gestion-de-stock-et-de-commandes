import axios from "axios";
import { requests } from "../requests"

export async function CreateAppelDoffre(values){
    try {
        const res = await axios.post(requests.appelDoffresfAPI , values);
        return res;
    } catch (err) {
        return err;
    }
}

export async function GetAllAppelDoffres(){
    try{
        const res = await axios.get(requests.appelDoffresfAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetOneAppelDoffresfAPIById(id){
    try{
        const res = await axios.get(requests.appelDoffresfAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}

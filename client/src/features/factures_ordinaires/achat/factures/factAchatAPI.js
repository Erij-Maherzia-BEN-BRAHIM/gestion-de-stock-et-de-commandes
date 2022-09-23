import axios from "axios";
import { requests } from "../requests"

export async function CreateFactureAchat(values){
    try {
        const res = await axios.post(requests.facturesAchatAPI , values);
        return res;
    } catch (err) {
        return err;
    }
}

export async function GetFactureAchats(){
    try{
        const res = await axios.get(requests.facturesAchatAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetFactureAchatById(id){
    try{
        const res = await axios.get(requests.facturesAchatAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}

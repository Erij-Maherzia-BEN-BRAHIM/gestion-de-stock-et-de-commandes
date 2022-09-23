import axios from "axios";
import { requests } from "../requests"

export async function CreateAvoirAchat(values){
    try {
        const res = await axios.post(requests.avoirsAchatAPI , values);
        return res;
    } catch (err) {
        return err;
    }
}

export async function GetAvoirAchats(){
    try{
        const res = await axios.get(requests.avoirsAchatAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetAvoirAchatById(id){
    try{
        const res = await axios.get(requests.avoirsAchatAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}

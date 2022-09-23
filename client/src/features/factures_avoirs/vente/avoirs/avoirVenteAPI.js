import axios from "axios";
import { requests } from "../requests"

export async function CreateAvoirVente(values){
    try {
        const res = await axios.post(requests.avoirsVenteAPI , values);
        return res;
    } catch (err) {
        return err;
    }
}

export async function GetAvoirVentes(){
    try{
        const res = await axios.get(requests.avoirsVenteAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetAvoirVenteById(id){
    try{
        const res = await axios.get(requests.avoirsVenteAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}

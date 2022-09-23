import axios from "axios";
import { requests } from "../requests"

export async function CreateFactureVente(values){
    try {
        const res = await axios.post(requests.facturesVenteAPI , values);
        return res;
    } catch (err) {
        return err;
    }
}

export async function GetFactureVentes(){
    try{
        const res = await axios.get(requests.facturesVenteAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetFactureVenteById(id){
    try{
        const res = await axios.get(requests.facturesVenteAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}

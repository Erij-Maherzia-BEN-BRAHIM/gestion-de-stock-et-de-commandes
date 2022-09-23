import axios from "axios";
import { requests } from "../requests"

export async function CreateSupplier(values){
    try {
        const res = await axios.post(requests.fournisseursAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateSupplier(data){
    try {
        const res = await axios.put(requests.fournisseursAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetSuppliers(){
    try{
        const res = await axios.get(requests.fournisseursAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetSupplierById(id){
    try{
        const res = await axios.get(requests.fournisseursAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteSupplier(id){
    try{
        const res = await axios.delete(requests.fournisseursAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
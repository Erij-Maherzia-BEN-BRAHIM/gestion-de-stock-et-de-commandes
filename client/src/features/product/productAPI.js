import axios from "axios";
import { requests } from "../requests"

export async function CreateProduct(values){
    try {
        const res = await axios.post(requests.produitsAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateProduct(data){
    try {
        const res = await axios.put(requests.produitsAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetProducts(){
    try{
        const res = await axios.get(requests.produitsAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetProductById(id){
    try{
        const res = await axios.get(requests.produitsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteProduct(id){
    try{
        const res = await axios.delete(requests.produitsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
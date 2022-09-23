import axios from "axios";
import { requests } from "../requests"

export async function CreateCustomer(values){
    try {
        const res = await axios.post(requests.clientsAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateCustomer(data){
    try {
        const res = await axios.put(requests.clientsAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetCustomers(){
    try{
        const res = await axios.get(requests.clientsAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetCustomerById(id){
    try{
        const res = await axios.get(requests.clientsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteCustomer(id){
    try{
        const res = await axios.delete(requests.clientsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
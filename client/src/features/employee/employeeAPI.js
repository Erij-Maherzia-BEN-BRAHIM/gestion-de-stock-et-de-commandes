import axios from "axios";
import { requests } from "../requests"

export async function CreateEmployee(values){
    try {
        const res = await axios.post(requests.staffAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateEmployee(data){
    try {
        const res = await axios.put(requests.staffAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetEmployees(){
    try{
        const res = await axios.get(requests.staffAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetEmployeeById(id){
    try{
        const res = await axios.get(requests.staffAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteEmployee(id){
    try{
        const res = await axios.delete(requests.staffAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
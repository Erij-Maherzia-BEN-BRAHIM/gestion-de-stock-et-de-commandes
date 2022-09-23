import axios from "axios";
import { requests } from "../requests"

export async function CreateDepartment(values){
    try {
        const res = await axios.post(requests.directionsAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function UpdateDepartment(data){
    try {
        const res = await axios.put(requests.directionsAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export async function GetDepartments(){
    try{
        const res = await axios.get(requests.directionsAPI)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function GetDepartmentById(id){
    try{
        const res = await axios.get(requests.directionsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function DeleteDepartment(id){
    try{
        const res = await axios.delete(requests.directionsAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
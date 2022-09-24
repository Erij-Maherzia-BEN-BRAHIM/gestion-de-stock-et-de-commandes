import axios from "axios";
import { requests } from "../requests"

export async function createCategory(values){
    try {
        const res = await axios.post(requests.categoriesAPI, values);
        return res;
    } catch (err) {
        return err;
    }
}
export async function updateCategory(data){
    try {
        const res = await axios.put(requests.categoriesAPI +"/"+ data.id, data.data);
        return res;
    } catch (err) {
        return err;
    }
}
export  async function getAllCategories(){
    try {
        const res = await axios.get(requests.categoriesAPI);
        return res;
    } catch (err) {
        return err;
    }
}
   
export async function getCategoryById(id){
    try{
        const res = await axios.get(requests.categoriesAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
export async function deleteCategory(id){
    try{
        const res = await axios.delete(requests.categoriesAPI+"/"+id)
        return res ;
    }catch (err) {
        return err;
    }
}
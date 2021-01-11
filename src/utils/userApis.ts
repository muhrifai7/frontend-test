/**
 * Configuration Api With Pagination
 * @param page : Number of page 
 * default to 1
 * @param result Number of total User 
 * default to 4
 */
import axios from "axios";
import { ResultUser} from "./userTypes"

export async function getRamdomUser (page:Number,result:Number){

    const resRandomUser = (res:[])=> {
        return res
    }

    try {
        const url = `https://randomuser.me/api/?page=${page}&results=${result}`;
        const {data} = await axios.get<ResultUser>(url,{
            headers : {},
        });
        return resRandomUser(data.results)
        
    } catch (error) {
        throw error
    }
}
import axios from "axios";

export async function getRamdomUser (){

    const resRandomUser = (res:[])=> {
        console.log(res,'reeeees')
    }

    try {
        const url = `https://randomuser.me/api/?results=28`;
        const {data} = await axios.get<[]>(url,{
            headers : {},
        });
        return resRandomUser(data)
    } catch (error) {
        return []
    }
}
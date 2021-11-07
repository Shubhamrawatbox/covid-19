import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async () => {
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        const modifiedData={
            confirmed,recovered,deaths,lastUpdate
        }
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}
export const fetchDaily=async ()=>{
    try{
        const response=await axios.get(`${url}/daily`)
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
import axios from "axios"


const config = "https://meddata-backend.onrender.com"

export const FetchData = async(endpoint)=>{
    console.log(`${config}/${endpoint}`);
    
    try {
        const resp = await axios.get(`${config}/${endpoint}`);
       
        if(resp.status != 200 ) { throw new Error('Error from server')}
         // console.log("data----", resp.data);
         
        return resp.data
    } catch (error) {
        console.log("Error To Fetch API --", error );
        
    }

}
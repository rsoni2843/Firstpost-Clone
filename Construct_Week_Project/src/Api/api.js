import axios from 'axios' ; 

const apiKey = "pub_10553b3f4d4a1515c96566fba7af4c063dee6" ; 

export function getData({endPoint}){
    
    return axios.get(`https://newsdata.io/api/1/news?&apikey=${apiKey}&language=en`,{
        params:{
            category:endPoint.category,
            country:endPoint.country
        }
    })
}

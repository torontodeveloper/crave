import axios from "axios";
import { useEffect, useState } from "react";
const apiKey = "NAQ22ytRy8YZQl5z0zxb1XDGQVPXDkZaCNnp44ArU96o9LypQ0rFsQAU";

function useFetchPhotos(query,pageNumber){
    const url = 'https://api.pexels.com/v1/search'
    const [imageData,setImageData] = useState([])
    const [loading,setLoading]  = useState(true)
    const [error,setError] = useState('')
    async function fetchImages(){
        const response = await axios.get(url,{
            headers:{
                Authorization:apiKey
            },
            params:{
                query:query,
                page:pageNumber
            }
        })
        console.log('response',response)
        setImageData(response.data.photos)
        setLoading(false)
    }
    
    useEffect(()=>{
        if(query){
            fetchImages()
        }else{
            setImageData([])
            setLoading(false)
        }
    },[query,pageNumber])
    return {loading,imageData,error}
}
export default useFetchPhotos
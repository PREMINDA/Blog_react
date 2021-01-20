import {useState,useEffect } from 'react';

const useFetch=(url)=>{
    
    const[blogs,setBlog] = useState(null)
    const[ispanding,setispanding] = useState(true)
    const[error,setError] = useState(true)

    useEffect(()=>{

        const abcont = new AbortController();

        setTimeout(() => {
            fetch(url,{signal:abcont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not fetch data')
                }
                return res.json();
            })
            .then((data)=>{
                console.log(data)
                setBlog(data)
                setispanding(false)
                setError(null)
            }).catch((e)=>{ 
                if(e.name==='AbortError'){
                    console.log("abo")
                }else{

                    setError(e.message)
                    setispanding(false)
                }
            })  
        }, 1000);
        return ()=>abcont.abort();

    },[url])



    return{blogs , ispanding, error}
}

export default useFetch
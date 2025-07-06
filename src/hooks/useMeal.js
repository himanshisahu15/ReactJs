import { useEffect, useState } from "react"


export const useMeals=(url)=>{
    const [data,setData]=useState(null);
    //track whether data is still fetched or completed
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        if(url){
            //current search ,if a new search happen this one ignored
            let ignore=false;
            //fetch started
              setLoading(true); 
            fetch(url)
            .then(response=>response.json())
            .then(json=>{
                if(!ignore){
                    setData(json);
                    setLoading(false);
                }
            });
            //clean up func
            return()=>{
                ignore=true;
            };
        }
    },[url]);
    return {data,loading};
}
import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const request = React.useCallback(async (url, options)=>{
        let response;
        let json;
        try{
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
            if (response.ok === false) throw new Error(json.message);
            setLoading(false)
        } catch(err){
            json = null
        } finally{
            setData(json)
            setLoading(false)
            return{json, response}
        }
    },[])

  return {
    request,
    data,
    loading
  }
}

export default useFetch
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'




function Github() {
        const dataa = useLoaderData()

 
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/rishabh-sikarwar')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
  return (
   <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Folowers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture"  width={300} /> </div>
   
   </>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = fetch('https://api.github.com/users/rishabh-sikarwar')
    return response.json()
}
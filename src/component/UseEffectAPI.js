import React, { useEffect, useState } from "react";
import Loading from "../gitHub/Loading";
import GitHubUsers from "../gitHub/GitHubUsers";

const UseEffectAPI = () =>{
    
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const getUsers = async() =>{
      try{
         setLoading(false);
         const response = await fetch("https://api.github.com/users");
         setUsers(await response.json());
      }catch(error){
        console.log(error);
      }
    }
    useEffect(()=>{
       getUsers();
    },[])
    if(loading){
      return <Loading/>
    }
    return( 
        <>
        <GitHubUsers users = { users }/>
        </>
  )
}
export default UseEffectAPI;
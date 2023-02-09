import React, { useEffect, useState } from "react";
import Loading from "../gitHub/Loading";
import GitHubUsers from "../gitHub/GitHubUsers";
import Pagination from '../component/Pagination';

const UseEffectAPI = () =>{
    
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(0);
    
    const getUsers = async() =>{
      try{
         setPostsPerPage(8);
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
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex,lastPostIndex);
    return( 
        <>
        <GitHubUsers users = { currentPosts }/>
        <Pagination totalPosts = {users.length} postsPerPage = {postsPerPage}  setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
        </>
  )
}
export default UseEffectAPI;
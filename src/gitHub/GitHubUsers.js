import React from 'react';
const GitHubUsers = ({users}) =>{
   return(
    <>
        <div className="container mt-5 mb-5">
           <h2 className="text-center">List of GitHub Users</h2>
            <div className="row">
               {
                users.map((curElem) =>{
                   return (
                    <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                      <div className="card mb-3">
                         <div className="row g-0">
                            <div className="col-md-4 avatar_card">
                              <img src={curElem.avatar_url}  alt="..." width="160"/>
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">{curElem.login}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                              </div>
                            </div>
                          </div>
                       </div>
                    </div>
                   )
                })
               }
            </div>
        </div>
    </>
   )
}
export default GitHubUsers;
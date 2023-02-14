import React from "react";

const Error = () =>{
    return (
        <>
        <div className="breadcrumbs">
           <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                   <h1 className="text-white">404</h1>
                   <h2 className="text-white">UH OH! You're lost.</h2>
                   <p className="text-white">The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                </div>
              </div>
            </div>
           </div>
          </div> 
        </>
    )
}
export default Error;
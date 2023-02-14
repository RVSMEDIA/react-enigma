import { useState } from "react";

const Image = ({imgs=[{url:""}]}) => {
    
const [mainImage,setMainImage] = useState(imgs[0]);
  return (
    <>        
        <div className='grid grid-four-column image-comp'>
          {
            imgs.map((curElm,index)=>{
                return (
                    <figure>
                      <img src={curElm.url} alt={curElm.filename} className="box-image--style" key={index} onClick={()=>setMainImage(curElm)}/>
                    </figure>
                );

            })
          }
        </div>
        <div className="main-screen">
            <img src={mainImage.url} alt={mainImage.filename}/>
        </div>
    </>
        
    
  )
}

export default Image
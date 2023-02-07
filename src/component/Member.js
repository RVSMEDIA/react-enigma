import React from "react";
import team_1 from '../images/team-1.jpg';
import team_2 from '../images/team-2.jpg';
import team_3 from '../images/team-3.jpg';
import Social from "./Social";
const Member = () => {
    return (
      <>
      <div className="col-lg-4 col-md-6 d-flex">
         <div className="member">
           <img src={team_1} alt="" className="img-fluid"/>
             <div className="member-content">
              <h4>Walter White</h4>
              <span>Web Development</span>
              <p> Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
              <Social/>
            </div>
          </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex">
         <div className="member">
           <img src={team_2} alt="" className="img-fluid"/>
             <div className="member-content">
              <h4>Sarah Jhinson</h4>
              <span>Marketing</span>
              <p> Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</p>
              <Social/>
            </div>
          </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex">
         <div className="member">
           <img src={team_3} alt="" className="img-fluid"/>
             <div className="member-content">
              <h4>William Anderson</h4>
              <span>Content</span>
              <p> Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</p>
              <Social/>
            </div>
          </div>
      </div>
      </>
    )
}

export default Member;
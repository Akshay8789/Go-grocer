import React from "react";
import "../../styles.css";
import bgimg from "../../images/404.png"
import { Link } from 'react-router-dom';

function page404()
{
    return(
        <div>
        <hr style={{height:"30px",backgroundColor:"rgba(0, 188, 41, 0.707)",margin:"0px",padding:"10px"}}/>
        <section className="errpage">
        <img className="bgimg" style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"80%",position:"relative",top:"40px",borderBlockStyle:"double"}} src={bgimg} alt="OOPS!! WRONG AISLE.........GO BACK" />
        <h2 style={{fontWeight:"600",paddingTop:"60px",paddingBottom:"20px",position:"relative",left:"350px",textShadow:"2px 2px 4px grey"}}>MAYBE ..... YOU SHOULD GET BACK TO 😉<Link to="/" style={{color:"rgba(0, 188, 41, 0.707)",textShadow:"2px 2px 4px bisque"}}>SHOPPING</Link></h2>
        </section>
        <div className="footer" style={{padding:"20px",backgroundColor:"#CCD6DB"}}>
        </div>
        </div>
    );  
}

export default page404;
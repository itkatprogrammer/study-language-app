import React from "react";
import { Link } from "react-router-dom";
import style from "./MissingPage.module.scss";

export default function MissingPage() {
  return (
    <div>
      <div className={style.missingBox}>
        <h4>Oops.. </h4>
        <p>page not found :(</p>  
        <button><Link to='/'>
              Back to main page
            </Link></button>
    </div>
    </div>
    
  )
}

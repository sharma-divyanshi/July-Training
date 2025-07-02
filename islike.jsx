import { useState } from "react";

export default function Like(){
     let styles={color :"red"};
    let [likes,setLikes]=useState(false);

    function toggle(){
        setLikes(!likes);
    }

    return(
       <>
       {
        
        likes ? <div><h3 onClick={toggle}> <p>You liked</p><i class="fa-solid fa-heart" style={styles}></i></h3>  </div> : <div> <h3 onClick={toggle}> <p>Please like it</p><i class="fa-regular fa-heart"></i></h3>  </div>
       }
       </>
    );
}
import './amazon.css';
export default function Card({indx}){
    let title=["Logitech Mx Master" , "Apple Pencil (2nd Gen)", "Zebronics" ,"Petronics Toad"];
    let oldP=[12495,1190,899,278];
    let newP=[8999,9199,899,278];
    let desc=["800 DPI", "Intuitive Touch Surface", "Designed for iPad Pro", "Wireless Mouse 2.4GHz"]
    return(
           <div className="card">
           <h3>{title[indx]}</h3>
           <p>{desc[indx]}</p>
          
           <span>
             <p>{oldP[indx]} </p> 
             <b>{newP[indx]}</b>
         </span>
           </div>
         
    );
}
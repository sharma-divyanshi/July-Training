function handle(event){
    event.preventDefault();
    console.log("form submitted");
}
export default function Form(){
      return(
        <form action="post" onSubmit={handle}>
             <input type="text" placeholder="write something"/>
              <button>submit</button>
              {/* it will work both way */}
              <button onClick={handle}>submit</button> 
        </form>
      );
}
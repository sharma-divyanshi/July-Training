function Task() {
    console.log("Hello");
}
function hover() {
    console.log("hover");
}
function la(){
    console.log("la la la");
}

export default function Click() {
    return (
        <div>
            <button onClick={Task}>CLICK ME</button>
            <p onMouseOver={hover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa, nihil eius odio quisquam accusamus? Minima at, expedita cum quisquam eveniet molestiae atque.</p>
            <button onDoubleClick={la}>Double click me</button>
        </div>
    )
}
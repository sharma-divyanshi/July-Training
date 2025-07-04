function Message({username,clr}){
    let styles={color: clr};
    return (
        <h1 style={styles}>Hello {username} !!!</h1>
    );
}
export default Message;
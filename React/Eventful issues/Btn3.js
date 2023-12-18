// function Btn(){
//     const clickHandler =
//     () => console.log('clicked')
//     return (
//         <button onClick ={clickHandler}>
//             Click me
//         </button>
//     );
// }


function Btn(){
    const clickHandler =
    () => console.log('mouse over');
    return (
        <button onMouseOver = {clickedHandler}>
            Click me
        </button>
    );
}

export default Btn;
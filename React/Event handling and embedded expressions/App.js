function App(){
    function thirdEaxmple(){
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function delcaration
            </button>
        </div>
    );
};

export default App;
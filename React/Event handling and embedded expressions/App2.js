function App(){
    const fourthExample = () => console.log('forth example');
    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
    );
};

export default App;
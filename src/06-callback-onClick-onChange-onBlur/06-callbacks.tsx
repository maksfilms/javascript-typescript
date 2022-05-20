export

    /*const callback = () => {
        alert('hello')
    }

    window.setTimeout(callback, 10000) //*/



const User = () => {

        const sayHello = () => {
            alert("Hello")
        }
        const sayBye = () => {
            alert("Bye")
        }
        const onChangeHandler = () =>  {
            console.log("text is changed")
        }

        return (
            <div>
                <button onClick={sayHello}>Hello</button>
                <button onClick={sayBye}>Bye</button>
                <textarea onChange={onChangeHandler}/>
            </div>
        )
    }
import React,{useRef,useState} from "react"

const ValidationForm = () =>{
    const inputRef = useRef(null);
    const [isValid, setIsValid] = useState(false);

    const handleValidation = () => {
        setIsValid(inputRef.current.value.length >= 5)
    }
    return(
        <div>
            <input type="text" 
            ref={inputRef}
            onChange={handleValidation}
            placeholder="enter at least 5 characters"
            style={{borderColor : isValid ? "green" :"red" }}
            />
        </div>

    );
};

export default ValidationForm
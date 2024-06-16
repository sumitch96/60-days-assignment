import React ,  {useRef, useState} from "react";


const CustomSubmissionFrom = () => {

    const inputRef1 = useRef (null);
    const inputRef2 = useRef(null);
    const [error,setError] = useState("");

    function handleSubmit(e){
        e.preventDefault();


        const fromData = {
            field1 : inputRef1.current.value,
            field2 : inputRef2.current.value,

        }

        if(formData.field1 == ""){
            setError("Field 1 cannot be empty")
            return;

        }   
     }

  return(
    <form onSubmit={handleSubmit}>
        <input ref={inputRef1} type="text" placeholder="Field1" />
        <input ref={inputRef2} type="text" placeholder="Field2" />
        {error  && <p style={ { color :"red"}}> {error}</p>}
        <button type="submit"> Submit </button>
    </form>
  );

};

export default CustomSubmissionFrom

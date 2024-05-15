import { useEffect } from "react";

function Doc(){
    useEffect(() => {
        const handleScroll = () => {
          console.log('Scrolled!');
        };
    
        window.addEventListener('scroll', handleScroll);//add scroll event on document

      return () => {//cleanup function 
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency 
    return <>
        <h1>Document Length</h1>
       
      
    </>
}
export default Doc
import { useNavigate } from "react-router-dom"
export const Contact = () =>{
    const navigate = useNavigate();
    const submit=()=>{
        navigate('/');
    }
    return (
<>
        <div className="contact">
            <h1>Contact Us</h1>
        </div>
      <div className="Cforms">
        <form>
            <input placeholder="Name" />
            <input placeholder="Gmail" />
            <input placeholder="Mobile-no"></input>
            <input className="submit" type="submit" onClick={submit}/>
            </form>
            
        </div>    
</>
        
    )
}
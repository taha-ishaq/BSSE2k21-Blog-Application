import {Link } from 'react-router-dom';
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from "firebase/auth"

export const Navbar =()=>{

    const [user]= useAuthState(auth);
    const signUserOut = async () =>{

        await signOut(auth);
    }



    return(
    
    <div className='navbar'>

<div className='links'>

<Link to="/">Home</Link>

{!user? (<Link to="/login">Login</Link>) :(
                    <><><Link to="/createpost">Create Post</Link><Link to="/about">About us</Link></><Link to="/contact">Contact us</Link></>)}
</div>
<div className='user'>
    {user &&(
        <>
        <p>{auth.currentUser?.displayName}</p>
    <img src={auth.currentUser?.photoURL || ""} width="40" height="40"/>
    <button className="btn1"  onClick={signUserOut}>LogOut</button>
    </>
    )}
</div>
</div>
);
};
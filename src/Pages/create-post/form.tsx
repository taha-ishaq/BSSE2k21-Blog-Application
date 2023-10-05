import {useForm} from  "react-hook-form"

import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc , collection} from 'firebase/firestore';
import {auth, db} from '../../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData{
    title:string;
    description:string;
}
export const CreateForm = () =>{
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const schema = yup.object().shape({
        title: yup.string().required("you must add a title"),
        description:yup.string().required("Enter a description"),
    })
    const  {register, handleSubmit , formState:{errors},}= useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })
    const postsRef = collection(db, "posts");
    const onCreatePost = async(data:CreateFormData) =>{
       await addDoc(postsRef, {
        title: data.title,
        description: data.description,
        username: user?.displayName,
        userId: user?.uid,
       });
       navigate('/');
    }

    return (
        <div className="forms">
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="title...." {...register("title")} />
            <p style={{color:"red"}}>{errors.title?.message}</p>
            <input placeholder="Description" {...register("description")} />
            <p style={{color:"red"}}>{errors.description?.message}</p>
            <input className="submit" type="submit"/>
        </form>
        </div>
    );
}
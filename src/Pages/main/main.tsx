import {getDocs , collection} from 'firebase/firestore'
import {db} from '../../config/firebase'
import { useEffect, useState } from 'react';
import { Post } from './post';

export interface Post{
    username: string;
    id: string;
    userId: string;
    title: string;
    uername:string;
    description: string;
}
export const  Main = () =>{
    const [postsList, setPostsList]= useState<Post[] | null>(null)
    const postsRef = collection(db,"posts");

    const getPosts = async () =>{
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc)=>({...doc.data(), id:doc.id}))as Post[]);
    }
    useEffect(()=>{
        getPosts()
    }, [])
return <div className='head' ><h1>BSSE-2k21-Blog-Application</h1> <p>Created and Managed by Taha ishaq, Abdullah Sanaullah , Huzaifa Siddique </p> <div className='post'>{postsList?.map((post)=> <Post post={post} />)}</div></div>
}
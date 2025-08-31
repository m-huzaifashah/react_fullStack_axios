import { useEffect, useState,} from "react";
import { getPost } from "../api/PostApi";
import {Card} from './Card'
import { Form } from "./Form";
export const Posts=()=>{
const [data,setData]=useState([]);

const getPostData=async()=>{
const res =await getPost();
setData(res.data);

console.log(res.data);

}

  useEffect(()=>{
    getPostData();
  },[])
 
  
const handleDelete=(id)=>{
setData(data.filter(post=>post.id!==id))
}

  return <>
  <section>
    <Form  data={data} setData={setData}/>
  </section>
    <ul className="cards-container">
      {
        data.map((currElem)=>{
          return <Card key={currElem.id} value={currElem} onDelete={handleDelete}/>
        })
      }
    </ul>
</>
}
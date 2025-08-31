import { useEffect, useState,} from "react";
import { getPost } from "../api/PostApi";
import {Card} from './Card'
import './card.css'
export const Posts=()=>{
const [data,setData]=useState([]);
  // console.log(getPost());

const getPostData=async()=>{
const res =await getPost();
setData(res.data);

console.log(res.data);

}

  useEffect(()=>{
    getPostData();
  },[])
  
  return <>
    <ul className="cards-container">
      {
        data.map((currElem)=>{
          return <Card key={currElem.id} value={currElem}/>
        })
      }
    </ul>
  </>
}
import { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

export const Form=({data,setData,updateDataApi,setUpdateDataApi})=>{
const [addData,setAddData]=useState({
    title:'',
    body:''
})


useEffect(()=>{
if (updateDataApi&&setAddData({
    title:updateDataApi.title || "",
    body: updateDataApi.body || ""
})) {
    
}
},[updateDataApi])


const handlePostChange=(e)=>{
const {name,value}=e.target;
setAddData((prev)=>
{
    return {...prev,[name]:value}
}
)
}
const handlePostData=async()=>{
    const res=await postData(addData);
    if (res.status==201) {
        setData([...data,res.data])
        
        setAddData({
            title:'',
            body:''
        })
    }
    
}


const handleFormSubmit=(e)=>{
e.preventDefault();
handlePostData();
} 
    return  <form className="form-container" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={addData.title}
                        onChange={handlePostChange}
                    placeholder="Enter your Title"

                    />
                </div>
  <div>
                    <label htmlFor="body">Body</label>
                    <input 
                        type="text"
                        name="body"
                        value={addData.body}
                        onChange={handlePostChange}
                    placeholder="Enter your Body"

                    />
                </div>
                <button type="submit">Add</button>
  
            </form>
}   


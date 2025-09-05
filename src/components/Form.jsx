import { useEffect, useState } from "react";
import { patchData, postData } from "../api/PostApi";

export const Form=({data,setData,updateDataApi,setUpdateDataApi})=>{
const [addData,setAddData]=useState({
    title:'',
    body:''
})

let isEmpty =Object.keys(updateDataApi).length===0;

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
const handlePutData=async()=>{
    try {
  const res=await  patchData(updateDataApi.id,addData);
  console.log(res); 
  if (res.status===200) {
  setData((prev)=>{
return prev.map((currElem)=>{
    return currElem.id===updateDataApi.id?res.data:currElem
})
  })
    
  }
  setAddData({
    title:'',
    body:''
  })
  setUpdateDataApi({});
  
    } catch (error) {
        console.log(error);
        
    }
  
  
}


const handleFormSubmit=(e)=>{
e.preventDefault();
const action=e.nativeEvent.submitter.value;

if (action==='Add') {
handlePostData();   
}else if (action==='Edit') {
    handlePutData();
}
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
                <button type="submit" value={isEmpty?"Add":"Edit"}>{isEmpty?"Add":"Edit"}</button>
  
            </form>
}   


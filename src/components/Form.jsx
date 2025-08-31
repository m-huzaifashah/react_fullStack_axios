import { useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData }) => {
const [addData,setAddData]=useState({
    title:'',
    body:''
});


const handleinputChange=(e)=>{
    const {name,value}=e.target;
    setAddData((prev)=>{
      return {
        ...prev,[name]:value,
      }  
    })
}

const addPostData=async()=>{
    const res =await postData(addData);
    if (res.status===201) {
        setData([...data,res.data])
setAddData({title:"",body:""})
    }
}

const handleFormSubmit=(e)=>{
    e.preventDefault();
    addPostData();
}

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add a title"
          value={addData.title}
          onChange={handleinputChange}
        />
      </div>

      <div>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add a body"
          value={addData.body}
          onChange={handleinputChange}

        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

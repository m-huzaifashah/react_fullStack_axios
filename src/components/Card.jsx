import {deletePost}from'../api/PostApi';


export const Card = ({ value,onDelete }) => {
  const { id, title, body } = value;


  const handleDeletePost=async(id)=>{
   const res =await deletePost(id);
try {
    
    if (res.status==200||res.status==204) {
        onDelete(id);
    }
} catch (error) {
    console.log(error);
    
}
  }
  return (
    <li className="card-item">
      <div className="card-id">ID: {id}</div>
      <div className="card-title">Title: {title}</div>
      <div className="card-body">Body: {body}</div>

      <button className="edit-button">Edit</button>
      <button className="delete-button" onClick={()=>handleDeletePost(id)}>Delete</button>
    </li>
  );
};


import "./card.css";
import {deletePost}from'../api/PostApi';


export const Card = ({ value }) => {
  const { id, title, body } = value;


  const handleDeletePost=(id)=>{
    deletePost(id);
console.log(id);

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

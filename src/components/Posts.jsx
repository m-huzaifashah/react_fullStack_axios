import { useEffect, useState } from "react";
import { getPost, deletePost } from "../api/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi,setUpdateDataApi]=useState({})

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200 || res.status === 204) {
        setData(data.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (currElem) => {
  setUpdateDataApi(currElem)
  };

  return (
    <>
      <section>
        <Form data={data} setData={setData} updateDataApi={updateDataApi} 
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>

      <ul className="cards-container">
        {data.map((currElem) => (
          <li key={currElem.id} className="card-item">
            <div className="card-id">ID: {currElem.id}</div>
            <div className="card-title">Title: {currElem.title}</div>
            <div className="card-body">Body: {currElem.body}</div>

            <button
              className="edit-button"
              onClick={() => handleEdit(currElem)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(currElem.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

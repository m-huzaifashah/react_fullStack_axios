import axios from "axios";

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

export const getPost=()=>{
    return api.get('/posts');
};

export const postData=(post)=>{
    return api.post('/posts',post);
}


export const patchData=(id,post)=>{
    return api.put(`/posts/${id}`,post);
}



export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`);
}
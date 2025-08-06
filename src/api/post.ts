// import api from "../lib/axios";
import { dummyPosts, dummyPostDetail } from "./dummy";

export const getPosts = /*async*/ () => {
  //   const response = await api.get(`{API ENDPOINT}`);
  //   if (response.status !== 200) {
  //     throw new Error();
  //   }
  //   return response.data;

  const response = {
    data: serverSearchAllPost(),
    message: "Successfully fetched",
  };
  return response;
};



export const getPostDetail = async (postId: number) => {
  // const response = await api.get(`{API ENDPOINT}`);
  // if (response.status !== 200) {
  //   throw new Error();
  // }
  // return response.data;
  const response = {
    data: serverSearchPost(postId),
    message: "Successfully fetched",
  };
  return response;
};

function serverSearchAllPost() {
  return dummyPosts;
}

function serverSearchPost(postId: number) {
  return dummyPostDetail.filter(post => post.id == postId)
  // return dummyPosts.filter(searchPost(postId));  
}


// console.log(dummyPosts);

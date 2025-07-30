import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import type { MainPagePostResponseType } from "../../types/post";
import { getPosts } from "../../api/post";

const Main = () => {
  const dummydata: MainPagePostResponseType = getPosts();
  
  return (
    <>
      <Header />
      <PostCard postsData={dummydata.data} />
    </>
  );
};

export default Main;

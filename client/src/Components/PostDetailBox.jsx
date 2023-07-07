import React, {useState,useEffect} from "react";
import {  Container, PostImg, PostBody } from "./PostDetailBox.style";
import PostContent from "./PostContent";
import PostComment from "./PostComment";
import PostCommentInput from "./PostCommentInput";
import axios from "axios";

function PostDatailBox ({ postId }){

  const url = `${import.meta.env.VITE_API_URL}/posts/${postId}`
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(url);
  
  const getData = () => {
    setLoading(true)
    axios.get(url)
        .then((response) => {
          setData(response.data)
          setLoading(false)
        })
        .catch((error) => {throw error;});
  }

  useEffect(() => {
    getData();
  }, []);
  

  return (
      <Container>
        <PostImg>
          <img src={data.imageUrl} alt="게시글 이미지" />
        </PostImg>
        <PostBody>
          <PostContent data={data}/>
          <PostComment comments={data.comments}/>
          <PostCommentInput/>
        </PostBody>
      </Container>
  )

}

export default PostDatailBox;
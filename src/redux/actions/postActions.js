import axios from "axios";
import { setDetailPost, setPosts } from "../reducers/postsReducers";

export const getAllPosts = () => async (dispatch) => {
  try {
    console.log("getState()", getState());
    const token = getState().todo.token;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch(setPosts(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.message);
      return;
    }
    alert(error.message);
  }
};

//function to get posts
export const getPosts = (props) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${props.id}`
    );
    dispatch(setDetailPost(response.data));
    return response.data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   alert(error.message);
    return "Error";
  }
};

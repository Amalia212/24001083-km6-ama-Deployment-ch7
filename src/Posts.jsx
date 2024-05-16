import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getPosts } from "./redux/actions/postActions";

export default function Posts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);
  console.log("posts", data);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div>
      <div>Posts</div>
      {data?.posts?.map((e) => (
        <div
          key={e?.id}
          onClick={async () => {
            const dataBaru = await dispatch(getPosts({ id: e?.id }));
            if (dataBaru === "Error") {
              alert("ada error");
              return;
            }
            if (dataBaru.id === 5) {
              alert("ini ID ke 5");
            } else {
              alert("ini bukan ID ke 5");
            }
          }}
        >
          {e?.title}
        </div>
      ))}
    </div>
  );
}

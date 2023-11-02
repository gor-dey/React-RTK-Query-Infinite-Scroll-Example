import { useGetPostQuery } from "@entities";
import { DefaultButton } from "@shared";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
  const { id } = useParams();

  const { data: post, isLoading, isError, error } = useGetPostQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>Error</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <DefaultButton text="Назад" link={"/"} />
    </>
  );
};

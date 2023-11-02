import { useRef } from "react";
import { useGetInfinitePostsQuery } from "@entities";
import { DefaultButton, PostType } from "@shared";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  overflow-y: auto;
  max-height: 80vh;
`;

export const PostsList = () => {
  const { data, isLoading, isError, error } = useGetInfinitePostsQuery({});
  const containerRef = useRef(null);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    console.log("error", error);
    return <h1>Error</h1>;
  }

  return (
    <Container ref={containerRef}>
      <ol>
        {data.map((post: PostType) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <br />
            {post.body.length > 50 ? (
              <p>{post.body.substring(0, 50) + "..."}</p>
            ) : (
              <p>{post.body}</p>
            )}
            <DefaultButton text="Просмотр" link={`/post/${post.id}`} />
          </li>
        ))}
      </ol>
    </Container>
  );
};

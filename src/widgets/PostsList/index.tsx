import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { PostsLiElement, useGetInfinitePostsQuery } from "@entities";
import { PostType } from "@shared";

const Container = styled.div`
  padding: 0 20px;
  overflow-y: auto;
  max-height: 80vh;
`;

export const PostsList = () => {
  const [postStart, setPostStart] = useState(0);

  const { data, isLoading, isError, error } = useGetInfinitePostsQuery({
    start: postStart,
  });

  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0,
  });

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [inViewFirstCard]);

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    console.log("error", error);
    return <h1>Error</h1>;
  }

  return (
    <Container>
      <ul>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.map((post: PostType, index: number, arr: any) =>
          index === 0 ? (
            <li key={post.id} ref={firstCard}>
              <PostsLiElement post={post} />
            </li>
          ) : index === arr.length - 1 ? (
            <li key={post.id} ref={lastCard}>
              <PostsLiElement post={post} />
            </li>
          ) : (
            <li key={post.id}>
              <PostsLiElement post={post} />
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

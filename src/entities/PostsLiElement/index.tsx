import { DefaultButton, PostType } from "@shared";

export const PostsLiElement = ({ post }: { post: PostType }) => (
  <div>
    <h2>
      {post.id}. {post.title}
    </h2>
    <p>
      {post.body.length > 50 ? post.body.substring(0, 50) + "..." : post.body}
    </p>
    <DefaultButton text="Просмотр" link={`/post/${post.id}`} />
  </div>
);

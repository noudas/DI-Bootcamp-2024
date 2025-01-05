import { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import {
  usePostsSelector,
  usePostsStatus,
  useFetchPosts,
} from "./state/hooks";

const PostsList = (props) => {
  const posts = usePostsSelector();
  const status = usePostsStatus();

  const callFetchPost = useFetchPosts()

  useEffect(() => {
    callFetchPost()
  }, []);

  if (status === "loading") return <h1>Loading...</h1>;

  if (status === "failed") return <h1>Oppps... i can not get what you want</h1>;

  return (
    <>
      <h2>Posts</h2>
      <section>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <ReactionButton post={post} />
            </article>
          );
        })}
      </section>
    </>
  );
};
export default PostsList;

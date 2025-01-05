import React, { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import { useErrorSelector, usePostSelector, useStatusSelector, useFetchPost } from "../redux/hooks"; // Import hooks

const PostList = () => {
    const posts = usePostSelector(); // Access posts state using the custom hook
    const status = useStatusSelector(); // Access status state
    const error = useErrorSelector(); // Access error state

    const callFetchPost = useFetchPost(); // Get fetch function

    useEffect(() => {
        if (status === "idle") {
            callFetchPost();  // Fetch posts if status is idle
        }
    }, [status, callFetchPost]); // Run effect when status changes

    if (status === "pending") return <h2>Loading posts...</h2>;
    if (status === "failed") return <h2>Error: {error}</h2>;

    return (
        <main>
            <h1>Posts</h1>
            {posts.map((post) => (
                <article key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <ReactionButton post={post} />
                </article>
            ))}
        </main>
    );
};

export default PostList;

import React, { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import { useSelector } from "react-redux";
import { useErrorSelector, usePostSelector, useStatusSelector, useFetchPost } from "../redux/hooks";
import { selectSelectedUser } from "../redux/userSlice";

const PostList = () => {
    const posts = usePostSelector(); // Access posts state
    const status = useStatusSelector(); // Access status state
    const error = useErrorSelector(); // Access error state
    const selectedUser = useSelector(selectSelectedUser); // Get selected user

    const callFetchPost = useFetchPost(); // Fetch function

    useEffect(() => {
        if (status === "idle") {
            callFetchPost(); // Fetch posts
        }
    }, [status, callFetchPost]);

    if (status === "pending") return <h2>Loading posts...</h2>;
    if (status === "failed") return <h2>Error: {error}</h2>;

    // Filter posts based on selected user
    const filteredPosts = selectedUser
        ? posts.filter((post) => post.userId === parseInt(selectedUser))
        : posts;

    return (
        <main>
            <h1>Posts</h1>
            {filteredPosts.map((post) => (
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
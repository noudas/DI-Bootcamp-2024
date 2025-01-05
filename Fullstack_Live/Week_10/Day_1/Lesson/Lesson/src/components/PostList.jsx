import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slice";
import ReactionButton from "./ReactionButton";

const PostList = () => {
    const { posts, status, error } = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

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

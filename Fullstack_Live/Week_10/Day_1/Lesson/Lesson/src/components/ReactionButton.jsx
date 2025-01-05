import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/slice";

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();

    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
    };

    const handleReaction = (reaction) => {
        dispatch(reactionAdded({ postId: post.id, reaction }));
    };

    return (
        <div>
            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                <button
                    style={{cursor:"pointer"}}
                    key={name}
                    className="reactionButton"
                    onClick={() => handleReaction(name)}
                >
                    {emoji} <span>{post.reactions[name]}</span>
                </button>
            ))}
        </div>
    );
};

export default ReactionButton;

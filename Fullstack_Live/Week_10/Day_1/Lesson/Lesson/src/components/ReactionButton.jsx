import { useState } from "react";

const ReactionButton = (props) =>{

    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
      };

    const [reactionCount, setReactionCount] = useState({
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    })

    const handleReaction = (reactionCount) => {
        setReactionCount((prevReactions) => ({
            ...prevReactions,
            [reactionCount]: prevReactions[reactionCount] + 1,
        }));
    };


    return(
        <>
        <p>Reaction Button</p>
        <div style={{ display: "flex", gap: "10px" }}>
                {Object.entries(reactionEmoji).map(([name, emoji]) => (
                    <button style={{cursor:"pointer"}}
                        key={name}
                        className="reactionButton"
                        onClick={() => handleReaction(name)}
                    >
                        {emoji} {reactionCount[name]}
                    </button>
                ))}
            </div>
        </>
    )
}

export default ReactionButton
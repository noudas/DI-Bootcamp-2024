import { useAddReaction } from "./state/hooks";
import { memo } from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const { id, reactions } = post;
  const callAddReaction = useAddReaction();

  // console.log(`Render Reaction => ${id}`);

  const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='reactionButton'
        onClick={() => callAddReaction(id, name)}
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return (
    <>
      <div>{renderReaction}</div>
    </>
  );
};

const memoizedReactionButton = memo(ReactionButton);
export default memoizedReactionButton;

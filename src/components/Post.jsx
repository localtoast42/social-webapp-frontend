import Comment from "./Comment";
import PropTypes from 'prop-types';

function Post({ post }) {
  const comments = post.comments;

  return (
    <div>
      <div>
        <h2>{post.author}</h2>
        <h2>{post.date}</h2>
      </div>
      <p>{post.text}</p>
      <div>
        {comments && comments.map(comment => <Comment 
          key={comment.id}
          comment={comment} />
        )}
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
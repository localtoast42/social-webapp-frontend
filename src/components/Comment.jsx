import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div>
      <div>
        <h3>{comment.author}</h3>
        <h3>{comment.date}</h3>
      </div>
      <p>{comment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
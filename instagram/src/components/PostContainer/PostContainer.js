import React from "react";
import CommentSection from "../CommentSection/Comments";
import PropTypes from "prop-types";
import "./Post.css";

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <img className="thumb" src={props.data.thumbnailUrl} alt="logo" />
        <p className="user">{props.data.username}</p>
      </div>
      <div className="post-image">
        <img src={props.data.imageUrl} alt="post" />
      </div>
      <div className="like-comm-container">
        <div className="like-heart">
          <i
            className="far fa-heart"
            onClick={() => props.handleLiked(props.data.timestamp)}
          />
        </div>
        <div className="comment">
          <i className="far fa-comment" />
        </div>
      </div>
      <h4 className="post-like">{props.data.likes} likes</h4>
      <div className="comments">
        {props.data.comments.map(comment => {
          return <CommentSection comm={comment} />;
        })}
      </div>
      <div className="add-comment">
        <form className="comm-add">
          <input type="text" name="addComment" placeholder="Add comment...." />
          <i className="fas fa-ellipsis-h" />
        </form>
      </div>
    </div>
  );
};

PostContainer.PropTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string,
    comment: PropTypes.arrayOf(PropTypes.object)
  })
};

export default PostContainer;

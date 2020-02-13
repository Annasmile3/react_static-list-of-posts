import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h2 className="title">{title}</h2>
    <p>{body}</p>
    <User user={user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

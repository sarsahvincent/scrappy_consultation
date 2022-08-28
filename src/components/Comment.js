import React from 'react';
import Moment from 'react-moment';

function Comment({ clientComment }) {
  return (
    <div className='comment_container'>
      <div className='customer_name'>{clientComment?.name}</div>
      <div className='customer_comment'>{clientComment?.comment}</div>
      <div className='comment_time'>
      <Moment fromNow>{clientComment?.createdAt}</Moment>
      </div>
    </div>
  );
}

export default Comment;

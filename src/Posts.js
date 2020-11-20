import React from 'react';
import './Posts.css';
import { Avatar } from '@material-ui/core';

function Posts({ username, caption, imageUrl }) {
	return (
		<div className="posts">
			<div className="post_header">
				<Avatar className="post_avatar" alt="Name" src="/static/images/avatar/1.jpg" />
				<h3 className="username">{username} </h3>
			</div>
			{/**header -> avatar and username */}

			<img className="post_image" src={imageUrl} alt="" />

			<h4 className="post_caption">
				<strong>{username}</strong> {caption}
			</h4>
		</div>
	);
}

export default Posts;

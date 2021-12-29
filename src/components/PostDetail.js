import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'
import Radium from "radium";

function PostDetail() {
	const [post, setPost] = useState({});
	const { postId } = useParams();

	useEffect(() => {
		const docRef = doc(firestore,'posts', postId);
		const docSnap = getDoc(docRef);
		docSnap.then((snapshot) => {
			console.log(snapshot.data());
			setPost(snapshot.data());
		});
		}, []);

  return (
		<div className="post-detail">
			<h1 style={styles.heading}>{post.title}</h1>
			<p style={styles.postDetail}>{post.content}</p>
		</div>
  );
}

export default Radium(PostDetail);

const styles = {
	postDetail: {
		border: '1px solid #e1e1e1',
		padding: 5,
		paddingTop: 10,
		borderRadius: 5,

		'@media (max-width: 720px)': {
			color: 'pink',
		},
	},
	heading: {
		textAlign: 'center',
		margin: 0,

		':hover': {
			color: 'red',
			cursor: 'default',
		},
	},
}
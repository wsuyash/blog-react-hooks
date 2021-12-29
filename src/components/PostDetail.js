import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'

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
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
  );
}

export default PostDetail;
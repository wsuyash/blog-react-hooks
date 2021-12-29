import { useEffect, useState } from "react";
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading = styled.h1`
	font-size: 48px;
	text-align: center;
	color: #2196f3;
	margin-bottom: 2px;
`;

const PostSubTitle = styled.p`
	font-size: 14px;
`;

const Post = styled.div`
	border: 1px solid #e1e1e1;
	padding: 10px 10px;
	border-radius: 5px;
	margin-top: 10px;

	h3 {
		margin: 0;
		padding: 0;
		font-size: 25px;
		font-weight: bold;
		color: black;

		&:hover {
			color: #2196f3;
		}
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 800px) {
		border: 1px solid black;
	}
`;

function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const querySnapshot = getDocs(collection(firestore, 'posts'));	
		querySnapshot.then((snapshot) => {
			const posts = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data()
				}	
			});
		console.log('posts', posts);
		setPosts(posts);
		});

	}, []);

  return (
    <div className="home">
			<BlogHeading>Tech Blog</BlogHeading>

			<div id="blog-by">Suyash</div>

			{posts.map((post, index) => (
				<Post className="post" key={`post-${index}`}>

					<Link to={`/post/${post.id}`} >
						<h3>{post.title}</h3>
					</Link>

					<PostSubTitle>{post.subTitle}</PostSubTitle>

				</Post>
			))}
		</div>
  );
}

export default Home;
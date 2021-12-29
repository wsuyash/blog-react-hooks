import { firestore } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useFormInput } from '../hooks'
import styled, { css } from "styled-components";

const CreatePostButton = styled.button`
	height: 33px;
	background: ${(props) => props.primary ? '#4caf50' : 'blue'};
	border: 0;
	color: #fff;
	padding: 8px;
	font-size: 15px;
	border-radius: 3px;
	cursor: pointer;

	${(props) => props.primary && css`
		color: red;
		border: 1px solid ${props.bgColor};
	`};
`;

function CreatePost() {
	const title = useFormInput('');
	const subTitle = useFormInput('');
	const content = useFormInput('');

	function handleSubmit(e) {
		e.preventDefault();

		console.log('title', title);
		console.log('subTitle', subTitle);
		console.log('content', content);

		addDoc(collection(firestore, "posts"), {
			title: title.value,
			subTitle: subTitle.value,
			content: content.value,
			createdAt: new Date()
		});
	}

	return (
		<div className="create-post">
			<h1>CreatePost</h1>

			<form onSubmit={handleSubmit}>

				<div className="form-field">
					<label>Title</label>
					<input {...title} required/>
				</div>

				<div className="form-field">
					<label>Sub Title</label>
					<input {...subTitle} required/>
				</div>

				<div className="form-field">
					<label>Content</label>
					<textarea {...content} required/>
				</div>

				<CreatePostButton primary bgColor="blue">Create Post</CreatePostButton>

			</form>

		</div>
	);
}

export default CreatePost;
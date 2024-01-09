import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

/*class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  }*/

const AddComment = (props) => {
	const [comment, setComment] = useState({
		comment: "",
		rate: 1,
		elementId: this.props.asin,
	});

	useEffect(() => {
		const pippo = (prevProps) => {
			if (prevProps.asin !== props.asin) {
				setComment({
					...comment,
					elementId: props.asin,
				});
			}
		};
	}, [props]);

	const sendComment = async (e) => {
		e.preventDefault();
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
				method: "POST",
				body: JSON.stringify(this.state.comment),
				headers: {
					"Content-type": "application/json",
					Authorization: "Bearer inserisci-qui-il-tuo-token",
				},
			});
			if (response.ok) {
				alert("Recensione inviata!");
				setComment({
					comment: "",
					rate: 1,
					elementId: props.asin,
				});
			} else {
				throw new Error("Qualcosa è andato storto");
			}
		} catch (error) {
			alert(error);
		}
	};
	useEffect(() => sendComment(), [props]);

	return (
		<div className="my-3">
			<Form onSubmit={this.sendComment}>
				<Form.Group className="mb-2">
					<Form.Label>Recensione</Form.Label>
					<Form.Control
						type="text"
						placeholder="Inserisci qui il testo"
						value={comment.comment}
						onChange={(e) =>
							setComment({
								...comment,
								comment: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group className="mb-2">
					<Form.Label>Valutazione</Form.Label>
					<Form.Control
						as="select"
						value={comment.rate}
						onChange={(e) =>
							setComment({
								...comment,
								rate: e.target.value,
							})
						}
					>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>
				<Button variant="primary" type="submit">
					Invia
				</Button>
			</Form>
		</div>
	);
};

export default AddComment;

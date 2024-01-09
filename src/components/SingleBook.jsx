import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

//class SingleBook extends Component {
// state = {
//   selected: false,
// }

const SingleBook = (props) => {
	const [selected, setSelected] = useState(false);

	return (
		<>
			<Card
				// onClick={() => this.setState({ selected: !this.state.selected })}
				onClick={() => props.changeSelectedBook(props.book.asin)}
				style={{
					border: props.selectedBook === props.book.asin ? "3px solid red" : "none",
				}}
			>
				<Card.Img variant="top" src={props.book.img} />
				<Card.Body>
					<Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
				</Card.Body>
			</Card>
			{/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
		</>
	);
};

export default SingleBook;

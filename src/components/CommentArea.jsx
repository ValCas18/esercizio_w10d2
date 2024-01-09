import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

/*class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  }*/

// componentDidMount = async () => {
//   try {
//     let response = await fetch(
//       'https://striveschool-api.herokuapp.com/api/comments/' +
//         this.props.asin,
//       {
//         headers: {
//           Authorization:
//             'Bearer inserisci-qui-il-tuo-token',
//         },
//       }
//     )
//     console.log(response)
//     if (response.ok) {
//       let comments = await response.json()
//       this.setState({ comments: comments, isLoading: false, isError: false })
//     } else {
//       console.log('error')
//       this.setState({ isLoading: false, isError: true })
//     }
//   } catch (error) {
//     console.log(error)
//     this.setState({ isLoading: false, isError: true })
//   }
// }

const CommentArea = ({ asin }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => myFetch(), [asin]);
	const myFetch = async () => {
		setIsLoading(true);
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
				headers: {
					Authorization: "Bearer QKi75oRu6XUobvQpFLigh2thmbG5Mv4W1mOeUws4eMP4xJYyZWcQQSdi",
				},
			});
			console.log(response);
			if (response.ok) {
				let comments = await response.json();
				setComments(comments);
				setIsLoading(false);
				setIsError(false);
			} else {
				setIsLoading(false);
				setIsError(true);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			setIsError(true);
		}
	};

	return (
		<div className="text-center">
			{isLoading && <Loading />}
			{isError && <Error />}
			<AddComment asin={asin} />
			<CommentList commentsToShow={comments} />
		</div>
	);
};

export default CommentArea;

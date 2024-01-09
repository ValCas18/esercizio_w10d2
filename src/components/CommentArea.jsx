import { Component, useState } from "react";
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

const CommentArea = (props) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);


  useEffect(() => {
		const paperino = async (prevProps) => {
			if (prevProps.asin !== props.asin) {
        setIsLoading( true);
			}
		};
	}, [props]);

			try {
				let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
					headers: {
						Authorization: "Bearer inserisci-qui-il-tuo-token",
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
          setIsError(false);
				}
			} catch (error) {
				console.log(error);
        setIsLoading(false);
        setIsError(false);
			}
		}

	return (
		<div className="text-center">
			{setIsLoading(false) && <Loading />}
			{setIsError && <Error />}
			<AddComment asin={asin} />
			<CommentList commentsToShow={comments} />
		</div>
	);

export default CommentArea;

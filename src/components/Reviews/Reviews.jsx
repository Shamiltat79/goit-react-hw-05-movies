import { fetchReviews } from "API";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ReviewsList, ReviewsItem } from "./ReviewsStyled";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();
    const isFirstRender = useRef(true);

    useEffect(() => {
      async function getReviews() {
        if(isFirstRender.current){
            try {
                const {data} = await fetchReviews(id)
                setReviews(data.results)
                
                
            } catch (error) {
               console.log(error) 
            }
    
            isFirstRender.current = false; 
        }
        
      }
    
      getReviews();
    }, [id])
    
    return(
        <>
<ReviewsList>
    {reviews.length > 0 ? reviews.map((review) => <ReviewsItem key={review.id}>
        <h3>{review.author}</h3>
        <p>{review.content}</p>
    </ReviewsItem>) : <p>We don't have reviews for this movie</p>}
    
</ReviewsList>
        </>
    )

}
export default Reviews;
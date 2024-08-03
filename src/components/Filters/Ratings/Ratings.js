import { useFilter } from "../../../context";
const ratings = ["1", "2", "3", "4", "5"];
export const Ratings = () => {
    const {traveloRating,filterDispatch}=useFilter()
    console.log(traveloRating)
    const handleRatingClick=(rating)=>{
        filterDispatch({
            type:"RATING",
            payload:rating

        })
    }
  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>
      <div className="d-flex align-center gap">
        {ratings.map((rating) => (
          <span
            className="span-label amenity-count star d-flex align-center justify-center cursor-pointer on-hover"
            key={rating}
            onClick={()=>handleRatingClick(rating)}
          >
            {rating}&Up
          </span>
        ))}
      </div>
    </div>
  );
};

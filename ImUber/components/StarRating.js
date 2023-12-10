import StarRating from 'react-native-star-rating-widget';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  return (
      <StarRating
        rating={rating}
        onChange={setRating}
      />
  );
};
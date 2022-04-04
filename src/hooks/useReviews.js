import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/reviewsFakeData/main/data.json')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews];
}
export default useReviews;
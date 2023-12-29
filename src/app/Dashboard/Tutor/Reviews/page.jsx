import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const perPage = 10; // Number of reviews per page

  const fetchMoreReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${perPage}`);
      const data = await response.json();
      setReviews([...reviews, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching more reviews:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMoreReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Fetch initial reviews on component mount

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        && !loading
      ) {
        fetchMoreReviews();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); // Listen for scroll events and fetch more reviews when needed

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded p-4">
            <p className="text-lg font-bold mb-2">Reviewer Email: {review.email}</p>
            <p className="text-gray-700">{review.body}</p>
          </div>
        ))}
        {loading && <p className="text-gray-500 text-center">Loading...</p>}
      </div>
    </div>
  );
};

export default Reviews;

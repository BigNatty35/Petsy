export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews'
  });
};


export const fetchReviews = (id) => {
  return $.ajax({
    method: "GET",
    url: "/api/reviews",
    data: {i}
  });
};
export const deleteReview = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${id}`,
  });
};
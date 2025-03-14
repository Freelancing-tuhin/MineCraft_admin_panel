import axios from 'axios';

export const getEventReview = async (eventId: any) => {
  try {
    const response = await axios.get(
      `http://localhost:8989/api/v1/reviews/filter?eventId=${eventId}`,
    );

    return response.data.result;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

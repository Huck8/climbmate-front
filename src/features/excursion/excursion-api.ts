export const getAllExcursions = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/excursion`,
    // `http://localhost:4000/api/v1/excursion`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const createNewExcursion = async (newExcursion: FormData) => {
  const response = await fetch(
    //`${process.env.REACT_APP_API_URL}/api/v1/excursion`,
    `http://localhost:4000/api/v1/excursion`,

    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: newExcursion,
    },
  );
  return response;
};

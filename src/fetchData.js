const fetchData = async query => {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/${query}`);

    if (!res.ok) throw new Error('We can not found this query...');

    const data = await res.json();

    if (!data.meals) throw new Error('We can not found this query...');

    return data.meals;
  } catch (err) {
    alert(err.message);
    throw err.message;
  }
};

export default fetchData;

const getNewsData = async (size = 10) => {
  const res = await fetch(
    `https://wong.condomonk.ca/api/preconstructions/?page_size=${size}`,
    {
      next: { revalidate: 10 },
    }
  );

  console.log(res.ok);

  if (!res.ok || res.status != 200) {
    throw new Error("Failed to fetch market news data");
  }
  const data = await res.json();
  return data.results;
};

export default getNewsData;

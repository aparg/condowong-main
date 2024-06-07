const getPreconProperties = async (size = 10) => {
  const res = await fetch(
    // "https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=Condo&page_size=20",
    `https://api.dolphy.ca/api/preconstructions/?page_size=${size}`,
    {
      next: { revalidate: 10 },
    }
  );

  console.log(res.ok);

  if (!res.ok || res.status != 200) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};

export default getPreconProperties;

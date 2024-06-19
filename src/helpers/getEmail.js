const getEmail = (page) => {
  return "apargtm@gmail.com";
  switch (page) {
    case "rental":
      return "rental@condowong.ca";
    case "resale":
      return "resale@condowong.ca";
    case "preconstruction":
      return "dan@condowong.ca";
  }
};

export default getEmail;

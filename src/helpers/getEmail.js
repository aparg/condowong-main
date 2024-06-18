const getEmail = (page) => {
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

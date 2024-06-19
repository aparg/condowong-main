const getArrayFromObj = (obj) => {
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push(`${key.toUpperCase()}: ${value}`);
  }
  console.log(arr);
  return arr;
};

export default getArrayFromObj;

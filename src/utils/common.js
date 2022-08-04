export const toHex = (num) => {
  const val = Number(num);
  return `0x${val.toString(16)}`;
};

export const fetchApi = (url) => fetch(url)
  .then((response) => response.json())
  .then((myJson) => myJson);

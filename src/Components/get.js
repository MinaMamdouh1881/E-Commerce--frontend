import axios from 'axios';
const getData = async (url, setData) => {
  try {
    const res = await axios.get(url);

    if (res.data.success) return setData(res.data.products);
    return Error(res.data.msg);
  } catch (error) {
    console.log(error);
  }
};

export default getData;

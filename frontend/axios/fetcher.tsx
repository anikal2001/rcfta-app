import axiosConfig from "./axios";

const fetcher = async ({ queryKey: [path, queryParams] }) => {
  const { data } = await axiosConfig.get(path, { params: queryParams });
  return data;
};

export default fetcher;

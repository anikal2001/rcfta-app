import { QueryClient } from "react-query";
import fetcher from "../axios/fetcher";

const getNewQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: fetcher,
        staleTime: 60 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
      },
    },
  });

export default getNewQueryClient;

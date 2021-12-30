/** @format */

import { useState } from "react";
import nProgress from "nprogress";

export default function useApi(apiFunc, { hasCatchError = false } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState({});

  async function request(...params) {
    setIsLoading(true);
    nProgress.start();

    try {
      const res = await apiFunc(...params);
      setIsLoading(false);
      nProgress.done();
      setData(res.data);
      setError({});
      return res;
    } catch (err) {
      setIsLoading(false);

      if (err.response) {
        setError(err.response);
        console.log(err.response);
      } else {
        const errRes = {
          status: 503,
          data: {
            message: "Network Error. Please check your connection ..",
            errors: [],
          },
        };
        err.response = errRes;
        setError(err.response);
      }

      nProgress.done();

      if (hasCatchError) {
        throw err;
      }
    }
  }

  return { isLoading, data, error, request };
}

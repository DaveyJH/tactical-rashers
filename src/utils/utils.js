import jwtDecode from "jwt-decode";

import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce(
        (p, c) => (p.some((x) => x.id === c.id) ? p : [...p, c]),
        prevResource.results
      ),
    }));
  } catch (err) {}
};

export const fetchMultipleMoreData = (resources) => {
  for (const resource of resources) {
    fetchMoreData(...resource);
  }
};

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () =>
  !!localStorage.getItem("refreshTokenTimestamp");

export const removeTokenTimestamp = () =>
  localStorage.removeItem("refreshTokenTimestamp");

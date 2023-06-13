import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_V3_HOST, API_KEY, API_LANGUAGE } from "../config/api";

export const DEFAULT_QUERY_PARAMS = {
  api_key: API_KEY,
  language: API_LANGUAGE,
};

export type ApiError = {
  data: {
    message: string;
  };
  status: number;
};

export const baseQuery = fetchBaseQuery({
  baseUrl: `${API_V3_HOST}/`,
  prepareHeaders: (headers) => {
    // headers.set('Test', '123')
    return headers;
  },
});

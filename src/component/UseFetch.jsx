import { useQuery } from "@tanstack/react-query";
import React from "react";

const UseFetch = ({ key, api }) => {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Network response is not Ok");
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 
  });
  return { data, isPending, isError, refetch };
};

export default UseFetch;

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetTools() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["tools"],
    queryFn: () => getTools(),
  });
  return { isLoading, data, error };
}

const getTools = async () => {
  try {
    const res = await axiosInstance.get("/dashboard/commercial-tools");

    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching settings:", error.message);
    throw error;
  }
};

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetUsers(type) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["users", type],
    queryFn: () => getUsers(type),
  });
  return { isLoading, data, error };
}

const getUsers = async (type) => {
  try {
    const res = await axiosInstance.get(`/api/dashboard/users/${type}`);

    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching faqs:", error.message);
    throw error;
  }
};

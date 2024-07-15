import { useQuery } from "@tanstack/react-query";
import { getAbandonmentData } from "../api/PetApi";

const usePetQuery = (page = "1", numberOfRows = "9", id = null) => {
  const fetchAbandonmentData = async () => {
    const response = await getAbandonmentData(page, numberOfRows);
    const allData = response.response.body.items.item;

    if (id) {
      return allData.find((item) => item.desertionNo === id || null);
    }

    return allData;
  };

  return useQuery({
    queryKey: id ? ["ourPets", id] : ["outPets"],
    queryFn: fetchAbandonmentData,
  });
};

export default usePetQuery;

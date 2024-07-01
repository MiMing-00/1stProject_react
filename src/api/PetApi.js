import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

console.log(apiUrl);

export const getAbandonmentData = async () => {
  console.log("API URL:", import.meta.env.VITE_API_URL);
  console.log("API Key:", import.meta.env.VITE_API_KEY);
  try {
    if (!apiUrl || !apiKey) {
      throw new Error("VITE_API_URL or VITE_API_KEY is not defined");
    }

    const queryParams = {
      serviceKey: apiKey,
      numOfRows: "10", // 요청할 데이터의 개수
      pageNo: "1", // 페이지 번호
      _type: "json", // 응답 데이터 형식
    };

    const response = await axios.get(apiUrl, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error("Error fetching abandonment data:", error);
    throw error;
  }
};

// const queryParams = {
//   serviceKey: "apiUrl",
//   numOfRows: "3",
//   pageNo: "1",
//   _type: "",
// };

// axios
//   .get(apiUrl, { params: queryParams })
//   .then(function (response) {
//     console.log("Status:", response.status);
//     console.log("Headers:", response.headers);
//     console.log("Body:", response.data);
//   })
//   .catch(function (error) {
//     console.error("Error fetching data:", error);
//   });

// export const postExpenses = async (newExpense) => {
//   const { data } = await jsonApi.post("/expensesData", newExpense);
//   return data;
// };

// export const editExpenses = async (updateExpense)  => {
//   const { id, userId, nickname, ...rest } = updateExpense;
//   const { data } = await jsonApi.put(`/expensesData/${id}`, updateExpense);
//   return data;
// };

// export const deleteExpenses = async (id) => {
//   try {
//     const { data } = await jsonApi.delete(`/expensesData/${id}`);
//     return data;
//   } catch (error) {
//     console.error("deleteExpenses API 요청 오류:", error);
//   }
// };

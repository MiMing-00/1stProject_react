import axios from "axios";

// const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getAbandonmentData = async () => {
  const url =
    "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic";

  const params = {
    serviceKey: apiKey,
    bgnde: "",
    endde: "",
    upkind: "",
    kind: "",
    upr_cd: "",
    org_cd: "",
    care_reg_no: "",
    state: "",
    neuter_yn: "",
    pageNo: "1",
    numOfRows: "9",
    _type: "json",
  };

  const { data } = await axios.get(url, { params });
  return data;
};

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

import { useParams } from "react-router-dom";
import usePetQuery from "../../../hooks/usePetQuery";

const AdoptionDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = usePetQuery(id);

  console.log(data);

  if (isPending) {
    return <div>로딩 중</div>;
  }

  if (error) {
    return <div>erroR!!!!!~~~~~</div>;
  }

  return;
  <div className="border-2 rounded-xl w-3/2">하잉</div>;
};

export default AdoptionDetail;

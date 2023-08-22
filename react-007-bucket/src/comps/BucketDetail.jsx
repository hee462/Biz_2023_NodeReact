import { useParams } from "react-router-dom";
const BuketDetail = () => {
  const params = useParams();

  return <h1>{params.id}</h1>;
};
export default BuketDetail;

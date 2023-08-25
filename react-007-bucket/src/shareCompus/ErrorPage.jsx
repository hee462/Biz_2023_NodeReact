import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OMG</h1>
      <p> project error</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;

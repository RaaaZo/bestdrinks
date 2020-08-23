import { useHistory } from "react-router-dom";

export const usePushToUrl = () => {
  const history = useHistory();

  const routeToUrl = (url) => {
    history.push(url);
  };

  return routeToUrl;
};

export default usePushToUrl;

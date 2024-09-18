import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectBasedOnFlag = (flag: boolean, path: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (flag) {
      navigate(path);
    }
  }, [flag, navigate, path]);
};

export default useRedirectBasedOnFlag;

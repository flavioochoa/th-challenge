import { HOME } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  const toHome = () => navigate(HOME);

  return { toHome };
};

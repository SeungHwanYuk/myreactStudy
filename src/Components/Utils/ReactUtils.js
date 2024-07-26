import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoBack}>BACK</button>;
}

import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/view/Button';

export const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button variant="outline" onClick={handleGoBack}>
      Назад к списку
    </Button>
  );
};

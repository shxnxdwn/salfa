import React from 'react';
import { Button } from '@shared/view/Button';
import { Icon } from '@shared/view/Icon';
import { useToggleLike } from '../model/useToggleLike';
import styles from './ToggleLike.module.css';

type ToggleLikeProps = {
  productId: number;
};

export const ToggleLike = (props: ToggleLikeProps) => {
  const { productId } = props;
  const { isLiked, handleToggleLike } = useToggleLike(productId);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleToggleLike();
  };

  const buttonClasses = [styles.actionButton, isLiked && styles.liked]
    .filter(Boolean)
    .join(' ');

  return (
    <Button
      variant="ghost"
      className={buttonClasses}
      onClick={handleClick}
      aria-label={isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
    >
      <Icon name="heart" className={styles.icon} />
    </Button>
  );
};

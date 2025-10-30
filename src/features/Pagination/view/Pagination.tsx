import styles from './Pagination.module.css';
import { Button } from '@shared/view/Button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange } = props;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className={styles.pagination} aria-label="Пагинация по товарам">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        aria-label="Перейти на предыдущую страницу"
      >
        Назад
      </Button>
      <span
        className={styles.pages}
        aria-live="polite"
        aria-label={`Страница ${currentPage} из ${totalPages}`}
      >
        {currentPage} / {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        aria-label="Перейти на следующую страницу"
      >
        Вперед
      </Button>
    </nav>
  );
};

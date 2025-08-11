import { Button } from "./ui/button";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-4">
      {pages.map((page) => (
        <Button
          variant="outline"
          key={page}
          onClick={() => setCurrentPage(page)}
          className="cursor-pointer"
          disabled={page === currentPage}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;

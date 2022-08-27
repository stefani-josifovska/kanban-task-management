export const ArrowIcon: React.FC<{
  onClick: () => void;
  className: string;
}> = ({ onClick, className }) => {
  return (
    <div
      className={`hover:cursor-pointer hover:opacity-50 ${className}`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
        <path fill="none" stroke="#635FC7" strokeWidth="3" d="M1 1l8 8 8-8" />
      </svg>
    </div>
  );
};

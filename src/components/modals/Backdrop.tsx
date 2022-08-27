const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="mt-16 fixed top-0 left-0 w-full z-20 bg-black/75 h-[calc(100vh-4rem)]" />
  );
};

export default Backdrop;

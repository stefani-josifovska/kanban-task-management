import Button from "./UI/Button";

const EmptyBoard = () => {
    return <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)] bg-[#F4F7FD]">
        <h6 className="font-bold text-lg text-[#828FA3] text-center mx-4">This board is empty. Create a new column to get started.</h6>
        <Button className="font-bold capitalize text-[15px] rounded-full w-44 h-12 mt-6">+ add new column</Button>
    </div>
};

export default EmptyBoard;
const TaskCard: React.FC<{
  taskTitle: string;
  subtasksQty: number;
  completedSubtasksQty: number;
}> = ({ taskTitle, subtasksQty, completedSubtasksQty }) => {
  return (
    <div className="w-72 h-fit px-4 py-6 bg-white rounded-lg shadow-task-shadow">
      <h3 className="text-[15px] font-bold text-[#000112] mb-2">{taskTitle}</h3>
      <p className="text-xs font-bold text-[#828FA3]">{completedSubtasksQty} of {subtasksQty} subtasks</p>
    </div>
  );
};

export default TaskCard;

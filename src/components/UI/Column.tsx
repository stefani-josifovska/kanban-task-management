import TaskCard from "./TaskCard";
import { TasksObject } from "../../store/data-context";

const Column: React.FC<{ colName: string; tasks: TasksObject[] }> = ({
  colName,
  tasks,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="uppercase tracking-widest text-medium-gray font-bold text-xs">
        {`${colName} (${tasks?.length | 0})`}
      </h2>
      {tasks?.map((colTask) => {
        return (
          <TaskCard
            key={Math.random().toString()}
            taskTitle={colTask.title}
            subtasksQty={colTask.subtasks.length}
            completedSubtasksQty={
              colTask.subtasks.filter((sub) => sub.isCompleted).length
            }
          />
        );
      })}
    </section>
  );
};

export default Column;

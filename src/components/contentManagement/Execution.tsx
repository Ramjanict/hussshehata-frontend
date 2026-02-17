import ProgramCard from "../reuseable/ProgramCard";

const executionNotes = [
  {
    id: "1",
    title: "Workout Duration Rule",
    position: 2,
    notes: ["Aim to complete all sessions in under 60 minutes."],
  },
  {
    id: "2",
    title: "Adaptability + Personal Split",
    position: 3,
    notes: ["Customize the program based on your schedule and preferences."],
  },
  {
    id: "3",
    title: "Westside Days - Customization Allowed",
    position: 4,
    notes: ["Feel free to adjust Westside training days as needed."],
  },
];
interface ExecutionProps {
  setShowAddModal: (show: boolean) => void;
}
const Execution: React.FC<ExecutionProps> = ({ setShowAddModal }) => {
  return (
    <div className="space-y-4">
      {executionNotes.map((note) => (
        <div
          key={note.id}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <ProgramCard
            id={note.id}
            title={note.title}
            position={note.position}
            onEdit={() => {
              setShowAddModal(true);
            }}
            onDelete={() => {}}
            iconAction={() => {}}
            icon={
              <div className="flex  items-center text-gray-400 gap-0.5 ">
                <div className="text-xs">↑</div>
                <div className="text-xs">↓</div>
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Execution;

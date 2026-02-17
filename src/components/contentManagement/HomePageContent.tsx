import ProgramCard from "../reuseable/ProgramCard";

const homePagePrograms = [
  {
    id: "1",
    title: "10-Week Monster Confusion (Modernized)",
    category: "Advanced",
    position: 1,
  },
  {
    id: "2",
    title: "10-Week Monster Confusion (Classic)",
    category: "Beginner",
    position: 2,
  },
  {
    id: "3",
    title: "HUSS 8-Week Beast",
    category: "Intermediate",
    position: 3,
  },
  {
    id: "4",
    title: "HUSS 8-Week Beast",
    category: "Advanced",
    position: 4,
  },
];
const HomePageContent = () => {
  return (
    <div>
      <div className="space-y-4">
        {homePagePrograms.map((program) => (
          <div className="bg-white rounded-lg border border-[#E7E8EB] p-4 sm:p-6">
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              category={program.category}
              position={program.position}
              icon={
                <div className="flex  items-center text-gray-400 gap-0.5 ">
                  <div className="text-xs">↑</div>
                  <div className="text-xs">↓</div>
                </div>
              }
              onDelete={() => {}}
              onEdit={() => {}}
              iconAction={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;

import ActionButton from "@/common/button/ActionButton";
import CommonButton from "@/common/button/CommonButton";
import TabButton from "@/common/custom/TabButton";
import CommonHeader from "@/common/header/CommonHeader";
import { Clock, Edit2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import UserSearchBar from "../userManagement/UserSearchBar";
type ContentType = "safety" | "sessions" | "research";

const bfrSessions = [
  {
    id: "1",
    title: "Upper Body Hypertrophy BFR",
    category: "Hypertrophy",
    bodyType: "Upper",
    time: "20 min",
    exercise: "04",
    shortDescription: "For chest, shoulders, arms using light loads.",
    safetyInfo:
      "Consult a healthcare professional before starting BFR training.",
  },
  {
    id: "2",
    title: "Lower Body Strength BFR",
    category: "Strength",
    bodyType: "Lower",
    time: "25 min",
    exercise: "05",
    shortDescription: "For quads, hamstrings, glutes with controlled pressure.",
    safetyInfo:
      "Ensure proper band placement and monitor circulation throughout.",
  },
  {
    id: "3",
    title: "Full Body Endurance BFR",
    category: "Endurance",
    bodyType: "Full Body",
    time: "30 min",
    exercise: "08",
    shortDescription: "Complete workout targeting all major muscle groups.",
    safetyInfo:
      "Start with lighter resistance and gradually increase intensity.",
  },
];
const researchEducation = [
  {
    id: "1",
    title: "What is Blood Flow Restriction Training?",
    category: "Basic",
    shortDescription:
      "An introduction to BFR training, how it works, and why it's effective for building muscle with lighter loads.",
    safetyInfo:
      "Consult a healthcare professional before starting BFR training.",
    content:
      "Blood Flow Restriction (BFR) training involves applying pressure to the limbs to partially restrict venous blood flow while maintaining arterial flow during exercise.",
  },
  {
    id: "2",
    title: "Science Behind BFR: Mechanisms and Benefits",
    category: "Advanced",
    shortDescription:
      "Explore the physiological mechanisms that make BFR effective, including metabolic stress and muscle fiber recruitment.",
    safetyInfo:
      "Understanding the science helps ensure safe and effective application.",
    content:
      "BFR training triggers muscle hypertrophy through increased metabolic stress, cell swelling, and enhanced growth hormone production, all while using significantly lighter loads than traditional resistance training.",
  },
  {
    id: "3",
    title: "Safety Guidelines and Contraindications",
    category: "Safety",
    shortDescription:
      "Essential safety protocols, proper pressure levels, and who should avoid BFR training.",
    safetyInfo:
      "Always follow proper protocols and seek medical clearance if you have any health concerns.",
    content:
      "BFR training requires careful attention to pressure levels (typically 40-80% arterial occlusion), session duration, and individual health status. Contraindications include history of blood clots, cardiovascular disease, and certain medications.",
  },
];

// Sample data for Execution Notes

const safetyDisclaimers = [
  {
    id: "1",
    title: "Safety Disclaimer",
    description:
      "Blood Flow Restriction (BFR) training is a specialized technique that involves restricting venous blood flow to working muscles using specialized cuffs or bands. This method allows for significant muscle growth and strength gains using lighter loads (20-30% of 1RM or 50% of 12RM), reducing joint stress while maximizing hypertrophy.",
    content:
      "Consult a healthcare professional before starting BFR training. Do not use if you have cardiovascular conditions, blood clotting disorders, or varicose veins.",
  },
  {
    id: "2",
    title: "Medical Clearance Required",
    description:
      "Before beginning any BFR training program, individuals must obtain proper medical clearance, especially those with pre-existing health conditions. BFR training affects cardiovascular and circulatory systems and requires careful monitoring.",
    content:
      "Seek immediate medical attention if you experience excessive pain, numbness, skin discoloration, or prolonged swelling. Stop training immediately if you feel dizzy, nauseous, or experience chest pain.",
  },
  {
    id: "3",
    title: "Proper Equipment and Technique",
    description:
      "Using appropriate BFR equipment and following correct application techniques is crucial for safety and effectiveness. Improper use can lead to injury, nerve damage, or other serious complications.",
    content:
      "Always use properly calibrated BFR cuffs or bands designed specifically for restriction training. Never use tourniquets, rubber bands, or improvised materials. Ensure proper pressure levels (40-80% arterial occlusion) and never exceed recommended session durations of 15-20 minutes per limb.",
  },
];
interface AddBFRSessionModalProps {
  setShowAddModal: (show: boolean) => void;
}
const BFR: React.FC<AddBFRSessionModalProps> = ({ setShowAddModal }) => {
  const [activeContentType, setActiveContentType] =
    useState<ContentType>("safety");

  return (
    <div>
      <>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex flex-wrap  gap-3 ">
            <TabButton
              label="Safety Disclaimer"
              value="safety"
              activeValue={activeContentType}
              onChange={setActiveContentType}
            />
            <TabButton
              label="BFR Sessions"
              value="sessions"
              activeValue={activeContentType}
              onChange={setActiveContentType}
            />

            <TabButton
              label="Research & Educations"
              value="research"
              activeValue={activeContentType}
              onChange={setActiveContentType}
            />
          </div>
          <CommonButton onClick={() => setShowAddModal(true)}>
            <Plus size={16} /> Add Content
          </CommonButton>
        </div>
        <UserSearchBar />

        <div className="pt-6">
          {activeContentType === "safety" && (
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 ">
              {safetyDisclaimers.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <CommonHeader size="md" className="!font-bold !text-black">
                    {item.title}
                  </CommonHeader>
                  <CommonHeader size="sm" className="">
                    {item.description}
                  </CommonHeader>

                  <div className=" p-4 rounded-lg mb-4">
                    <CommonHeader size="md" className="!font-bold !text-black">
                      A IMPORTANT SAFETY INFORMATION:
                    </CommonHeader>

                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      <li>{item.content}</li>
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <ActionButton variant="edit">
                      <Edit2 size={16} />
                      Edit
                    </ActionButton>
                    <ActionButton variant="delete">
                      <Trash2 size={16} />
                    </ActionButton>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeContentType === "sessions" && (
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
              {bfrSessions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CommonHeader
                        size="md"
                        className="!font-bold !text-black"
                      >
                        {item.title}
                      </CommonHeader>
                    </div>{" "}
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full ">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">Upper</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {item.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">
                        {item.exercise} exercises
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    {item.shortDescription}
                  </p>
                  <div className="flex gap-2">
                    <ActionButton variant="edit">
                      <Edit2 size={16} />
                      Edit
                    </ActionButton>
                    <ActionButton variant="delete">
                      <Trash2 size={16} />
                    </ActionButton>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeContentType === "research" && (
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
              {researchEducation.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <CommonHeader size="md" className="!font-bold !text-black">
                      {item.title}
                    </CommonHeader>
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full ">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    {item.shortDescription}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.content ||
                      "Blood Flow Restriction (BFR) training involves applying pressure to the limbs to partially restrict venous blood flow while maintaining arterial flow during exercise."}
                  </p>
                  <div className="flex gap-2">
                    <ActionButton variant="edit">
                      <Edit2 size={16} />
                      Edit
                    </ActionButton>
                    <ActionButton variant="delete">
                      <Trash2 size={16} />
                    </ActionButton>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default BFR;

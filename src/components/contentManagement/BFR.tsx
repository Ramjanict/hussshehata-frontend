import { Clock, Edit2, Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";
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
];
const researchEducation = [
  {
    id: "1",
    title: "What is Blood Flow Restriction Training?",
    category: "Basic",
    shortDescription:
      "An introduction to BFR training, how it works, and why it& apos effective for building muscle with lighter loads.",
    safetyInfo:
      "Consult a healthcare professional before starting BFR training.",
    content:
      "Blood Flow Restriction (BFR) training involves applying pressure to the limbs to partially restrict venous blood flow while maintaining arterial flow during exercise.",
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
];
const BFR = () => {
  const [activeContentType, setActiveContentType] =
    useState<ContentType>("safety");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <>
        {/* Sub-tabs for BFR */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveContentType("safety")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeContentType === "safety"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Safety Disclaimer
          </button>
          <button
            onClick={() => setActiveContentType("sessions")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeContentType === "sessions"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            BFR Sessions
          </button>
          <button
            onClick={() => setActiveContentType("research")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeContentType === "research"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Research & Educations
          </button>
        </div>

        {/* Search and Add Button */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by job title or requester..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>categories</option>
          </select>
          <button
            // onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium"
          >
            <Plus size={20} />
            Add Content
          </button>
        </div>

        {/* Content Cards */}
        {activeContentType === "safety" && (
          <div className="space-y-4">
            {safetyDisclaimers.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">
                    A IMPORTANT SAFETY INFORMATION:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>{item.content}</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button className="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-4 py-2 rounded-lg hover:bg-red-50">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeContentType === "sessions" && (
          <div className="space-y-4">
            {bfrSessions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
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
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button className="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-4 py-2 rounded-lg hover:bg-red-50">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeContentType === "research" && (
          <div className="grid grid-cols-3 gap-4">
            {researchEducation.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
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
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button className="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-4 py-2 rounded-lg hover:bg-red-50">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default BFR;

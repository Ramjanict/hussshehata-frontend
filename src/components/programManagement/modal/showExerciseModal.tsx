import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import { ImageIcon, Video, X } from "lucide-react";
import { LuPlus } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

import TabButton from "@/common/custom/TabButton";
import { useState } from "react";
export const inputClass = {
  label: "block text-sm font-normal  font-inter mb-2",
  input:
    "w-full border border-[#CBD5E1] rounded-md p-3 outline-none  text-xs border-[#A78BFA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A78BFA]",
  error: "text-red-500 text-sm mt-1",
};
interface Set {
  id: number;
  reps: string;
  rest: string;
}

interface ShowExerciseModalProps {
  setShowExerciseModal: (show: boolean) => void;
  dayNumber?: number;
  focusType?: string;
}

const ShowExerciseModal: React.FC<ShowExerciseModalProps> = ({
  setShowExerciseModal,
  dayNumber = 1,
  focusType = "",
}) => {
  const [exerciseType, setExerciseType] = useState<"main" | "bfr" | "abs">(
    "main",
  );
  const [exerciseName, setExerciseName] = useState("Dumbbell Flat Bench Press");
  const [exerciseFor, setExerciseFor] = useState("Chest");
  const [description, setDescription] = useState(
    "Keep your feet flat on the ground and maintain a slight arch in your lower back. Press dumbbells up and slightly together at the top for maximum chest contraction.",
  );
  const [exerciseImage, setExerciseImage] = useState<File | null>(null);
  const [exerciseAnimation, setExerciseAnimation] = useState<File | null>(null);
  const [uploadedImagePreview, setUploadedImagePreview] = useState<
    string | null
  >(null);

  const [sets, setSets] = useState<Set[]>([
    { id: 1, reps: "05", rest: "60 sec" },
    { id: 2, reps: "05", rest: "60 sec" },
  ]);

  const addSet = () => {
    const newSet: Set = {
      id: sets.length + 1,
      reps: "05",
      rest: "60 sec",
    };
    setSets([...sets, newSet]);
  };

  const updateSet = (id: number, field: "reps" | "rest", value: string) => {
    setSets(
      sets.map((set) => (set.id === id ? { ...set, [field]: value } : set)),
    );
  };

  const removeSet = (id: number) => {
    if (sets.length > 1) {
      setSets(sets.filter((set) => set.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setExerciseImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnimationUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setExerciseAnimation(file);
    }
  };

  const removeImage = () => {
    setExerciseImage(null);
    setUploadedImagePreview(null);
  };

  const getTitle = () => {
    if (exerciseType === "bfr") {
      return `Add Exercise to ${focusType} (BFR)`;
    }
    if (exerciseType === "abs") {
      return `Add Exercise to ABS`;
    }
    return `Add Exercise to Day ${dayNumber}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <CommonHeader size="xl">{getTitle()}</CommonHeader>

          <CloseButton action={() => setShowExerciseModal(false)} />
        </div>

        <div className="p-6">
          {/* Exercise Type Tabs */}
          <div className="flex gap-4 mb-6">
            <TabButton
              label="Main Exercise"
              value="main"
              activeValue={exerciseType}
              onChange={setExerciseType}
            />
            <TabButton
              label="BFR Exercise"
              value="bfr"
              activeValue={exerciseType}
              onChange={setExerciseType}
            />
            <TabButton
              label="ABS Exercise"
              value="abs"
              activeValue={exerciseType}
              onChange={setExerciseType}
            />
          </div>
          {exerciseType === "main" && (
            <div className="bg-darkBlue/20 border border-darkBlue rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-900">
                <span className="font-medium">Exercise Name :</span>{" "}
                {exerciseName}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Set : {sets.length} &nbsp;&nbsp;&nbsp; Rep :{" "}
                {sets[0]?.reps || "0"} &nbsp;&nbsp;&nbsp; Rest :{" "}
                {sets[0]?.rest || "0"}
              </p>
            </div>
          )}

          <div className="space-y-6 border border-darkBlue rounded-lg p-5 ">
            {/* Exercise Name */}
            <div>
              <label className={inputClass.label}>Exercise Name</label>
              <input
                type="text"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                className={inputClass.input}
                placeholder="Enter exercise name"
              />
            </div>

            {/* Exercise For */}
            <div>
              <label className={inputClass.label}>Exercise For</label>
              <input
                type="text"
                value={exerciseFor}
                onChange={(e) => setExerciseFor(e.target.value)}
                className={inputClass.input}
                placeholder="e.g., Chest, Back, Legs"
              />
            </div>

            {/* Description */}
            <div>
              <label className={inputClass.label}>Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={inputClass.input}
                placeholder="Enter exercise description"
              />
            </div>

            {/* Exercise Image */}
            <div>
              <label className={inputClass.label}>Exercise Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="border border-gray-300 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <ImageIcon className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {exerciseImage ? exerciseImage.name : "Click to upload image"}
                </span>
              </label>

              {/* Image Preview */}
              {uploadedImagePreview && (
                <div className="mt-4 relative inline-block">
                  <img
                    src={uploadedImagePreview}
                    alt="Exercise preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Exercise Animation - Only show for Main and BFR */}
            {exerciseType !== "abs" && (
              <div>
                <label className={inputClass.label}>Exercise Animation</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleAnimationUpload}
                  className="hidden"
                  id="animation-upload"
                />
                <label
                  htmlFor="animation-upload"
                  className="border border-gray-300 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Video className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {exerciseAnimation
                      ? exerciseAnimation.name
                      : "Click to upload video"}
                  </span>
                </label>
              </div>
            )}

            {/* Sets Section */}
            <div>
              <label className={inputClass.label}>Set</label>

              <div className="space-y-4">
                {sets.map((set, index) => (
                  <div key={set.id} className="flex items-end gap-4">
                    <div className="flex-shrink-0 w-24">
                      <div className="bg-[#8B5CF6] text-white px-4 py-3 rounded-lg text-center font-medium">
                        Set {index + 1}
                      </div>
                    </div>

                    <div className="flex-1 w-full">
                      <label className={inputClass.label}>Reps</label>
                      <input
                        type="text"
                        value={set.reps}
                        onChange={(e) =>
                          updateSet(set.id, "reps", e.target.value)
                        }
                        className={inputClass.input}
                      />
                    </div>

                    <div className="flex-1 flex items-end  gap-2 w-full">
                      <div className="flex-1">
                        <label className={inputClass.label}>Rest</label>
                        <input
                          type="text"
                          value={set.rest}
                          onChange={(e) =>
                            updateSet(set.id, "rest", e.target.value)
                          }
                          className={inputClass.input}
                        />
                      </div>
                      <button
                        onClick={() => removeSet(sets[index].id)}
                        className=" cursor-pointer "
                      >
                        <RiDeleteBin5Line className="w-6 h-6 text-blue" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-10">
                <button
                  onClick={addSet}
                  className="bg-darkPurple  cursor-pointer text-white rounded-full p-2 hover:bg-[#7C3AED] transition-colors"
                >
                  <LuPlus className="w-6 h-6" />
                </button>
              </div>

              <div className="flex justify-end mt-8">
                <CommonButton>Save</CommonButton>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-0">
          <CommonButton
            onClick={() => setShowExerciseModal(false)}
            className=""
          >
            Save Exercise
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default ShowExerciseModal;

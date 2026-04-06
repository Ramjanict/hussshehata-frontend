import CloseButton from "@/common/button/CloseButton";
import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import {
  usePostMethodMutation,
  useUpdateMethodMutation,
} from "@/store/features/program/programAPI";
import type {
  MethodPayload,
  TrainingMethod,
} from "@/store/features/program/types/method";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const inputClass = {
  label: "block text-sm font-normal text-black font-inter mb-2",
  input:
    "w-full border border-[#CBD5E1] rounded-md p-3 outline-none text-black text-xs border-[#A78BFA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A78BFA]",
  error: "text-red-500 text-sm mt-1",
};

const METHOD_TYPES = [
  { value: "FIVE_BY_FIVE", label: "5×5" },
  { value: "MAX_OT", label: "Max-OT" },
  { value: "BULLDOZER", label: "Bulldozer" },
  { value: "BURNS", label: "Burns" },
  { value: "GIRONDA_8X8", label: "Gironda 8×8" },
  { value: "TEN_BY_THREE", label: "10×3" },
  { value: "HIGH_REP_20_REP_SQUAT", label: "High Rep 20-Rep Squat" },
  { value: "YATES_HIGH_INTENSITY", label: "Yates High Intensity" },
  { value: "WESTSIDE_CONJUGATE", label: "Westside Conjugate" },
  { value: "MODERATE_VOLUME", label: "Moderate Volume" },
  { value: "SINGLES_DOUBLES_TRIPLES", label: "Singles/Doubles/Triples" },
  { value: "ACTIVATION", label: "Activation" },
  { value: "CUSTOM", label: "Custom" },
] as const;

const METHOD_TYPE_VALUES = METHOD_TYPES.map((m) => m.value) as [
  string,
  ...string[],
];

const methodSchema = z.object({
  name: z.string().min(1, "Method name is required"),
  type: z.enum(METHOD_TYPE_VALUES as [string, ...string[]], {
    error: "Please select a training method type",
  }),
  description: z.string().min(1, "Detailed description is required"),
  setsInfo: z.string().min(1, "Default sets is required"),
  repRange: z.string().min(1, "Default reps is required"),
  restPeriod: z.string(),
  intensity: z.string(),
  notes: z.string(),
});

type MethodFormValues = z.infer<typeof methodSchema>;

interface ShowMethodModalProps {
  setShowMethodModal: (show: boolean) => void;
  selectMethod: TrainingMethod | null;
}

const ShowMethodModal: React.FC<ShowMethodModalProps> = ({
  setShowMethodModal,
  selectMethod,
}) => {
  const [postMethod, { isLoading }] = usePostMethodMutation();
  const [updateMethod] = useUpdateMethodMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MethodFormValues>({
    resolver: zodResolver(methodSchema),
    defaultValues: {
      name: selectMethod?.name || "",
      type: selectMethod?.type || "",
      description: selectMethod?.description || "",
      setsInfo: selectMethod?.setsInfo || "",
      repRange: selectMethod?.repRange || "",
      restPeriod: selectMethod?.restPeriod || "",
      intensity: selectMethod?.intensity || "",
      notes: selectMethod?.notes || "",
    },
  });

  const onSubmit = async (data: MethodFormValues) => {
    try {
      const payload: MethodPayload = {
        ...data,
        isActive: true,
        sortOrder: 0,
      };

      if (selectMethod) {
        await updateMethod({ id: selectMethod.id, data: payload }).unwrap();
      } else {
        await postMethod(payload).unwrap();
      }

      setShowMethodModal(false);
    } catch (error) {
      console.error("Failed to save method:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <CommonHeader size="lg">Add New Training Method</CommonHeader>
          <CloseButton action={() => setShowMethodModal(false)} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label className={inputClass.label}>Method Name</label>
            <input
              type="text"
              placeholder="e.g., 5×5, Max-OT, Burns"
              className={inputClass.input}
              {...register("name")}
            />
            {errors.name && (
              <p className={inputClass.error}>{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className={inputClass.label}>Method Type</label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <CommonSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  item={METHOD_TYPES}
                  className="w-full"
                />
              )}
            />

            {errors.type && (
              <p className={inputClass.error}>{errors.type.message}</p>
            )}
          </div>

          <div>
            <label className={inputClass.label}>Detailed Description</label>
            <textarea
              rows={6}
              placeholder="Provide a detailed explanation of how to execute this training method..."
              className={inputClass.input}
              {...register("description")}
            ></textarea>
            {errors.description && (
              <p className={inputClass.error}>{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>Default Sets</label>
              <input
                type="text"
                placeholder="e.g., 5 or 6-9"
                className={inputClass.input}
                {...register("setsInfo")}
              />
              {errors.setsInfo && (
                <p className={inputClass.error}>{errors.setsInfo.message}</p>
              )}
            </div>
            <div>
              <label className={inputClass.label}>Default Reps</label>
              <input
                type="text"
                placeholder="e.g., 5 or 4-6"
                className={inputClass.input}
                {...register("repRange")}
              />
              {errors.repRange && (
                <p className={inputClass.error}>{errors.repRange.message}</p>
              )}
            </div>
          </div>

          <div className="bg-[#EFF6FF] border border-blue-200 rounded-lg p-4">
            <CommonHeader size="md" className="!text-[#1C398E]">
              Method Guidelines
            </CommonHeader>
            <CommonHeader size="sm" className="!text-[#1C398E]">
              Provide clear instructions on tempo, rest periods, and intensity.
              This will help users understand how to properly execute the
              training method.
            </CommonHeader>
          </div>

          <div className="flex gap-4">
            <CommonButton
              type="button"
              onClick={() => setShowMethodModal(false)}
              className="!bg-white !text-[#5B667B] border border-[#5B667B]"
            >
              Cancel
            </CommonButton>
            <CommonButton type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Method"}
            </CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowMethodModal;

import { X } from "lucide-react";

interface AddBFRSessionModalProps {
  onClose: () => void;
}
const AddBFRSessionModal: React.FC<AddBFRSessionModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add BFR Session</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Title</label>
            <input
              type="text"
              placeholder="Upper Body Hypertrophy BFR"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Hypertrophy</option>
              <option>Strength</option>
              <option>Endurance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Body Type
            </label>
            <input
              type="text"
              placeholder="Upper"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Time</label>
            <input
              type="text"
              placeholder="20 min"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Exercise</label>
            <input
              type="text"
              placeholder="04"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Short Description
            </label>
            <textarea
              placeholder="For chest, shoulders, arms using light loads."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold">
                A IMPORTANT SAFETY INFORMATION:
              </label>
              <button className="text-sm text-gray-600">
                &lt;&gt; Plain Text
              </button>
            </div>
            <div className="border border-gray-300 rounded-lg">
              <div className="flex gap-2 p-2 border-b border-gray-300">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <strong>B</strong>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <em>I</em>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <u>U</u>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">H1</button>
                <button className="p-2 hover:bg-gray-100 rounded">H2</button>
                <button className="p-2 hover:bg-gray-100 rounded">≡</button>
                <button className="p-2 hover:bg-gray-100 rounded">≣</button>
                <button className="p-2 hover:bg-gray-100 rounded">⚐</button>
              </div>
              <div className="p-4 bg-purple-50 min-h-[150px]">
                <ul className="list-disc pl-5">
                  <li>
                    Consult a healthcare professional before starting BFR
                    training.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-semibold">
          Save Content
        </button>
      </div>
    </div>
  </div>
);

export default AddBFRSessionModal;

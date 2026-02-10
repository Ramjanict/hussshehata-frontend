import { X } from "lucide-react";

interface AddSupplementProductModalProps {
  onClose: () => void;
}
const AddSupplementProductModal: React.FC<AddSupplementProductModalProps> = ({
  onClose,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add Supplement Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              placeholder="e.g., Creatine Monohydrate"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Foundation</option>
              <option>Performance</option>
              <option>Recovery</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Price</label>
            <input
              type="text"
              placeholder="0.00"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Vendor Name
            </label>
            <input
              type="text"
              placeholder="e.g., Optimum Nutrition"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Product Purchase Page URL *
            </label>
            <input
              type="text"
              placeholder="https://example.com/product-page"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Product Benefits (one per line)
            </label>
            <textarea
              placeholder="No bloating&#10;Third-party tested&#10;Micronized formula"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Product Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 mb-4 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="text-gray-500">Click to upload product image</p>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-semibold">
          Add Product
        </button>
      </div>
    </div>
  </div>
);

export default AddSupplementProductModal;

import { Edit2, Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";
type EssentialType = "health" | "supplements";

const partnerClinics = [
  {
    id: "1",
    name: "Elite Diagnostics Center",
    location: "New York, USA",
    time: "8 AM - 6 PM",
    phone: "+1 (555) 123-4567",
    country: "USA",
    city: "New York",
    address: "Street address",
    openTime: "8.00 Am",
    closeTime: "5.00 Pm",
  },
];

const supplementProducts = [
  {
    id: "1",
    name: "Creatine HCL",
    vendor: "OptimumNutrition",
    category: "Foundation",
    price: 29.99,
    benefits: ["No bloating", "Micronized", "Third-party tested"],
    purchaseUrl: "https://example.com/product-page",
    inStock: true,
  },
];
const Essential = () => {
  const [activeEssentialType, setActiveEssentialType] =
    useState<EssentialType>("health");
  return (
    <div>
      {" "}
      {/* Sub-tabs for Essential Management */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveEssentialType("health")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeEssentialType === "health"
              ? "bg-purple-500 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Health Checks & Clinics
        </button>
        <button
          onClick={() => setActiveEssentialType("supplements")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeEssentialType === "supplements"
              ? "bg-purple-500 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Supplement
        </button>
      </div>
      {activeEssentialType === "health" && (
        <>
          <h2 className="text-xl font-bold mb-4">
            Health & Essentials Management
          </h2>

          {/* Health Markers Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold">Health Markers</h3>
                <p className="text-sm text-gray-600">
                  Manage drug/clinic fields and health indicators
                </p>
              </div>
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <Plus size={20} />
                Add Content
              </button>
            </div>

            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold mb-2">Hormonal Balance</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Testosterone levels (free and total)</li>
                        <li>Testosterone levels (free and total)</li>
                      </ul>
                    </div>
                    <span className="text-sm text-gray-500">5 markers</span>
                  </div>
                  <div className="flex gap-2 mt-4">
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
          </div>

          {/* Partner Clinics Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold">Partner Clinics Directory</h3>
                <p className="text-sm text-gray-600">
                  Manage medical providers and diagnostic centers
                </p>
              </div>
              <button
                // onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                <Plus size={20} />
                Add Clinic
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Clinic Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {partnerClinics.map((clinic) => (
                    <tr key={clinic.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{clinic.name}</td>
                      <td className="px-6 py-4 text-sm">{clinic.location}</td>
                      <td className="px-6 py-4 text-sm">{clinic.time}</td>
                      <td className="px-6 py-4 text-sm">{clinic.phone}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Edit2 size={16} className="text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-red-50 rounded">
                            <Trash2 size={16} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {activeEssentialType === "supplements" && (
        <>
          <h2 className="text-xl font-bold mb-4">
            Health & Essentials Management
          </h2>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by job title or requester..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>categories</option>
            </select>
          </div>

          {/* Supplement Products */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold">Supplement Products</h3>
                <p className="text-sm text-gray-600">
                  Manage product catalog, pricing, and availability
                </p>
              </div>
              <button
                // onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                <Plus size={20} />
                Add Product
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {supplementProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 p-4"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <img
                        src="/api/placeholder/100/100"
                        alt={product.name}
                        className="max-h-full"
                      />
                    </div>
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                  <h4 className="font-bold mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Sold by: {product.vendor}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mb-3">
                    {product.category}
                  </span>
                  <ul className="text-xs text-gray-700 space-y-1 mb-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span>✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price}</span>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit2 size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-red-50 rounded">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Essential;

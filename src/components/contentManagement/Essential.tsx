import image from "@/assets/images/card.jpg";
import ActionButton from "@/common/button/ActionButton";
import CommonButton from "@/common/button/CommonButton";
import SectionHeader from "@/common/button/SectionHeader";
import TabButton from "@/common/custom/TabButton";
import CommonHeader from "@/common/header/CommonHeader";
import type { EssentialType } from "@/pages/ContentManagement";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { tableDesign } from "../programManagement/ProgramAnalytics";
import UserSearchBar from "../userManagement/UserSearchBar";
import type { EssentialCardProps } from "./EssentialCard";
import EssentialCard from "./EssentialCard";

const tableHeaders = [
  { label: "Clinic Name", align: "text-left" },
  { label: "Location", align: "text-left hidden sm:table-cell" },
  { label: "Time", align: "text-left hidden xl:table-cell" },
  { label: "Phone", align: "text-left hidden md:table-cell" },
  { label: "Trend", align: "text-left" },
];
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
  {
    id: "2",
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
  {
    id: "3",
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
  {
    id: "4",
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
    vendor: "Optimum Nutrition",
    category: "Foundation",
    price: 29.99,
    benefits: ["No bloating", "Micronized", "Third-party tested"],
    purchaseUrl: image,
    inStock: true,
  },
  {
    id: "2",
    name: "Whey Protein Isolate",
    vendor: "MyProtein",
    category: "Protein",
    price: 49.99,
    benefits: ["Fast absorption", "Low lactose", "25g protein per serving"],
    purchaseUrl: image,
    inStock: true,
  },
  {
    id: "3",
    name: "Pre-Workout Extreme",
    vendor: "C4 Energy",
    category: "Performance",
    price: 34.99,
    benefits: ["Increased energy", "Enhanced focus", "Beta-alanine formula"],
    purchaseUrl: image,
    inStock: true,
  },
  {
    id: "4",
    name: "Omega-3 Fish Oil",
    vendor: "Nordic Naturals",
    category: "Health",
    price: 24.99,
    benefits: ["Heart health", "Brain support", "Lemon flavored"],
    purchaseUrl: image,
    inStock: false,
  },
  {
    id: "5",
    name: "BCAA Recovery",
    vendor: "Scivation",
    category: "Recovery",
    price: 27.99,
    benefits: ["Muscle recovery", "Reduce soreness", "Great taste"],
    purchaseUrl: image,
    inStock: true,
  },
  {
    id: "6",
    name: "Multivitamin Elite",
    vendor: "Garden of Life",
    category: "Foundation",
    price: 39.99,
    benefits: ["Complete nutrition", "Organic ingredients", "Easy to digest"],
    purchaseUrl: image,
    inStock: true,
  },
];
const healthMarkers: EssentialCardProps[] = [
  {
    name: "High Blood Pressure",
    list: [
      "Testosterone levels (free and total)",
      "Testosterone levels (free and total)",
    ],
    mark: 2,
  },
  {
    name: "Low Blood Pressure",
    list: [
      "Testosterone levels (free and total)",
      "Testosterone levels (free and total)",
    ],
    mark: 1,
  },
  {
    name: "High Blood Pressure",
    list: [
      "Testosterone levels (free and total)",
      "Testosterone levels (free and total)",
    ],
    mark: 5,
  },
];
interface EssentialProps {
  setShowAddModal: (show: boolean) => void;
  setActiveEssentialType: (value: EssentialType) => void;
  activeEssentialType: EssentialType;
}
const Essential: React.FC<EssentialProps> = ({
  setShowAddModal,
  activeEssentialType,
  setActiveEssentialType,
}) => {
  return (
    <div>
      <CommonHeader size="lg" className="mb-4">
        Health & Essentials Management
      </CommonHeader>

      <div className="flex flex-wrap gap-3 mb-6">
        <TabButton
          label="Health Checks & Clinics"
          value="health"
          activeValue={activeEssentialType}
          onChange={setActiveEssentialType}
        />
        <TabButton
          label="Supplement"
          value="supplements"
          activeValue={activeEssentialType}
          onChange={setActiveEssentialType}
        />
      </div>
      {activeEssentialType === "health" && (
        <>
          <div className="mb-8 rounded-2xl bg-white text-black p-6">
            <div className="flex flex-col sm:flex-row justify-between items-stretch  sm:items-baseline-last  mb-4 ">
              <div>
                <SectionHeader
                  title="Health Markers"
                  description="Manage drug/clinic fields and health indicators"
                />
              </div>
              <CommonButton onClick={() => setShowAddModal(true)}>
                <Plus size={20} />
                Add Content
              </CommonButton>
            </div>

            <div className="space-y-3">
              {healthMarkers.map((i) => (
                <EssentialCard name={i.name} list={i.list} mark={i.mark} />
              ))}
            </div>
          </div>

          <div className=" bg-white p-6 rounded-lg ">
            <div className="flex flex-col sm:flex-row justify-between items-stretch  sm:items-baseline-last  mb-4">
              <div className="">
                <SectionHeader
                  title="Partner Clinics Directory"
                  description="Manage medical providers and diagnostic centers"
                  className=""
                />
              </div>

              <CommonButton onClick={() => setShowAddModal(true)}>
                <Plus size={20} />
                Add Clinic
              </CommonButton>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className=" w-full overflow-x-auto">
                <table className={tableDesign.table}>
                  <thead className={tableDesign.thead}>
                    <tr className={tableDesign.tr}>
                      {tableHeaders.map((header, index) => (
                        <th
                          key={index}
                          className={` ${header.align} ${tableDesign.th} `}
                        >
                          {header.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={tableDesign.tbody}>
                    {partnerClinics.map((clinic) => (
                      <tr key={clinic.id} className={tableDesign.tr}>
                        <td className={` ${tableDesign.td}`}>{clinic.name}</td>
                        <td
                          className={`hidden sm:table-cell ${tableDesign.td}`}
                        >
                          {clinic.location}
                        </td>
                        <td
                          className={`hidden xl:table-cell ${tableDesign.td}`}
                        >
                          {clinic.time}
                        </td>
                        <td
                          className={`hidden md:table-cell ${tableDesign.td}`}
                        >
                          {clinic.phone}
                        </td>
                        <td className={` ${tableDesign.td}`}>
                          <div className="flex gap-2">
                            <ActionButton
                              variant="edit"
                              editClassName="!bg-white !text-darkPurple border border-darkPurple"
                            >
                              <Edit2 size={16} />
                            </ActionButton>
                            <ActionButton variant="delete">
                              <Trash2 size={16} />
                            </ActionButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
      {activeEssentialType === "supplements" && (
        <>
          <UserSearchBar />

          <div>
            <div className="flex flex-col sm:flex-row justify-between  items-stretch  sm:items-center my-4">
              <div>
                <SectionHeader
                  title="Supplement Products"
                  description="Manage product catalog, pricing, and availability"
                />
              </div>
              <CommonButton onClick={() => setShowAddModal(true)}>
                <Plus size={20} />
                Add Product
              </CommonButton>
            </div>

            <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3 gap-4">
              {supplementProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 p-4"
                >
                  <div className="relative mb-4">
                    <div className=" h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <img
                        src={product.purchaseUrl}
                        alt={product.name}
                        className="max-h-full"
                      />
                    </div>
                    <span className="absolute top-2 right-2 bg-[#DCFCE7]  text-[#008236] px-2 py-1 rounded-full">
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
                      <ActionButton
                        variant="edit"
                        editClassName=" !bg-white border border-darkPurple "
                      >
                        <Edit2 size={16} className="text-darkPurple" />
                      </ActionButton>
                      <ActionButton variant="delete">
                        <Trash2 size={16} className="text-red-500" />
                      </ActionButton>
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

import DashboardTopSection from "@/common/DashboardTopSection";
import React, { useState } from "react";

interface NotificationTemplate {
  id: string;
  name: string;
  category: string;
  enabled: boolean;
}

interface NotificationFormData {
  targetAudience: string;
  title: string;
  message: string;
}

const Settings: React.FC = () => {
  const [templates, setTemplates] = useState<NotificationTemplate[]>([
    {
      id: "1",
      name: "Workout Reminder",
      category: "Engagement",
      enabled: true,
    },
    {
      id: "2",
      name: "Milestone Achievement",
      category: "Motivation",
      enabled: false,
    },
    {
      id: "3",
      name: "New Program Available",
      category: "Marketing",
      enabled: true,
    },
    { id: "4", name: "Premium Offer", category: "Marketing", enabled: false },
    {
      id: "5",
      name: "Weekly Progress Summary",
      category: "Engagement",
      enabled: true,
    },
  ]);

  const [formData, setFormData] = useState<NotificationFormData>({
    targetAudience: "",
    title: "",
    message: "",
  });

  const toggleTemplate = (id: string) => {
    setTemplates(
      templates.map((template) =>
        template.id === id
          ? { ...template, enabled: !template.enabled }
          : template,
      ),
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendNow = () => {
    console.log("Sending notification:", formData);
    // Add your send logic here
  };

  const handleSchedule = () => {
    console.log("Scheduling notification:", formData);
    // Add your schedule logic here
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Engagement: "bg-purple-100 text-purple-700",
      Motivation: "bg-blue-100 text-blue-700",
      Marketing: "bg-indigo-100 text-indigo-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className=" ">
      <div className="">
        <DashboardTopSection
          title="Analytics & Reports"
          description="Track performance metrics and insights"
        />

        {/* Push Notification Templates */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Push Notification Templates
          </h2>

          <div className="space-y-3">
            {templates.map((template) => (
              <div
                key={template.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-medium">
                    {template.name}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(template.category)}`}
                  >
                    {template.category}
                  </span>
                </div>

                <button
                  onClick={() => toggleTemplate(template.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    template.enabled ? "bg-purple-500" : "bg-gray-300"
                  }`}
                  role="switch"
                  aria-checked={template.enabled}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      template.enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Send Custom Notification */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Send Custom Notification
          </h2>

          <div className="space-y-4">
            {/* Target Audience */}
            <div>
              <label
                htmlFor="targetAudience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Target Audience
              </label>
              <input
                type="text"
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder=""
              />
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Notification title..."
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Notification message..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSendNow}
                className="flex-1 bg-purple-500 text-white font-medium py-2.5 px-4 rounded-md hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Send Now
              </button>
              <button
                onClick={handleSchedule}
                className="bg-white text-gray-700 font-medium py-2.5 px-6 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

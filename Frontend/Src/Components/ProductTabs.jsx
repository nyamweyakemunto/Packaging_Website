import { useState } from 'react';

export const ProductTabs = ({ details, specs, sustainability }) => {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Product Details' },
    { id: 'specs', label: 'Specifications' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  return (
    <div className="border rounded-xl">
      {/* Tab Headers */}
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium transition-colors
              ${activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'details' && (
          <div className="prose max-w-none">
            {details || 'No details available'}
          </div>
        )}

        {activeTab === 'specs' && (
          <dl className="grid grid-cols-2 gap-4">
            {specs && Object.entries(specs).map(([key, value]) => (
              <div key={key} className="border-b pb-2">
                <dt className="font-medium text-gray-800">{key}</dt>
                <dd className="text-gray-600">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {activeTab === 'sustainability' && (
          <div className="prose max-w-none">
            {sustainability || 'Sustainability information coming soon'}
          </div>
        )}
      </div>
    </div>
  );
};
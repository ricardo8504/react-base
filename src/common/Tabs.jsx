import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 px-4 text-center ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 w-full">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
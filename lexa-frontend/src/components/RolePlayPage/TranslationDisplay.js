import React, { useState } from 'react';

const TranslationDisplay = ({ germanText, englishText }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('german');

  return (
    <div className="w-full max-w-xl mt-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
        <p className="text-lg leading-7 text-gray-800">
          {selectedLanguage === 'german' ? germanText : englishText}
        </p>
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedLanguage('german')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedLanguage === 'german' ? 'bg-purple-300 text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
        >
          DE
        </button>
        <button
          onClick={() => setSelectedLanguage('english')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedLanguage === 'english' ? 'bg-purple-300 text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default TranslationDisplay;

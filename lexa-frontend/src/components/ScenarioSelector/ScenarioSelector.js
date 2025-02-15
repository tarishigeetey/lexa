import React, { useState } from 'react';
import { FaRoute, FaSubway, FaStore, FaUtensils } from 'react-icons/fa';
import { startConversationWithText } from '../../services/apiService';
import RolePlayPage from '../RolePlayPage/RolePlayPage';
import Button from '../common/Button';
import Icon from '../common/Icon';

const ScenarioSelector = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const [germanText, setGermanText] = useState('');
  const [englishText, setEnglishText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRolePlayPage, setShowRolePlayPage] = useState(false);

  const scenarios = [
    { name: 'supermarket', icon: <FaStore /> },
    { name: 'restaurant', icon: <FaUtensils /> },
    { name: 'train station', icon: <FaSubway /> },
    { name: 'directions', icon: <FaRoute /> },
  ];

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
  };

  const handleStartRolePlay = async () => {
    if (!selectedScenario) {
      alert('Please select a scenario first.');
      return;
    }

    setIsLoading(true);

    try {
      const { audio, germanText, englishText } = await startConversationWithText(selectedScenario);
      const audioUrl = URL.createObjectURL(audio);

      setAudioSrc(audioUrl);
      setGermanText(germanText);
      setEnglishText(englishText);

      setShowRolePlayPage(true);
    } catch (error) {
      console.error('Error starting scenario:', error);
      alert('Failed to start scenario. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 bg-white">
      <div>
        <img src="/logo.png" alt="Logo" className="w-48 h-48 mb-5" />
      </div>
      <h2 className="mb-5 text-xl font-semibold text-gray-500">Choose your scenario</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {scenarios.map((scenario, index) => (
          <Button
            key={index}
            className={`flex flex-col items-center justify-center p-5 w-28 h-28 text-sm bg-white border-2 rounded-lg transition-transform transform hover:translate-y-[-5px] hover:bg-purple-100 ${
              selectedScenario === scenario.name ? 'bg-purple-400 border-purple-400' : 'border-purple-200'
            }`}
            onClick={() => handleScenarioSelect(scenario.name)}
          >
            <Icon icon={scenario.icon} color={selectedScenario === scenario.name ? '#ffffff' : '#bca4fa'} />
            <span
              style={{
                color: selectedScenario === scenario.name ? '#ffffff' : '#bca4fa',
              }}
            >
              {scenario.name}
            </span>
          </Button>
        ))}
      </div>

      <Button
        className="px-6 py-3 text-sm text-white bg-purple-400 rounded-lg transition-colors hover:bg-purple-300 disabled:opacity-60 disabled:cursor-not-allowed"
        onClick={handleStartRolePlay}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Dive In'}
      </Button>

      {showRolePlayPage && (
        <RolePlayPage
          selectedScenario={selectedScenario}
          audioSrc={audioSrc}
          german={germanText}
          english={englishText}
        />
      )}
    </div>
  );
};

export default ScenarioSelector;

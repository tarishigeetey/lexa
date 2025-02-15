import React from 'react';
import Button from '../common/Button';
import { faStop, faMicrophone, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlButtons = ({
  isRecording,
  isPlaying,
  recordedFile,
  onToggleRecording,
  onSaveLocally,
  onToggleTranslation,
}) => (
  <div className="flex flex-wrap justify-center gap-4">
    {/* Microphone Button */}
    <Button
      className={`px-6 py-3 rounded-lg ${
        isPlaying
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-purple-400 hover:bg-purple-300 text-white'
      }`}
      onClick={onToggleRecording}
      disabled={isPlaying}
    >
      <FontAwesomeIcon icon={isRecording ? faStop : faMicrophone} />
    </Button>

    {/* Toggle Translation Button */}
    <Button
      className="px-6 py-3 rounded-lg bg-purple-400 hover:bg-purple-300 text-white"
      onClick={onToggleTranslation}
    >
      <FontAwesomeIcon icon={faLanguage} />
    </Button>
  </div>
);

export default ControlButtons;

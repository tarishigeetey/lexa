import React from 'react';

const SpeechWave = ({ isPlaying }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#f9f5ff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
  };

  const waveContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    height: '100%',
  };

  const waveStyle = {
    width: '8px',
    height: '40px',
    backgroundColor: '#bca4fa',
    borderRadius: '4px',
    animation: isPlaying ? 'waveAnimation 1.2s infinite ease-in-out' : 'none',
  };

  const waveKeyframes = `
    @keyframes waveAnimation {
      0%, 60%, 100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1.2);
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{waveKeyframes}</style>
      <div style={waveContainerStyle}>
        {[1, 2, 3, 4, 5].map((wave, index) => (
          <div
            key={wave}
            style={{
              ...waveStyle,
              animationDelay: `${-0.2 * (5 - index)}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SpeechWave;

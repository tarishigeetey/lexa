import { useState, useCallback } from 'react';
import { useAudio } from './useAudio';

export const useAudioManager = () => {
  const audioRef = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = useCallback(
    async (audioSrc) => {
      if (!audioSrc || !audioRef.current) return;

      try {
        // Pause the audio only if it's playing
        if (!audioRef.current.paused) {
          await audioRef.current.pause();
        }

        // Prevent unnecessary src updates
        if (audioRef.current.src !== audioSrc) {
          audioRef.current.src = audioSrc;
        }

        // Start playback
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Error playing audio:', err);
        setIsPlaying(false);
      }
    },
    [audioRef]
  );

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [audioRef]);

  return {
    audioRef,
    isPlaying,
    setIsPlaying,
    playAudio,
    stopAudio,
  };
};

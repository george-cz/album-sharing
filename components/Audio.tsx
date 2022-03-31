import React, { useState, useEffect } from "react";

const useAudio = (url: string) => {
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio(url) : undefined
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [playing]);

  useEffect(() => {
    audio?.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio?.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return { playing, toggle };
};

const Player: React.FC<{ url: string }> = ({ url, children }) => {
  const { playing, toggle } = useAudio(url);

  return (
    <div onClick={toggle} className="w-[55%] h-[55%]">
      {playing ? <img src="/pause.png" /> : <img src="/play.png" />}
    </div>
  );
};

export default Player;

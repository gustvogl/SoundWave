import React, { useState } from 'react';
import { Radio, Play, Pause, SkipForward } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  author: string;
  duration: string;
}

const EPISODES: Episode[] = [
  { id: 1, title: 'Inteligência Artificial na Engenharia de Software', author: 'Prof. Dr. Silva • USP', duration: '34:15' },
  { id: 2, title: 'Arquitetura Mobile Híbrida com Capacitor', author: 'Lab Mobile • FATEC', duration: '28:40' },
  { id: 3, title: 'Computação Quântica: Estado da Arte', author: 'Núcleo de Física • UNICAMP', duration: '45:10' },
  { id: 4, title: 'Metodologia Científica e Revisão Sistemática', author: 'Grupo Pesquisa • UNESP', duration: '22:05' },
];

export default function App() {
  const [currentEp, setCurrentEp] = useState<Episode>(EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = (ep: Episode) => {
    if (currentEp.id === ep.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentEp(ep);
      setIsPlaying(true);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-badge">
          <Radio size={24} color="#FFFFFF" />
        </div>
        <div>
          <h1>SoundWave</h1>
          <p>Player e Streaming de Podcasts Acadêmicos</p>
        </div>
      </header>

      <h2 className="section-title">Episódios em Destaque</h2>

      <div className="podcast-list">
        {EPISODES.map((ep) => {
          const active = currentEp.id === ep.id;
          return (
            <div
              key={ep.id}
              className={`podcast-card ${active ? 'active' : ''}`}
              onClick={() => togglePlay(ep)}
            >
              <div className="podcast-info">
                <h3>{ep.title}</h3>
                <span>{ep.author} • {ep.duration}</span>
              </div>
              <button className="play-btn">
                {active && isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          );
        })}
      </div>

      <div className="player-bar">
        <div className="player-details">
          <h4>{currentEp.title}</h4>
          <p>{isPlaying ? 'Reproduzindo agora...' : 'Pausado'} • {currentEp.duration}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            className="play-btn"
            style={{ background: '#334155' }}
            onClick={() => {
              const nextIdx = (EPISODES.findIndex((e) => e.id === currentEp.id) + 1) % EPISODES.length;
              setCurrentEp(EPISODES[nextIdx]);
              setIsPlaying(true);
            }}
          >
            <SkipForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

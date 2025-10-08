const FilmStrip = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left film strip */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-film-red to-transparent opacity-20">
        <div className="flex flex-col h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`left-${i}`} className="flex-1 border-b-2 border-black/50 relative">
              <div className="absolute inset-2 bg-black/60" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Right film strip */}
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-film-red to-transparent opacity-20">
        <div className="flex flex-col h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`right-${i}`} className="flex-1 border-b-2 border-black/50 relative">
              <div className="absolute inset-2 bg-black/60" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_85%_55%_/_0.1)_0%,transparent_70%)]" />
    </div>
  );
};

export default FilmStrip;

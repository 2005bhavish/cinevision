import { useState } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import FilmStrip from "@/components/FilmStrip";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <LoadingAnimation onComplete={() => setShowContent(true)} />}
      
      {showContent && (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          <FilmStrip />
          
          <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
            <div className="max-w-4xl w-full text-center space-y-12 animate-slide-up">
              {/* Date */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-film-red text-3xl md:text-4xl font-bold tracking-[0.3em] font-sans">
                  OCT - 18
                </p>
              </div>

              {/* Main Title */}
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-foreground leading-none tracking-wider mb-4">
                  CINEVISION
                </h1>
                <p className="font-display text-5xl md:text-7xl text-film-red font-bold tracking-[0.2em]">
                  2K25
                </p>
              </div>

              {/* Event Highlights */}
              <div className="animate-fade-in space-y-4 py-8" style={{ animationDelay: "0.6s" }}>
                <div className="space-y-3 font-sans text-base md:text-lg tracking-wide">
                  <p className="text-foreground">
                    <span className="text-film-red font-semibold">CELEBRITY</span> INTERACTION
                  </p>
                  <p className="text-foreground">
                    <span className="text-film-red font-semibold">CINE EXPO</span>, <span className="text-film-red font-semibold">COSPLAY</span>
                  </p>
                  <p className="text-foreground">
                    <span className="text-film-red font-semibold">CONTESTS</span>, <span className="text-film-red font-semibold">WORKSHOPS</span>
                  </p>
                  <p className="text-foreground">
                    <span className="text-film-red font-semibold">MUSIC</span> CONCERT
                  </p>
                </div>
              </div>

              {/* Register Button */}
              <div className="animate-fade-in pt-6" style={{ animationDelay: "0.8s" }}>
                <a 
                  href="/events"
                  className="inline-block bg-film-red hover:bg-film-red text-foreground font-sans font-bold text-xl px-16 py-8 rounded-none tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_hsl(0_85%_55%_/_0.8)] hover:scale-110 animate-button-pulse hover:text-shadow-glow"
                >
                  REGISTER NOW
                </a>
              </div>

              {/* QR Code Placeholder */}
              {/* <div className="animate-fade-in pt-8" style={{ animationDelay: "1s" }}>
                <div className="inline-block p-6 border-4 border-film-red bg-secondary/50">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-foreground/10 flex items-center justify-center">
                    <p className="text-muted-foreground font-sans text-sm text-center px-4">
                      QR CODE<br />PLACEHOLDER
                    </p>
                  </div>
                  <p className="text-foreground font-sans text-sm mt-4 tracking-wide">
                    SCAN TO REGISTER
                  </p>
                </div>
              </div> */}

              {/* Event Info */}
              <div className="animate-fade-in pt-12" style={{ animationDelay: "1.2s" }}>
                <p className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
                  FILM & PHOTOGRAPHY
                </p>
                <p className="font-sans text-lg md:text-xl text-muted-foreground tracking-widest mt-2">
                  CMRTC
                </p>
              </div>
            </div>
          </main>

          {/* Footer - Studio Credit Block */}
          <footer className="relative z-10 py-8 text-center">
            {/* Red divider line */}
            <div className="w-full h-[1px] bg-film-red mb-6" />
            
            {/* Main attribution */}
            <p className="text-muted-foreground font-mono text-base tracking-wide mb-4">
              Made with love by <span className="text-film-red font-semibold">Codeoholics by Bhavish</span>
            </p>
            
            {/* Social Links Block */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4 text-muted-foreground/70 font-mono text-xs">
              {/* Codeoholics Links */}
              <div className="flex items-center gap-3">
                <span className="text-foreground/60">Codeoholics:</span>
                <a href="https://www.instagram.com/codeoholics?igsh=bzQ5c3d0M3Fud2dw" className="hover:text-film-red transition-colors" aria-label="Codeoholics Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/codeoholics-club-cmrtc/" className="hover:text-film-red transition-colors" aria-label="Codeoholics LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              
              {/* FAP Club Links */}
              <div className="flex items-center gap-3">
                <span className="text-foreground/60">FAP Club:</span>
                <a href="https://www.instagram.com/team__fap?igsh=czM2NG9sanNmYXJt" className="hover:text-film-red transition-colors" aria-label="FAP Club Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#fap-facebook" className="hover:text-film-red transition-colors" aria-label="FAP Club Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
            
            {/* Copyright and event details */}
            <p className="text-muted-foreground/50 font-mono text-xs tracking-wide">
              Cinevision 2K25 | OCT-18 | A Film & Photography Initiative of CMRTC
            </p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Film, Footprints, Trophy, Camera } from "lucide-react";

const EventSelection = () => {
  const events = [
    {
      id: "shortfilm",
      title: "Short Film Competition",
      icon: Film,
      description: "Showcase your storytelling skills",
      path: "/register/shortfilm"
    },
    {
      id: "rampwalk",
      title: "Ramp Walk",
      icon: Footprints,
      description: "Walk the runway with style",
      path: "/register/rampwalk"
    },
    {
      id: "contest",
      title: "Contest",
      icon: Trophy,
      description: "Compete and win exciting prizes",
      path: "/register/contest"
    },
    {
      id: "photography",
      title: "Photography Workshop",
      icon: Camera,
      description: "Learn from the best photographers",
      path: "/register/photography"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-8xl mb-6 tracking-wider text-film-red">
            CINEVISION 2K25
          </h1>
          <p className="text-2xl md:text-3xl font-sans tracking-widest mb-4">
            OCT - 18
          </p>
          <p className="text-lg text-muted-foreground">
            Choose your event to register
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Link
                key={event.id}
                to={event.path}
                className="group relative overflow-hidden border border-border bg-card hover:bg-accent transition-all duration-300 p-8 rounded-lg hover:shadow-[0_0_30px_hsl(var(--film-red)_/_0.3)]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <Icon className="w-16 h-16 text-film-red group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="font-display text-3xl tracking-wider">
                    {event.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                  <span className="inline-block mt-4 text-film-red font-sans tracking-widest group-hover:translate-x-2 transition-transform">
                    REGISTER →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSelection;
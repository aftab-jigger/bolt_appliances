import { ChevronsRight, RotateCcw, Users } from "@/assets/icons/icons";
import { Link } from "react-router-dom";

const aboutFeatures = [
  {
    icon: RotateCcw,
    title: "Years Of Experience",
    description: "15+ years serving customers",
  },
  {
    icon: Users,
    title: "Expert Staff",
    description: "Certified professionals",
  },
];

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground text-balance">
              We Are Professionals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              We are committed to solving your appliance repair & installation
              headaches. We have trusted, local appliance repairmen and
              professional technicians who have years of experience fixing and
              installing all major brands of residential appliances as well as
              they use best technology, equipment, and training to properly
              repair or install your appliances.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground font-semibold group border-l-4 border-teal-500 pl-4 hover:text-teal-600 transition-colors"
            >
              Read More
              <ChevronsRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {aboutFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 hidden sm:block">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-75 sm:h-95 md:h-112.5">
              {/* First Image - Technician installing */}
              <div className="absolute top-0 right-0 w-[65%] sm:w-[70%] aspect-4/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 hover:scale-105 transition-transform duration-300">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="300" fill="#f0fdfa" />
                  <rect
                    x="250"
                    y="80"
                    width="120"
                    height="180"
                    rx="8"
                    fill="#e0e7ff"
                    stroke="#6366f1"
                    strokeWidth="2"
                  />
                  <circle cx="310" cy="140" r="30" fill="#a5b4fc" />
                  <rect
                    x="290"
                    y="180"
                    width="40"
                    height="60"
                    rx="4"
                    fill="#c7d2fe"
                  />
                  <rect
                    x="50"
                    y="200"
                    width="80"
                    height="80"
                    rx="8"
                    fill="#ccfbf1"
                    stroke="#14b8a6"
                    strokeWidth="2"
                  />
                  <circle cx="90" cy="240" r="20" fill="#5eead4" />
                  <path
                    d="M140 120 L160 100 L180 120 L180 180 L140 180 Z"
                    fill="#fed7aa"
                    stroke="#f97316"
                    strokeWidth="2"
                  />
                  <circle
                    cx="160"
                    cy="90"
                    r="20"
                    fill="#fde68a"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                  <rect x="145" y="130" width="30" height="50" fill="#0d9488" />
                  <line
                    x1="160"
                    y1="180"
                    x2="150"
                    y2="220"
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                  <line
                    x1="160"
                    y1="180"
                    x2="170"
                    y2="220"
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                  <line
                    x1="180"
                    y1="140"
                    x2="220"
                    y2="120"
                    stroke="#fde68a"
                    strokeWidth="3"
                  />
                  <rect
                    x="220"
                    y="110"
                    width="30"
                    height="15"
                    rx="2"
                    fill="#6b7280"
                  />
                  <path
                    d="M100 100 L120 80 L140 100"
                    stroke="#14b8a6"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Second Image - Technician repairing */}
              <div className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hover:scale-105 transition-transform duration-300">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="300" fill="#f0fdfa" />
                  <rect
                    x="180"
                    y="60"
                    width="160"
                    height="200"
                    rx="12"
                    fill="#e0f2fe"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                  />
                  <circle
                    cx="260"
                    cy="130"
                    r="50"
                    fill="#bae6fd"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                  />
                  <circle cx="260" cy="130" r="35" fill="#7dd3fc" />
                  <rect
                    x="200"
                    y="200"
                    width="120"
                    height="40"
                    rx="4"
                    fill="#f1f5f9"
                  />
                  <path
                    d="M80 150 L100 130 L120 150 L120 250 L80 250 Z"
                    fill="#fef3c7"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                  <circle
                    cx="100"
                    cy="115"
                    r="22"
                    fill="#fde68a"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                  <rect x="85" y="160" width="30" height="50" fill="#0d9488" />
                  <line
                    x1="100"
                    y1="250"
                    x2="85"
                    y2="290"
                    stroke="#1f2937"
                    strokeWidth="4"
                  />
                  <line
                    x1="100"
                    y1="250"
                    x2="115"
                    y2="290"
                    stroke="#1f2937"
                    strokeWidth="4"
                  />
                  <line
                    x1="120"
                    y1="180"
                    x2="160"
                    y2="160"
                    stroke="#fde68a"
                    strokeWidth="4"
                  />
                  <rect
                    x="150"
                    y="150"
                    width="40"
                    height="20"
                    rx="3"
                    fill="#ef4444"
                  />
                  <rect
                    x="40"
                    y="240"
                    width="60"
                    height="40"
                    rx="4"
                    fill="#374151"
                  />
                  <rect x="45" y="245" width="20" height="8" fill="#fbbf24" />
                  <rect x="45" y="258" width="15" height="8" fill="#10b981" />
                  <rect x="70" y="245" width="25" height="30" fill="#1f2937" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

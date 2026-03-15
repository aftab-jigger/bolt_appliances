import { useId } from "react";

/**
 * Reusable page header with gradient background and animated wave
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} [props.titleClassName] - Optional additional classes for title
 * @param {string} [props.descriptionClassName] - Optional additional classes for description
 */
const PageHeader = ({ title, description, titleClassName = "", descriptionClassName = "" }) => {
  const gradientId = useId().replace(/:/g, "-");

  return (
    <section className="relative pt-[200px] pb-16 sm:pb-20 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      {/* Animated Wave Background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 sm:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity="0.1">
                <animate attributeName="stop-opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <path
            fill={`url(#${gradientId})`}
            d="M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30L1440,120L0,120Z"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30L1440,120L0,120Z;M0,40L48,50C96,60,192,80,288,85C384,90,480,80,576,65C672,50,768,40,864,45C960,50,1056,60,1152,65C1248,70,1344,60,1392,55L1440,50L1440,120L0,120Z;M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,60C960,70,1056,80,1152,75C1248,70,1344,50,1392,40L1440,30L1440,120L0,120Z"
            />
          </path>
          <path
            className="fill-background"
            d="M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,55C840,60,960,70,1080,75C1200,80,1320,80,1380,80L1440,80V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,55C840,60,960,70,1080,75C1200,80,1320,80,1380,80L1440,80V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z;M0,70L60,65C120,60,240,55,360,60C480,65,600,75,720,80C840,85,960,85,1080,80C1200,75,1320,65,1380,60L1440,55V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z;M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,55C840,60,960,70,1080,75C1200,80,1320,80,1380,80L1440,80V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z"
            />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 absolute top-[40px] z-10 text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 ${titleClassName}`.trim()}>
          {title}
        </h1>
        <p className={`text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${descriptionClassName}`.trim()}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;

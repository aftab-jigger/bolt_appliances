import { Award, CheckCircle, Headphones, ShieldCheck, Truck, Zap } from "lucide-react";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "200+", label: "Trusted Brands" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "24/7", label: "Customer Support" },
];

const valueCards = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description:
      "Every appliance is sourced from verified suppliers to ensure original quality and warranty coverage.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "We provide quick dispatch and careful doorstep delivery so your appliances arrive safely and on time.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Our support team helps with product selection, order guidance, and after-sales assistance whenever needed.",
  },
  {
    icon: Award,
    title: "Reliable Service",
    description:
      "From order placement to installation advice, our process is built around convenience and trust.",
  },
];

const processSteps = [
  {
    title: "Choose Smartly",
    description: "Explore categories, compare features, and pick the right appliance for your home.",
  },
  {
    title: "Order Confidently",
    description: "Place your order through a secure and simple checkout experience.",
  },
  {
    title: "Enjoy Long-Term Value",
    description: "Get dependable performance with strong support after purchase.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-teal-50/30">
      <div className="container mx-auto px-4 py-12 sm:py-14 lg:py-16 space-y-12 lg:space-y-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
              Built for modern homes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              We make home appliance shopping simple, trusted, and value-driven.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
              Bolt Appliances focuses on quality products, transparent service, and a smooth buying experience.
              Whether you are upgrading one room or setting up an entire home, we help you find dependable
              appliances that fit your lifestyle and budget.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-foreground border">
                <CheckCircle className="h-4 w-4 text-teal-600" />
                Verified Quality
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-foreground border">
                <Zap className="h-4 w-4 text-teal-600" />
                Energy-Efficient Options
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-card p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-2xl sm:text-3xl font-bold text-teal-600">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 sm:mb-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Why customers choose us</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              We follow a service approach designed around trust, convenience, and long-term reliability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border bg-card p-5 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">{card.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-5 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">How we work</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              A clear process that keeps your buying journey easy and dependable.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl bg-teal-50/60 p-4 sm:p-5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <h4 className="mt-3 text-base font-semibold text-foreground">{step.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Al-Thani",
    role: "Property Manager",
    company: "Qatar Estates",
    rating: 5,
    quote:
      "Joy App transformed how we manage our 150+ properties. Tenant satisfaction increased by 40% in just 3 months.",
    avatar: "SA",
  },
  {
    name: "Mohammed Hassan",
    role: "CEO",
    company: "Gulf Property Group",
    rating: 5,
    quote:
      "The best investment we've made. Response times dropped from days to hours.",
    avatar: "MH",
  },
  {
    name: "Fatima Al-Mahmoud",
    role: "Operations Director",
    company: "Doha Living",
    rating: 5,
    quote:
      "Finally, a solution that understands the Qatar market with Arabic support.",
    avatar: "FA",
  },
  {
    name: "James Wilson",
    role: "Facility Manager",
    company: "Pearl Residences",
    rating: 5,
    quote:
      "We reduced maintenance costs by 35% using Joy App analytics.",
    avatar: "JW",
  },
  {
    name: "Noura Al-Kubaisi",
    role: "Managing Partner",
    company: "Lusail Properties",
    rating: 5,
    quote:
      "Our tenants love the transparency and real-time tracking.",
    avatar: "NA",
  },
];

const Testimonials = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Loved by <span className="text-gradient-orange">Managers</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex gap-6 animate-marquee"
              style={{ animationPlayState: paused ? "paused" : "running" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {[...testimonials, ...testimonials].map((t, index) => (
                <div
                  key={index}
                  className="
                    shrink-0 
                    w-[280px] sm:w-[320px] lg:w-[360px]
                    bg-secondary rounded-2xl p-6 
                    cursor-pointer
                    hover:scale-[1.02] transition-transform duration-300
                  "
                >
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-primary opacity-10 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm sm:text-base text-foreground mb-6">
                    “{t.quote}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

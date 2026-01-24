import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Real-time dashboard updates",
  "Push notifications for urgent issues",
  "Document & photo attachments",
  "Multi-language support",
  "Customizable workflows",
];

const TakeALook = () => {
  return (
    <section className="section-padding bg-secondary/50 overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="flex md:flex-row flex-col gap-12 lg:gap-20 items-center ">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
              Take a Look Inside
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Experience the{" "}
              <span className="text-gradient-orange">Future</span> of Property Management
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our intuitive interface puts everything you need at your fingertips.
              Manage properties, communicate with tenants, and track performance—all in one place.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stacked Mobile Screens */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"

          >
            <img src="./feature-1.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TakeALook;

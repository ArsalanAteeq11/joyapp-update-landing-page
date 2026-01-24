import { motion } from "framer-motion";
import { Send, UserCheck, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Tenant Submits Request",
    description: "Tenants easily submit maintenance requests through the mobile app or web portal.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Manager Assigns Task",
    description: "Property managers receive notifications and assign tasks to the right team members.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Technician Repairs",
    description: "Technician receives the task, visits the property, and completes the repair work.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Issue Resolved & Rated",
    description: "Tasks are completed, tracked, and tenants provide feedback for continuous improvement.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple Process,{" "}
            <span className="text-gradient-orange">Powerful Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our streamlined workflow designed for efficiency.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative">

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center group"
            >
              {/* Connector Line (visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.5rem] left-[60%] w-[100%] h-0.5 bg-gray-100 group-hover:bg-orange-100 transition-colors duration-500" />
              )}

              {/* Step Number */}
              <div className="relative inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center border-4 border-white">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

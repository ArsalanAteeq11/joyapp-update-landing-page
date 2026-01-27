import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Eye,
  DollarSign,
  Shield,
  Sparkles,
  Settings,
  BarChart3,
  Clock,
  Bell,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const features = [
  {
    icon: AlertCircle,
    title: "Smart Tenant Issue Tracking",
    description:
      "Instant issue reporting with smart data insights to resolve tenant concerns before they escalate.",
  },
  {
    icon: Users,
    title: "Maximize Workforce Productivity",
    description:
      "Assign tasks faster, track progress easily, and reduce staff downtime.",
  },
  {
    icon: Eye,
    title: "Real-Time Transparency Portal",
    description:
      "Tenants can see request status, updates, and responses no more endless follow-ups.",
  },
  {
    icon: DollarSign,
    title: "Control Maintenance Costs",
    description:
      "Track expenses, reduce unnecessary repairs, and make smarter maintenance decisions.",
  },
  {
    icon: Shield,
    title: "Structured Complaint Handling",
    description:
      "Every issue follows a clear workflow logged, assigned, resolved, and reviewed.",
  },
  {
    icon: Sparkles,
    title: "Designed for Non-Technical Users",
    description:
      "Simple, clean interface that anyone can use without training.",
  },
  {
    icon: Settings,
    title: "Centralized Task Management",
    description:
      "Manage all maintenance and operational tasks from one unified dashboard.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Monitor team performance and property health with real-time analytics.",
  },
  {
    icon: Clock,
    title: "Faster Resolution Times",
    description:
      "Reduce response delays with automated task routing and reminders.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automatic alerts keep tenants and staff informed at every stage.",
  },
  {
    icon: FileText,
    title: "Comprehensive Activity Logs",
    description:
      "Every task, update, and resolution is recorded in a unified log, giving you full transparency and audit-ready visibility.",
  },
  {
    icon: CheckCircle,
    title: "Automated Workflow Assurance",
    description:
      "Smart rules enforce consistent handling of issues, reducing errors and ensuring every request is resolved efficiently.",
  },

];

const FeaturesGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const visibleFeatures = showAll ? features : features.slice(0, 8);

  const handleToggle = () => {
    setShowAll((prev) => !prev);

    // 👇 When collapsing, smoothly scroll back to top of section
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding bg-secondary/30 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Real Property{" "}
            <span className="text-gradient-orange">Challenges</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage properties smoothly without
            spreadsheets, long follow-ups, or confusion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="flex flex-col sm:flex-row items-center  gap-4 mb-4">

                <div className="p-3 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg text-center sm:text-left font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-center sm:text-left leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button onClick={handleToggle} className="btn-primary">
            {showAll ? "Show Less" : "View All Features"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;


import { motion } from "framer-motion";
import {
  MessageSquarePlus,
  Camera,
  Send,
  UserCog,
  CheckCircle,
  Smile,
  TrendingUp
} from "lucide-react";

const trustFeatures = [
  { icon: MessageSquarePlus, text: "Tenants can easily report issues using the Joy app." },
  { icon: Camera, text: "They log in and submit their complaints along with details and photos." },
  { icon: Send, text: "The submitted complaints are then sent to our system." },
  { icon: UserCog, text: "Our system assigns the complaints to the appropriate staff members." },
  { icon: CheckCircle, text: "The staff members acknowledge and promptly resolve the reported issues." },
  { icon: Smile, text: "This streamlined process is designed to ensure tenant satisfaction." },
  { icon: TrendingUp, text: "We greatly value tenant feedback as it helps us in continuous improvement." },
];

const SafeReliable = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="flex md:flex-row flex-col gap-12 lg:gap-20 items-center overflow-hidden">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 lg:order-1"
          >
            <img src="./feature-2.png" alt="App Dashboard Mockup" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex-1"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
              Seamless Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Efficient Issue <span className="text-gradient-orange">Resolution</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Empower your tenants and staff with a streamlined complaint management system. From reporting to resolution, every step is optimized for satisfaction.
            </p>

            {/* Trust Features */}
            <div className="flex flex-col gap-1">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 ${index === trustFeatures.length - 1 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm sm:text-base leading-snug pt-2">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafeReliable;

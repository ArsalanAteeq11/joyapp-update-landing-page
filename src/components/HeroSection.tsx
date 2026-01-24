import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center pt-20 overflow-hidden bg-background mt-16">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row  gap-12 lg:gap-20">

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">The Future of Property Tech</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bringing Joy to the
              <span className="text-gradient-orange">Tenant Experience</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We believe in making living better and providing the best experience for your tenants.
              Joy gives you the data and insight you need to make informed decisions
              that increase the value of your property to boost rental returns.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#pricing" className="btn-primary group">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Abstract Card Stack */}
              <div className="relative">
                <motion.div
                  className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-100/50 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="./joy-dashboard.png"
                    alt="JoyApp Dashboard"
                    className="rounded-2xl w-full h-auto"
                  />

                  {/* Floating Elements (Simulated UI) */}
                  <motion.div
                    className="absolute -right-6 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[200px] hidden sm:block"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        $
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Monthly Revenue</p>
                        <p className="text-lg font-bold text-gray-900">$12,450</p>
                        <p className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                          +12% this month
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-6 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden sm:block"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">New Tenants</p>
                        <p className="text-[10px] text-gray-500">Just joined</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative blurred blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/30 to-blue-200/30 blur-3xl -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

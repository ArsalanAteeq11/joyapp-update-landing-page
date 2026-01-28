import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
];

const Footer = () => {
  return (
    <footer className="relative bg-dark-gray text-white pt-12 sm:pt-14 lg:pt-16 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="container-narrow mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start justify-between gap-12 "
        >
          {/* Brand Section */}
          <div className="max-w-xl">
            <div className="flex sm:flex-row flex-col items-start gap-3">
              <img src="/joy-logo.png" alt="Joy App" className="h-14 w-auto rounded-xl" />
              <p className="text-white/80 text-md sm:text-lg">
                Transforming property management with smart technology and exceptional user experience. Making living better for tenants.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:max-w-lg space-y-3">
            <div className="space-y-2">
              <p className="text-white/80">Get the latest updates and property insights delivered to your inbox.</p>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-white/40 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-14 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 px-4 bg-primary rounded-xl text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 py-8 border-t border-white/10 flex  justify-center items-center gap-6">
          <p className="text-white/80 text-sm font-medium">
            © {new Date().getFullYear()} BITS.Built with ❤️ in Qatar
          </p>


        </div>
      </div>
    </footer>
  );
};

export default Footer;

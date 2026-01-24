import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Updates"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-muted pt-20 pb-8 border-t border-white/5">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <img src="/logo.png" alt="Joy App" className="h-14 w-auto" />
              <p className="text-muted max-w-sm leading-relaxed">
                Transforming property management with smart technology and exceptional user experience. Making living better for everyone.
              </p>
            </div>

            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 pr-12 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
              />
              <button className="absolute right-1.5 top-1.5 p-2 bg-primary rounded-full text-white hover:bg-primary-hover transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>


          </div>

          {/* Spacer */}
          <div className="lg:col-span-1" />

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h4 className="font-display font-semibold text-muted text-md">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted hover:text-primary transition-colors text-sm inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} BITS. Built with ❤️ in Qatar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

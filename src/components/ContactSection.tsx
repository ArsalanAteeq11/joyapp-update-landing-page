import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "Dear Joy Team, Please contact me I would like to know more about your Joy App.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="overflow-hidden">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-light text-primary font-semibold text-sm mb-6">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contact <span className="text-gradient-orange">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                If you'd like a demo or further information, feel free to reach out to us,
                and we'll be happy to assist you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bitechqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer w-fit"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      info@bitechqa.com
                    </p>
                  </div>
                </a>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=AL+Muftah+Plaza,+Al+Rayyan+Road,+Doha,+Qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer w-fit"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      AL Muftah Plaza, Al Rayyan Road, Doha, Qatar
                    </p>
                  </div>
                </a>
              </div>


            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="overflow-hiddens">

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-background border border-border rounded-xl px-4 pt-6 pb-2 text-medium-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                    <label className="absolute left-4 top-2 text-xs text-dark-gray peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">
                      Your Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-background border border-border rounded-xl px-4 pt-6 pb-2 text-medium-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                    <label className="absolute left-4 top-2 text-xs text-dark-gray peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">
                      Email Address
                    </label>
                  </div>



                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows={4}
                      className="peer w-full bg-background border border-border rounded-xl px-4 pt-6 pb-2 text-medium-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      required
                    />
                    <label className="absolute left-4 top-2 text-xs text-dark-gray peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary w-full group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

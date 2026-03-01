import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-medium-gray border-t border-border pt-6">

              <section className="space-y-2">
                <p className="text-lg leading-relaxed">
                  Bits takes your privacy and security seriously, and we commit ourselves to maintain your trust and confidence.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
                </p>
                <div className="p-4 rounded-xl bg-white shadow-sm border border-border inline-block">
                  <span className="font-semibold text-primary">Email: </span>
                  <a href="mailto:info@bitechqa.com" className="text-foreground hover:text-primary transition-colors">info@bitechqa.com</a>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Transparency</h2>
                <p className="leading-relaxed">
                  We want to explain to you as clearly and transparently as we can how we use information we collect and receive about you.
                </p>
                <p className="leading-relaxed">Our Privacy Policy explains:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The categories of data we collect about you and why we collect them.</li>
                  <li>How we use that data to provide a more customized experience that you’ll find valuable.</li>
                  <li>How and why we receive or share your personal data.</li>
                  <li>How and where you can exercise more control over the use of your data and exercise your individual rights.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">General</h2>
                <p className="leading-relaxed">
                  Joy International operates the https://qa.joyapp.ai/ website and mobile app.
                </p>
                <p className="leading-relaxed">
                  This page is used to inform website and app visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service, the Bits website and app.
                </p>
                <p className="leading-relaxed">
                  If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Information Collection and Use</h2>
                <p className="leading-relaxed">
                  For a better experience while using our Service, we may require you to provide certain personally identifiable information, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-medium text-foreground">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                </ul>
                <p className="leading-relaxed">
                  The information that we collect will be used to contact or identify you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Log Data</h2>
                <p className="leading-relaxed">
                  Whenever you visit our Service, we collect information that your browser sends to us, called Log Data.
                </p>
                <p className="leading-relaxed">This Log Data may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Internet Protocol (IP) address</li>
                  <li>Browser version</li>
                  <li>Pages of our Service that you visit</li>
                  <li>Time and date of your visit</li>
                  <li>Time spent on those pages</li>
                  <li>Other usage statistics</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Service Providers</h2>
                <p className="leading-relaxed">We may employ third-party companies and individuals for the following reasons:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To facilitate our Service</li>
                  <li>To provide the Service on our behalf</li>
                  <li>To perform Service-related services</li>
                  <li>To assist us in analyzing how our Service is used</li>
                </ul>
                <p className="leading-relaxed">
                  These third parties may have access to your Personal Information in order to perform the tasks assigned to them. However, they are obligated not to disclose or use the information for any other purpose.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Security</h2>
                <p className="leading-relaxed">
                  We value your trust in providing us your Personal Information and strive to use commercially acceptable means of protecting it.
                </p>
                <p className="leading-relaxed">
                  However, no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Links to Other Sites</h2>
                <p className="leading-relaxed">
                  Our Service may contain links to third-party websites. If you click on a third-party link, you will be directed to that site.
                </p>
                <p className="leading-relaxed font-medium">
                  These external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of those websites. We assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Children’s Privacy</h2>
                <p className="leading-relaxed">Our Services do not address anyone under the age of 13.</p>
                <p className="leading-relaxed">
                  We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete it from our servers.
                </p>
                <p className="leading-relaxed">
                  If you are a parent or guardian and are aware that your child has provided us with personal information, please contact us so we can take necessary action.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We advise you to review this page periodically for any changes.
                </p>
                <p className="leading-relaxed">
                  We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Customer Control</h2>
                <p className="leading-relaxed">We respect your individual rights and give you control over how your data is used.</p>
                <p className="leading-relaxed font-medium">You can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request to update your account and manage email communication settings</li>
                  <li>Request access to and correction of your personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Request restriction of processing of your personal data</li>
                  <li>Object to processing of your personal data</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Accountability</h2>
                <p className="leading-relaxed">
                  We hold ourselves accountable to meeting our high standards for privacy and data security.
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

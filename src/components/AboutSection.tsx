import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--muted)/0.3)] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))]">About Me</h2>

          <p className="leading-relaxed text-lg md:text-xl font-medium text-[hsl(var(--davys-gray))]">
            As a <span className="text-[hsl(var(--old-rose))] font-semibold">Certified Fraud Examiner</span>, a{" "}
            <span className="text-[hsl(var(--old-rose))] font-semibold">Fraud Data Analyst</span>, and a graduate
            student in <span className="text-[hsl(var(--old-rose))] font-semibold">Business Analytics and AI</span> at
            American University, I live at the intersection of data science and digital defense — where every anomaly
            tells a story, and every model becomes a shield.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

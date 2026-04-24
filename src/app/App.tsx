import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Database, Server, Cloud, Award, Briefcase } from 'lucide-react';
import portfolioImage from '../imports/portfolio.png';
import collegeImage from '../imports/image.png';
import etharaLogo from '../imports/image-1.png';
import { FloatingIcon } from './components/FloatingIcon';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            MS
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0e27] border-t border-gray-800 px-6 py-4"
          >
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-3 capitalize text-gray-300 hover:text-cyan-400"
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-cyan-400 mb-4">Hello, I'm</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mayank Sharma
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Java Backend Developer | CSE (Cybersecurity) Student
            </h2>
            <p className="text-xl text-gray-400 mb-8 italic">
              "Building scalable backend systems, one API at a time."
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                View Projects
              </button>
              <button className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/mayank588"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-sharma-948526230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mayanksharma230700@acropolis.in"
                className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-500/30 overflow-hidden bg-gray-900">
                <img
                  src={portfolioImage}
                  alt="Mayank Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0d1235]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a B.Tech student at <span className="text-cyan-400 font-semibold">Acropolis Institute of Technology and Research, Indore</span> (2023–2027), specializing in <span className="text-cyan-400 font-semibold">Computer Science & Engineering with Cybersecurity</span>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Currently maintaining a CGPA of 6.55, I'm passionate about backend development, system design, and cloud-based applications. My journey in technology is driven by a desire to build robust, scalable systems that solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in Java backend development, with hands-on experience in Spring Boot, REST APIs, and database management. I'm constantly learning and exploring new technologies to stay at the forefront of modern software development.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
              >
                <img
                  src={collegeImage}
                  alt="Acropolis Institute of Technology and Research"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-center text-gray-400 mb-16">Hover over the icons to see them come alive!</p>

            {/* Floating Tech Icons */}
            <div className="mb-20">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                  delay={0}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  alt="C"
                  delay={1}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="C++"
                  delay={2}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="SQL"
                  delay={3}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                  alt="Spring"
                  delay={4}
                />
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/springboot/springboot-original.svg"
                  alt="Spring Boot"
                  delay={5}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                  delay={6}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  delay={7}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  alt="Linux"
                  delay={8}
                />
                <FloatingIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                  alt="AWS"
                  delay={9}
                />
              </div>
            </div>

            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                icon={<Code size={32} />}
                title="Languages"
                skills={['Java', 'C', 'C++', 'SQL']}
              />
              <SkillCard
                icon={<Server size={32} />}
                title="Backend"
                skills={['Spring', 'Spring Boot', 'REST API', 'JDBC']}
              />
              <SkillCard
                icon={<Database size={32} />}
                title="Database"
                skills={['MySQL']}
              />
              <SkillCard
                icon={<Cloud size={32} />}
                title="Tools"
                skills={['Docker', 'Git', 'Linux', 'AWS (Basics)']}
              />
              <SkillCard
                icon={<Award size={32} />}
                title="Concepts"
                skills={['OOP', 'MVC Architecture', 'Data Structures']}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#0d1235]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Rakshika – Women Safety System"
                role="Backend Developer"
                description="AI-based risk prediction and emergency alert system with backend logic for safety workflows."
                tags={['Java', 'Spring Boot', 'AI Integration']}
              />
              <ProjectCard
                title="Tourist Helper Web Portal"
                description="City-wise tourist information platform with emergency contacts and places of interest."
                tags={['Java', 'Backend', 'Web']}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience & Achievements
            </h2>

            {/* Internship */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg">
                      <img
                        src={etharaLogo}
                        alt="Ethara AI"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">AI / LLM Intern</h3>
                    <div className="text-gray-300 font-semibold mb-3 flex items-center gap-2">
                      <Briefcase size={18} className="text-cyan-400" />
                      <span>1 Month Internship</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Worked on LLMs for prompt engineering, fine-tuning, and performance analysis of generative AI systems. Gained hands-on experience with cutting-edge AI technologies and contributed to real-world AI applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Certifications</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <Award className="text-cyan-400 mb-3" size={28} />
                  <div className="font-semibold text-gray-300">Deloitte Virtual Experience Program</div>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <Award className="text-cyan-400 mb-3" size={28} />
                  <div className="font-semibold text-gray-300">Infosys Java Developer Certification</div>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <Award className="text-cyan-400 mb-3" size={28} />
                  <div className="font-semibold text-gray-300">Google Cloud Generative AI Specialization</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Achievements & Activities</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="font-semibold text-gray-200 mb-2">Event Coordinator – VoidBreaker at Tech-O-Utsav 2025</div>
                  <div className="text-gray-400">Led event coordination for a major tech festival</div>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="font-semibold text-gray-200 mb-2">Smart India Hackathon (SIH) Participant</div>
                  <div className="text-gray-400">Problem analysis, ideation & development</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0d1235]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:mayanksharma230700@acropolis.in"
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                  >
                    <Mail className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-gray-200">mayanksharma230700@acropolis.in</div>
                    </div>
                  </a>
                  <a
                    href="tel:+919302163614"
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                  >
                    <Phone className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-gray-200">+91 9302163614</div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/mayank588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                  >
                    <Github className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-400">GitHub</div>
                      <div className="text-gray-200">github.com/mayank588</div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mayank-sharma-948526230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                  >
                    <Linkedin className="text-cyan-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-400">LinkedIn</div>
                      <div className="text-gray-200">Mayank Sharma</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none text-gray-200"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 Mayank Sharma. Built with passion for backend development.</p>
          <p className="text-sm mt-2">Indore, Madhya Pradesh, India</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all"
    >
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, role, description, tags }: { title: string; role?: string; description: string; tags: string[] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all"
    >
      <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
      {role && <div className="text-gray-400 mb-4 font-semibold">{role}</div>}
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

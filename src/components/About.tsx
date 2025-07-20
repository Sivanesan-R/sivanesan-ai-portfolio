import { GraduationCap, MapPin, Calendar, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="tech-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                I'm Sivanesan from Tamil Nadu, currently pursuing a degree in Artificial Intelligence and Machine Learning. 
                I'm deeply passionate about robotics, automation, and building smart systems that can solve real-world problems.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                What drives me is the excitement of turning ideas into working projects—especially when it challenges my logic and creativity. 
                I'm also motivated by the goal of securing a placement in a top tech company where I can grow, innovate, and contribute to impactful solutions.
              </p>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            {/* Education */}
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-primary">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">B.Tech in Artificial Intelligence & Machine Learning</p>
                <div className="flex items-center text-muted-foreground">
                  <Building className="w-4 h-4 mr-2" />
                  <span>Hindusthan College of Engineering and Technology</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Graduating in 2026</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="tech-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium text-accent">Internship Trainee - Data Science</h4>
                  <p className="text-muted-foreground">Ether Infotech</p>
                </div>
                <div className="border-l-2 border-neon-green pl-4">
                  <h4 className="font-medium text-neon-green">Internship Trainee - Web Development</h4>
                  <p className="text-muted-foreground">Nitroware Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
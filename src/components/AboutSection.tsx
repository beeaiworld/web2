import { Button } from "@/components/ui/button";
import { Users, BookOpen, LightbulbIcon, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="gradient-text mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Drawing on the founder's skills in AI research, data science, and robotics engineering, 
              Bee AI World was born from a vision to bridge the gap between cutting-edge technology 
              and practical business applications.
            </p>
            <p className="text-lg mb-6">
              Since my inception, I've been driven by a simple mission: to make advanced 
              AI and robotics technologies accessible, practical, and valuable to businesses 
              across industries. I believe in technology that delivers measurable results.
            </p>
            <Button className="bg-tech-blue hover:bg-tech-blue-light text-white font-semibold">
              Meet Our Team
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="h-64 bg-gradient-to-r from-tech-blue to-tech-teal flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">Our Approach</h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Business-First Methodology</h4>
                    <p className="text-muted-foreground">
                      We start with understanding your business challenges, not pushing technology solutions.
                      Our focus is on delivering measurable business value.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Cross-Disciplinary Expertise</h4>
                    <p className="text-muted-foreground">
                      Our team brings together expertise in AI, machine learning, robotics,
                      computer vision, and domain-specific knowledge for your industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <LightbulbIcon className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Innovation with Purpose</h4>
                    <p className="text-muted-foreground">
                      We pursue innovation not for its own sake, but to solve
                      real problems and create tangible value for our clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Code className="h-6 w-6 text-tech-green" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Industry-Specific Methodology</h4>
                    <p className="text-muted-foreground">
                      We've developed specialized approaches for each industry we serve,
                      accounting for unique challenges, regulations, and opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "David Matthews",
    role: "CEO & Co-founder",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "With over 15 years in software development and entrepreneurship, David leads our strategic vision and client partnerships."
  },
  {
    name: "Jessica Chen",
    role: "CTO & Co-founder",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Jessica brings 12+ years of experience in software architecture and SaaS development, leading our technical innovations."
  },
  {
    name: "Mark Rodriguez",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Mark specializes in full-stack development with expertise in React, Node.js, and cloud infrastructure."
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Design Lead",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Sarah crafts beautiful, intuitive interfaces that elevate user experiences and drive engagement for our clients."
  },
  {
    name: "Michael Lee",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    bio: "Michael ensures smooth project delivery through agile methodologies and excellent client communication."
  },
  {
    name: "Emily Wilson",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Emily architects our CI/CD pipelines and cloud infrastructure to ensure reliable, scalable deployments."
  },
  {
    name: "Robert Taylor",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Robert creates robust APIs and backend systems that power our clients' SaaS applications."
  },
  {
    name: "Olivia Garcia",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    bio: "Olivia specializes in creating responsive, accessible, and visually stunning user interfaces."
  }
];

const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the talented professionals who bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

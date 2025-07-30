"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Heart,
  Zap,
  Star,
  Building,
  Truck,
  MapPin,
  Calendar,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const [counters, setCounters] = useState({ 
    deliveries: 0, 
    clients: 0, 
    cities: 0, 
    satisfaction: 0 
  });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    { label: "Successful Deliveries", value: "2M+", icon: Truck, color: "text-blue-600" },
    { label: "Happy Clients", value: "1000+", icon: Users, color: "text-green-600" },
    { label: "Cities Covered", value: "7", icon: MapPin, color: "text-purple-600" },
    { label: "Customer Satisfaction", value: "99%", icon: Star, color: "text-yellow-600" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable service you can count on every time",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Lightning-fast delivery without compromising on quality",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every package handled with the utmost care and attention",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate, on-time delivery to the exact location specified",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "MDS was established with a vision to revolutionize delivery services in the UAE",
      icon: Building
    },
    {
      year: "2019",
      title: "First 100 Clients",
      description: "Reached our first milestone of serving 100 satisfied business clients",
      icon: Users
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Launched our advanced AI-powered logistics platform",
      icon: Zap
    },
    {
      year: "2021",
      title: "Expansion Across UAE",
      description: "Extended services to cover all major cities in the United Arab Emirates",
      icon: Globe
    },
    {
      year: "2022",
      title: "1M Deliveries",
      description: "Celebrated our millionth successful delivery milestone",
      icon: Award
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as the leading delivery service provider in the UAE",
      icon: Star
    }
  ];

  const leadership = [
    {
      name: "Faisal Imran",
      position: "Managing Director (MD)",
      description: "Visionary leader with 15+ years in logistics and supply chain management",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      achievements: ["Strategic Planning", "Business Development", "Market Expansion"],
      image: "/assets/team/faisal.jpg"
    },
    {
      name: "Kashif I Jillani",
      position: "Chief Executive Officer (CEO)",
      description: "Operations expert focused on delivering exceptional customer experiences",
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      achievements: ["Operations Excellence", "Customer Relations", "Quality Assurance"],
      image: "/assets/team/kashif.jpg"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({ 
        deliveries: 2000000, 
        clients: 1000, 
        cities: 7, 
        satisfaction: 99 
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-blue text-white py-20 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"hexagon\" width=\"28\" height=\"24\" patternUnits=\"userSpaceOnUse\"><polygon points=\"14,2 26,8 26,16 14,22 2,16 2,8\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\" opacity=\"0.3\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23hexagon)\"/></svg>')",
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-black px-4 py-2">MDS</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We are the trusted delivery partner for businesses across the UAE, 
              combining cutting-edge technology with exceptional service to deliver success.
            </p>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Users className="h-16 w-16 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                My Delivery Services was born from a simple yet powerful vision: to become 
                the backbone of business success in the UAE through reliable, innovative 
                delivery solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our founding, we've grown from a small startup to the region's most 
                trusted delivery partner, serving everyone from local businesses to 
                multinational corporations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to say that when our clients need something delivered, 
                they simply say: <strong>"Let's MDS it!"</strong>
              </p>
              <Link href="/contact">
                <Button className="gradient-blue text-white px-8 py-3 text-lg">
                  Join Our Story
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Heart className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg">
                    To empower businesses across the UAE with delivery solutions that 
                    are not just reliable, but revolutionary.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="h-full"
                    >
                      <div className={`bg-gradient-to-br ${value.gradient} rounded-xl p-8 text-white h-full flex flex-col justify-center items-center text-center`}>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6"
                        >
                          <IconComponent className="h-8 w-8" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                        <p className="text-white/90">{value.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                      >
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10"
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the visionaries driving MDS forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`${leader.color} h-32 relative`}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                  >
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                </div>
                
                <div className="pt-12 p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-600 mb-6">{leader.description}</p>
                  
                  <div className="space-y-2">
                    {leader.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-center text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the MDS Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust MDS for their delivery needs. 
              Let's make your next delivery a success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;


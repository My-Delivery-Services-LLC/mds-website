"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Pill, 
  Shield, 
  Clock, 
  Thermometer, 
  CheckCircle,
  Heart,
  Stethoscope,
  AlertTriangle,
  Truck,
  Phone,
  FileText,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PharmacyServicePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({ deliveries: 0, pharmacies: 0, satisfaction: 0 });

  // Animated counters
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({ deliveries: 50000, pharmacies: 200, satisfaction: 99 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Healthcare Compliance",
      description: "Full compliance with UAE healthcare regulations and pharmaceutical standards",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Thermometer,
      title: "Cold Chain Management",
      description: "Temperature-controlled storage and delivery for sensitive medications",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Emergency Delivery",
      description: "24/7 emergency medication delivery for critical healthcare needs",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: FileText,
      title: "Prescription Handling",
      description: "Secure handling of prescription medications with proper documentation",
      color: "bg-green-100 text-green-600"
    }
  ];

  const medicationTypes = [
    {
      category: "Prescription Medications",
      items: ["Antibiotics", "Pain Management", "Chronic Disease Medications", "Specialty Drugs"],
      icon: Pill,
      gradient: "from-red-500 to-pink-500"
    },
    {
      category: "Medical Devices",
      items: ["Blood Pressure Monitors", "Diabetic Supplies", "Mobility Aids", "Diagnostic Equipment"],
      icon: Stethoscope,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Emergency Supplies",
      items: ["First Aid Kits", "Emergency Medications", "Medical Oxygen", "Critical Care Items"],
      icon: AlertTriangle,
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Wellness Products",
      items: ["Vitamins & Supplements", "Personal Care", "Health Monitoring", "Preventive Care"],
      icon: Heart,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const complianceStandards = [
    "UAE Ministry of Health Guidelines",
    "Good Distribution Practice (GDP)",
    "Cold Chain Management Standards",
    "Pharmaceutical Security Protocols",
    "Patient Privacy Protection",
    "Emergency Response Procedures"
  ];

  const deliveryProcess = [
    {
      step: 1,
      title: "Prescription Verification",
      description: "Secure verification of prescription authenticity and patient details",
      icon: FileText
    },
    {
      step: 2,
      title: "Medication Preparation",
      description: "Careful selection and packaging with temperature control if needed",
      icon: Pill
    },
    {
      step: 3,
      title: "Secure Transport",
      description: "GPS-tracked delivery with real-time temperature monitoring",
      icon: Truck
    },
    {
      step: 4,
      title: "Safe Handover",
      description: "Direct handover to patient or authorized representative",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative gradient-red text-white py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
            backgroundSize: "100px 100px"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-4"
                >
                  <Pill className="h-12 w-12" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Pharmacy Delivery
                </h1>
              </div>
              <p className="text-xl text-red-100 mb-8">
                Specialized medical delivery services ensuring safe, compliant, and timely 
                delivery of medications and medical supplies across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    Emergency Delivery
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Animated Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <Heart className="h-8 w-8 mx-auto mb-2 text-pink-300" />
                  <motion.div 
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {counters.deliveries.toLocaleString()}+
                  </motion.div>
                  <div className="text-sm text-red-100">Medical Deliveries</div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <Stethoscope className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                  <motion.div 
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    {counters.pharmacies}+
                  </motion.div>
                  <div className="text-sm text-red-100">Partner Pharmacies</div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center col-span-2"
                >
                  <Shield className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <motion.div 
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    {counters.satisfaction}%
                  </motion.div>
                  <div className="text-sm text-red-100">Compliance Rate</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Healthcare-Grade Delivery Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pharmacy delivery service meets the highest healthcare standards 
              to ensure patient safety and medication integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medication Types Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Medication Categories We Handle
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive delivery services for all types of medical products and supplies
            </p>
          </motion.div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {medicationTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="h-full"
                    >
                      <div className={`bg-gradient-to-br ${type.gradient} rounded-xl p-8 text-white h-full flex flex-col`}>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold">{type.category}</h3>
                        </div>
                        <ul className="space-y-2 flex-grow">
                          {type.items.map((item, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-white/90"
                            >
                              <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
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

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Regulatory Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We adhere to the strictest healthcare regulations and industry standards 
                to ensure safe and compliant medication delivery.
              </p>
              <div className="space-y-4">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    100% Compliant
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fully certified and compliant with all UAE healthcare regulations
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-500">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Service</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-500">2-8°C</div>
                      <div className="text-sm text-gray-600">Cold Chain</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Process with Animation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Secure Delivery Process
            </h2>
            <p className="text-lg text-gray-600">
              Every step is designed to maintain medication integrity and patient safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {index < deliveryProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-300 to-transparent z-0" />
                  )}
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative"
                    >
                      <span className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" />
                      {process.step}
                    </motion.div>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <IconComponent className="h-8 w-8 text-red-500 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="gradient-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Phone className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                24/7 Emergency Pharmacy Delivery
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Critical medications delivered any time, day or night. 
                Your health can't wait, and neither do we.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    Emergency Delivery
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Call +971-4-584-0628
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PharmacyServicePage;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Pill, 
  Package, 
  UtensilsCrossed,
  Clock,
  Shield,
  Truck,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: "grocery",
      title: "Grocery Stores",
      description: "Comprehensive grocery delivery services ensuring fresh products reach customers on time across Dubai and Sharjah.",
      icon: ShoppingCart,
      gradient: "gradient-green",
      href: "/services/grocery",
      features: [
        "Fresh produce delivery",
        "Temperature-controlled transport",
        "Same-day delivery available",
        "Bulk order handling"
      ]
    },
    {
      id: "pharmacy",
      title: "Pharmacies",
      description: "Specialized medical delivery services with strict compliance to healthcare regulations and safety standards.",
      icon: Pill,
      gradient: "gradient-red", 
      href: "/services/pharmacy",
      features: [
        "Medical product delivery",
        "Healthcare compliance",
        "Prescription handling",
        "Emergency delivery"
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Backbone delivery services for e-commerce platforms with efficient stock replenishment and customer delivery.",
      icon: Package,
      gradient: "gradient-purple",
      href: "/services/ecommerce",
      features: [
        "Stock replenishment",
        "Customer deliveries",
        "Return handling",
        "Inventory management"
      ]
    },
    {
      id: "restaurant",
      title: "Restaurants",
      description: "Food delivery services covering everything from ready meals to specialty items with timeslot and wholesale options.",
      icon: UtensilsCrossed,
      gradient: "gradient-orange",
      href: "/services/restaurant",
      features: [
        "Hot food delivery",
        "Timeslot delivery",
        "Wholesale delivery",
        "Special occasion orders"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service including weekends and holidays"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional handling with insurance coverage"
    },
    {
      icon: Truck,
      title: "Fleet Management",
      description: "Modern fleet with GPS tracking and temperature control"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality checks and customer satisfaction guarantee"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-black px-4 py-2">Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive delivery solutions tailored to meet the unique needs of different industries across the UAE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`${service.gradient} p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mr-4">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-white/90 mb-6">{service.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button className="w-full gradient-blue text-white hover:opacity-90">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose MDS?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with experienced professionals to deliver exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your delivery requirements and get a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                Get Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;


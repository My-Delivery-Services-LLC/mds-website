"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Clock, 
  Zap, 
  Calendar,
  ShoppingCart,
  Pill,
  Package,
  UtensilsCrossed,
  ArrowRight,
  Users,
  Cpu,
  RotateCcw,
  CalendarCheck,
  Ticket,
  Archive
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  const services = [
    {
      id: "grocery",
      title: "GROCERY STORES",
      description: "Our grocery delivery services are geared to ensure timely pick-up and delivery of items all across Dubai and Sharjah.",
      icon: ShoppingCart,
      gradient: "gradient-green",
      href: "/services/grocery"
    },
    {
      id: "pharmacy",
      title: "PHARMACIES", 
      description: "We deliver medicine, as well as medical products and devices, according to your needs while ensuring healthcare regulations compliance.",
      icon: Pill,
      gradient: "gradient-red",
      href: "/services/pharmacy"
    },
    {
      id: "ecommerce",
      title: "ECOMMERCE",
      description: "Ever wondered how eCommerce platforms replenish their stocks and ship goods to buyers so efficiently? MDS is the backbone of several established eCommerce platforms.",
      icon: Package,
      gradient: "gradient-purple",
      href: "/services/ecommerce"
    },
    {
      id: "restaurant",
      title: "RESTAURANTS",
      description: "We cater to everything from cakes, candies, and chocolate to ready meals, snacks, and refreshments. Whether timeslot or wholesale delivery.",
      icon: UtensilsCrossed,
      gradient: "gradient-orange",
      href: "/services/restaurant"
    }
  ];

  const deliveryTypes = [
    {
      icon: Clock,
      title: "Same day as well as late-night deliveries",
      description: "Quick and reliable delivery services available 24/7"
    },
    {
      icon: Zap,
      title: "One-hour bullet delivery",
      description: "Express delivery for urgent packages and documents"
    },
    {
      icon: Calendar,
      title: "Deliveries over Fridays / weekends and public holidays",
      description: "Continuous service even during holidays and weekends"
    }
  ];

  const leadership = [
    {
      name: "Faisal Imran",
      position: "Managing Director (MD)",
      color: "bg-blue-500",
      image: "/assets/team/faisal.jpg"
    },
    {
      name: "Kashif I Jillani", 
      position: "Chief Executive Officer (CEO)",
      color: "bg-red-500",
      image: "/assets/team/kashif.jpg"
    }
  ];

  const techBenefits = [
    {
      icon: RotateCcw,
      title: "Rejections options",
      description: "Flexible rejection handling system"
    },
    {
      icon: CalendarCheck,
      title: "Enabling self-scheduling for customers",
      description: "Customer-controlled delivery scheduling"
    },
    {
      icon: Ticket,
      title: "Customer ticket creation functionality",
      description: "Integrated support ticket system"
    },
    {
      icon: Archive,
      title: "Collection functionality",
      description: "Efficient package collection management"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "🌟 Employee Spotlight: Recognizing Our Top Performer of the Month in Talabat division 🌟",
      date: "22 AUG 2023",
      author: "Jana Corpuz",
      comments: "No Comments",
      gradient: "gradient-orange",
      href: "/blog/employee-spotlight-august-2023"
    },
    {
      id: 2,
      title: "Introducing Our New Mobile App: Making Delivery Simpler Than Ever!",
      date: "22 AUG 2023", 
      author: "Jana Corpuz",
      comments: "No Comments",
      gradient: "gradient-blue",
      href: "/blog/mobile-app-launch-2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                UAE Best{" "}
                <span className="bg-black text-white px-4 py-2 inline-block">
                  Delivery Service
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Fast and Reliable
              </h2>
              <p className="text-xl text-blue-100">
                Let us help you with your deliveries
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                    Let's Collaborate!
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/assets/hero_delivery_scene.png"
                alt="Delivery Service"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "One-hour, Same day as well as late-night deliveries",
              "Deliveries over Fridays, weekends and public holidays", 
              "Specialized deliveries in temperature controlled conditions",
              "On-demand as well as pre-scheduled delivery"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold mb-2">WHO WE ARE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We love it when our clients say-<br />
              <span className="text-blue-600">"Let's MDS it"</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              My Delivery Services provides a comprehensive range of delivery solutions to business customers in the United Arab Emirates. MDS is a trusted, reliable, and dependable partner for multinational as well as local businesses for their supply chain and logistics requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold mb-2">ABOUT US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              COMPANY INTRODUCTION
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Playing a pivotal role in an industry that has become the lifeline of modern business, MDS supports both international and local deliveries for its clients with customized solutions. Whether it is ecommerce platforms, or retail stores, or perishable products like flowers and cakes, or time-sensitive deliveries like that of medicines, MDS brings it together with its comprehensive delivery solutions that cover the length and breadth of the United Arab Emirates (UAE).
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Our delivery services are streamlined and include pick ups, delivery, and the handling of returns. We support one-off online orders placed by your customers and pick up and deliver orders directly from our clients' places to their customers.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${service.gradient} rounded-xl p-8 text-white h-full flex flex-col`}
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 mb-6 flex-grow">{service.description}</p>
                      <Link href={service.href}>
                        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                          VIEW MORE
                        </Button>
                      </Link>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button className="gradient-blue text-white px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Transformation Booking */}
      <section className="gradient-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For <span className="bg-black px-4 py-2">Product Transformation</span> Booking
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you with your deliveries!!
          </p>
          <Link href="/contact">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
              BOOK NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Types of Deliveries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              TYPES OF DELIVERIES
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Customer requirement drives our services. We offer deliveries designed to meet different customer and product requirements.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {deliveryTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-6"
                    >
                      <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6">
                        <IconComponent className="h-10 w-10 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-600">{type.description}</p>
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

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              LEADERSHIP TEAM
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Committed, knowledgeable, driven individuals are the moving force behind every successful enterprise. MDS is no different. We owe our success to our committed employees as well as the vision and drive of our leadership team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-lg text-blue-600 font-semibold">{leader.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High Quality Service */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            High Quality <span className="bg-blue-600 px-4 py-2">Delivery Service</span>
          </h2>
          <h3 className="text-2xl font-semibold mb-6">Fast and Reliable</h3>
          <p className="text-xl text-gray-300">
            We love it when our clients say – "Let's MDS it"
          </p>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ENABLING TECHNOLOGY
            </h2>
            <p className="text-sm text-blue-600 font-semibold mb-6">INTRODUCTION</p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Cutting-edge digital technology is one of the key pillars on which our services are built. It has all the advantages of recency and none of the baggage of legacy technologies. It leverages advances in Artificial Intelligence (AI), Cloud and Machine Learning (ML) technologies to make our operations efficient.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              BENEFITS TO CLIENTS OF MDS USING THE SYSTEM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold mb-2">OUR BLOG</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              News & Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`${post.gradient} h-48`}></div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {post.date} • {post.author} • {post.comments}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <Link href={post.href}>
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      READ MORE+
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button className="gradient-blue text-white px-8 py-3">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;


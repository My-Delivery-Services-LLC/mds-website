"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
    // You can integrate with your email service here
  };

  const usefulLinks = [
    { name: "Acceptable Use Policy", href: "/policies/acceptable-use" },
    { name: "Privacy Policy", href: "/policies/privacy" },
    { name: "Refund Policy", href: "/policies/refund" },
    { name: "Terms of Payment", href: "/policies/payment-terms" },
    { name: "Terms and Conditions", href: "/policies/terms" },
    { name: "Website Cookie Policy", href: "/policies/cookies" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/mdscouae", icon: Facebook },
    { name: "Twitter", href: "https://x.com/Mdsco_UAE", icon: Twitter },
    { name: "Instagram", href: "https://www.instagram.com/mdsco_uae", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/my-delivery-services-co-dubai", icon: Linkedin },
  ];

  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/mds_logo.png"
                alt="MDS Logo"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              My Delivery Services provides business customers with delivery related solutions based in
              the United Arab Emirates. MDS has become the trusted, reliable, and dependable brand name for
              multi-national and local businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">+971-4-584-0628</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">info@mdsco.ae</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">
                    Office 2304 The Prime Tower, Burj Khalifa Blvd,<br />
                    Business Bay Dubai UAE
                  </p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-green-500 hover:bg-green-600 text-white mt-4">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>

          {/* Subscribe Now */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Subscribe Now</h3>
            <p className="text-blue-100 text-sm">
              Don't miss our future updates! Get Subscribed Today!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-md bg-blue-700 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024. All Rights Reserved | myDelivery Services Co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


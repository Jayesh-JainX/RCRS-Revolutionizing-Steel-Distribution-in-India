"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import MapComponent from "../Map";

// Note: Metadata cannot be exported from client components
// SEO handled via root layout metadata template

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { toast } = useToast(); // Initialize toast
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          description: "Message sent successfully!",
          className: "text-green-500",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.errors
          ? errorData.errors.map((err) => err.msg).join(", ")
          : "Failed to send message.";
        toast({
          title: "An error occurred",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4 pt-2">Contact Us</h1>
      <p className="text-center mb-6 font-[family-name:var(--font-geist-sans)] px-2">
        We're here to assist you at Ram Chander Radhey Shyam Jaiswal with any
        inquiries or support you may need. Feel free to reach out using the
        information below.
      </p>
      <div className="container mx-auto p-6 rounded-lg shadow-md flex justify-center flex-col md:flex-row md:space-x-6">
        <div className="relative border rounded-xl sm:mx-6 md:w-1/2 p-6 overflow-hidden my-4 sm:my-0 flex flex-col justify-between h-full">
          <div className="relative z-10 flex-grow">
            <h2 className=" text-3xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
              Get in Touch
            </h2>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              We’re here to help! Whether you have questions about our services,
              need support, or want to explore partnership opportunities, our
              team is ready to assist you.
            </p>

            <h2 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
              Contact Information
            </h2>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              <strong>Email:</strong>{" "}
              <a href="mailto:rcrsjaiswal@gmail.com" className="text-blue-500">
                rcrsjaiswal@gmail.com
              </a>
            </p>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              <strong>Phone:</strong>{" "}
              <a href="tel:+91-9044944111">+91-9044944111</a>
            </p>
            <p className="mb-2 font-[family-name:var(--font-geist-sans)]">
              <strong>Address:</strong> Near Devkali bypass, Ayodhya, Uttar
              Pradesh, India
            </p>
          </div>
        </div>
      </div>

      <MapComponent />
    </div>
  );
};

export default ContactUs;

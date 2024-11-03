"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useToast } from "@/hooks/use-toast";

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
      <p className="text-center mb-6 font-[family-name:var(--font-geist-sans)]">
        We're here to assist you with any inquiries or support you may need.
        Feel free to reach out using the information below or by filling out the
        contact form.
      </p>
      <div className="container mx-auto p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        {/* Left Half - Contact Details */}
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
              <a href="mailto:info@rcrs.com" className="text-blue-500">
                info@rcrs.com
              </a>
            </p>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              <strong>Phone:</strong> +91-XXXXXXXXXX
            </p>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              <strong>Address:</strong> 123 Steel Lane, Khurja, Uttar Pradesh,
              India
            </p>

            <h2 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
              Follow Us
            </h2>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              Stay updated with our latest news and initiatives by following us
              on our social media channels.
            </p>
            <div className="flex space-x-4 mb-4 font-[family-name:var(--font-geist-sans)]">
              <a href="#" target="blank" className="text-blue-500">
                Facebook
              </a>
              <a href="#" className="text-blue-500">
                Twitter
              </a>
              <a href="#" className="text-blue-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Half - Contact Form */}
        <div className="border md:w-1/2 p-6 bg-primary-foreground rounded-lg flex flex-col">
          <h2 className="text-3xl font-semibold mb-6 font-[family-name:var(--font-geist-sans)] text-center">
            Send Us a Message
          </h2>

          <form
            className="flex flex-col flex-grow justify-between my-2 mx-3"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
            <Button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex-shrink-0 my-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

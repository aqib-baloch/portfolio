"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* -------------------------------------------------
   Typed animation variants
   ------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  /* -------------------------------------------------
     Validation
     ------------------------------------------------- */
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -------------------------------------------------
     Submit
     ------------------------------------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to send your message.");
      }

      setShowConfetti(true);
      setOpen(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setShowConfetti(false), 5000);
    } catch (error) {
      console.error(error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* ---------- SUCCESS DIALOG + CONFETTI ---------- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-2xl bg-gradient-to-br from-emerald-50 via-cyan-50 to-white dark:from-emerald-950 dark:via-cyan-950 dark:to-slate-900 border-0 shadow-2xl overflow-hidden">
          {showConfetti && (
            <Confetti
              width={width}
              height={height}
              recycle={false}
              numberOfPieces={200}
            />
          )}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center py-6"
          >
            <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full p-4 mb-4 shadow-lg">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Message Sent!
              </DialogTitle>
              <DialogDescription className="mt-2 text-slate-600 dark:text-slate-300">
                Thank you for reaching out.
                <br />
                I’ll get back to you soon.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => setOpen(false)}
              className="mt-6 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-full px-8"
            >
              Close
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* ---------- MAIN SECTION ---------- */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Let’s discuss your next project or opportunity. I’m always open to
              new challenges and collaborations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* ---------- LEFT – INFO ---------- */}
            <motion.div variants={itemVariants} className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Let’s Connect
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I’m currently open to new opportunities and interesting
                  projects. Whether you have a question, want to discuss a
                  potential collaboration, or just want to say hello, I’d love
                  to hear from you.
                </p>
              </div>

              {/* Contact items */}
              {[
                {
                  icon: (
                    <Mail className="h-6 w-6 text-blue-600 dark:text-white" />
                  ),
                  title: "Email",
                  value: "hafizaqibbaloch@gmail.com",
                  href: "mailto:hafizaqibbaloch@gmail.com",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: (
                    <Phone className="h-6 w-6 text-green-600 dark:text-white" />
                  ),
                  title: "Phone",
                  value: "+92 337 0683966",
                  href: "tel:+923370683966",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: (
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-white" />
                  ),
                  title: "Location",
                  value: "Sargodha, Pakistan",
                  href: null,
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${c.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </h4>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-slate-600 dark:text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-slate-600 dark:text-slate-300">
                        {c.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {[
                    {
                      Icon: Linkedin,
                      href: "https://linkedin.com/in/your-profile",
                      label: "LinkedIn",
                    },
                    {
                      Icon: Github,
                      href: "https://github.com/your-username",
                      label: "GitHub",
                    },
                  ].map(({ Icon, href, label }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -4, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 text-slate-700 dark:text-slate-200 hover:text-white transition-all shadow-md"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ---------- RIGHT – FORM ---------- */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="text-xl font-bold">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {["name", "email"].map((field) => (
                        <motion.div
                          key={field}
                          animate={
                            errors[field as keyof FormData]
                              ? { x: [-8, 8, -8, 8, 0] }
                              : {}
                          }
                          transition={{ duration: 0.4 }}
                        >
                          <Label
                            htmlFor={field}
                            className="text-sm font-medium text-slate-700 dark:text-slate-300"
                          >
                            {field === "name" ? "Name" : "Email"}
                          </Label>
                          <Input
                            id={field}
                            name={field}
                            type={field === "email" ? "email" : "text"}
                            required
                            value={formData[field as keyof FormData]}
                            onChange={handleChange}
                            placeholder={
                              field === "name" ? "John Doe" : "you@example.com"
                            }
                            className={`mt-1.5 transition-all border ${
                              errors[field as keyof FormData]
                                ? "border-red-400 focus:ring-red-400"
                                : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                            }`}
                          />
                          {errors[field as keyof FormData] && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors[field as keyof FormData]}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      animate={errors.subject ? { x: [-8, 8, -8, 8, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <Label
                        htmlFor="subject"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What’s this about?"
                        className={`mt-1.5 transition-all border ${
                          errors.subject
                            ? "border-red-400 focus:ring-red-400"
                            : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.subject}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      animate={errors.message ? { x: [-8, 8, -8, 8, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me more..."
                        className={`mt-1.5 transition-all border resize-none ${
                          errors.message
                            ? "border-red-400 focus:ring-red-400"
                            : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </motion.div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-500 hover:from-blue-700 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                    {submitError && (
                      <p className="text-sm text-red-500 text-center">
                        {submitError}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;

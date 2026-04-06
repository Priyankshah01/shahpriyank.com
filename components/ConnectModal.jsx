import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "motion/react";

function ConnectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type") || "";
      let data = {};

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(
          text?.includes("<!DOCTYPE")
            ? "API route not found or server returned an HTML error page."
            : "Unexpected server response."
        );
      }

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      toast.success("Message sent successfully.", { id: toastId });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
      }, 800);
    } catch (error) {
      console.error("Submit error:", error);
      toast.error(error.message || "Failed to send message.", {
        id: toastId,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="connect-modal-title"
            aria-describedby="connect-modal-description"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6 text-white shadow-2xl md:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/5 blur-[100px]" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/5 blur-[120px]" />
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:bg-white hover:text-black"
              >
                ×
              </button>

              <p className="text-[11px] uppercase tracking-[0.24em] text-white/35 md:text-xs">
                Let’s Connect
              </p>

              <h2
                id="connect-modal-title"
                className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
              >
                Let’s build something thoughtful together.
              </h2>

              <p
                id="connect-modal-description"
                className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base"
              >
                I’m open to product design roles, freelance opportunities, and
                meaningful collaborations.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-white/55"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSending}
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-white/55"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSending}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-white/55"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSending}
                    placeholder="Tell me a bit about your project, role, or idea..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
                  />
                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-white/40">
                    Usually replies within a few business days.
                  </p>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ConnectModal;
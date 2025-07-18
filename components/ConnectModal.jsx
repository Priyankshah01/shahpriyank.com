import React, { useState } from "react";
import toast from "react-hot-toast";
// import "../styles/Connect.css";

function ConnectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅", { id: toastId });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          onClose(); // ⏱️ Smooth close after toast
        }, 1500);
      } else {
        const data = await res.json();
        toast.error(data.message || "Something went wrong!", { id: toastId });
      }
    } catch (err) {
      console.error("Email send error:", err);
      toast.error("Failed to send message. Try again later.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Let’s build something together 🤝</h2>
        <p className="connect-subtext">
          I’m always open to new ideas, freelance work, or a coffee chat.
        </p>

        <form className="connect-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tell me a bit about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConnectModal;

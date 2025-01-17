import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;

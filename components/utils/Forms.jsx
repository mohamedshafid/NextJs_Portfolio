"use client";

import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Forms = () => {
  const form = useRef();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((preInfo) => ({
      ...preInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    emailjs
      .sendForm("service_jsrwjmq", "template_87oz3rw", form.current, {
        publicKey: "6-J4AE0KaUzCkWBkU",
      })
      .then(
        () => {
          toast.success("Message sent Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error("Error occured while sending Message", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
    setInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} ref={form}>
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="input"
          onChange={handleChange}
          value={info.name}
        />
        <input
          name="email"
          type="text"
          placeholder="Your Email"
          className="input"
          onChange={handleChange}
          value={info.email}
        />
      </div>
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className="input"
        onChange={handleChange}
        value={info.subject}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        rows={5}
        className="bg-black/10 p-5"
        onChange={handleChange}
        value={info.message}
      ></textarea>
      <button className="w-full p-2 bg-black/80 text-white font-mono">
        Send Message
      </button>
    </form>
  );
};

export default Forms;

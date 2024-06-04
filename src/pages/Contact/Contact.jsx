import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.scss";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact_bg">
        <div className="text_style_icons">
          <h2>Contact Us</h2>
          <p>
            Send us your request and we will get in touch with you as soon as
            possible
          </p>
          <div className="send_class">
            <div className="bg_fap">
              <FaPhoneVolume id="faphone" />
              <p>+380 98 782 82 23</p>
            </div>
            <div className="bg_iom">
              <IoMailUnreadOutline id="iomai" />
              <p>menumagic@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="form_bg_style">
          <label>
            Name
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </label>
          <label>
            Message
            <textarea
              placeholder="Your Message"
              cols="10"
              rows="5"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="error">{errors.message.message}</span>
            )}
          </label>
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
}

export default Contact;

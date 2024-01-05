import React from "react";
import Button from "./Inputs/Button";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="w-full bg-[#f7f8fc77] mt-20 p-2 pt-10" id="contact">
      <p className="text-[#fd6e0a] text-2xl sm:text-3xl font-semibold text-center mb-6">
        Lets talk about everything
      </p>

      <section className="">
        <div className="pb-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
          <p className="mb-4 lg:mb-8 font-normal text-center text-gray-500 sm:text-xl">
            Don{"'"}t like forms? send me an email at{" "}
            <u style={{ cursor: "pointer", color: "#fd6e0a" }}>
              jbbbregore099@gmail.com
            </u>
          </p>
          <form
            action="#"
            className="space-y-4 bg-white p-3 md:p-8 rounded-md shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
               border-gray-300 shadow-sm outline-none"
                placeholder=""
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 outline-none"
                placeholder=""
              ></textarea>
            </div>
            <div className="text-right">
              <Button title="Send Message" icon={<TfiEmail />} />
            </div>
          </form>

          <p className="text-sm text-gray-500 text-center dark:text-gray-400 mt-6">
            © Benedict 2024 | All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

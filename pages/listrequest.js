import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import React from "react";

const ListRequest = () => {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    // get data from form
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    console.log(name, email, subject, message);
    sendEmail({ name, email, subject, message });
  };

  const sendEmail = ({ name, email, subject, message }) => {
    var templatePrams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        "service_iy22fvk",
        "template_n1o1ook",
        templatePrams,
        "hdO9ge3e2RfKQzBb4"
      )
      .then(
        (result) => {
          console.log(result, "success");
          router.push("/thankyou");
        },
        (error) => {
          console.log(error, "error");
        }
      );
  };

  return (
    <div>
      <section className="bg-white w-full mx-auto flex sm:flex-row flex-col-reverse ">
        <div className="py-8 sm:w-1/2 lg:py-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.368542818115!2d81.62792811531624!3d21.256874485326655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd8deb6bae09%3A0x70360c9659ea4d94!2sRaipur%20Junction!5e0!3m2!1sen!2sin!4v1665491272235!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="sm:py-8  sm:w-1/2 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            List Your Car
          </h2>
          <p className="mb-8 lg:mb-16 text-center text-gray-500 sm:text-xl">
            Want to list your car? Fill out the form below and we will get back
            to you as soon as possible.
          </p>
          <form onSubmit={submitHandler} className="space-y-8">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name"
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
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="py-2 px-5 hover:scale-105  font-medium text-center text-green-500 border border-green-500 rounded-lg  sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ListRequest;

import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Support = () => {
  return (
    <section className=" min-h-screen py-8">
      <div className=" text-center">
        <h2 className="text-4xl text-center md:text-5xl font-bold text-blue-600 mb-4 ">Need Help?
      </h2>
        <p className="text-lg text-gray-700 mb-12">
          We’re here for you! Reach out if you have any questions or need assistance with Share Bite.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <Phone className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Call Us</h3>
            </div>
            <p className="text-gray-600">+880-123-456789</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <Mail className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Email Support</h3>
            </div>
            <p className="text-gray-600">support@sharebite.com</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <MapPin className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Our Location</h3>
            </div>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-left max-w-3xl mx-auto">
          <div className="flex items-center mb-6 text-blue-600">
            <MessageSquare className="w-6 h-6 mr-3" />
            <h3 className="text-2xl font-semibold">Send us a message</h3>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;

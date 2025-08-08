import { Mail, Phone, MapPin, MessageSquare, X } from "lucide-react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
const Support = () => {
  return (
    <section className=" min-h-screen py-8">
      <div className=" text-center">
        <h2 className="text-4xl text-center md:text-5xl font-bold text-blue-600 mb-4 ">
          Need Help?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We’re here for you! Reach out if you have any questions or need
          assistance with Share Bite.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl border p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <Phone className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Call Us</h3>
            </div>
            <p className="text-gray-600">+880-123-456789</p>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform border duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <Mail className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Email Support</h3>
            </div>
            <p className="text-gray-600">support@sharebite.com</p>
          </div>

          <div className="bg-white rounded-2xl  p-6 hover:scale-105 transition-transform border duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <MapPin className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Our Location</h3>
            </div>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* contact  */}
        <div className="relative mx-auto mt-12">
          <h2 className="text-4xl text-center md:text-5xl font-bold text-blue-600 mb-4 ">
            Contact Us
          </h2>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg space-y-6 text-gray-800">
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
                Let's Connect
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Whether you have a project idea, a question, or just want to say
                hello...
              </p>
              <div className="space-y-4 text-base sm:text-lg">
                <div className="flex items-center gap-4">
                  <FaYoutube className="text-blue-600 text-2xl sm:text-3xl" />
                  <a href="https://www.youtube.com/">
                    <span className="hover:underline hover:text-blue-600">
                      share-bite
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaTwitter className="text-blue-600 text-2xl sm:text-3xl" />
                  <a href="https://x.com/jahid_sabbir1">
                    <span className="hover:underline hover:text-blue-600">
                      share-bite
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaFacebook className="text-blue-600 text-2xl sm:text-3xl" />
                  <a href="https://www.facebook.com/">
                    <span className="hover:underline hover:text-blue-600">
                      share-bite
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <form className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
                Send us a message
              </h3>

              <div>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                />
              </div>

              <div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Briefly summarize"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition text-sm sm:text-base"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition text-base sm:text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

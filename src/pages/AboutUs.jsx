const AboutUs = () => {
  return (
    <section className="min-h-screen">
      <div className=" text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">About Share   Bitee</h1>
        <p className="text-lg text-gray-700 mb-12">
          Share   Bite is a community-driven platform dedicated to reducing food waste and fighting hunger. Our mission is
          to connect people who have excess food with those who need it most — quickly, safely, and sustainably.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-sm p-8   transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Story</h3>
            <p className="text-gray-700">
              Share   Bite started with a simple idea: what if we could bridge the gap between abundance and need? From our
              humble beginnings, we’ve grown into a vibrant community committed to sharing food and spreading kindness.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8   transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              We aim to empower individuals, restaurants, and organizations to share surplus food with those in need,
              reduce waste, and make our communities stronger and more compassionate.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8   transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where no one goes hungry and food is valued as a precious resource, not wasted. Share
                Bite is building the technology and community to make this vision a reality.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8   transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Share   Bite?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Easy to share and request food</li>
              <li>Safe and verified community</li>
              <li>Committed to zero food waste</li>
              <li>Make a real difference in people’s lives</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Join Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you have food to give or need a helping hand, Share   Bite is here for you. Be a part of our mission
            and help create a world with less waste and more compassion.
          </p>
          <button className="bg-blue-600 text-white font-semibold rounded-lg py-3 px-8 hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

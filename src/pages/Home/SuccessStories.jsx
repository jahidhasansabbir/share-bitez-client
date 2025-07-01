import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      quote:
        "Thanks to Share Bite, I was able to share my extra Iftar meals with a nearby family during Ramadan. It felt amazing to help someone just a few blocks away.",
      author: "Farzana, Donor from Dhaka",
    },
    {
      quote:
        "Being a university student, Share Bite helped me get warm, home-cooked meals when money was tight. It gave me comfort and energy to focus on my studies.",
      author: "Shakil, Student at DU",
    },
    {
      quote:
        "After losing my job, I struggled to provide food for my kids. Through Share Bite, I received meals from caring neighbors, restoring my hope.",
      author: "Imran, Father of Two",
    },
    {
      quote:
        "Sharing meals through Share Bite helped me meet amazing people and make a real impact. It's a simple way to show love in the community.",
      author: "Ayesha, Volunteer",
    },
    {
      quote:
        "Share Bite changed my perspective on food waste and giving back. I now donate meals every week, and it feels incredibly rewarding.",
      author: "Rafiq, Restaurant Owner",
    },
  ];

  return (
    <section className="relative ">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-10 relative hover:shadow-lg transition-shadow duration-500"
            >
              <p className="italic text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                “{story.quote}”
              </p>
              <p className="font-semibold text-gray-800 text-lg">
                – {story.author}
              </p>
              <div className="absolute top-0 left-6 text-blue-600 text-8xl opacity-10 select-none leading-none">
                “
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SuccessStories;

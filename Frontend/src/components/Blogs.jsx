import React from 'react';
import Header from "./Header";

const Blogs = () => {
  return (
    <>
      <Header />
      <section id="blogs">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <center>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Blogs</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  "Yoga is the journey of the self, through the self, to the self." -Bhagavad Gita
                </p>
              </center>
            </div>
            <div className="flex flex-wrap justify-center pt-10">
              {/* Blog Cards */}
              {[
                {
                  imgSrc: "https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Yoga: A Path to Inner Radiance",
                  description: "In the art of yoga, discover the gentle whispers of your breath guiding you towards a deeper connection with your body and spirit. Through mindful movements and moments of stillness, unlock the secret sanctuary of inner peace. Embrace yoga as a journey of self-discovery, where each asana unveils a new facet of your radiant essence."
                },
                {
                  imgSrc: "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Yoga: A Path to Inner Radiance",
                  description: "In the art of yoga, discover the gentle whispers of your breath guiding you towards a deeper connection with your body and spirit. Through mindful movements and moments of stillness, unlock the secret sanctuary of inner peace. Embrace yoga as a journey of self-discovery, where each asana unveils a new facet of your radiant essence."
                },
                {
                  imgSrc: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Yoga: A Path to Inner Radiance",
                  description: "In the art of yoga, discover the gentle whispers of your breath guiding you towards a deeper connection with your body and spirit. Through mindful movements and moments of stillness, unlock the secret sanctuary of inner peace. Embrace yoga as a journey of self-discovery, where each asana unveils a new facet of your radiant essence."
                },
                {
                  imgSrc: "https://images.pexels.com/photos/999250/pexels-photo-999250.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Yoga: A Path to Inner Radiance",
                  description: "In the art of yoga, discover the gentle whispers of your breath guiding you towards a deeper connection with your body and spirit. Through mindful movements and moments of stillness, unlock the secret sanctuary of inner peace. Embrace yoga as a journey of self-discovery, where each asana unveils a new facet of your radiant essence."
                },
                {
                  imgSrc: "https://images.pexels.com/photos/460307/pexels-photo-460307.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Yoga: A Path to Inner Radiance",
                  description: "In the art of yoga, discover the gentle whispers of your breath guiding you towards a deeper connection with your body and spirit. Through mindful movements and moments of stillness, unlock the secret sanctuary of inner peace. Embrace yoga as a journey of self-discovery, where each asana unveils a new facet of your radiant essence."
                },
                {
                  imgSrc: "https://images.pexels.com/photos/1525852/pexels-photo-1525852.jpeg?auto=compress&cs=tinysrgb&w=600",
                  title: "Yoga: A Path to Inner Radiance",
                  description: "In the art of yoga, discover the gentle whispers of your breath guiding you towards a deeper connection with your body and spirit. Through mindful movements and moments of stillness, unlock the secret sanctuary of inner peace. Embrace yoga as a journey of self-discovery, where each asana unveils a new facet of your radiant essence."
                }
              ].map((blog, index) => (
                <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <img className="w-full" src={blog.imgSrc} alt={blog.title} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{blog.title}</div>
                    <p className="text-gray-700 text-base">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

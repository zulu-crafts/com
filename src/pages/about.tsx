import HomeImage1 from '../assets/istockphoto-1438634414-612x612.jpg';
import HomeImage2 from '../assets/istockphoto-1434742171-612x612.jpg';
import { useEffect, useState } from 'react';
const About = () => {
  const images = [HomeImage1, HomeImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 about-container">

      <section className="bg-white text-gray-800" >
        <div className="home-image-container">
          <img
            src={images[currentIndex]}
            alt="Zulu Crafts Banner"
            className="home-image fade-in"
            key={currentIndex} // triggers animation
          />
          <div className="home-image-overlay"></div>
          <div className="home-image-text">
            <h1>Get to Know Us..</h1>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-blue-600 mb-2">About Us</h1>
        <p className="text-xl italic text-gray-600">
          Crafting Code into Art. Shaping Solutions into Experiences.
        </p>
        <p>
          At <span className="font-semibold">Zulu-Crafts</span>, we don’t just write code — we sculpt it.
          Every project is a canvas, every challenge a spark of inspiration. As a forward-thinking IT company,
          we pride ourselves on transforming complex problems into beautifully engineered solutions that
          don’t just work — they wow.
        </p>
        <p>
          Founded on the belief that technology should be both functional and elegant, Zulu-Crafts approaches
          every line of code, system architecture, and user interface with the eye of an artist and the
          precision of an engineer. Whether we’re building enterprise systems, designing scalable cloud
          solutions, or crafting seamless user experiences, we treat every detail with care, creativity,
          and craftsmanship.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">What Sets Us Apart</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>
            <strong>Artful Engineering:</strong> Our developers aren’t just coders — they’re creators.
            We build with intention, style, and an unrelenting focus on quality.
          </li>
          <li>
            <strong>Challenge-Driven Innovation:</strong> Every obstacle is an invitation to innovate.
            We see constraints not as limits, but as opportunities to break new ground.
          </li>
          <li>
            <strong>Holistic Solutions:</strong> From system architecture to UX design, we see the big picture —
            and we make sure every part of it fits, flows, and feels right.
          </li>
          <li>
            <strong>People-Centered Tech:</strong> At the core of every digital solution is a human need.
            We design technology that enhances experiences, not just functionality.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Our Mission</h2>
        <p className="italic">
          To transform digital challenges into powerful, elegant, and human-centered solutions —
          one beautifully crafted line of code at a time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Our Vision</h2>
        <p className="italic">
          To become a global leader in IT craftsmanship, where creativity, technology, and purpose come together
          to build a more connected and inspiring digital world.
        </p>
      </section>
    </div>
  );
};

export default About;

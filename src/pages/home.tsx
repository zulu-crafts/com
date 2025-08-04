import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImage1 from '../assets/1679408204561-preview.webp';
import HomeImage2 from '../assets/Website-Banner.webp';

// SVG Components
const Innovation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#0000F5">
    <path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z" />
  </svg>
);
const CraftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z" />
  </svg>
);



const Home = () => {
  const images = [HomeImage1, HomeImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* Slideshow Banner */}
      <div className="home-image-container">
        <img
          src={images[currentIndex]}
          alt="Zulu Crafts Banner"
          className="home-image fade-in"
          key={currentIndex}
        />
        <div className="home-image-overlay"></div>
        <div className="home-image-text">
          <h1>Welcome to Zulu-Crafts</h1>
          <p>Where Code Becomes Craft.</p>
        </div>
      </div>

      <div className="main">
        {/* What we believe in */}
        <div className="max-w-4xl mx-auto py-12 px-6 text-center">
          <h2>What We Believe In</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Zulu-Crafts, we believe technology should be more than functional — it should be beautiful,
            meaningful, and human. Every solution we create is rooted in craftsmanship, driven by innovation, and
            guided by purpose. We don’t just build software. We create digital experiences that resonate.
          </p>
        </div>

        {/* What We Stand For */}
        <div className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">What We Stand For</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800">
              {/* Craftsmanship */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <CraftIcon />
                  Craftsmanship at the Core
                </h3>
                <p>
                  We approach every project like an artisan — with care, precision, and a relentless commitment to quality.
                  From the first line of code to the final user experience, we sculpt technology that feels as good as it functions.
                </p>
              </div>

              {/* Innovation */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-blue-600">
                    <Innovation />
                  </span>
                  innovation
                </h3>


                <p>
                  Every problem is a canvas. We welcome complexity because it pushes us to think deeper, design smarter,
                  and build better. Constraints don’t limit us — they ignite our creativity.
                </p>
              </div>

              {/* Whole-System Thinking */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600">grid_view</span>
                  Whole-System Thinking
                </h3>
                <p>
                  We believe great solutions come from seeing the full picture. Our team blends system architecture,
                  UX design, and engineering into one cohesive experience that’s intuitive, scalable, and elegant.
                </p>
              </div>

              {/* Human-Centered Design */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600">diversity_3</span>
                  Human-Centered Design
                </h3>
                <p>
                  Technology is only as powerful as the people it serves. That’s why we design with empathy —
                  creating tools, systems, and platforms that solve real needs and elevate real experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Build Something Beautiful?</h3>
          <p className="text-gray-700 mb-6 text-lg">Let’s create technology that doesn’t just work — it wows.</p>
        </div>

        {/* Slideshow Footer Banner */}
        <div className="home-image-container">
          <img
            src={images[currentIndex]}
            alt="Zulu Crafts Banner"
            className="home-image fade-in"
            key={currentIndex}
          />
          <div className="home-image-overlay"></div>
          <div className="home-image-text flex gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded shadow transition"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

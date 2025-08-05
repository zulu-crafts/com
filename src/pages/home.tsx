import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImage1 from '../assets/1679408204561-preview.webp';
import HomeImage2 from '../assets/Website-Banner.webp';



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
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#173660"><path d="M120-120q-8 0-15.5-3.5T92-132q-12-11-12-27.5T91-188q19-20 45.5-24t53.5 1q8 2 15 4t12-3q6-6 4.5-15t-3.5-17q-4-27-1-53.5t22-46.5q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-1-53.5t22-46.5q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-.5-53.5T536-650q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-.5-53.5T685-804q19-20 45.5-24t53.5 1q8 2 15.5 3.5T812-827q11-12 27.5-12t28.5 11q12 11 12 27.5T869-772q-19 20-45.5 24.5T770-748q-8-2-15.5-4t-12.5 3q-6 6-4 15t4 17q4 27 .5 53.5T720-617q-19 20-45.5 24t-53.5-1q-8-2-15-4t-12 3q-6 6-4.5 15t3.5 17q4 27 1 53.5T572-463q-19 19-45.5 23.5T473-440q-8-2-15-3.5t-12 3.5q-6 6-4.5 14.5T445-409q4 27 1 53.5T424-309q-19 20-46 24t-54-1q-8-2-15-3.5t-12 3.5q-6 6-4 14.5t4 16.5q4 27 .5 53.5T275-155q-19 20-45.5 24t-53.5-1q-8-2-15-3.5t-12 3.5q-6 6-13.5 9t-15.5 3Zm120-400q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520Zm0-80q51 0 85.5-35t34.5-85q0-51-34.5-85.5T240-840q-50 0-85 34.5T120-720q0 50 35 85t85 35ZM640-40q-33 0-56.5-23.5T560-120v-200q0-33 23.5-56.5T640-400h200q33 0 56.5 23.5T920-320v200q0 33-23.5 56.5T840-40H640Zm0-80h200v-200H640v200Zm100-100ZM240-720Z"/></svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#173660"><path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#173660"><path d="M400-240q-33 0-56.5-23.5T320-320v-50q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v50q0 33-23.5 56.5T560-240H400Zm0-80h160v-92l34-24q41-28 63.5-71.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 22.5 92.5T366-436l34 24v92Zm0 240q-17 0-28.5-11.5T360-120v-40h240v40q0 17-11.5 28.5T560-80H400Zm80-520Z"/></svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#173660"><path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/></svg>
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

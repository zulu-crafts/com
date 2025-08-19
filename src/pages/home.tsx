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
    }, 5000); // change slide every 5 seconds

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
          key={currentIndex} // triggers animation
        />
        <div className="home-image-overlay"></div>
        <div className="home-image-text">
          <h1>Welcome to Zulu-Crafts</h1>
          <p>Where Code Becomes Craft.</p>
        </div>
      </div>
      <div className='main'>
        {/* What we beleive in*/}
        <div className="max-w-4xl mx-auto py-12 px-6 text-center">
          <h2>What We Beleive In</h2>
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
              <div>
                 <h3 className="icon-heading">
                  <span className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                  <path d="M120-120q-8 0-15.5-3.5T92-132q-12-11-12-27.5T91-188q19-20 45.5-24t53.5 1q8 2 15 4t12-3q6-6 4.5-15t-3.5-17q-4-27-1-53.5t22-46.5q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-1-53.5t22-46.5q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-.5-53.5T536-650q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-.5-53.5T685-804q19-20 45.5-24t53.5 1q8 2 15.5 3.5T812-827q11-12 27.5-12t28.5 11q12 11 12 27.5T869-772q-19 20-45.5 24.5T770-748q-8-2-15.5-4t-12.5 3q-6 6-4 15t4 17q4 27 .5 53.5T720-617q-19 20-45.5 24t-53.5-1q-8-2-15-4t-12 3q-6 6-4.5 15t3.5 17q4 27 1 53.5T572-463q-19 19-45.5 23.5T473-440q-8-2-15-3.5t-12 3.5q-6 6-4.5 14.5T445-409q4 27 1 53.5T424-309q-19 20-46 24t-54-1q-8-2-15-3.5t-12 3.5q-6 6-4 14.5t4 16.5q4 27 .5 53.5T275-155q-19 20-45.5 24t-53.5-1q-8-2-15-3.5t-12 3.5q-6 6-13.5 9t-15.5 3Zm120-400q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520Zm0-80q51 0 85.5-35t34.5-85q0-51-34.5-85.5T240-840q-50 0-85 34.5T120-720q0 50 35 85t85 35ZM640-40q-33 0-56.5-23.5T560-120v-200q0-33 23.5-56.5T640-400h200q33 0 56.5 23.5T920-320v200q0 33-23.5 56.5T840-40H640Zm0-80h200v-200H640v200Zm100-100ZM240-720Z"/>
                  </svg>
                  </span>
                   Craftsmanship at the Core
                </h3>
                <p>
                  We approach every project like an artisan — with care, precision, and a relentless commitment to quality.
                  From the first line of code to the final user experience, we sculpt technology that feels as good as it functions.
                </p>
              </div>
              <div>
                <h3 className="icon-heading">
                  <span className="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                      <path d="M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z" />
                    </svg>
                  </span>
                  Innovation Through Challenge
                </h3>
                <p>
                  Every problem is a canvas. We welcome complexity because it pushes us to think deeper, design smarter,
                  and build better. Constraints don’t limit us — they ignite our creativity.
                </p>
              </div>


              <div>
                <h3 className="icon-heading">
                  <span className="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/>
                    </svg>
                  </span>
                   Whole-System Thinking
                </h3>
                <p>
                  We believe great solutions come from seeing the full picture. Our team blends system architecture,
                  UX design, and engineering into one cohesive experience that’s intuitive, scalable, and elegant.
                </p>
              </div>

              <div>
                <h3 className="icon-heading">
                  <span className="icon-circle">
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                    <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"/>
                   </svg>
                  </span>
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
        {/* Slideshow Banner */}
        <div className="home-image-container">
          <img
            src={images[currentIndex]}
            alt="Zulu Crafts Banner"
            className="home-image fade-in"
            key={currentIndex} // triggers animation
          />
          <div className="home-image-overlay"></div>
          <div className="home-image-text">
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

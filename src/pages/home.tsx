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
                <h3 className="text-xl font-semibold mb-2">🎨 Craftsmanship at the Core</h3>
                <p>
                  We approach every project like an artisan — with care, precision, and a relentless commitment to quality.
                  From the first line of code to the final user experience, we sculpt technology that feels as good as it functions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 icon-circle"><span className="material-symbols-outlined">
                  cognition
                </span> Innovation Through Challenge</h3>
                <p>
                  Every problem is a canvas. We welcome complexity because it pushes us to think deeper, design smarter,
                  and build better. Constraints don’t limit us — they ignite our creativity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🧩 Whole-System Thinking</h3>
                <p>
                  We believe great solutions come from seeing the full picture. Our team blends system architecture,
                  UX design, and engineering into one cohesive experience that’s intuitive, scalable, and elegant.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">🤝 Human-Centered Design</h3>
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

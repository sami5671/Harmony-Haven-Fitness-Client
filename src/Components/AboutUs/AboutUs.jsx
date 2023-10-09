const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/public/sunriseyogaaa.jpg')`,
      }}
    >
      <div className="bg-black opacity-80 absolute inset-0"></div>
      <div className="relative z-10 text-white text-center p-10">
        <h2 className="text-6xl mb-4">About Us</h2>
        <p>
          Harmony Haven Yoga is a place of peace and well-being, dedicated to
          helping individuals find balance and tranquility in their lives
          through the practice of yoga.
        </p>
        <p>
          Founded in 2003, Harmony Haven Yoga has been on a journey of
          mindfulness and self-discovery for 20 years.
        </p>
        <h3 className="text-4xl mt-6 mb-4">Our Team</h3>
        <ul>
          <li>
            <strong>John Doe</strong> - Founder and Lead Instructor
          </li>
          <li>
            <strong>Jane Smith</strong> - Yoga Instructor
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

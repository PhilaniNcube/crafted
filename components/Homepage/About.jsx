import React from 'react';

const About = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-gray-700 min-h-[300px] md:min-h-[700px]"
      id="about"
    >
      <div
        className="w-full h-[700px] md:h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/about.jpg)' }}
      ></div>
      <div className="p-4 md:p-6 flex flex-col justify-center text-gray-600">
        <h2 className="font-extrabold text-3xl ">About Me</h2>
        <p className="py-2 font-medium">
          My name is Mzukisi Gaju. Born in South Africa, in a city called Port
          Elizabeth/Gqeberha. This is where I am currently based. I have always
          had an interest in photography, ever since I owned my first phone with
          a camera. I always had an obsession with taking pictures of the
          sunset, especially in the in West Coast, Saldanha - primarily that is
          where the sun sets on the beach - one of the best sunsets around. It
          was a walk away to the beach from where I was staying and I would take
          those sunset bangers using my phone camera, but inside wishing, if
          only I had owned a proper camera for such beautiful moments. So that
          is in a nutshell how my love for sunsets began. My work is an
          obsession, so whenever I hold my camera, every shoot is an opportunity
          to learn and to further develop my craft - discovering more about
          myself and what fascinates me more in photography.
        </p>
        <p className="py-2 font-medium">
          My portfolio showcases some favorite images; I strive to create
          photographs that not only capture a moment, but also capture a feeling
          and essence. I am available for portraits, groups/family, weddings,
          engagements, matric farewells and business events sessions. Prints of
          my personal work are also available. I’d love to hear from you, so
          feel free to contact me. Thank you for taking time to look at my site
          and work; I hope to meet you in the near future.
        </p>
      </div>
    </div>
  );
};

export default About;

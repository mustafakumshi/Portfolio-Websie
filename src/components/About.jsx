import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
            After graduating in 2020 with a Bachelor's Degree in Mechanical Engineering, I spent 1 year working as a Production Engineer.  I acquired project and time management skills, as well as the ability to communicate with team members and clients while effectively meeting milestones and deadlines. I am currently learning Frontend Technologies  and looking for a developer role where I can utilise my knowledge as well as strong analytical skills to be a valuable asset to the company.
        </p>

        <br />

        <p className="text-xl">
          Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more than willing to follow my fascinations wherever they take me. I'm passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I'm never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
        </p>
      </div>
    </div>
  );
};

export default About;

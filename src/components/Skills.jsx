import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const [category, setCategory] = useState("All");
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" />, category: "Frontend" },
    { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" />, category: "Frontend" },
    { name: "JavaScript", icon: <SiJavascript size={45} className="text-yellow-400" />, category: ["Frontend", "Programming"] },
    { name: "React", icon: <FaReact size={45} className="text-cyan-400" />, category: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap size={45} className="text-purple-600" />, category: "Frontend" },
    { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-sky-500" />, category: "Frontend" },

    { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-600" />, category: "Backend" },
    { name: "Express", icon: <SiExpress size={45} />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-500" />, category: "Backend" },

    { name: "Git", icon: <FaGitAlt size={45} className="text-orange-600" />, category: "Tools" },
    { name: "GitHub", icon: <SiGithub size={45} />, category: "Tools" },

    { name: "C++", icon: "💻", category: "Programming" },
  ];

  return (
    <section className="py-20 px-6" id="skills">

      <h2 className="text-4xl font-bold text-center mb-10">
        Technical Skills
      </h2>


      <div className="flex justify-center gap-4 flex-wrap mb-10">

        <button onClick={() => setCategory("All")}
        className="border px-5 py-2 rounded-full">
          All
        </button>

        <button onClick={() => setCategory("Frontend")}
        className="border px-5 py-2 rounded-full">
          Frontend
        </button>

        <button onClick={() => setCategory("Backend")}
        className="border px-5 py-2 rounded-full">
          Backend
        </button>

        <button onClick={() => setCategory("Programming")}
        className="border px-5 py-2 rounded-full">
          Programming
        </button>

        <button onClick={() => setCategory("Tools")}
        className="border px-5 py-2 rounded-full">
          Tools
        </button>

      </div>

      <div className="grid   grid-cols-2 md:grid-cols-4 gap-6">

        {skills
          .filter(
            (skill) =>
              category === "All" || skill.category.includes(category)
          )
          .map((skill) => (
            <div
              key={skill.name}
              className="bg-linear-to-b from-violet-200 to-slate-100 rounded-xl p-8 shadow hover:shadow-lg hover:-translate-y-2 duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

      </div>

    </section>
  );
}
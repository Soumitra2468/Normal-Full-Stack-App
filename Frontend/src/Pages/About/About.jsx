// src/pages/About.jsx
import React from "react";
import { FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";
import TodoLayout from "../../Layouts/TodoLayout";

export default function About() {
  return (
    <TodoLayout>
      <main className="space-y-24 py-16 bg-gray-50">
        {/* Mission Section */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empower developers worldwide with a robust, out-of-the-box
                full-stack boilerplate. We streamline the setup so you can focus
                on building features, not configuring tooling.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/mission-illustration.svg"
                alt="Mission illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Core Values
            </h2>
            <p className="text-gray-600 mt-2">
              Principles that guide every line of code we write.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition">
              <FaUsers size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">
                We prioritize collaboration, open-source contributions, and
                developer support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition">
              <FaBullseye size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Focused</h3>
              <p className="text-gray-600">
                Every feature is battle-tested, with best practices baked in for
                reliability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition">
              <FaLightbulb size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovative Spirit</h3>
              <p className="text-gray-600">
                We continually explore new tools and patterns to keep your stack
                cutting-edge.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
            <p className="text-gray-600 mt-2">
              A passionate group of full-stack engineers and designers.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Frontend Engineer",
                img: "/assets/team/alex.jpg",
              },
              {
                name: "Priya Singh",
                role: "Backend Engineer",
                img: "/assets/team/priya.jpg",
              },
              {
                name: "Luis García",
                role: "UX/UI Designer",
                img: "/assets/team/luis.jpg",
              },
              {
                name: "Sara Ahmed",
                role: "DevOps Engineer",
                img: "/assets/team/sara.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 p-6 rounded-lg text-center shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </TodoLayout>
  );
}

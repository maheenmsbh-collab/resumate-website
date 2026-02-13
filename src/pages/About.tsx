import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-10 py-16 min-h-screen bg-gray-50">
  
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            About <span className="text-yellow-500">Resumate</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Resumate is a modern resume-building platform designed to help you
            create professional, ATS-friendly resumes effortlessly. Whether
            you're a student, developer, or working professional, Resumate
            gives you the tools to stand out.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/about3.svg"
            alt="About illustration"
            className="w-full max-w-sm"
          />
        </div>
      </section>

 
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition flex flex-col items-center text-center"
          >
            <div className="h-12 w-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </section>


      <section className="bg-purple-700 rounded-3xl text-white p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission 🚀</h2>
          <p className="text-white/90 max-w-2xl leading-relaxed">
            Our mission is simple: remove the complexity from resume building
            and give everyone access to clean, effective, and beautiful
            resumes. We focus on clarity, usability, and performance —
            because your skills deserve the spotlight.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/about2.svg"
            alt="Mission illustration"
            className="w-full max-w-sm"
          />
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Professional Templates",
    description:
      "Carefully designed resume templates that look great and work perfectly with ATS systems.",
  },
  {
    title: "Easy Customization",
    description:
      "Edit content, sections, and layouts without dealing with complex formatting or design tools.",
  },
  {
    title: "Modern Tech Stack",
    description:
      "Built with React, TypeScript, and modern UI practices for speed, reliability, and scalability.",
  },
];

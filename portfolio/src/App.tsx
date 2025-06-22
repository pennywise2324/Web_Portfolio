import { useState } from "react";
import ProjectModal from "./ProjectModal";
import type { Project } from "./ProjectModal";
import antamLogo from "./assets/antam.png";
import bpnLogo from "./assets/bpn.png";
import urbanSprawl from "./assets/urban sprawl 1998-2023.png";
import banjirRob from "./assets/Potensi Banjir Rob Pekalongan.png";
import kekeringan from "./assets/area terdampak kekeringan.png";
import nbr from "./assets/nbr.png";
import banjir from "./assets/Banjir.png";
import perubahanPantai from "./assets/Perubahan Garis Pantai.png";
import ml from "./assets/Screenshot (1106).png";
import mahatma from "./assets/mahatma.png";
import skills from "./assets/tools.png";
import pasfoto from "./assets/pasfoto.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import FadeInOnScroll from "./FadeInOnScroll";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Urban Sprawl 1998–2023",
      description:
        "Analisis perubahan area terbangun Kota Bandung tahun 1998 hingga 2023 menggunakan indeks NDBI dan NDWI.",
      image: urbanSprawl,
    },
    {
      title: "Banjir Rob Pekalongan",
      description:
        "Pemetaan potensi banjir rob di Kota Pekalongan menggunakan data Sentinel dan metode MCDA.",
      image: banjirRob,
    },
    {
      title: "Area Terdampak Kekeringan",
      description:
        "Identifikasi wilayah terdampak kekeringan berdasarkan citra satelit dan indeks vegetasi.",
      image: kekeringan,
    },
    {
      title: "Kebakaran Hutan (NBR)",
      description:
        "Analisis area terdampak kebakaran hutan menggunakan indeks NBR dari citra satelit.",
      image: nbr,
    },
    {
      title: "Banjir di Kota Semarang",
      description:
        "Pemetaan ancaman banjir di Kota Semarang menggunakan pendekatan MCDA dan overlay spasial.",
      image: banjir,
    },
    {
      title: "Perubahan Garis Pantai",
      description:
        "Deteksi perubahan garis pantai akibat abrasi dan akresi dari tahun ke tahun.",
      image: perubahanPantai,
    },
  ];

  return (
    <div className="bg-[#171717] min-h-screen text-white font-kanit">
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
          duration: 0.5,
        }}
        className="flex items-center justify-between px-[20px] md:pl-[140px] pt-[50px] bg-[#171717] shadow-md"
      >
        <h1 className="text-2xl font-bold cursor-pointer">NaufalArd</h1>
        <ul className="flex space-x-8 text-lg pr-[20px] md:pr-[120px] gap-10">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#18BBD8] transition-all duration-300">
            About Me
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#18BBD8] transition-all duration-300">
            Experiences
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#18BBD8] transition-all duration-300">
            Projects
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#18BBD8] transition-all duration-300">
            Contact
          </li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <div className="px-[20px] md:pl-[156px] pt-[130px]">
        <h2 className="text-[#18BBD8] text-[30px]">
          <Typewriter
            words={["Hello, I'm Muhammad Naufal Ardian"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.2,
            duration: 0.3,
          }}
          className="text-white text-[46px] mt-[10px]"
        >
          Geodesy and Geomatics Engineer <br /> Who Interested in <br />{" "}
          Geospatial Technology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.4,
            duration: 0.3,
          }}
          className="text-[#BDBDBD] mt-[40px]"
        >
          Final-year student majoring in Geodesy and Geomatics Engineering at
          Institut <br /> Teknologi Bandung, equipped with strong analytical,
          problem-solving, and project <br /> management skills. Gained hands-on
          experience as a GIS Engineer and Geodetic <br /> Surveyor through
          internships, and actively participated in campus organizations and{" "}
          <br /> committees, sharpening communication, teamwork, and leadership
          abilities. Highly <br /> adaptable, fast learner, and driven to grow
          professionally. Eager to take on new <br /> challenges, contribute
          across diverse roles, and deliver meaningful impact in a <br />{" "}
          dynamic work environment.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.6,
            duration: 0.3,
          }}
          className="px-[35px] py-[15px] text-[16px] text-white mt-6 rounded-[10px] bg-[#18BBD8] hover:bg-white hover:text-[#18BBD8] cursor-pointer"
        >
          Download Resume
        </motion.button>
      </div>

      {/* Experiences */}
      <FadeInOnScroll>
        <div className="mt-[120px] mb-[45px]">
          <h2 className="text-[46px] md:py-[20px] md:pl-[156px] bg-gradient-to-r from-[#252424] from-30% via-[#171717] via-65% to-[#171717] to-90%">
            Experiences
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-20 py-[70px]">
            <div className="flex flex-col items-center">
              <img
                src={antamLogo}
                alt="Antam Logo"
                className="w-[320px] mb-4"
              />
              <h2 className="text-[30px] font-semibold">PT Aneka Tambang</h2>
              <p className="text-[#18BBD8] text-[24px] font-semibold mt-[10px]">
                Mine Survey
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={mahatma}
                alt="Mahatma Logo"
                className="w-[100px] mb-4"
              />
              <h2 className="text-[30px] font-semibold">
                PT Mahatma Sinergi Karya
              </h2>
              <p className="text-[#18BBD8] text-[24px] font-semibold mt-[10px]">
                GIS Engineer
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={bpnLogo} alt="BPN Logo" className="w-[100px] mb-4" />
              <h2 className="text-[30px] font-semibold">ATR/BPN Kota Cimahi</h2>
              <p className="text-[#18BBD8] text-[24px] font-semibold mt-[10px]">
                GIS Engineer
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* GIS Projects */}

      <div>
        <h2 className="text-[46px] md:py-[20px] md:pl-[156px] bg-gradient-to-r from-[#252424] from-30% via-[#171717] via-65% to-[#171717] to-90%">
          GIS & Remote Sensing Projects
        </h2>
        <div className="flex flex-col items-center pt-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-[20px] md:px-[156px] mt-10 items-center">
            {projects.map((project, index) => (
              <img
                key={index}
                src={project.image}
                alt={project.title}
                className="w-[750px] cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-[80px]">
            <img src={ml} alt="ML Projects" className="w-[1580px]" />
          </div>
          <button className="px-[64px] py-[15px] rounded-[10px] bg-[#18BBD8] text-[16px] mt-[50px] hover:bg-white hover:text-[#18BBD8] cursor-pointer">
            See More
          </button>
        </div>
      </div>

      {/* Tools n Skills */}
      <FadeInOnScroll>
        <div className="mt-[100px] text-center">
          <h2 className="text-[46px] py-[20px]">Tools & Skills</h2>
          <div className="mt-10 flex justify-center items-center">
            <img
              src={skills}
              alt="Tools and Skills"
              className="w-full max-w-[800px] h-auto mt-[20px]"
            />
          </div>
        </div>
      </FadeInOnScroll>

      {/* Contact */}
      <div className="h-[423px] bg-[#1D1D1D] mt-[400px]">
        <h2 className="text-[46px] font-kanit font-semibold absolute mt-[-90px] ml-[43%]">
          Contact Me
        </h2>
        <ul className="gap-y-4 text-[30px] ml-[43%] py-[30px]">
          <li>Email: naufal.ard.2@gmail.com</li>
          <li>LinkedIn</li>
          <li>Whatsapp</li>
        </ul>
        <div className="w-[572px] h-[463px] bg-gradient-to-b from-[#252424] to-[#171717] absolute mt-[-300px] ml-[200px]"></div>
        <img
          src={pasfoto}
          alt=""
          className="absolute mt-[-415px] ml-[260px] "
        />
      </div>
    </div>
  );
}

export default App;

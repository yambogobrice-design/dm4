"use client";
import React from 'react';
import Image from 'next/image';
import {
  AcademicCapIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

const About2iE = () => {
  const stats = [
    { label: "Étudiants", value: "2000+", icon: UserGroupIcon },
    { label: "Nationalités", value: "30+", icon: GlobeAltIcon },
    { label: "Diplômés", value: "8000+", icon: AcademicCapIcon },
    { label: "Partenaires", value: "150+", icon: BuildingOfficeIcon },
  ];

  const formations = [
    {
      title: "GÉNIE CIVIL",
      category: "INFRASTRUCTURES",
      description: "Construction durable et travaux publics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hm78lVP0YWT3qoGmykb8PP3ArcPwzwKiPQ&s",
      tag: "BTP",
      accent: "#C4A030"
    },
    {
      title: "HYDRAULIQUE",
      category: "EAU & ASSAINISSEMENT",
      description: "Gestion des ressources en eau",
      image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "ENVIRONNEMENT",
      accent: "#1A7AB5"
    },
    {
      title: "ÉNERGIE",
      category: "RENOUVELABLE",
      description: "Énergies propres et efficacité énergétique",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXTQh6cw8-N-X1ZZ_BU5W1SXz6Uxriv2gHw&s",
      tag: "INNOVATION",
      accent: "#C45A1A"
    },
    {
      title: "INFORMATIQUE",
      category: "DIGITAL & IA",
      description: "Développement et intelligence artificielle",
      image: "https://www.2ie-edu.org/wp-content/uploads/2020/03/sl4.jpg",
      tag: "TECH",
      accent: "#7A30C4"
    },
    {
      title: "ENVIRONNEMENT",
      category: "DÉVELOPPEMENT DURABLE",
      description: "Gestion durable et changement climatique",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7AW6lsrt8_c12zM-aoh1HHV7nFsvymXD8Q&s",
      tag: "ÉCOLOGIE",
      accent: "#1A8A45"
    }
  ];

  const campusFeatures = [
    {
      title: "LABORATOIRES",
      subtitle: "Équipements dernier cri",
      image: "https://www.2ie-edu.org/wp-content/uploads/2024/03/LABEREE-1.png"
    },
    {
      title: "BIBLIOTHÈQUE",
      subtitle: "Ressources internationales",
      image: "https://i.ytimg.com/vi/OozbEYhd5NQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgUihHMA8=&rs=AOn4CLA4rjmVVTmmc3tkGaCpqwS2l-y4xQ"
    },
    {
      title: "RÉSIDENCES",
      subtitle: "Cadre de vie moderne",
      image: "https://www.2ie-edu.org/wp-content/uploads/2020/07/1-4.jpg"
    },
    {
      title: "SPORTS",
      subtitle: "Infrastructures complètes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3zoRkXMRkS_cQf1Uy3ODvtMRdq0S5qKCww&s"
    },
    {
      title: "INCUBATEUR",
      subtitle: "Startups et innovation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2p5CwCoDGwsS1AvHBwnK8Xlfh9T_OxaRdBA&s"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .card-hover:hover { 
          transform: translateY(-8px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
        }

        .img-zoom {
          overflow: hidden;
        }
        .img-zoom img {
          transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .img-zoom:hover img { transform: scale(1.05); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up  { animation: fadeUp 0.8s ease-out both; }
        .delay-1  { animation-delay: 0.1s; }
        .delay-2  { animation-delay: 0.2s; }
        .delay-3  { animation-delay: 0.3s; }

        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .scroll-line { animation: scrollLine 1.8s ease-in-out infinite; }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="https://www.goafricaonline.com/uploads/media/default/0002/09/5f61e1b7b660f-accueil-2sie-burkina-faso.png"
            alt="Campus 2iE"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <p className="text-gray-400 text-xs tracking-[0.3em] mb-6 fade-up font-medium">
            INSTITUT D'EXCELLENCE · DEPUIS 1970
          </p>
          <h1 className="text-[clamp(4rem,15vw,12rem)] leading-none font-black text-gray-900 fade-up delay-1 tracking-tight">
            2iE
          </h1>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] leading-none text-gray-300 mt-4 font-light fade-up delay-2">
            INGÉNIERIE POUR L'AFRIQUE
          </h2>
          <p className="text-gray-400 text-lg mt-8 max-w-xl mx-auto leading-relaxed fade-up delay-3 font-light">
            Former les leaders de demain dans les domaines de l'eau,
            l'énergie et l'environnement.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-300 text-xs tracking-widest font-medium">SCROLL</span>
          <div className="w-[1px] h-14 bg-gray-200 overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-400 scroll-line" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <stat.icon className="w-6 h-6 text-gray-300 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-black text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 tracking-widest mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-gray-400 text-xs tracking-[0.3em] mb-4 font-medium">À PROPOS</p>
              <h2 className="section-title text-gray-900 mb-6">
                L'EXCELLENCE<br />AFRICAINE
              </h2>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                Fondé en 1970 au Burkina Faso, 2iE s'est imposé comme la référence
                en matière de formation d'ingénieurs sur le continent. Notre approche
                unique allie rigueur académique et innovation pour répondre aux défis
                du développement durable.
              </p>
            </div>
            <div className="relative h-[450px] md:h-[500px] overflow-hidden img-zoom rounded-2xl shadow-xl">
              <Image
                src="https://www.2ie-edu.org/wp-content/uploads/2024/07/DSC_1073-scaled.jpg"
                alt="Étudiants 2iE"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMATIONS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-xs tracking-[0.3em] mb-4 font-medium">NOS PROGRAMMES</p>
            <h2 className="section-title text-gray-900">
              FORMATIONS D'EXCELLENCE
            </h2>
          </div>

          {/* Première rangée - 3 formations */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {formations.slice(0, 3).map((f, i) => (
              <div key={i} className="group card-hover cursor-pointer">
                <div className="relative h-[380px] overflow-hidden img-zoom rounded-xl shadow-lg">
                  <Image src={f.image} alt={f.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-bold tracking-widest px-3 py-1.5 text-white rounded-full"
                      style={{ background: f.accent }}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-xs tracking-widest mb-1 font-medium">{f.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-white/70 text-sm mb-3 font-light">{f.description}</p>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white group-hover:gap-4 transition-all">
                      EN SAVOIR PLUS <ArrowLongRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deuxième rangée - 2 formations centrées (TECH & ÉCOLOGIE) */}
          <div className="flex justify-center gap-6 lg:gap-8 max-w-4xl mx-auto">
            {formations.slice(3, 5).map((f, i) => (
              <div key={i} className="flex-1 group card-hover cursor-pointer">
                <div className="relative h-[420px] overflow-hidden img-zoom rounded-xl shadow-lg">
                  <Image src={f.image} alt={f.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-bold tracking-widest px-3 py-1.5 text-white rounded-full"
                      style={{ background: f.accent }}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-xs tracking-widest mb-1 font-medium">{f.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-white/70 text-sm mb-3 font-light">{f.description}</p>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white group-hover:gap-4 transition-all">
                      EN SAVOIR PLUS <ArrowLongRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-xs tracking-[0.3em] mb-4 font-medium">INFRASTRUCTURES</p>
            <h2 className="section-title text-gray-900">
              UN CAMPUS D'EXCEPTION
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {campusFeatures.map((feature, i) => (
              <div key={i} className="group relative h-[260px] overflow-hidden img-zoom rounded-lg shadow-md cursor-pointer">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-lg font-bold text-white tracking-tight">{feature.title}</div>
                  <div className="text-white/60 text-xs mt-1 font-light">{feature.subtitle}</div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 bg-white" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black text-gray-900 mb-4 leading-tight">
            REJOIGNEZ<br />L'EXCELLENCE
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Intégrez une grande école d'ingénieurs et contribuez au
            développement durable de l'Afrique.
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="py-6 border-t border-gray-100 text-center bg-white">
        <p className="text-gray-300 text-xs tracking-widest font-medium">
          © 2iE · INSTITUT INTERNATIONAL DE L'EAU ET DE L'ASSAINISSEMENT
        </p>
      </div>
    </div>
  );
};

export default About2iE;
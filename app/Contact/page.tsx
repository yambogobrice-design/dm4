"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowLongRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface FormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form data:", formData);
    setSubmitted(true);
  };

  const contacts = [
    {
      icon: MapPinIcon,
      label: "Adresse",
      value: "Rue de la Science, Ouagadougou, Burkina Faso",
      accent: "#C4A030",
    },
    {
      icon: PhoneIcon,
      label: "Téléphone",
      value: "+226 25 49 28 00",
      accent: "#1A7AB5",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "contact@2ie-edu.org",
      accent: "#1A8A45",
    },
  ];

  const sujets = [
    "Admissions & Inscriptions",
    "Informations sur les formations",
    "Partenariat académique",
    "Recherche & Innovation",
    "Vie étudiante",
    "Autre",
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up   { animation: fadeUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both; }
        .delay-1   { animation-delay: 0.1s; }
        .delay-2   { animation-delay: 0.2s; }
        .delay-3   { animation-delay: 0.3s; }
        .delay-4   { animation-delay: 0.4s; }

        .field-wrap {
          position: relative;
        }
        .field-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: #C4A030;
          transition: width 0.35s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .field-wrap:focus-within .field-line {
          width: 100%;
        }

        .input-base {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D1CCC0;
          padding: 12px 0 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #0A0A0A;
          outline: none;
          transition: border-color 0.3s;
        }
        .input-base::placeholder { color: #B0A898; }
        .input-base:focus { border-bottom-color: transparent; }

        select.input-base option { background: #F7F5F0; }

        @keyframes scaleIn {
          from { transform: scale(0.85); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        .scale-in { animation: scaleIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) both; }

        .submit-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.3s;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #C4A030;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .submit-btn:hover::before { transform: translateX(0); }
        .submit-btn:hover { color: #0A0A0A; }
        .submit-btn span { position: relative; z-index: 1; }
      `}</style>

      {/* ── HEADER STRIP ── */}
      <div className="border-b border-[#0A0A0A]/5 bg-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display text-2xl text-[#0A0A0A] tracking-widest hover:text-[#C4A030] transition-colors">
            2iE
          </Link>
          <span className="font-body text-xs text-[#0A0A0A]/30 tracking-[0.3em]">CONTACT</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="py-20 md:py-28 border-b border-[#0A0A0A]/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-[#C4A030] text-xs tracking-[0.4em] mb-6 fade-up">
            NOUS CONTACTER
          </p>
          <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none text-[#0A0A0A] fade-up delay-1">
            CONTACTEZ NOUS
          </h1>
          <h2 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none text-[#0A0A0A]/15 -mt-2 fade-up delay-2">
            POUR PLUS D'INFORMATIONS
          </h2>
          <p className="font-body text-[#0A0A0A]/40 text-lg mt-8 max-w-lg mx-auto leading-relaxed fade-up delay-3 font-light">
            Vous plus qu'a un clic d'une expérience éducative d'exception
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* ── LEFT — Infos ── */}
            <div className="lg:col-span-2 fade-up delay-1">
              <p className="font-body text-[#C4A030] text-xs tracking-[0.4em] mb-8">
                INFORMATIONS
              </p>

              <div className="space-y-8 mb-14">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${c.accent}18` }}
                    >
                      <c.icon className="w-4 h-4" style={{ color: c.accent }} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#0A0A0A]/35 tracking-widest mb-1">
                        {c.label.toUpperCase()}
                      </p>
                      <p className="font-body text-[#0A0A0A]/75 text-sm leading-relaxed">
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Horaires */}
              <div className="border-t border-[#0A0A0A]/8 pt-8">
                <p className="font-body text-[#C4A030] text-xs tracking-[0.4em] mb-5">
                  HORAIRES D'OUVERTURE
                </p>
                <div className="space-y-2">
                  {[
                    ["Lundi – Vendredi", "08h00 – 17h00"],
                    ["Samedi", "09h00 – 12h00"],
                    ["Dimanche", "Fermé"],
                  ].map(([day, time], i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="font-body text-sm text-[#0A0A0A]/50 font-light">{day}</span>
                      <span className="font-body text-sm text-[#0A0A0A]/70 font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux */}
              <div className="border-t border-[#0A0A0A]/8 pt-8 mt-8">
                <p className="font-body text-[#C4A030] text-xs tracking-[0.4em] mb-5">
                  RÉSEAUX SOCIAUX
                </p>
                <div className="flex gap-3">
                  {["LinkedIn", "Facebook", "Twitter", "YouTube"].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="font-body text-xs font-medium px-3 py-2 border border-[#0A0A0A]/10 text-[#0A0A0A]/40 hover:border-[#C4A030] hover:text-[#C4A030] transition-all duration-300"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT — Formulaire ── */}
            <div className="lg:col-span-3 fade-up delay-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center scale-in">
                  <CheckCircleIcon className="w-16 h-16 text-[#1A8A45] mb-6" />
                  <h3 className="font-display text-4xl text-[#0A0A0A] mb-3">
                    MESSAGE ENVOYÉ
                  </h3>
                  <p className="font-body text-[#0A0A0A]/45 text-base leading-relaxed max-w-sm font-light">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les 48 heures.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ nom: "", email: "", sujet: "", message: "" }); }}
                    className="mt-8 font-body text-xs tracking-widest text-[#C4A030] border-b border-[#C4A030]/30 hover:border-[#C4A030] transition-colors pb-0.5"
                  >
                    ENVOYER UN AUTRE MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <p className="font-body text-[#C4A030] text-xs tracking-[0.4em]">
                    VOTRE MESSAGE
                  </p>

                  {/* Nom + Email */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="field-wrap">
                      <label htmlFor="nom" className="font-body text-[10px] tracking-widest text-[#0A0A0A]/35 block mb-1">
                        NOM COMPLET *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="input-base"
                        required
                      />
                      <div className="field-line" />
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="email" className="font-body text-[10px] tracking-widest text-[#0A0A0A]/35 block mb-1">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="input-base"
                        required
                      />
                      <div className="field-line" />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="field-wrap">
                    <label htmlFor="sujet" className="font-body text-[10px] tracking-widest text-[#0A0A0A]/35 block mb-1">
                      SUJET *
                    </label>
                    <select
                      id="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="input-base"
                      required
                    >
                      <option value="" disabled>Sélectionnez un sujet</option>
                      {sujets.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                    <div className="field-line" />
                  </div>

                  {/* Message */}
                  <div className="field-wrap">
                    <label htmlFor="message" className="font-body text-[10px] tracking-widest text-[#0A0A0A]/35 block mb-1">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande..."
                      rows={5}
                      className="input-base resize-none"
                      required
                    />
                    <div className="field-line" />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#0A0A0A]/8">
                    <p className="font-body text-xs text-[#0A0A0A]/30 font-light">
                      * Champs obligatoires
                    </p>
                    <button
                      type="submit"
                      className="submit-btn font-body font-medium tracking-widest text-sm px-10 py-4 bg-[#0A0A0A] text-white border border-[#0A0A0A] flex items-center gap-3"
                    >
                      <span>ENVOYER</span>
                      <span>
                        <ArrowLongRightIcon className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CARTE / MAP ── */}
      <section className="h-64 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#C4A030 1px, transparent 1px),
              linear-gradient(90deg, #C4A030 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPinIcon className="w-8 h-8 text-[#C4A030] mx-auto mb-3" />
            <p className="font-display text-2xl text-[#0A0A0A] tracking-widest">OUAGADOUGOU</p>
            <p className="font-body text-[#0A0A0A]/40 text-xs tracking-widest mt-1">BURKINA FASO</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="py-6 border-t border-[#0A0A0A]/5 text-center bg-white">
        <p className="font-body text-[#0A0A0A]/20 text-xs tracking-widest">
          © 2iE · INSTITUT INTERNATIONAL DE L'EAU ET DE L'ASSAINISSEMENT
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
"use client";
import React, { useState } from "react";
import Link from "next/link";

const App = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    filiere: "",
    email: "",
    motDePasse: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données d'inscription:", formData);
    // Ajoutez votre logique d'inscription ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold justify-center mb-2">
            Inscription
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Créez votre compte étudiant 2iE
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nom et Prénom sur la même ligne */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Champ Nom */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Nom</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">👤</span>
                  </div>
                  <input
                    type="text"
                    id="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="input input-bordered w-full pl-10 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Champ Prénom */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Prénom</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">👤</span>
                  </div>
                  <input
                    type="text"
                    id="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    className="input input-bordered w-full pl-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Âge et Filière */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Champ Âge */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Âge</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">🎂</span>
                  </div>
                  <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Votre âge"
                    min="16"
                    max="50"
                    className="input input-bordered w-full pl-10 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Champ Filière */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Filière souhaitée</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">🎓</span>
                  </div>
                  <input
                    type="text"
                    id="filiere"
                    value={formData.filiere}
                    onChange={handleChange}
                    placeholder="Ex: Génie Civil"
                    className="input input-bordered w-full pl-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email et Mot de passe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Champ Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">📧</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="input input-bordered w-full pl-10 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Champ Mot de passe */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Mot de passe</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">🔒</span>
                  </div>
                  <input
                    type="password"
                    id="motDePasse"
                    value={formData.motDePasse}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="input input-bordered w-full pl-10 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Case à cocher pour les conditions */}
            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mr-3"
                  required
                />
                <span className="label-text">
                  J'accepte les{" "}
                  <a href="#" className="link link-primary">
                    conditions d'utilisation
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="link link-primary">
                    politique de confidentialité
                  </a>
                </span>
              </label>
            </div>

            {/* Boutons */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button
                type="submit"
                className="btn btn-primary flex-1 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                S'inscrire
              </button>

              <Link href="/Connexion" className="btn btn-outline flex-1 py-3">
                Déjà un compte ? Se connecter
              </Link>
            </div>

            {/* Message d'information */}
            <div className="alert alert-info mt-6">
              <div className="flex">
                <span className="text-lg">ℹ️</span>
                <div className="ml-3">
                  <p className="text-sm">
                    Après inscription, vous recevrez un email de confirmation.
                    Contactez le service des admissions pour plus d'informations.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
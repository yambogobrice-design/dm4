"use client";

'use client'
import { useState } from 'react'
import Link from 'next/link'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Inscription from '../Inscription/page'
import Home from '../Home/page'

export default function Login() {
  // Déclaration des variables
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  // Fonction de soumission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Création du JSON des données
    const loginData = {
      email,
      password,
      remember
    }

    console.log('Données saisies :', JSON.stringify(loginData, null, 2))
alert ( JSON.stringify( loginData ) ) 


    // Ici tu peux appeler ton API pour envoyer loginData
    // Exemple : fetch('/api/login', { method: 'POST', body: JSON.stringify(loginData) })
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-white px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10">
        
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Connexion
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Connectez-vous pour accéder à votre espace étudiant
        </p>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <LockClosedIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              Se souvenir de moi
            </label>
            <Link href="/mot-de-passe-oublie" className="text-blue-600 hover:underline text-sm">
              Mot de passe oublié ?
            </Link>
          </div>

          <div className="flex gap-4">
  <Link href="/Home" className="btn btn-primary btn-block">Se connecter</Link>
</div>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-600">
          Pas encore de compte ?{" "}
          <Link href="/Inscription" className="text-blue-600 hover:underline">
            Créer un compte
          </Link>
        </p>

      </div>
    </section>
  )
}
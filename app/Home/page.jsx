"use client"
import Link from "next/link";

const USERS = [
  {
    id: 1,
    nom_prenom: 'Yancy Tear',
    date_naissance: '15/03/1995',
    avatar: 'https://img.daisyui.com/images/profile/demo/5@94.webp',
    filiere: 'Génie Civil',
    email: 'yancy.tear@example.com',
    pays: 'Brésil',
  },
  {
    id: 2,
    nom_prenom: 'Jean Dupont',
    date_naissance: '22/07/1994',
    avatar: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    filiere: 'Informatique',
    email: 'jean.dupont@example.com',
    pays: 'France',
  },
  {
    id: 3,
    nom_prenom: 'Aminata Diallo',
    date_naissance: '10/11/1996',
    avatar: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
    filiere: 'Hydraulique',
    email: 'aminata.diallo@example.com',
    pays: 'Sénégal',
  },
  {
    id: 4,
    nom_prenom: 'Mohammed Alami',
    date_naissance: '05/09/1993',
    avatar: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
    filiere: 'Énergie Renouvelable',
    email: 'mohammed.alami@example.com',
    pays: 'Maroc',
  },
  {
    id: 5,
    nom_prenom: 'Fatima Koné',
    date_naissance: '28/02/1995',
    avatar: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    filiere: 'Génie Civil',
    email: 'fatima.kone@example.com',
    pays: 'Côte d\'Ivoire',
  },
  {
    id: 6,
    nom_prenom: 'Thomas Mbarga',
    date_naissance: '17/12/1994',
    avatar: 'https://img.daisyui.com/images/profile/demo/6@94.webp',
    filiere: 'Informatique',
    email: 'thomas.mbarga@example.com',
    pays: 'Cameroun',
  }
];

export default function Home() {
  const handleDetails = (user) => {
    console.log('Détails de l\'étudiant:', user);
    // Ici vous pouvez ouvrir une modal ou naviguer vers une page de détails
    alert(`Étudiant: ${user.nom_prenom}\nFilière: ${user.filiere}\nEmail: ${user.email}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Liste des Étudiants</h1>
      
      {/* Tableau avec DaisyUI */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Tous les étudiants ({USERS.length})</h2>
        
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* en-tête */}
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nom & Prénom</th>
                <th>Date naissance</th>
                <th>Filière</th>
                <th>Email</th>
                <th>Pays</th>
                <th>Actions</th>
              </tr>
            </thead>
            
            {/* Corps du tableau */}
            <tbody>
              {USERS.map((user) => (
                <tr key={user.id} className="hover">
                  {/* Avatar */}
                  <td>
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full">
                        <img 
                          src={user.avatar} 
                          alt={user.nom_prenom}
                          onError={(e) => {
                            e.target.src = 'https://img.daisyui.com/images/profile/demo/2@94.webp'
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  
                  {/* Nom et prénom */}
                  <td>
                    <div className="font-bold">{user.nom_prenom}</div>
                  </td>
                  
                  {/* Date naissance */}
                  <td>{user.date_naissance}</td>
                  
                  {/* Filière avec badge de couleur */}
                  <td>
                    <span className={`badge ${
                      user.filiere === 'Génie Civil' ? 'badge-primary' :
                      user.filiere === 'Informatique' ? 'badge-secondary' :
                      user.filiere === 'Hydraulique' ? 'badge-accent' :
                      user.filiere === 'Énergie Renouvelable' ? 'badge-success' :
                      'badge-ghost'
                    } badge-sm`}>
                      {user.filiere}
                    </span>
                  </td>
                  
                  {/* Email */}
                  <td>{user.email}</td>
                  
                  {/* Pays avec drapeau (simulé) */}
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{user.pays}</span>
                    </div>
                  </td>
                  
                  {/* Bouton d'action */}
                  <td>
                    <button 
                      className="btn btn-sm btn-outline btn-primary"
                      onClick={() => handleDetails(user)}
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            
            {/* Pied du tableau avec résumé */}
            <tfoot>
              <tr>
                <th colSpan="7" className="text-center">
                  Total: {USERS.length} étudiants inscrits
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex gap-3 w-full">
           <Link href="/Apropos" className="btn btn-primary flex-1">À propos</Link>
           <Link href="/Contact" className="btn btn-secondary flex-1">Contact</Link>
        </div>
    </div>
     
    </div>
  );
}
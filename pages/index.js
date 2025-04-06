import { useState } from 'react';

export default function Home() {
  const [annonces, setAnnonces] = useState([]);
  const [formData, setFormData] = useState({
    titre: '',
    montant: '',
    duree: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnonces([...annonces, formData]);
    setFormData({ titre: '', montant: '', duree: '', description: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Déposer une annonce de prêt</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={formData.titre}
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="number"
          name="montant"
          placeholder="Montant"
          value={formData.montant}
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="text"
          name="duree"
          placeholder="Durée"
          value={formData.duree}
          onChange={handleChange}
          required
        /><br/><br/>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        /><br/><br/>
        <button type="submit">Publier</button>
      </form>

      <h2>Liste des annonces :</h2>
      <ul>
        {annonces.map((annonce, index) => (
          <li key={index}>
            <strong>{annonce.titre}</strong> - {annonce.montant}€ sur {annonce.duree}<br/>
            {annonce.description}
          </li>
        ))}
      </ul>
    </div>
  );
            }

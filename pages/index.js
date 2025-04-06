import { useState, useEffect } from 'react';

export default function Home() {
  const [annonces, setAnnonces] = useState([]);
  const [formData, setFormData] = useState({
    titre: '',
    montant: '',
    duree: '',
    description: '',
  });

  // Charger les annonces depuis localStorage au démarrage
  useEffect(() => {
    const annoncesStockees = localStorage.getItem('annonces');
    if (annoncesStockees) {
      setAnnonces(JSON.parse(annoncesStockees));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvellesAnnonces = [...annonces, formData];
    setAnnonces(nouvellesAnnonces);
    localStorage.setItem('annonces', JSON.stringify(nouvellesAnnonces));
    setFormData({ titre: '', montant: '', duree: '', description: '' });
  };

  const handleVoirAnnonces = () => {
    const annoncesStockees = localStorage.getItem('annonces');
    if (annoncesStockees) {
      setAnnonces(JSON.parse(annoncesStockees));
    }
  };

  const handleViderAnnonces = () => {
    localStorage.removeItem('annonces');
    setAnnonces([]);
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
        />
        <br /><br />
        <input
          type="number"
          name="montant"
          placeholder="Montant"
          value={formData.montant}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="duree"
          placeholder="Durée"
          value={formData.duree}
          onChange={handleChange}
          required
        />
        <br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <br /><br />
        <button type="submit">Publier</button>
      </form>

      <br />
      <button onClick={handleVoirAnnonces}>Voir les annonces enregistrées</button>
      &nbsp;
      <button onClick={handleViderAnnonces}>Vider les annonces</button>

      <h2>Liste des annonces :</h2>
      <ul>
        {annonces.map((annonce, index) => (
          <li key={index}>
            <strong>{annonce.titre}</strong> - {annonce.montant}€ sur {annonce.duree}<br />
            {annonce.description}
          </li>
        ))}
      </ul>
    </div>
  );
  }

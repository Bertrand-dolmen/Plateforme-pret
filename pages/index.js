import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prêt d'Argent</title>
        <meta name="description" content="Plateforme d'annonces de prêt d'argent entre particuliers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#333', fontSize: '2em' }}>Bienvenue sur Prêt d'Argent</h1>
        <p style={{ marginTop: '10px', fontSize: '1.2em' }}>
          Une plateforme simple et sécurisée pour publier ou consulter des annonces de prêt d'argent entre particuliers.
        </p>
      </main>
    </div>
  );
    }

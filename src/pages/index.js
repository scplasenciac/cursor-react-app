import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredSport: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here we would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Head>
        <title>FitMatch - Reserva tu Cancha, Mejora tu Salud</title>
        <meta name="description" content="Reserva canchas deportivas y sigue tu viaje de salud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Image 
            src={`${process.env.NODE_ENV === 'production' ? '/cursor-react-app' : ''}/sports-hero.jpg`}
            alt="Sports background" 
            className={styles.heroImage}
            width={1920}
            height={1080}
            priority
            quality={100}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Bienvenido a <span className={styles.highlight}>FitMatch</span>
            </h1>
            <p className={styles.description}>
              Reserva canchas, monitorea tu salud y únete a una comunidad de personas activas
            </p>
          </div>
        </section>

        {!submitted ? (
          <section className={styles.interestForm}>
            <h2>¿Interesado en nuestra aplicación?</h2>
            <p>¡Deja tus datos y te notificaremos cuando lancemos!</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="preferredSport">Deporte Preferido</label>
                <select
                  id="preferredSport"
                  name="preferredSport"
                  value={formData.preferredSport}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un deporte</option>
                  <option value="soccer">Fútbol</option>
                  <option value="basketball">Baloncesto</option>
                  <option value="volleyball">Voleibol</option>
                  <option value="padel">Pádel</option>
                </select>
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar Interés
              </button>
            </form>
          </section>
        ) : (
          <section className={styles.thankYou}>
            <h2>¡Gracias por tu interés!</h2>
            <p>Pronto nos pondremos en contacto contigo con más información sobre FitMatch.</p>
          </section>
        )}
      </main>
    </Layout>
  );
} 
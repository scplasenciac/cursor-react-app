import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Booking.module.css';

const SPORTS = ['Fútbol', 'Baloncesto', 'Voleibol'];
const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

export default function Booking() {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableCourts, setAvailableCourts] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Generate dates for the next 7 days
    const today = new Date();
    const next7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date;
    });
    setDates(next7Days);
  }, []);

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    // In a real app, this would fetch available courts from an API
    setAvailableCourts([`Cancha de ${sport} 1`, `Cancha de ${sport} 2`]);
  };

  const handleBooking = () => {
    if (selectedSport && selectedDate && selectedTime) {
      // In a real app, this would send the booking to a backend
      console.log('Booking details:', {
        sport: selectedSport,
        date: selectedDate,
        time: selectedTime,
      });
      alert('¡Reserva exitosa!');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Reservar Cancha - FitMatch</title>
        <meta name="description" content="Reserva tu cancha deportiva favorita" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Reservar Cancha</h1>

        <div className={styles.bookingContainer}>
          <div className={styles.sportSelection}>
            <h2>Seleccionar Deporte</h2>
            <div className={styles.sportButtons}>
              {SPORTS.map((sport) => (
                <button
                  key={sport}
                  className={`${styles.sportButton} ${
                    selectedSport === sport ? styles.selected : ''
                  }`}
                  onClick={() => handleSportSelect(sport)}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>

          {selectedSport && (
            <>
              <div className={styles.dateSelection}>
                <h2>Seleccionar Fecha</h2>
                <div className={styles.dates}>
                  {dates.map((date) => (
                    <button
                      key={date.toISOString()}
                      className={`${styles.dateButton} ${
                        selectedDate === date.toISOString().split('T')[0]
                          ? styles.selected
                          : ''
                      }`}
                      onClick={() =>
                        setSelectedDate(date.toISOString().split('T')[0])
                      }
                    >
                      {date.toLocaleDateString('es-ES', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.timeSelection}>
                <h2>Seleccionar Hora</h2>
                <div className={styles.timeSlots}>
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      className={`${styles.timeButton} ${
                        selectedTime === time ? styles.selected : ''
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className={styles.courtSelection}>
                  <h2>Canchas Disponibles</h2>
                  <div className={styles.courts}>
                    {availableCourts.map((court) => (
                      <div key={court} className={styles.courtCard}>
                        <h3>{court}</h3>
                        <button
                          className={styles.bookButton}
                          onClick={handleBooking}
                        >
                          Reservar Ahora
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </Layout>
  );
} 
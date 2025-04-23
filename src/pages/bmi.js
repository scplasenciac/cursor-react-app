import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/BMI.module.css';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory('Bajo peso');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Peso normal');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Sobrepeso');
      } else {
        setCategory('Obesidad');
      }
    }
  };

  const getHealthTips = () => {
    switch (category) {
      case 'Bajo peso':
        return [
          'Come con más frecuencia',
          'Elige alimentos ricos en nutrientes',
          'Incluye grasas saludables en tu dieta',
          'Considera ejercicios de fuerza'
        ];
      case 'Peso normal':
        return [
          'Mantén tus hábitos saludables actuales',
          'Mantente activo con ejercicio regular',
          'Lleva una dieta equilibrada',
          'Duerme lo suficiente'
        ];
      case 'Sobrepeso':
        return [
          'Comienza con ejercicio moderado',
          'Reduce el tamaño de las porciones',
          'Elige alimentos integrales en lugar de procesados',
          'Mantente hidratado'
        ];
      case 'Obesidad':
        return [
          'Consulta con un profesional de la salud',
          'Comienza con ejercicios de bajo impacto',
          'Enfócate en cambios de estilo de vida sostenibles',
          'Lleva un diario de alimentos'
        ];
      default:
        return [];
    }
  };

  return (
    <Layout>
      <Head>
        <title>Calculadora IMC - FitMatch</title>
        <meta name="description" content="Calcula tu IMC y obtén consejos de salud" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Calculadora IMC</h1>
        
        <div className={styles.calculator}>
          <div className={styles.inputGroup}>
            <label htmlFor="height">Altura (cm)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ingresa tu altura"
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="weight">Peso (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ingresa tu peso"
            />
          </div>
          
          <button onClick={calculateBMI} className={styles.calculateButton}>
            Calcular IMC
          </button>
        </div>

        {bmi && (
          <div className={styles.results}>
            <h2>Tus Resultados</h2>
            <p className={styles.bmiValue}>IMC: {bmi}</p>
            <p className={styles.category}>Categoría: {category}</p>
            
            <div className={styles.healthTips}>
              <h3>Consejos de Salud</h3>
              <ul>
                {getHealthTips().map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
} 
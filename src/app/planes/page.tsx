import Link from 'next/link';

/* Planes */
export default function PlanesPage() {
  // Array de planes
  const planes = [
    {
      nombre: "Plan Oro",
      precio: "$9.99",
      periodo: "/mes",
      color: "#FFD700",
      features: [
        "Acceso a todo el catálogo",
        "Reproducción en HD",
        "2 dispositivos simultáneos",
        "Sin anuncios",
        "Descargas ilimitadas"
      ]
    },
    {
      nombre: "Plan Diamante",
      precio: "$15.99",
      periodo: "/mes",
      color: "#B9F2FF",
      features: [
        "Acceso a todo el catálogo",
        "Reproducción en 4K Ultra HD",
        "4 dispositivos simultáneos",
        "Sin anuncios",
        "Descargas ilimitadas",
        "Contenido exclusivo",
        "Soporte prioritario"
      ]
    }
  ];

  return (
    <div className="container">
      {/* Encabezado */}
      <div className="card">
        <h1 className="title">NUTFLIX - Planes de Suscripción</h1>
      </div>

      {/* Grid de planes */}
      <div className="planes-grid">
        {planes.map((plan, index) => (
          <div 
            key={index} 
            className={`plan-card`}>
            
            <div className="plan-header">
              <h2 className="plan-nombre">{plan.nombre}</h2>
              <div className="plan-precio">
                <span className="precio">{plan.precio}</span>
                <span className="periodo">{plan.periodo}</span>
              </div>
            </div>
            {/* Features */}            
            <div className="plan-features">
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              className="btn btn-suscribir"
              style={{ backgroundColor: plan.color }}
            >
              Suscribirse Ahora
            </button>
          </div>
        ))}
      </div>

      {/* Botón para volver */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link href="/" className="btn btn-volver">
          ← Volver al Catálogo
        </Link>
      </div>
    </div>
  );
} 
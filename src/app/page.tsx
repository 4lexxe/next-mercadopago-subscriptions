export default function Home() {
  // Array de series o películas
  const catalog = [
    {
      title: "Stranger Things",
      genre: "Ciencia ficción / Misterio",
      img: "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "The Witcher",
      genre: "Fantasía / Aventura",
      img: "https://images.ecestaticos.com/W0V6uyEmrrT45Bor230Ah2PicNc=/0x0:1920x1080/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F653%2F945%2F1d4%2F6539451d47e70150b1cbe594756816db.jpg"
    },
    {
      title: "Black Mirror",
      genre: "Sci-Fi / Drama / Thriller",
      img: "https://media.gq.com.mx/photos/66f06cc998463deeaf2a4854/16:9/w_2560%2Cc_limit/BM.jpg"
    },
    {
      title: "Breaking Bad",
      genre: "Drama / Crimen",
      img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg"
    },
    {
      title: "BoJack Horseman",
      genre: "Animación / Comedia / Drama",
      img: "https://images.immediate.co.uk/production/volatile/sites/3/2016/07/113027.jpg"
    },
    {
      title: "The Crown",
      genre: "Histórica / Drama",
      img: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcSnFM_V_mWxOvdPn8vTB2rispevVWyYGj7IocNaEZBzvbvFIn6KzJZiFFV3JHVth9X_4wJ5ukU3_Wm0RCh_Aj2dqoy6LeacObX8.jpg?r=f43"
    }
  ];

  return (
    <div className="container">
      {/* Encabezado principal */}
      <div className="card">
        <h1 className="title">NUTFLIX</h1>
      </div>

      {/* Grid de películas/series */}
      <div className="grid">
        {catalog.map((item, index) => (
          <div key={index} className="product">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="price">{item.genre}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

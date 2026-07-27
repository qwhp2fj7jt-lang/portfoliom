export default function MyGoal({ baslik, paragraf, baglanti }) {
  return (

      <div className="m-0">
          <div className="flex justify-between">
        <h2 className="text-xl text-gray-700 mb-1 dark:text-gray-400">{baslik}</h2>
        {baglanti && baglanti}
        </div>
        <p className="text-gray-700 dark:text-gray-400">{paragraf}</p>


  
      </div>

  );
}

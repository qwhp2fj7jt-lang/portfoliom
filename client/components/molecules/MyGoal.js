export default function MyGoal({ baslik, paragraf, baglanti }) {
  return (

      <div className="mt-3">
          <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-3 dark:text-white">{baslik}</h2>
        {baglanti && baglanti}
        </div>
        <p className="text-gray-600 dark:text-white">{paragraf}</p>


  
      </div>

  );
}

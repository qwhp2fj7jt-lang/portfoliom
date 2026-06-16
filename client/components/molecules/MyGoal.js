export default function MyGoal({ baslik, paragraf, baglanti }) {
  return (

      <div className="m-0">
          <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-1 dark:text-gray-300">{baslik}</h2>
        {baglanti && baglanti}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{paragraf}</p>


  
      </div>

  );
}

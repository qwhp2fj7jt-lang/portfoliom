export default function PdfMakers({openPdf,pdfUrl,setOpenPdf}){
    return(
        <>

        {openPdf && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-white w-[90%] h-[90%] rounded-xl relative overflow-hidden">
            
                <button
                  onClick={() => setOpenPdf(false)}
                  className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded z-10"
                >
                  ✕
                </button>

 
                <iframe src={pdfUrl} className="w-full h-full" />
              </div>
            </div>
          )}        </>
    )
}
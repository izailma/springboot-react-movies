import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState , useEffect } from "react";
import { MoviePage } from "types/movie";

function Listing(){
    
    const[pageNumber, setPageNumber] = useState();

     useEffect(() => {

     }, []);

   //forma errada

   axios.get('${BASE_URL}/movie?size=128page=0')
   .then(response => {
      const data = reponse.data as MoviePage;
      setPageNumber()
   }); 


    return(
        <>
        <p>{pageNumber}</p>
       <Pagination />

       <div className="container">
       <div className="row">
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
           <MovieCard/>
           </div>
           
       </div>
        
       </div>

      
    </>
    );
}

export default Listing;
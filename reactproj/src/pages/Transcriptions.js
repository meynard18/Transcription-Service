import '../components/styles/Transcriptions.css';
import TBG from '../components/images/transcript-bg.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import DATA from '../MOCK_DATA.json';

function Transcriptions() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      axios.get(`api/products`).then((res) => {
         if (res['status'] === 200) {
            setProducts(res.data.products);
            setLoading(false);
         }
      });
   }, []);

   const [searchTerm, setSearchTerm] = useState("");

   const deleteProduct = (e, id) => {
      e.preventDefault();
      const delClick = e.currentTarget;
      delClick.innertext = 'Deleting';

      axios.delete(`api/deleteproduct/${id}`).then((res) => {
         if (res.data.status === 200) {
            swal('Deleted!', res.data.message, 'success');
            delClick.closest('tr').remove();
         } else if (res.data.status === 404) {
            swal('Error', res.data.message, 'error');
            delClick.innerText = 'Delete';
         }
      });
   };

   if (loading) {
      return <div className="transcriptions">
      <div className="container-fluid hero2">
           <figure>
               <img src={TBG} alt="" className="tbg" />
           </figure>
           <div className="hero2-text">
               <h3 className="ht2">
                   lorem ipsum dolor sit amet, consectetur adipiscing
               </h3>
           </div>
           <div class="container-sm input-group">
               <input
                   type="text"
                   class="form-control"
                   placeholder="SEARCH BY SONG TITLE OR ARTIST"
                   onChange = {(e) => {
                       setSearchTerm(e.target.value);
                   }}
               />
           </div>
       </div>

       <div className="container-sm song-list mt-5">
           <table className="table">
           <thead>
               <tr className="text-center">
                   <th>#</th>
                   <th>TITLE</th>
                   <th>ARTIST</th>
                   <th>CATEGORY</th>
                   <th>PRICE</th>
                   <th>ACTION</th>
               </tr>
           </thead>
           <tbody>
               {DATA.filter((val) => {
                   if (searchTerm === "") {
                       return val;
                   } else if (
                       val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       val.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       val.category.toLowerCase().includes(searchTerm.toLowerCase())
                   ) {
                       return val;
                   }
               }).map(m => 
                   (
                       <tr key={m.id} className="text-center">
                           <td>{m.id}</td>
                           <td>{m.title}</td>
                           <td>{m.artist}</td>
                           <td>{m.category}</td>
                           <td>{m.price}</td>
                           <td className="actions">
                               <button type="button" className="btn btn-default">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                       <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                       <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                   </svg>
                               </button>&nbsp;
                              {/*  <button type="button" className="btn btn-default">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                       <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                   </svg>
                               </button>&nbsp;
                               <button type="button" className="btn btn-default">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                       <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                   </svg>
                               </button> */}
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </div>
   </div>;


   } else {
      var product_HTMLTABLE = '';
      product_HTMLTABLE = products.map((item, index) => {
         return (
            <tr key={index}>
               <td>{item.id}</td>
               <td>{item.title}</td>
               <td>{item.artist}</td>
               <td>{item.category}</td>
               <td>{item.price}</td>
               <td>
                  <Link
                     to={`editproduct/${item.id}`}
                     className="btn btn-success btn-sm"
                  >
                     EDIT
                  </Link>
               </td>
               <td>
                  <button
                     type="button"
                     className="btn btn-danger btn-sm"
                     onClick={(e) => deleteProduct(e, item.id)}
                  >
                     DELETE
                  </button>
               </td>
<<<<<<< HEAD
               <td>
                  <button>Add Cart</button>
               </td>
            </tr>
=======
            </tr>       
>>>>>>> 843cef0 (added search functionality on transcription page)
         );
      });
   }

<<<<<<< HEAD
         <div className="container-sm song-list mt-5">
            <table className="table">
               <thead>
                  <tr className="text-center">
                     <th>#</th>
                     <th>TITLE</th>
                     <th>ARTIST</th>
                     <th>CATEGORY</th>
                     <th>PRICE</th>
                     <th>ACTION</th>
                  </tr>
               </thead>
               <tbody>
                  {product_HTMLTABLE}
                 
               </tbody>
            </table>
         </div>
      </div>
   );
=======
   

  
>>>>>>> 843cef0 (added search functionality on transcription page)
}

export default Transcriptions;

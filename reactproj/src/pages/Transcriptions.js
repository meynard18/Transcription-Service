import '../components/styles/Transcriptions.css';
import TBG from '../components/images/transcript-bg.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

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
      return <h4>Loading Product Data</h4>;
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
               <td>
                  <button>Add Cart</button>
               </td>
            </tr>
         );
      });
   }
   return (
      <div className="transcriptions">
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
               />
               <div class="input-group-append">
                  <button class="btn btn-default" type="button">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                     >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                     </svg>
                  </button>
               </div>
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
                  {product_HTMLTABLE}
                 
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Transcriptions;

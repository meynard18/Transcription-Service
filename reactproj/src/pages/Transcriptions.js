import '../components/styles/Transcriptions.css';
import TBG from '../components/images/transcript-bg.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
// import DATA from '../MOCK_DATA.json';

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
      return <h4>Loading Product Data</h4>;
   
   } else {
      var product_HTMLTABLE = '';
      product_HTMLTABLE = products.filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (
                                    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    val.artist.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val;
                                }
                            }).map((item, index) => {
         return (
            <tr key={index} className="text-center actions">
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
                   <i class="bi bi-pencil"></i>
                  </Link>&nbsp;

                  <button
                     type="button"
                     className="btn btn-danger btn-sm"
                     onClick={(e) => deleteProduct(e, item.id)}
                  >
                     <i class="bi bi-trash"></i>
                  </button>&nbsp;

                  <button
                  type="button"
                  className="btn btn-default btn-sm btn-warning"
                  >
                     <i class="bi bi-cart-plus"></i>
                  </button>
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
                  {product_HTMLTABLE}
                 
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Transcriptions;

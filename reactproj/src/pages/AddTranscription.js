import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

   mainContainer: {
      display: 'flex',
      gap: '10vw'
   },
   container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vh',
      padding: '2rem',
   },

   title: {
      textAlign: 'center',
      fontWeight: '600',
   },
   subTitle: {
      color: 'white',
      fontSize: '1rem',
   },
   button: {
      backgroundColor: '#93329e',
      color: 'white' ,
   },
}));

function AddProduct() {
   const history = useNavigate();
   const [productInput, setProduct] = useState({
      title: '',
      artisan: '',
      category: '',
      price: 0.0,
      error_list: [],
   });
   const handleInput = (e) => {
      console.log(e);
      e.persist();
      setProduct({ ...productInput, [e.target.name]: e.target.value });
   };

   const saveProduct = (e) => {
      e.preventDefault();
      const data = {
         title: productInput.title,
         artist: productInput.artist,
         category: productInput.category,
         price: productInput.price,
      };

      axios.post(`api/addProduct`, data).then((res) => {
         if (res.data.status === 200) {
            swal('Success', res.data.message, 'Success');
            setProduct({
               title: '',
               artist: '',
               category: '',
               price: 0.0,
               error_list: [],
            });
            history.push('/addProducts');
         } else if (res.data.status === 422) {
            setProduct({ ...productInput, error_list: res.data.validate_err });
         }
      });
   };

   const classes = useStyles();
   const theme = useTheme();
   return (
      <div className={classes.mainContainer}>
         <Sidebar />

         <div>
            <div className="card">
               <div className="card-header">
                  <h4 className={classes.title}>Add Product</h4>
                  <Link to={'/transcription'} className="btn btn-sm float-end">
                     Transcription
                  </Link>
               </div>
               <div className="card-body">
                  <form onSubmit={saveProduct} className={classes.container}>
                     <div className="form-group mb-3">
                        <label for="name" className={classes.subTitle}>Title</label>
                        <input
                           className="form-control"
                           type="text"
                           name="title"
                           onChange={handleInput}
                           value={productInput.title}
                        />
                        <span className="text-danger">
                           {productInput.error_list.title}
                        </span>
                     </div>

                     <div className="form-group mb-3">
                        <label for="description" className={classes.subTitle}>Artist</label>
                        <input
                           className="form-control"
                           type="text"
                           name="artist"
                           onChange={handleInput}
                           value={productInput.artist}
                        />
                        <span className="text-danger">
                           {productInput.error_list.artist}
                        </span>
                     </div>
                     <div class="form-group mb-3" className={classes.subTitle}>
                        <label for="price">Category</label>
                        <input
                           className="form-control"
                           type="text"
                           name="category"
                           onChange={handleInput}
                           value={productInput.category}
                        />
                        <span className="text-danger">
                           {productInput.error_list.category}
                        </span>
                     </div>
                     <div className="form-group mb-3">
                        <label for="inStock" className={classes.subTitle}>Price</label>
                        <input
                           className="form-control"
                           type="text"
                           name="price"
                           onChange={handleInput}
                           value={productInput.price}
                        />
                        <span className="text-danger">
                           {productInput.error_list.price}
                        </span>
                     </div>

                     <button type="submit" className={classes.button}>
                        Save
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AddProduct;

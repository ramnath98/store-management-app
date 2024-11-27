import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function Addproduct() {
  const { register, handleSubmit, reset } = useForm();

  const saveData = (product) => {
    console.log(product);
    axios.post('http://localhost:4000/Student', product)
      .then(res => {
        if (res.status === 201) 
          {
            
          alert("Product Details Saved!");
           }
        reset();
      })
      .catch(err => {
        alert("Failed to save product details. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-white w-50 mt-3 p-3">
        <h1 className="text-center fs-3 text-primary">Add Student Details</h1>
        <form onSubmit={handleSubmit(saveData)}>
          <div>
            <label className="form-label">Enter Id</label>
            <input type="text" {...register('id', { required: true })} className="form-control border border-dark" />
          </div>

          <div>
            <label className="form-label">Enter Student Name</label>
            <input type="text" {...register('sname', { required: true })} className="form-control border border-dark" />
          </div>

          <div>
            <label className="form-label">Enter Marks</label>
            <input type="number" {...register('marks', { required: true })} className="form-control border border-dark" />
          </div>

          <div>
            <label className="form-label">Enter College Name</label>
            <input type="text" {...register('cname', { required: true })} className="form-control border border-dark" />
          </div>

          <div>
            <label className="form-label">Enter University Name</label>
            <input type="text" {...register('uname', { required: true })} className="form-control border border-dark" />
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addproduct;

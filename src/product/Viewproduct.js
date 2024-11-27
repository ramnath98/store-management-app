import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Viewproduct() {
    const [products, setProducts] = useState([]);
    const [editableProductId, setEditableProductId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});
    const [isAdding, setIsAdding] = useState(false);

    const getData = () => {
        axios.get('http://localhost:4000/Student')
            .then(res => setProducts(res.data))
            .catch(error => console.error("Error fetching products:", error));
    };

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:4000/Student/${id}`)
            .then(res => {
                if (res.status === 200 || res.status === 204) {
                    alert("Product details removed.");
                    getData(); 
                }
            })
            .catch(error => console.error("Error deleting product:", error));
    };

    const startEditing = (product) => {
        setEditableProductId(product.id);
        setEditedProduct({ ...product });
    };

    const cancelEditing = () => {
        setEditableProductId(null);
        setEditedProduct({});
        setIsAdding(false); 
    };

    const saveProduct = (id) => {
        axios.put(`http://localhost:4000/Student/${id}`, editedProduct)
            .then(res => {
                if (res.status === 200 || res.status === 204) {
                    alert("Product updated successfully.");
                    setEditableProductId(null);
                    getData();
                }
            })
            .catch(error => console.error("Error updating product:", error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const startAdding = () => {
        setIsAdding(true);
        setEditedProduct({ sname: "", marks: "", cname: "", uname: "" }); 
    };

    const addProduct = () => {
        axios.post('http://localhost:4000/Student', editedProduct)
            .then(res => {
                if (res.status === 201) {
                    alert("Product added successfully.");
                    setIsAdding(false); 
                    getData(); 
                }
            })
            .catch(error => console.error("Error adding product:", error));
    };

    useEffect(getData, []);

    return (
        <div>
          
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Product List</h1>
                <button className="btn btn-primary" onClick={startAdding}>
                    Add Product
                </button>
            </div>

           
            {(isAdding || editableProductId !== null) && (
                <div className="mb-4 p-3 border rounded">
                    <h2>{isAdding ? "Add Product" : "Edit Product"}</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Sname</label>
                            <input
                                type="text"
                                name="sname"
                                className="form-control"
                                value={editedProduct.sname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Marks</label>
                            <input
                                type="number"
                                name="marks"
                                className="form-control"
                                value={editedProduct.marks}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">CName</label>
                            <input
                                type="text"
                                name="cname"
                                className="form-control"
                                value={editedProduct.cname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">UName</label>
                            <input
                                type="text"
                                name="uname"
                                className="form-control"
                                value={editedProduct.uname}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        <button
                            type="button"
                            className="btn btn-success me-2"
                            onClick={isAdding ? addProduct : () => saveProduct(editableProductId)}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={cancelEditing}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}

           
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Sname</th>
                        <th>Marks</th>
                        <th>CName</th>
                        <th>UName</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.sname}</td>
                            <td>{product.marks}</td>
                            <td>{product.cname}</td>
                            <td>{product.uname}</td>
                            <td><img src={product.proImage} height="50px" ></img></td>
                            
                            <td>
                                <button
                                    className="btn btn-outline-danger me-4"
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>

                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => startEditing(product)}
                                >
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Viewproduct;

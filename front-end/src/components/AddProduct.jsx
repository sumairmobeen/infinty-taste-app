import React from 'react'

import { useState, useRef } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import url from './BaseUrl';
import { useGlobalState } from "./../context/globalContext";

import './admin.css';
import fallback from './../images/image_1024.png';


// let url = 'http://localhost:5000'

export default function AddProduct() {
    let [msg, setMsg] = useState()
    const globalState = useGlobalState();


    function addProduct(e) {
        e.preventDefault()
        console.log("Button Running")
        var fileInput = document.getElementById("customFile");
        var productName = document.getElementById("pName");
        var price = document.getElementById("price");
        var description = document.getElementById("description");
        var stock = document.getElementById("stock");
        let formData = new FormData();
        formData.append("myFile", fileInput.files[0]);
        formData.append("productName", productName.value);
        formData.append("price", price.value);
        formData.append("description", description.value);
        formData.append("stock", stock.value);

        axios({
            method: 'post',
            url: url + "/admindashboard",
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
            .then(response => {
                alert(response.data.message)
            })
            .catch(err => {
                console.log(err);
            })

    }
    console.log(msg)
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mt-5">
                                    <form onSubmit={addProduct}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Product Name</label>
                                                <input type="text" className="form-control" id="pName" placeholder="Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Price</label>
                                                <input type="number" className="form-control" id="price" placeholder="Price" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Stock</label>
                                                <input type="text" className="form-control" id="stock" placeholder="Stock" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Description</label>
                                                <input type="text" className="form-control" id="description" placeholder="Description" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" for="customFile">Choose Image</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Confirm Order</button>
                                    </form><br />
                                    {msg ? <div class="alert alert-success" role="alert">
                                        {msg}
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                </MDBRow>

            </MDBContainer>

            {/* <Crousel /> */}

            { '===>' + JSON.stringify(globalState)}







        </div >




    )
}

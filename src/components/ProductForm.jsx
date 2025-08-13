import { useState } from "react";

function ProductForm() {
  const [name , getName] = useState("")
  const [image , getImage] = useState("")
  const [price , getPrice] = useState("")
  const [description , getDescription] = useState("")
  const [email , getEmail] = useState("")

  const [nameError, setNameError] = useState("") 
  const [imageError, setImageError] = useState("") 
  const [priceError, setPriceError] = useState("")  
  const [descriptionError, setDescriptionError] = useState("") 
  const [emailError, setEmailError] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    if (!name) {
      setNameError ("Name is required.");
      isError = true;
    } else {
      setNameError("");
    }

    if (!image) {
      setImageError("Image URL is required.");
      isError = true;
    } else {
      setImageError("");
    }

    if (!price) {
      setPriceError("Price is required.");
      isError = true;
    } else {
      if (price >= 0) {
        setPriceError("");
      } else {
        setPriceError("Price cannot be less than 0.");
        isError = true;
      }
    }

    if (!description) {
      setDescriptionError("Description is required.");
      isError = true;
    } else {
      setDescriptionError("");
    }
   
    if (!email) {
      setEmailError("Email is required.");
      isError = true;
    } else {
      setEmailError("");
    }

   
    // !name ? <div>Name is required.</div>: null
    // !image ? <div>Image URL is required.</div> : null
    // !price ? <div>Price is required.</div> :  price >= 0 ? null : "Price cannot be less than 0."
    // !description ? <div>Description is required.</div>: null
    // !email ?<div>Email is required.</div>: null

    const data = {
      name: name,
      image: image,
      price: price ,
      description: description,
      email: email
    } 
     if(isError === false){
        alert(JSON.stringify(data,null,2))
     }
  }

 
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => {getName(e.target.value)}}
          />
        </label>
        {nameError}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(e) => {getImage(e.target.value)}}
          />
          
        </label>
        {imageError}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) => {getPrice(e.target.value)}}
          />
        
        </label>
        {priceError}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {getDescription(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
        {descriptionError}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => {getEmail(e.target.value)}}
          />
          
        </label>
        {emailError}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;

import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    let formErrors = {};
    if (!name) {
      formErrors.name = "Name is required.";
    }
    if (!image) {
      formErrors.image = "Image URL is required.";
    }
    if (!price) {
      formErrors.price = "Price is required.";
    } else if (price && price < 0) {
      formErrors.price = "Price cannot be less than 0.";
    }
    if (!description) {
      formErrors.description = "Description is required.";
    }
    if (!email) {
      {
        formErrors.email = "Email is required.";
      }
    } else if (!isValidEmail(email)) {
      formErrors.email = "Invalid email format.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;
  
    const newFormData = { name, image, price, description, email };
    alert(JSON.stringify(newFormData, null, 2));

    setName("");
    setImage("");
    setPrice("");
    setDescription("");
    setEmail("");
    setErrors({});
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
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          />
        </label>
        {errors.image && <p className="error-text">{errors.image}</p>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </label>
        {errors.price && <p className="error-text">{errors.price}</p>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
        {errors.description && (
          <p className="error-text">{errors.description}</p>
        )}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email here"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
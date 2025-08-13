import { useState } from "react";

function ProductForm() {
  const [username, setUsername] = useState("")
  const [images, setImages] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")

  const [nameError, setNameError] = useState("")
  const [imageError, setImageError] = useState("")
  const [priceError, setPriceError] = useState("")
  const [descriptionError, setDescriptionError] = useState("")
  const [emailError, setEmaolError] = useState("")

  const handleSubmit = (event) => {
    let isError = false;
    let emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!username) {
      setNameError("Name is required.");
      isError = true;
    } else {
      setNameError("");
    }
    if (!images) {
      setImageError("Image is required.");
      isError = true;
    } else {
      setImageError("");
    }
    if (!price) {
      setPriceError("Price is required.");
      isError = true;
    } else if (price <= 0) {
      setPriceError("Price cannot be less than 0.");
      isError = true;
    } else {
      setPriceError("");
    }
    if (!description) {
      setDescriptionError("Description is required.");
      isError = true;
    } else {
      setDescriptionError("");
    }
    if (!email) {
      setEmaolError("Email is required");
      isError = true;
    } else if (!emailRule.test(email.trim())) {
      setEmaolError("Invalid email format.");
      isError = true;
    } else {
      setEmaolError("");
    }

    event.preventDefault();
    if (isError === false) {
      const data = {
        username: username,
        price: price,
        images: images,
        description: description,
        email: email,
      };
      
      alert(JSON.stringify(data, null, 2));
    }
  }

  const style_alert = (msg) => {
    return {
      display: msg ? "inline-block" : "none",
      backgroundColor: "#7f1d1d",
      color: "#fff",
      padding: "14px 16px",
      borderRadius: "8px",
      fontSize: "20px",
      marginTop: "6px",
      fontWeight: 500,
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
            value={username}
            onChange={(event) => { setUsername(event.target.value) }}
          />
        </label>
        <p style={style_alert(nameError)}>{nameError}</p>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={images}
            onChange={(event) => { setImages(event.target.value) }}
          />
        </label>
        <p style={style_alert(imageError)}>{imageError}</p>
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
            onChange={(event) => { setPrice(event.target.value) }}
          />
        </label>
        <p style={style_alert(priceError)}>{priceError}</p>
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
            onChange={(event) => { setDescription(event.target.value) }}
            rows={4}
            cols={30}
          />
        </label>
        <p style={style_alert(descriptionError)}>{descriptionError}</p>
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
            onChange={(event) => { setEmail(event.target.value) }}
          />
        </label>
        <p style={style_alert(emailError)}>{emailError}</p>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;

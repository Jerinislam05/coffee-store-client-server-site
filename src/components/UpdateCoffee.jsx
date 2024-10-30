import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Updated Successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold text-black">
        Update Coffee: {name}
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                id=""
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                id=""
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                id=""
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                id=""
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                id=""
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                id=""
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className=" mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                id=""
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;

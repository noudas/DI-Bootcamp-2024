import React from "react";
import { useState } from "react";
import Display from "./displayArea";

const Form = () => {

    const [formData, setFormData] = useState ({
        firstName:'',
        lastName:'',
        fullName:'',
        age:'',
        gender:'',
        country:'',
        alergies:[]
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const firstName = form.firstName.value;
    //     const lastName = form.lastName.value;
    //     const fullName = `${firstName} ${lastName}`;
    //     const age = form.age.value;
    //     const gender = form.gender.value;
    //     const country = form.country.value;

    //     const alergies = Array.from(form.alergies)
    //         .filter((checkbox) => checkbox.checked)
    //         .map((checkbox) => checkbox.value)


    //     setFormData({
    //         firstName,
    //         lastName,
    //         fullName,
    //         age,
    //         gender,
    //         country,
    //         alergies,
    //     });

    //     console.log("Form data submitted:", {
    //         firstName,
    //         lastName,
    //         fullName,
    //         age,
    //         gender,
    //         country,
    //         alergies,
    //     });
    // }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox") {
          setFormData((prevData) => {
            const updatedAlergies = checked
              ? [...prevData.alergies, value]
              : prevData.alergies.filter((alergy) => alergy !== value);
    
            return { ...prevData, alergies: updatedAlergies };
          });
        } else if (name === "firstName" || name === "lastName") {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            fullName:
              name === "firstName"
                ? `${value} ${prevData.lastName}`
                : `${prevData.firstName} ${value}`,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    
      return (
        <div>
          <form>
            <h2>Simple Form</h2>
    
            <div>
              <label>
                First Name:{" "}
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Last Name:{" "}
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Age:{" "}
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </label>
            </div>
    
            <div>
              <p>Gender:</p>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
    
            <div>
              <label>
                Select your Destination:{" "}
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="israel">Israel</option>
                  <option value="usa">USA</option>
                  <option value="curacao">Curacao</option>
                </select>
              </label>
            </div>
    
            <div>
              <p>Dietary restrictions:</p>
              <label>
                <input
                  type="checkbox"
                  name="alergies"
                  value="peanuts"
                  checked={formData.alergies.includes("peanuts")}
                  onChange={handleChange}
                />{" "}
                Nuts free
              </label>
              <label>
                <input
                  type="checkbox"
                  name="alergies"
                  value="lactose"
                  checked={formData.alergies.includes("lactose")}
                  onChange={handleChange}
                />{" "}
                Lactose Free
              </label>
              <label>
                <input
                  type="checkbox"
                  name="alergies"
                  value="vegan"
                  checked={formData.alergies.includes("vegan")}
                  onChange={handleChange}
                />{" "}
                Vegan
              </label>
            </div>
          </form>
    
          {/* Pass formData as props to the Display component */}
          <Display info={formData} />
        </div>
      );
    };

export default Form;
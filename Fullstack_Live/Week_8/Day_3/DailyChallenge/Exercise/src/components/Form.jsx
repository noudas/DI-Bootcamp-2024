import React from "react";
import { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = `${firstName} ${lastName}`;
        const age = form.age.value;
        const gender = form.gender.value;
        const country = form.country.value;

        const alergies = Array.from(form.alergies)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)


        setFormData({
            firstName,
            lastName,
            fullName,
            age,
            gender,
            country,
            alergies,
        });

        console.log("Form data submitted:", {
            firstName,
            lastName,
            fullName,
            age,
            gender,
            country,
            alergies,
        });
    }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Form</h2>

      <div>
        <label>
          First Name: <input type="text" name="firstName" />
        </label>
      </div>
      <div>
        <label>
          Last Name: <input type="text" name="lastName" />
        </label>
      </div>
      <div>
        <label>
          Age: <input type="number" name="age" />
        </label>
      </div>

      <div>
        <p>Gender:</p>
        <label>
          <input type="radio" name="gender" value="male" /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" /> Female
        </label>
      </div>

      <div>
        <label>
          Select your Desitination: 
          <select name="country">
            <option value="israel">Israel</option>
            <option value="eua">EUA</option>
            <option value="curassao">Curassao</option>
          </select>
        </label>
      </div>

      <div>
        <p>Dietary restrictions:</p>
        <label>
          <input type="checkbox" name="alergies" value="peanuts" /> Nuts free
        </label>
        <label>
          <input type="checkbox" name="alergies" value="lactose" /> Lactose Free
        </label>
        <label>
          <input type="checkbox" name="alergies" value="vegan" /> Vegan
        </label>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;

import React from "react";
import { useForm } from "react-hook-form";

const InputCity = ({ addCity }) => {
  const { handleSubmit, register, errors, reset } = useForm();
  const err = (e) => {
    addCity(e.city);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(err)}>
        <input
          type='text'
          placeholder='Input City Name'
          name='city'
          ref={register({ required: true })}
        />
        <button type='submit'>Get Temprature</button>
        {errors.city && <span>Error : Please input the text</span>}
      </form>
    </div>
  );
};

export default InputCity;

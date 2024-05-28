import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../slice/FormSlice/FormSlice";

function FormRegister() {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log( dispatch(registerUser(data)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full name
        <input
          {...register("fullName", {
            required: "Required field",
          })}
        />
      </label>
      <div>
        {errors?.fullName && <p>{errors?.fullName?.message || "Error!"}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default FormRegister;

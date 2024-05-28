import { useForm } from "react-hook-form";

function FormRegister() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full name
        <input
          {...register("example", {
            required: "Required field",
          })}
        />
      </label>
      <div>
        {errors?.example && <p>{errors?.example?.message || "Error!"}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default FormRegister;

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  // console.log(useForm("name"));
  //   console.log(formState.errors);
  console.log(errors);

  //   console.log(register);
  //   console.log(handleSubmit);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3, maxLength: 15 })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required !</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name should have al teast 5 chars</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          type="number"
          className="form-control"
          id="age"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required !</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default HookForm;

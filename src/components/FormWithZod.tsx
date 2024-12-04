import React from "react";
import {z} from "zod";
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const FormWithZod = () => {
    const schema = z.object({
        name: z
            .string()
            .min(3, "Name should have at least 3 characters")
            .max(30, "Name should not exceed 30 characters"),
        age: z
            .number({invalid_type_error: "Age is required"})
            .min(18, "Age should be greater than 18"),
    });

    type formData = z.infer<typeof schema>; // to extract the shape of form

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        console.log(errors);
    };
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<formData>({resolver: zodResolver(schema)});
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                    id="name"
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                {/* z.number() expects the value to be a JavaScript number type. */}
                {/*React form inputs return all values as strings. This means the age field value from the */}
                {/*<input> is being interpreted as a string, causing the invalid_type_error to trigger.*/}
                <input
                    {...register("age",{ valueAsNumber: true })}

                    type="number"
                    className="form-control"
                    id="age"
                    onChange={()=>console.log(errors)}
                />
                {errors.age && <p className="text-danger">{errors.age.message}</p>}
            </div>
            <button disabled={!isValid} type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default FormWithZod;

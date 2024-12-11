import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import categories from "./categories";
import {useForm} from "react-hook-form";

// Define Zod Schema Validation
const schema = z.object({
    description: z
        .string()
        .min(3, {message: "Description should be more than 3 Characters!"}),
    amount: z.number({invalid_type_error: "Amount value is required."}).min(0.1).max(100_00),
    // Zod Enum should be readOnly
    category: z.enum(categories, {
        errorMap: () => ({
            message: "Category is required"
        })
    }),
});

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;

const ExpensesForm = ({onSubmit}: Props) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ExpenseFormData>({
        resolver: zodResolver(schema),
    });
    return (
        <form onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
        })
        }>
            < div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input {...register("description")}
                       type="text"
                       className="form-control"
                       id="description"
                       placeholder="Description"
                />
                {errors.description && <div className="text-danger">{errors.description.message}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input {...register("amount", {valueAsNumber: true})}
                       type="text"
                       className="form-control"
                       id="amount"
                       placeholder="Amount"
                />
                {errors.amount && <div className="text-danger">{errors.amount.message}</div>}

            </div>

            <div className="mb-3">
                <label htmlFor="category">Category</label>
                <select className="form-select" {...register("category")}>
                    <option/>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && <div className="text-danger">{errors.category.message}</div>}
            </div>
            <div className="mb-3">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default ExpensesForm;

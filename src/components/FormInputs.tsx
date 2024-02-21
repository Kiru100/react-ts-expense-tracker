import { Button, Form } from "react-bootstrap";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormIntputProps {
    onSubmitForm: (item: FieldValues) => void
} 

const form_schema = z.object({
    description: z.string().min(3, {message: "Name must be at least 3 characters."}),
    amount: z.number({invalid_type_error: "Age field is required."}).min(1),
    category: z.string().min(1)
})

type FormData =  z.infer<typeof form_schema>;

export default function FormInputs({onSubmitForm} : FormIntputProps) {

    const {
        register, 
        handleSubmit, 
        formState:{errors, isValid}
    } = useForm<FormData>({resolver: zodResolver(form_schema)});

    const onSubmit = (data: FieldValues) => {
        onSubmitForm(data)
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group 
                className="mb-3" 
                controlId="expense_description"
            >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" {...register("description")}	/>
                {
                    errors.description && 
                    (
                        <Form.Text className="text-danger">
                            {errors.description.message}
                        </Form.Text>
                    )
                }
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="expense_amount"
            >
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number"  {...register("amount", {valueAsNumber: true})}/>
                <Form.Text className="text-danger">
                {
                    errors.amount && 
                    (
                        <Form.Text className="text-danger">
                            {errors.amount.message}
                        </Form.Text>
                    )
                }
                </Form.Text>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="expense_category" 
            >
                <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Default select example" {...register("category")}>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </Form.Select>
                <Form.Text className="text-danger">
                {
                    errors.category && 
                    (
                        <Form.Text className="text-danger">
                            {errors.category.message}
                        </Form.Text>
                    )
                }
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isValid}>Submit</Button>
        </Form>
    )
}

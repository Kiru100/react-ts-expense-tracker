import { Form } from "react-bootstrap";
import FormData from "./components/FormData";
import FormInputs from "./components/FormInputs";
import { useState } from "react";



function App() {

	const [form_data, setFormData] = useState([
        {id: 1, description: "Milk", amount: 5, category: "Groceries"},
        {id: 2, description: "Eggs", amount: 10, category: "Groceries"},
        {id: 3, description: "Milk", amount: 5, category: "Groceries"}
    ])

	return (
		<div className='m-5'>
			<FormInputs></FormInputs>
			<Form className="mt-5">
				<Form.Group
						className="mb-3"
						controlId="expense_amount" 
					>
						<Form.Label>Category</Form.Label>
						<Form.Select aria-label="Default select example">
							<option value="groceries">All categories</option>
							<option value="groceries">Groceries</option>
							<option value="utilities">Utilities</option>
							<option value="entertainment">Entertainment</option>
						</Form.Select>
					</Form.Group>
			</Form>
			<FormData form_data={form_data}></FormData>
		</div>
	)
	}

export default App

import { Form } from "react-bootstrap";
import FormData from "./components/FormData";
import FormInputs from "./components/FormInputs";
import { useState } from "react";
import { FieldValues } from "react-hook-form";



function App() {

	const [form_data, setFormData] = useState([
        {id: 1, description: "Milk", amount: 5, category: "Groceries"},
        {id: 2, description: "Eggs", amount: 10, category: "Groceries"},
        {id: 3, description: "Milk", amount: 5, category: "Groceries"}
    ]);

	const handleSubmit = (data: FieldValues) =>{
		console.log(" data ", data)
		const {description, amount, category} = data;


		const newObject = { id: form_data.length + 1, description: description, amount: amount, category: category };

    // Update the state by combining the current array with the new object
    setFormData([...form_data, newObject]);
	}	

	return (
		<div className='m-5'>
			{JSON.stringify(form_data)}
			<FormInputs onSubmitForm={handleSubmit}/>
			<FormData form_data={form_data} />
		</div>
	)
	}

export default App

import { useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
interface Props{
    form_data: FormDataItem[],
    onDelete: (expense_id: number) => void
}

interface FormDataItem {
    id: number,
    description: string;
    amount: number;
    category: string;
}

export default function FormData({form_data, onDelete}: Props){
    const [selected_category, setSelectedCategory] = useState("All");

    const onChange = (event: any) =>{
        setSelectedCategory(event.target.value);
    }

    return (
        <>
            <Form className="mt-5" >
				<Form.Group
						className="mb-3"
						controlId="expense_amount" 
					>
						<Form.Label>Category</Form.Label>
						<Form.Select onChange={onChange} >
							<option value="All">All categories</option>
							<option value="Groceries">Groceries</option>
							<option value="Utilities">Utilities</option>
							<option value="Entertainment">Entertainment</option>
						</Form.Select>
					</Form.Group>
			</Form>
            <Table  bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        form_data
                        .filter(data => data.category === selected_category || selected_category === "All")
                        .map((data, index)=>
                        (
                            <tr key={`${index}_${data.description}`}>
                                <td>{data.description}</td>
                                <td>${data.amount}</td>
                                <td>{data.category}</td>
                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-danger"
                                        onClick={()=>onDelete(data.id)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>                
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>${form_data.reduce((acc,expense)=>expense.amount+acc, 0).toFixed(2)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </Table>
        </>
    )
}

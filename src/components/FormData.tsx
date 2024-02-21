import Table from "react-bootstrap/Table";
interface Props{
    form_data: FormDataItem[]
}

interface FormDataItem {
    description: string;
    amount: number;
    category: string;
}

export default function FormData({form_data}: Props){

    return (
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
                        form_data.map((data, index)=>
                        (
                            <tr key={`${index}_${data.description}`}>
                                <td>{data.description}</td>
                                <td>{data.amount}</td>
                                <td>{data.category}</td>
                                <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                            </tr>                
                        ))
                    }
                </tbody>
            </Table>
    )
}

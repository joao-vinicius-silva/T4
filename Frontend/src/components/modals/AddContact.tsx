import { useState } from "react";
import { contact } from "../../App";
import { createContat } from "../services/data";

interface AddContactProps {
    onClose: () => void;
}

const AddContact: React.FC<AddContactProps> = ({ onClose }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [number, setNumber] = useState(0);

    const handleCreate = () => {
        const newContact: contact = {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: name,
            age: age,
            number: number
        }

        createContat(newContact)
        onClose();
    }

    return (
        <>
            <div className="modal fade show d-block">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Contact</h5>
                            <button  type="button" className="close btn" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Idade</label>
                                <input type="number" className="form-control" id="age" value={age}
                                    onChange={(e) => setAge(Number(e.target.value))} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Numero</label>
                                <input type="number" className="form-control" id="number" value={number}
                                    onChange={(e) => setNumber(Number(e.target.value))} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={handleCreate}>Save changes</button>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AddContact
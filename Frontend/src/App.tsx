import { useEffect, useState } from 'react'
import { delContact, getContats } from './components/services/data'
import AddContact from './components/modals/AddContact'
import UpdateContact from './components/modals/UpdateContact'

export interface contact {
  id: string
  name: string
  age: number
  number: number
}

function App() {

  const [contacts, setContacts] = useState<contact[]>([])
  const [showAdd, setShowAdd] = useState<boolean>(false)
  const [editContact, setEditContact] = useState<string>('');

  const dataContact = async () => {
    const response = await getContats();
    setContacts(response);
  }

  const handleDelete = async (id: string) => {
    delContact(id);
  }

  const onClose = () => {
    setShowAdd(false);
    setEditContact('');
  }

  useEffect(() => {
    dataContact();
  }, [])

  return (
    <>
      {showAdd && <AddContact onClose={onClose} />}
      {editContact && <UpdateContact onClose={onClose} id={editContact} />}
      <div className="container">
        <h2>Lista de contatos</h2>
        <button className='btn btn-dark' onClick={() => setShowAdd(true)}>Adicionar Contato</button>
        <table className="table">
          <thead>
            <tr>
              <th className='col'>Nome</th>
              <th className='col'>Idade</th>
              <th className='col'>Numero</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.age}</td>
                  <td>{contact.number}</td>
                  <td>
                    <button className='btn btn-secondary m-1' onClick={() => setEditContact(contact.id)}>Editar</button>
                    <button className='btn btn-danger' onClick={() => handleDelete(contact.id)}>Excluir</button>
                  </td>
                </tr>
              )
              )
            ) : (
              <tr>
                <td colSpan={3}>Nenhum contato cadastrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App

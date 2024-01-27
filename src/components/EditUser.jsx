import React from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditUser(props) {
    const [openModal, setOpenModal] = useState(false);
    const [id, setId] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [UserName, setUserName] = useState('');
    const [users, setUsers] = useState('');
    const [editing, setEditing] = useState(false); 
    
    
    const handleEdit = async () => {
        try {
            await axios.put(`http://127.0.0.1:8000/castello/${props.endpoint}/${props.item.id}/`);
            props.onEditSuccess();
        } catch (error) {
            console.error(`Error in Editing ${props.endpoint}: `, error); 
        } finally {
            setEditing(false);
            setOpenModal(false);
        }
        
    }

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Edit User</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>

                    <form>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit selected user</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="First name" />
                            </div>
                            <TextInput id="name" type="text" required
                                value={FirstName}
                                onChange={(event) => 
                                    {
                                        setFirstName(event.target.value)
                                    }}
                            
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Lastname" />
                            </div>
                            <TextInput id="name" type="text" required
                                value={LastName}
                                onChange={(event) => 
                                    {
                                        setLastName(event.target.value)
                                    }}
                            
                            />
                         </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                required

                                value={Email}
                                onChange={(event) => 
                                    {
                                        setEmail(event.target.value)
                                    }}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="uname" value="User Name" />
                            </div>
                            <TextInput id="uname" type="text" required 
                                value={UserName}
                                onChange={(event) => 
                                    {
                                        setUserName(event.target.value)
                                    }}
                            
                            
                            />
                        </div>
                        <div className="w-full">
                            <Button onClick={handleEdit}>Update</Button>
                        </div>
                    </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}export default EditUser;
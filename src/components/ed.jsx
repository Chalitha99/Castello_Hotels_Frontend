import React from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function EditUser(props) {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    
    

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
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit selected user</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="First nmae" />
                            </div>
                            <TextInput id="name" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Lastname" />
                            </div>
                            <TextInput id="name" type="text" required />
                         </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="uname" value="User Name" />
                            </div>
                            <TextInput id="uname" type="text" required />
                        </div>
                        <div className="w-full">
                            <Button>Update</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditUser;
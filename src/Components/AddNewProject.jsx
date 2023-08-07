import { useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import firebase from '../firebase'
import ProjectForm from './ProjectForm'
import Modal from './Modal'

const AddNewProject = () => {
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (projectName) {
            const projectsRef = firebase.firestore().collection('projects')

            projectsRef
                .where('name', '==', projectName)
                .get()
                .then(querySnapshot => {
                    if (querySnapshot.empty) {
                        projectsRef.add({
                            name: projectName,
                        })
                    } else {
                        alert('Project Already Exists')
                    }
                })
            setShowModal(false)
            setProjectName('')
        }
    }

    return (
        <div className='AddNewProject'>
            <div className='add-button'>
                <span onClick={() => setShowModal(true)}>
                    <Plus size='20' />
                </span>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <ProjectForm
                        handleSubmit={handleSubmit}
                        heading='New Project!'
                        value={projectName}
                        setValue={setProjectName}
                        setShowModal={setShowModal}
                        confirmButtonText='+ Add Project'
                    />
                </Modal>
            </div>
        </div>
    )
}

export default AddNewProject

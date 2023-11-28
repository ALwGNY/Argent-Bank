import './EditNameModal.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectToken,  closeModal, setUserInfo, selectFirstName, selectUserName, selectLastName } from '../redux/userSlice';



function EditNameModal() {
    const token = useSelector(selectToken);
    const userName = useSelector(selectUserName)
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)
    
    
    
    
    const apiUrl = 'http://localhost:3001/api/v1/user/profile';
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    const handleUsernameChange = (e) => {
        dispatch(setUserInfo({ userName: e.target.value, firstName, lastName }));
    }

   


    const handleSave = async () => {
        try {
            const response = await fetch(apiUrl, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify({
                    userName: userName
                })
            })

        if (response.ok) {
            dispatch(setUserInfo({ userName: userName, firstName, lastName }));
            handleCloseModal()
        
        } else {
                console.error('API request failed with status code:', response.status);
                
            }
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
        
        }
    }
    return (
        <div className="ModalEditName" >
            <div htmlFor="EditNameLabel" className='EditName'> 
                <h2>Edit user info</h2>
                <div>
                    <label htmlFor="EditNameLabel">Username : </label>
                    <input
                        type="text"
                        id="EditNameLabel"
                        value={userName}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="EditFirstNameLabel">First Name: </label>
                    <input
                        type="text"
                        id="EditFirstNameLabel"
                        value={firstName}
                        disabled={true}
                    />
                </div>
                <div>
                    <label htmlFor="EditLastNameLabel">Last Name: </label>
                    <input
                        type="text"
                        id="EditLastNameLabel"
                        value={lastName}
                        disabled={true}
                    />
                </div>
                <div className='Buttons'>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCloseModal}>Cancel</button> 
                </div>
            </div>
        </div>
    );
}

export default EditNameModal;
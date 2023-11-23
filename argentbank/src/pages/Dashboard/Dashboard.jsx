import './Dashboard.scss'
import EditNameModal from '../../components/EditNameModal/EditNameModal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../components/redux/userSlice';
import AccountWrapper from '../../components/accountWrapper/accountWrapper.jsx';

function Dashboard() {

    const isModalOpen = useSelector((state) => state.user.isModalOpen);
    const dispatch = useDispatch();
  
    const handleOpenModal = () => {
      dispatch(openModal());
    };
  
    const handleCloseModal = () => {
      dispatch(closeModal());
    };
  
    return (
        <main className="main bg-dark-dashboard">
            <div className="headerDashboard">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button"onClick={handleOpenModal}>Edit Name</button>
            </div>
            {isModalOpen && <EditNameModal closeModal={handleCloseModal} />}
            <h2 className="sr-only">Accounts</h2>
            <AccountWrapper 
                accountTitle="Argent Bank Checking (x8349) "
                accountAmount="$2,082.79"
                accountAmountDescription="Available Balance"
            />
            <AccountWrapper 
                accountTitle="Argent Bank Savings (x6712) "
                accountAmount="$10,928.42"
                accountAmountDescription="Available Balance"
            />
            <AccountWrapper 
                accountTitle="Argent Bank Checking (x8349) "
                accountAmount="$184.30"
                accountAmountDescription="Current Balance"
            />
        </main>
    )
}

export default Dashboard
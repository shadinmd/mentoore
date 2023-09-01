import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Messages from './Messages';
import Bookings from './Bookings';
import Wallet from './Wallet';
import SideBar from '../../components/SideBar';
import { AppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/features/userActions';
import { faGear, faBook, faWallet, faDashboard, faMessage } from "@fortawesome/free-solid-svg-icons"

const UserRouter = () => {
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(userActions.userGet())
    })

    const buttons = [
        { to: "dashboard", icon: faDashboard, text: "dashboard" },
        { to: "messages", icon: faMessage, text: "dashboard" },
        { to: "bookings", icon: faBook, text: "dashboard" },
        { to: "wallet", icon: faWallet, text: "dashboard" },
        { to: "settings", icon: faGear, text: "dashboard" }
    ]
    return (
        <div className='flex'>
            <SideBar buttons={buttons} />
            <div className='flex items-center justify-center w-screen'>
                <Routes>
                    <Route index element={<Navigate to="/user/dashboard" />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/bookings' element={<Bookings />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes >
            </div>
        </div>
    );
};

export default UserRouter;

import { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { AuthContext } from '../../contexts/AuthContexts';

const AdminRoute = ({ children }) => {
    let history = useHistory();
    const { isAdmin } = useContext(AuthContext);

    if (!isAdmin) {
        history.push('/')
        return <></>;
    }

    return children;
};

export default AdminRoute;
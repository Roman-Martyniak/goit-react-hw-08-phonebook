import { selectIsLogin } from "redux/auth/authSelector";
const { useSelector } = require("react-redux")



export const useAuth = () => {
    const result = useSelector(selectIsLogin);

    return result;
};
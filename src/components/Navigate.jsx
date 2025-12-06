import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();

    const movesignup = () => navigate('/signup');
    const signup_normal = () => navigate('/signup-normal')

    return {
        movesignup, signup_normal
    };
};
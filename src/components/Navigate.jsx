import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();

    const movesignup = () => navigate('/signup');
    const signup_normal = () => navigate('/signup-normal')
    const signupcomplete = () => navigate('/signupComplete')
    const loginpg = () => navigate("/")
    const reservationpg = () => navigate("/reservation")
    
    // 시은 작업 페이지 네비게이션
    const movehome = () => navigate("/home")
    const moveclassaply = () => navigate('/apply')
    const movetime = () => navigate('/time')

    return {
        movesignup, signup_normal, signupcomplete, loginpg, movehome,
        moveclassaply, movetime, reservationpg
    };
};
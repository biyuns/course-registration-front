import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();

    const movesignup = () => navigate('/signup');
    const signup_normal = () => navigate('/signup-normal')
    const signupcomplete = () => navigate('/signupComplete')
    const loginpg = () => navigate("/")
    const reservationpg = () => navigate("/reservation")
    const termcondition = () => navigate("/termcondition")
    const termallagree = () => navigate("/termallagree")
    const termpersoninf = () => navigate("/termpersoninf")
    const termmarketing = () => navigate("/termmarketing")
    const idfind = () => navigate("/idfind")
    const idfind2 = () => navigate("/idfind2")
    const pswfind = () => navigate("/pswfind")
    const pswreseting = () => navigate("/pswreseting")
    const pswchangecomplete = () => navigate("/pswchangecomplete")

    // 시은 작업 페이지 네비게이션
    const movehome = () => navigate("/home")
    const moveclassaply = () => navigate('/apply')
    const movetime = () => navigate('/time')

    const movereservationInfo = () => navigate('/ReservationInfo')
    const movereservationRegi = () => navigate('/ReservationRegi')
    const movereservationRegiInfo = () => navigate('/ReservationRegiInfo')

    const movemyclassinfo = () => navigate('/myClassInfo')
    const movechangeparentphone = () => navigate('/parent-password')
    const movechangepassword = () => navigate('/password')

    return {
        movesignup, signup_normal, signupcomplete, loginpg, movehome,
        moveclassaply, movetime, reservationpg, movereservationInfo,
        movereservationRegi, movereservationRegiInfo, termcondition,
        movemyclassinfo, movechangeparentphone, movechangepassword,
        termallagree, termpersoninf, termmarketing, idfind, pswfind
        , idfind2, pswreseting, pswchangecomplete
    };
};
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

    //강의 예약 등록 정보
    const movereservationRegiInfo = () => navigate('/ReservationRegiInfo')

    const movemyclassinfo = () => navigate('/myClassInfo')
    const movechangeparentphone = () => navigate('/parent-password')
    const movechangepassword = () => navigate('/password')

    //강의 조회
    const moveclassinfo = () => navigate('/manage-check-class')

    //회원 조회(가입자, 승인)
    const movemanageuserinfo = () => navigate('/manage-user-info')
    const movemanageacessinfo = () => navigate('/manage-acess-info')

    //강의 세부 정보 등록(강의실, 과목명..)
    const movemanageclassdetailregi = () => navigate('/class-info-regi')

    //강의세부 정보 수정
    const movemanageclassdetailmodi = () => navigate('/manage-modi-class-info')


    //예약 강의 정보 수정
    const movemanageclassmodi = () => navigate('/manage-modi-class')

    return {
        movesignup, signup_normal, signupcomplete, loginpg, movehome,
        moveclassaply, movetime, reservationpg, movereservationInfo,
        movereservationRegi, movereservationRegiInfo, termcondition,
        movemyclassinfo, movechangeparentphone, movechangepassword,
        termallagree, termpersoninf, termmarketing, idfind, pswfind
        , idfind2, pswreseting, pswchangecomplete, moveclassinfo,
        movemanageuserinfo, movemanageacessinfo, movemanageclassdetailregi,
        movemanageclassdetailmodi, movemanageclassmodi
    };
};
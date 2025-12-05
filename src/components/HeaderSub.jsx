import HeadSub from '../css/HeaderSub.module.css';

function HeaderSub({ title }) {
    return (
        <div className={HeadSub.sub_h_ct}>
            <p>{title}</p>

        </div>
    )
}

export default HeaderSub;
import HeadSub from '../css/HeaderSub.module.css';

function ManageHeaderSub({ text, button }) {
    return (
        <div className={HeadSub.sub_title}>
            <p>{text}</p>
            <button>{button}</button>
        </div>
    )
}

export default ManageHeaderSub;
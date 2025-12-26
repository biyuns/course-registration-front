import myc from '../css/MyClassInfo.module.css'

function TwoBtnModal({ text, btn1T, btn2T, btn1E, btn2E }) {
    return (
        <>
            <section className={myc.modal}>
                <div>
                    <p>{text}</p>
                    <div>
                        <button onClick={btn1E}>{btn1T}</button>
                        <button onClick={btn2E}>{btn2T}</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TwoBtnModal;
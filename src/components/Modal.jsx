import mo from '../css/Modal.module.css'

function Modal({ text, setOnModal }) {
    return (
        <>
            <section className={mo.modal}>
                <div>
                    <p>{text}</p>
                    <button onClick={() => setOnModal(false)}>확인</button>
                </div>
            </section>
        </>
    )
}

export default Modal;
import myp from '../css/MyPage.module.css'
import nextBtn from '../img/next-page-btn.svg'

function MyPageDatail({ oneT, twoT, oneE, twoE }) {
    return (
        <>
            <section className={myp.detail_section}>
                <div onClick={oneE}>
                    <p>{oneT}</p><button><img src={nextBtn} /></button>
                </div>
                <div onClick={twoE}>
                    <p>{twoT}</p><button><img src={nextBtn} /></button>
                </div>
            </section>
        </>
    )
}

export default MyPageDatail;
import logorappi from '../assets/img/3.png'
import logowebpay from '../assets/img/4.png'


const Header= () => {
    return (
        <>
            <div className="container header-logos">
                <img className="logo-rappi" src={logorappi} alt="" style={{width:'111px',height:'34px'}}></img>
                <img className="logo-webpay" src={logowebpay} alt=""  style={{width:'130px',height:'34px'}}></img>
            </div>
        </>
    )
}

export default Header;
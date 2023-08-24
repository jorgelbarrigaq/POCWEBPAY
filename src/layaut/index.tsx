import Header from "../components/header"
import imagen1 from '../assets/img/1.png'



export interface LayoutProps { children:any}

const Layout: React.FC<LayoutProps> = props => {
    const { children } = props;

    return (
        <>
            <Header></Header>
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-7 image-left">
                        <img className="card-img-top mb-5 mb-md-0" src={imagen1} alt="..." />
                    </div>
                    <div className="col-md-5">
                        <div className="circle-purple-m"></div>
                        <div className="container-right">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
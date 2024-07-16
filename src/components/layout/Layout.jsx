import Footer from "../Footer";
import Header from "../Header"

const Layout = ({children, classNameMain}) => {
    return ( 
        <>
        <Header/>
        <main className={classNameMain}>
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;
import { FB_IMG, TWITTER_IMG } from '../utils/constants'


const Footer = () => {
    return(
        <>
            <div className="footer-container">
                <div className="logo">
                    <img src={TWITTER_IMG}></img>
                    <img src={FB_IMG}></img>
                </div>
                <div className="footer-text" style={{color: "white"}}>
                    <p>© 2023 SAURABH PVT. LTD.</p>
                    <div>
                        <p >ALL OVER WORLD</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
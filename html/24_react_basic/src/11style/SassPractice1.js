import './SassPractice1.scss'
import img from './pngwing.com.png'

export default function SassPractice1(){
    return(
        <>
            <div className="container">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
                <div className="circle c4"></div>
                <div className="circle c5"></div>
                <div className="circle c6"></div>
                <div className="circle c7"></div>
                <img className="img" src={img}></img>
            </div>
        </>
    )
}
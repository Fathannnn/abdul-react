import sepatu from '../images/sepatu.png';
import '../style/content.css'

export default function Content() {
    return (
        <>
            <div className="content">
                <img src={sepatu} alt="" srcset="" />
                <div className="text">
                    <h1>GIANNIS FREAK 6</h1>
                    <p>Run 'em down in the new Giannis Freak 6.</p>
                    <button>Shop</button>
                </div>
            </div>
        </>
    )
}
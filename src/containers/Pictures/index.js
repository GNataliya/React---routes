import style from './style.module.css';
import pic1 from './cat1.jpg';
import pic2 from './cat2.jpg';
import pic3 from './cat3.jpg';
import pic4 from './cat4.jpg';
import pic5 from './cat5.jpg';
import pic6 from './cat6.jpg';


function Pictures() {
    return (
        <div className={style.body}>

            <h1 className={style.name}> Picture of Cats </h1>

            <div className={style.box}>
                <img src={pic1} alt='cat' className={style.img} />
                <img src={pic2} alt='cat' className={style.img} />
                <img src={pic3} alt='cat' className={style.img} />
            </div>

            <div className={style.box}>
                <img src={pic4} alt='cat' className={style.img} />
                <img src={pic5} alt='cat' className={style.img} />
                <img src={pic6} alt='cat' className={style.img} />
            </div>
        

        </div>
    )
}

export default Pictures;
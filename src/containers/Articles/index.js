import style from '../Articles/style.module.css';
import pic from './cat.jpg';
import pic2 from './cat3.jpg';

function Articles() {
    return (
    <div className={style.body}>
        <h1 className={style.name}> The Joys of Owning a Cat </h1>

        <div className={style.imgs}>
            <img src={pic} alt='cat' className={style.img1} />
            <img src={pic2} alt='kitty'className={style.img2} />
        </div>

        <div className={style.textbox}>
            <p className={style.text}>
            Owning a cat can bring unconditional love and companionship to your life. Having a feline friend can also help to relieve stress and improve your heart health. Owning a cat can be an extremely rewarding relationship. A cat has the ability to both calm your nervous system and provide an immediate outlet for fun and play. Although cats are independent animals who like to scavenge and explore on their own terms, they are also very affectionate with their owners and people they trust.
            </p>
        </div>

    </div>     
    )
}


export default Articles;
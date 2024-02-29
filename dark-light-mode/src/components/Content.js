import light from '../image/light.svg';
import dark from '../image/dark.svg';


const Content = ()=>{
    return(
        <main>
            <div>
                <h1>Dark - Light</h1>
                <p>Dark - Light Mode</p>
                <img src={light} alt="logo"/>
                <img src={dark} alt="logo"/>
               
            </div>
        </main>
    )
}

export default Content
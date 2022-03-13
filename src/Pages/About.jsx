import "./About.css"
import Typewriter from "typewriter-effect";

function About(){

    return(
    <div className="about text">
        <div>
            <p>Olá, meu nome é Patrick Bindelli</p>    
            <p>Desenvolvido em React.</p>   
        </div>     
        <div className="typewriter">
            <Typewriter
            options={{delay: 30}}
            onInit={(typewriter)=> {
            typewriter
                .pauseFor(2000)
                .typeString("</Wake up, Neo...>")
                .pauseFor(1000)
                .pasteString("<br>")
                .typeString("</The Matrix has you...>")
                .pauseFor(1000)
                .pasteString("<br>")
                .typeString("</Follow the white rabbit.>")
                .pauseFor(2000)
                .pasteString("<br><br>")
                .typeString("</Knock, knock, Neo.>")
                .pasteString("<br><br>")
                .typeString(`(\\ /)`)
                .pasteString("<br>")
                .typeString(`( ..)`)
                .pasteString("<br>")
                .typeString(`c(")(").`)
                .start();
            }}/>
        </div>
    </div>
    )
}

export default About;
import "./About.css"
import Typewriter from "typewriter-effect";

function About(){

    return(
    <div className="about text">   
        <div className="box">
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
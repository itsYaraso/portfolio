import { Card } from "../components/card"

export default function skillsSection() {
    return (

        <section>
            <div className="">
                <p className="text-5xl text-center">Skills</p>
                <hr className="mx-auto mt-4"></hr>
            </div>

            <div className="grid grid-cols-3 gap-4 py-8 ">

                <Card
                    name="CSS"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    link="https://developer.mozilla.org/en-US/docs/Web/CSS" />

                <Card
                    name="JS"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />

                <Card
                    name="HTML"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                    link="https://developer.mozilla.org/en-US/docs/Web/HTML" />

                <Card
                    name="TSX"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                    link="https://www.typescriptlang.org" />

                <Card
                    name="PS"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Adobe_Photoshop_CC_icon.svg/2048px-Adobe_Photoshop_CC_icon.svg.png"
                    link="https://www.adobe.com" />

                <Card
                    name="Ai"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adobe_Illustrator_CC_icon.svg/2048px-Adobe_Illustrator_CC_icon.svg.png"
                    link="https://www.adobe.com" />

                <Card
                    name="unreal engine"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adobe_Unity_CC_icon.svg/2048px-Adobe_Unity_CC_icon.svg.png"
                    link="https://www.unrealengine.com" />

                <Card
                    name="React"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    link="https://reactjs.org" />

                <Card
                    name="GIT"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git_icon.svg/2048px-Git_icon.svg.png"
                    link="https://git-scm.com" />
            </div>

        </section>

    )
}
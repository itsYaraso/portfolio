import { Card } from "../components/card"

export default function skillsSection() {
    return (

        <section>
            <div className="">
                <p className="text-5xl text-center">Skills</p>
                <hr className="mx-auto mt-2"></hr>
            </div>

            <div className="grid grid-cols-3 gap-4 py-8 ">

                <Card
                    name="CSS"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    link="https://developer.mozilla.org/en-US/docs/Web/CSS" />

                <Card
                    name="HTML"
                    icon="html.svg"
                    link="https://developer.mozilla.org/en-US/docs/Web/HTML" />

                <Card
                    name="TS"
                    icon="typescript.svg"
                    link="https://www.typescriptlang.org" />

                <Card
                    name="PS"
                    icon="photoshop.svg"
                    link="https://www.adobe.com" />

                <Card
                    name="Ai"
                    icon="illustrator.svg"
                    link="https://www.adobe.com" />

                <Card 
                    name="unreal engine"
                    icon="unrealengine.svg"
                    link="https://www.unrealengine.com" />

                <Card
                    name="React"
                    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    link="https://reactjs.org" />

                <Card
                    name="GIT"
                    icon="git.svg"
                    link="https://git-scm.com" />
            </div>

        </section>

    )
}
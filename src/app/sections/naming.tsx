import { TypeAnimation } from "react-type-animation";

export default function namingSection() {
    return (
        <div>
            <div>
                <h1 className="text-5xl text-center ">Hi, my name is Benjamin</h1>
            </div>

            <div className="text-center  text-xl sm:text-5xl  text-nowrap">
                <TypeAnimation
                    sequence={[
                        "I am a developer",
                        1500,
                        "I am a designer",
                        1500,
                        "I am a dad",
                        1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "md:2em", display: "inline-block" }}
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}

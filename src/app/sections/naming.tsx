import { TypeAnimation } from "react-type-animation";

export default function namingSection() {
    return (
        <div>
            <div>
                <p className="text-5xl text-center ">Hi, my name is Benjamin</p>
            </div>

            <div className="text-center pt-36 text-xl sm:text-5xl  text-nowrap">
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

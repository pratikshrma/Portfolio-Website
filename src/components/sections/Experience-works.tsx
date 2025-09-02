import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { experiences } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";

const ProjectCard: React.FC<{ index: number } & TExperience> = ({
    index,
    companyName,
    iconBg,
    date,
    points
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                glareEnable
                tiltEnable
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                glareColor="#aaa6c3"
            >
                <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
                    <div className="relative h-[230px] w-full">
                        <img
                            src='./5.png'
                            className="h-full w-full rounded-2xl object-cover"
                        />

                        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                            <div
                                onClick={() => window.open('https://atlancer.com', "_blank")}
                                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                            >
                                <img
                                    src={github}
                                    alt="github"
                                    className="h-1/2 w-1/2 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-[24px] font-bold text-white">Atlancer <p style={{ fontSize: '1rem', color: 'white', fontWeight: 'lighter' }}>May 2024 - Present</p></h3>
                        <p className="text-secondary mt-2 text-[14px]"> Full Stack Developer at Atlancer, working with React, Node.js, Firebase, and Three.js to build scalable full-stack applications and enhance user experience.</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {/* {tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))} */}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <Header useMotion={true} {...config.sections.experience} />

            <div className="flex w-full">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
                >
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {experiences.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");

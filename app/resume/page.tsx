import { readFile } from '@/lib/markdown';
import { MarkdownRenderer } from '../components/markdown'
import { TerminalCommand } from '../components/terminal'
import path from 'path';

import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";



const skills = [
    {
        name: "Languages",
        values: [
            "Go", "Markdown", "Rust", "Ruby", "Python", "Typescript"
        ],
    },
    {
        name: "Frameworks",
        values: [
            "Flask", "NextJS", "TailwindCSS", "Django", "Kubernetes"
        ]
    },
    {
        name: "CI/CD",
        values: [
            "Jenkins", "Gitlab CI", "Github Actions", "Helm", "Bitbucket Pipelines"
        ]
    },
    {
        name: "IAC/CM",
        values: [
            "Ansible", "Packer", "Terraform", "Cloudformation"
        ]
    },
    {
        name: "Observability",
        values: [
            "Grafana", "Prometheus", "Splunk", "Sensu", "ELK", "Loki", "Graphite/Whisper"
        ]
    },
    {
        name: "Misc",
        values: [
            "Backstage", "MySQL", "Redis", "Docker", "Sonarqube"
        ]
    },
    {
        name: "Networking/Proxies/etc",
        values: [
            "Istio", "Nginx", "Varnish"
        ]
    },
    {
        name: "Cloud",
        values: [
            "AWS", "DigitaOcean", "Microsoft Azure"
        ]
    },
    {
        name: "VCS",
        values: [
            "Github", "Git", "Gitlab", "Bitbucket"
        ]
    },
    {
        name: "IDE",
        values: [
            "Vim!!!", "VS Code"
        ]
    },
]

const experiences = [
    {
        name: "Airmiles - BMO",
        location: "Senior Devops Engineer",
        date: "May 2023 - PRESENT"
    },
    {
        name: "Airmiles - Loyalty Ventures Inc (NASDAQ:LYLT)",
        location: "Senior Devops Engineer",
        date: "Nov. 2021 - May. 2023"
    },
    {
        name: "Airmiles - Alliance Data Systems Corporation (NYSE:ADS)",
        location: "Devops Engineer III",
        date: "Feb. 2020 - Nov. 2021"
    },
    {
        name: "Cloudways.com - Gaditek Associates",
        location: "Lead Devops Engineer",
        date: "Jan. 2018 - Jun. 2021"
    },
    {
        name: "Cloudways.com - Gaditek Associates",
        location: "Senior Devops Engineer",
        date: "Jan. 2017 - Jan. 2018"
    },
    {
        name: "PureVPN.com - Gaditek Associates",
        location: "Linux/DevOps Engineer",
        date: "Nov. 2014 - Jan. 2017"
    },
]

const educations = [
    {
        name: "Bachelor of Computer Science and Information Technology",
        location: "NED University of Engineering and Technology",
        date: "Jan. 2009 - Dec. 2012"
    },
]

const certifications = [
    {
        name: "Certified Kubernetes Administrator",
        location: "Cloud Native Computing Foundation (CNCF)",
        date: "2021"
    },
    {
        name: "Certified AWS DevOps Engineer - Professional",
        location: "Amazon Web Services Training and Certification",
        date: "2021"
    },
    {
        name: "Certified AWS Solutions Architect - Associate",
        location: "Amazon Web Services Training and Certification",
        date: "2019"
    },
]
export default function Page() {
    const contentDirectory = path.join(process.cwd(), 'content');

    const fullPath = path.join(contentDirectory, 'about-me.md');
    const fileContents = readFile(fullPath)

    return (

        <div className='p-5 h-50 terminal h-full'>
            <TerminalCommand command={["$ whoami && cat about-me.md | renderHTML"]} delay={1000}>
                <div className='mt-6 mb-16 p-6 rounded bg-slate-50 text-black dark:bg-zinc-900 dark:text-white'>

                    <div className="relative mx-4">
                        <div className='flex flex-wrap'>
                            <span className="text-6xl font-extralight">
                                Fahad
                            </span>
                            <span className="text-6xl font-bold text-green-100">
                                Saleh
                            </span>
                        </div>

                        <div className="flex flex-wrap px-1">
                            <h3 className="text-xl text-amber-100 font-light">Lead DevOps | SRE | Platform</h3>
                        </div>

                        <div className="flex flex-wrap px-1">
                            <h3 className="text-gray-400 italic font-extralight">Greater Toronto Area, Canada</h3>
                        </div>

                        <div className="flex flex-wrap mt-2 px-1">
                            <a href='https://github.com/ecsumed' className='flex items-center underline'>
                                <FaGithub />
                                <span className='pl-1 pr-3'>ecsumed</span>
                            </a>

                            <a href='https://ecsumed.github.io' className='flex items-center underline'>
                                <TbWorldWww />
                                <span className='pl-1 pr-3'>ecsumed.github.io</span>
                            </a>

                            <a href='https://ca.linkedin.com/in/fahad-s-a17b19144' className='flex items-center underline'>
                                <FaLinkedin />
                                <span className='pl-1'>fahad-s-750562197</span>
                            </a>
                        </div>

                        <div className="flex flex-wrap mt-2 px-1">
                            <blockquote className="text-gray-400 italic font-extralight">
                                <p>"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself." - Rumi</p>
                            </blockquote>
                        </div>

                        <div className='absolute inset-y-5 right-5 '>
                            <a href='https://github.com/ecsumed' className='flex items-center underline'>
                                <FaDownload size={35}/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="relative flex py-4 items-center">
                            <span className="flex-shrink mx-4 text-gray-400">
                                <h2 className="text-lg font-extrabold dark:text-red-400">
                                    SKILLS
                                </h2>
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='ml-8 mr-10'>
                            <div className='grid grid-cols-3 gap-6'>
                                {skills.map(skill => (
                                    <div className="bg-[#24292ac4] p-4 rounded-sm">
                                        <h2 className="text-base font-bold">
                                            {skill.name}
                                        </h2>

                                        <div className='flex'>
                                            <div className='flex flex-wrap'>
                                                {skill.values.map((item) => (
                                                    <span className="w-fit p-1 my-2 mr-4 bg-[#1E4F3D] text-amber-100">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex mt-10 items-center">
                            <span className="flex-shrink mx-4 text-gray-400">
                                <h2 className="text-lg font-extrabold dark:text-red-400">
                                    Work Experience
                                </h2>
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='ml-8 mr-10'>
                            {experiences.map(experience => (
                                <div className="flex justify-between items-center my-4">
                                    <div className="text-left">
                                        <h2 className="text-base font-bold">{experience.name}</h2>
                                        <h3 className="text-sm text-amber-100 uppercase">{experience.location}</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-zinc-400">{experience.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex mt-10 items-center">
                            <span className="flex-shrink mx-4 text-gray-400">
                                <h2 className="text-lg font-extrabold dark:text-red-400">
                                    Education
                                </h2>
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='ml-8 mr-10'>
                            {educations.map(education => (
                                <div className="flex justify-between items-center my-4">
                                    <div className="text-left">
                                        <h2 className="text-base font-bold">{education.name}</h2>
                                        <h3 className="text-sm text-amber-100">{education.location}</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-zinc-400">{education.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex mt-10 items-center">
                            <span className="flex-shrink mx-4 text-gray-400">
                                <h2 className="text-lg font-extrabold dark:text-red-400">
                                    Certifications
                                </h2>
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='ml-8 mr-10'>
                            {certifications.map(certificate => (
                                <div className="flex justify-between items-center my-4">
                                    <div className="text-left">
                                        <h2 className="text-base font-bold">{certificate.name}</h2>
                                        <h3 className="text-sm text-amber-100">{certificate.location}</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-zinc-400">{certificate.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </TerminalCommand >
        </div >
    )
}

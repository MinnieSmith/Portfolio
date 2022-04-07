import Image from "next/image";

export interface ProjectInterface {
    title: string;
    desc: string;
    url: string;
    image: string;
}

const Project = (props: ProjectInterface) => {
    return (
        <div className="flex gap-4 bg-indigo-50">
            <div className="relative w-24 h-16">
                <Image src={props.image} layout="fill"/>
            </div>
            <div className="my-auto">
            <a href={props.url} className="font-bold underline hover:text-indigo-400">{props.title}</a>
            <div className="font-light">{props.desc}</div>   
            </div>
        </div>
    );

}

export default Project;
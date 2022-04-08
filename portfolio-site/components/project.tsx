import Image from "next/image";
import Link from "next/link";

export interface ProjectInterface {
    title: string;
    desc: string;
    url: string;
    image: string;
}

const Project = (props: ProjectInterface) => {
    return (
        <div className="flex gap-5 bg-indigo-50 opacity-60">
            <div className="relative w-24 h-16">
                <Image src={props.image} layout="fill"/>
            </div>
            <div className="my-auto">
                <Link href = {props.url}  >
                    <a className="text-slate-900 font-bold underline hover:text-teal-300">{props.title}</a>
                </Link>
            
            <div className="font-light">{props.desc}</div>   
            </div>
        </div>
    );

}

export default Project;
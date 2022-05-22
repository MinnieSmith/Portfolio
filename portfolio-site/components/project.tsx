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
        <div className="m-6 md:m-10">
            <div className="rounded-xl flex gap-2 md:gap-6 bg-indigo-100 opacity-70 hover:animate-pulse">
                <img className="flex-none rounded-l-lg w-28 h-20 md:w-36 md:h-28" src={props.image}/>
                <div className="my-auto">
                    <Link href={props.url}>
                        <a className="text-slate-900 font-bold underline hover:text-teal-300">{props.title}</a>
                    </Link>
                    <div>{props.desc}</div>
                </div>
            </div>

        </div>

    );

}

export default Project;
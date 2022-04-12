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
        <div className="ml-10 mr-10 m-8">
            <div className="flex gap-6 bg-indigo-100 opacity-70 hover:animate-pulse">
                <div className="relative w-32 h-24">
                    <Image src={props.image} layout="fill" />
                </div>
                <div className="my-auto">
                    <Link href={props.url}  >
                        <a className="text-slate-900 font-bold underline hover:text-teal-300">{props.title}</a>
                    </Link>

                    <div className="font-light">{props.desc}</div>
                </div>
            </div>

        </div>

    );

}

export default Project;
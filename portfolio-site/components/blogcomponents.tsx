import Image from "next/image";

export interface BlogInterface {
    title: string;
    desc: string;
    image: string;
}

const Blog = (props: BlogInterface) => {
    return (
        <div className="m-10 flex bg-red-50 rounded-lg p-5 drop-shadow-xl">
            <div className="relative md:w-44 md:h-44 w-24 h-24 rounded-full ml-2 mr-5">
                <Image src={props.image} layout="fill"/>
            </div>
            <div className="pt-6 md: text-center">
            <figcaption className="font-2xl">
                <div className="text-slate-800">
                    {props.title}
                </div>
            </figcaption>
            <blockquote>
                <p className="txt-md md:text-lg font-medium">
                    {props.desc}
                </p>
            </blockquote>
            </div>
        </div>
    );

}

export default Blog;
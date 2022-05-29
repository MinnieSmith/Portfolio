export interface BlogInterface {
    title: string;
    desc: string;
    image: string;
}

const Blog = (props: BlogInterface) => {
    return (
        <div className="mb:m-5 sm:m-6 md:m-10 md:flex opacity-80 bg-fuchsia-50 rounded-lg p-5 drop-shadow-xl">
            <img className="mx-auto md:ml-2 md:rounded-lg rounded-full drop-shadow-xl sm:rounded-lg sm:w-44 sm:h-44 w-24 h-24" src={props.image}/>
            <div className="pt-4 text-center md:text-left md:ml-5 md:text-lg">
                <figcaption className="font-2xl">
                    <div className="text-slate-800">
                        {props.title}
                    </div>
                </figcaption>
                <blockquote>
                    <p>
                        {props.desc}
                    </p>
                </blockquote>
            </div>
        </div>
    );

}

export default Blog;
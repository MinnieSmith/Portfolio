export interface BlogInterface {
    title: string;
    desc: string;
    image: string;
}

const Blog = (props: BlogInterface) => {
    return (
        <div className="mb:m-5 sm:m-6 md:m-10 lg:flex opacity-80 bg-sky-50 rounded-lg p-5 drop-shadow-xl opacity-80">
            <img className="mx-auto md:rounded-lg rounded-full drop-shadow-xl sm:rounded-lg sm:w-44 sm:h-44 w-24 h-24" src={props.image}/>
            <div className="text-center lg:text-left md:ml-5 md:text-lg">
                <div className="lg:text-lg sm:text-base mb:text-sm font-semibold">
                    {props.title}
                </div>
                <div className="mt-1 text-slate-700 lg:text-base md:text-sm mb:text-xs">
                    <p>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Blog;
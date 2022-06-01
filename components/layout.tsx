import Link from "next/link";
import Footer from "./footer";

const Layout = (props: any) => {
    return (
        
        <div className="text-sm font-san w-screen h-screen flex p-1">
                    <Link href='/aboutme'>
                        <div className="shrink-0">
                            <img className= "opacity-70  absolute top-8 right-8 object-cover rounded-full hover:opacity-100 hover:animate-bounce w-20 h-20 md:w-24 md:h-24" src="/profilepic.JPG"/>
                        </div>
                    </Link>

            <div className="overflow-y-scroll h-2/3 w-3/4 mb:w-5/6 mb:text-xs mb:p-1 lg:w-2/3 xl:w-1/2 p-5 m-auto">{props.children}</div>
        </div>

    );

}

export default Layout;
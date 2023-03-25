import Link from "next/link";
import Footer from "./footer";
import Title from "./title";
import Header from "./header";
import Profile from "./profile";

const Layout = (props: any) => {
    return (
        
        <div className="text-sm font-san w-screen h-screen flex p-1">
            <Link href='/aboutme'>
                <div className="shrink-0">
                    <img className= "opacity-70  absolute top-8 right-8 object-cover rounded-full hover:opacity-100 hover:animate-bounce w-20 h-20 md:w-24 md:h-24" src="/profilepic.JPG"/>
                </div>
            </Link>
            <div className="absolute top-32 right-10 text-slate-800 font-bold text-lg">
                About Me
            </div>


            <div className="h-3/5 w-1/2 mb:w-3/4 mb:text-xs mb:p-1 lg:w-2/3 xl:w-1/3 p-5 m-auto">
                <Header/>
                <Title />
                <Profile/>
                <div className="overflow-y-auto h-4/5">
                    {props.children}
                </div>
            </div>

        </div>

    );

}

export default Layout;
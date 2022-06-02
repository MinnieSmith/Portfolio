import Link from "next/link";

const HomeButton = () => {
    return (
        <button className="rounded-lg bg-amber-600 lg:m-6 lg:p-2 sm:m-5 mb:m-1 mb:mr-0 mb:p-1">
        <Link href = "/" >
            <a className="text-white font-semibold text-sm md:text-lg hover:text-slate-600">home</a>
        </Link>
      </button>
    );

}

export default HomeButton;
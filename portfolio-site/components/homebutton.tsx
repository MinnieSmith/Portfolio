import Link from "next/link";

const HomeButton = () => {
    return (
        <button className="rounded-lg p-1 bg-indigo-200 mt-3">
        <Link href = "/" >
            <a className="text-slate-600 font-semibold text-lg hover:text-teal-300">home</a>
        </Link>
      </button>
    );

}

export default HomeButton;
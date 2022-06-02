import Link from "next/link";

export interface AppButtonInterface {
    url: string;
}

const AppButton = (props: AppButtonInterface) => {
    return (
        <button className="rounded-lg animate-pulse bg-lime-800 lg:m-3 lg:p-3 sm:m-2 mb:m-1 mb:p-2">
        <Link href = {props.url} >
            <a className="text-white font-semibold mb:text-xs text-sm md:text-base hover:text-slate-600">App</a>
        </Link>
      </button>
    );

}

export default AppButton;
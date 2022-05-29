import Link from "next/link";

export interface SourceCodeInterface {
    url: string;
}

const SourceCode = (props: SourceCodeInterface) => {
    return (
        <button className="rounded-lg bg-red-300 lg:m-3 animate-pulse lg:p-3 sm:m-2 mb:m-1 mb:p-2">
        <Link href = {props.url} >
            <a className="text-white font-semibold  mb:text-xs text-sm md:text-base hover:text-slate-600">Code</a>
        </Link>
      </button>
    );

}

export default SourceCode;
export interface QuestionInterface {
    title:string;
    answer:string;
}


const Question = (props: QuestionInterface) => {
    return (
        <div className="bg-white opacity-80 drop-shadow-xl lg:m-8 lg:p-5 sm:m-6 sm:p-3 mb:m-4 mb:p-2 rounded-lg">
          <div className='lg:text-lg sm:text-base mb:text-xs font-semibold m-1'>{props.title}</div>
          <div className='lg:text-base mb:text-xs md:text-sm text-slate-700 m-1'>
            <p>
              {props.answer} 
            </p>
          </div>
        </div>
    );

}

export default Question;
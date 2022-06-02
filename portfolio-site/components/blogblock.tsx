import Blog, { BlogInterface } from "./blogcomponents";



const BlogBlock = () => {
    const blogDataArr = [];

    blogDataArr.push(
        {
            title: "Creative Child",
            desc: "When I was a child, I used to while away the day making things. My earliest memory was learning how to knit from another child in the village, making earrings from fine copper wire and making a minature stove from an aluminium can to cook some batter. After arriving in Australia when I was six, I would spend my days baking and standing in front of the oven to watch the cake rise, sew dresses for my barbie dolls on the old Singer, draw designs of beautiful dresses, and make beaded jewelry from glass beads, freshwater pearls and swarovskis.",
            image: "/creative.png",
        }
    );

    blogDataArr.push(
        {
            title: "Young Academic",
            desc: "I was naturally academic with interests spread equally between arts and sciences, so it was difficult for me to decide what to persue. In the end, my desire for independence from the folks made me decide to study pharmacy, where the sciences met with altruistic causes. After pharmacy, my inner nerd never stopped exploring. I went on to study at Alliance Francaise de Lyon where I became fluent in French, avidly drawn to the romance of the language. This was followed by my desire to know more about one of the most intriguing fields - the human mind. While I spent a year in the US, I studied psychology online at Monash University. The knowledge from which has been priceless in the support of mental health patients in pharmacy.",
            image: "/academia.png",
        }
    );

    blogDataArr.push(
        {
            title: "Rediscovering Creativity",
            desc: "After almost a decade of practicing as a pharmacist, I was ready for to embark on new adventures. I love problem solving, maths, sciences, logic, but I also wanted to do something not only creative but also allows me to create. After a year of living with my best friend, a software engineer and his constant barrage of enthusiasm and job satisfaction, I found myself enrolled in a full stack nanodegree and building my first app after a few months and then enrolling in a bachelor of computer science degree at UWA the following year.",
            image: "/beachpainting.png",
        }
    );

    blogDataArr.push(
        {
            title: "Furbabies",
            desc: "They need an honorable mention as they ground me and give me purpose like nothing else. Not to mention they make the ultimate lap/desk dog! Behind ever great coder, is a great fury friend.",
            image: "/furbabies2.jpeg",
        }
    );

    const blogDataElements = [];

    for (let i = 0; i < blogDataArr.length; i++) {
        const data = blogDataArr[i];
        const element = <Blog {...data} key={i} />;
        blogDataElements.push(element);
    };

    return (
        <div className="">
            {blogDataElements}
        </div>

    );
}

export default BlogBlock;
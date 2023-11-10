import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed  text-white  my-20">
            <div className="bg-slate-500 bg-opacity-60 pt-10">
            <SectionTitle
            subHeading={"--- Check it out ---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center lg:pb-20 lg:pt-12 lg:px-36">
            <div>
                <img className="rounded-xl" src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p className="font-medium">March 20, 2023</p>
                <p className="uppercase text-lg font-medium">WHERE CAN I GET SOME ?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline uppercase border-0 border-b-4 mt-4">Order now</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;
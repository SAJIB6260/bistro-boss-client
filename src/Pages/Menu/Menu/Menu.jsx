import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/menu-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessertmenu items */}
            <MenuCategory
            items={desserts}
            title={"dessert"}
            coverImg={dessertImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title={"Pizza"}
            coverImg={pizzaImg}
            ></MenuCategory>
            <MenuCategory
            items={salad}
            title={"salad"}
            coverImg={saladImg}
            ></MenuCategory>
            <MenuCategory
            items={soup}
            title={"soup"}
            coverImg={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;
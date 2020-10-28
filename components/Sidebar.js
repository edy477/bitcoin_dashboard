import Basebar from "./Basebar";
import Coins from "./Coins";
import Head from "next/head";
const Sidebar = () => {

    return(
        <div className="sidebar">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/>
            </Head>
<Basebar/>
<Coins/>
        </div>
    )
}
export default  Sidebar;

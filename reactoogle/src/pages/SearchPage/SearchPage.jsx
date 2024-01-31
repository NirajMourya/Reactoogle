import {Link} from "react-router-dom";
import "./SearchPage.css";
import Search from "../../components/Search/Search";
import {Avatar} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { useSelector } from "react-redux";
import useGoogleSearch from "../../useGoogleSearch";

export default function SearchPage()
{
  const term = useSelector((state) => state.term);
  
  const { data } = useGoogleSearch(term);

     return (<div className="searchPage">
        <div className="searchPage__header"> 
            <div className="searchPage__Top">
               <div className="searchPage__headerLeft">
                    <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com//images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt=""
                    />
                    </Link>
                    <Search hideButtons={true} />
                </div>
                <div className="searchPage__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="searchPage__bottom">
                        <div className="searchPage__optionsLeft">
                           <Link>
                              <span>Images</span>
                            </Link>
                            <Link>
                              <span>News</span>
                            </Link>
                            <Link>
                              <span>Shopping</span>
                            </Link>
                            <Link>
                              <span>Maps</span>
                            </Link>
                            <Link>
                              <span>Books</span>
                            </Link>
                        </div>
                        <div className="searchPage__optionsRight">
                            Tools
                        </div>
            </div>
        </div>
        <div  className="searchPage__results">

        </div>
    </div>);
}
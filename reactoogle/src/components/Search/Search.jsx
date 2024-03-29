import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

export default function Search({hideButtons})
{
    const [term, setTerm] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const search = (e) => {
        e.preventDefault();
        console.log("search!");
        if(term)
        {
          dispatch({
            type: "SET_SEARCH_TERM",
            term: term,
          });
          navigate('/search');
        }
      };
    
    return ( <form className="search">
        <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <MicIcon />
        </div>
        <div className={hideButtons? "search__buttonsHidden":"search__buttons"}>
            <Button onClick={search} type="submit" variant="outlined">
            Google Search
            </Button>
            <Link to="https://doodles.google/">
              <Button variant="outlined">I'm Feeling Lucky</Button>
            </Link>
        </div>
  </form>
  );
}
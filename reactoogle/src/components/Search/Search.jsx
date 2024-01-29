import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";
import { useState } from "react";

export default function Search()
{
    const [term, setTerm] = useState("");

    return ( <form className="search">
        <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <MicIcon />
        </div>
        <div className="search__buttons">
            <Button  type="submit" variant="outlined">
            Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
  </form>
  );
}
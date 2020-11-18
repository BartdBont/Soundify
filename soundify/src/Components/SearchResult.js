import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchService from "../Services/SearchService";
import Header from "./Header";
import SongRow from "./SongRow";
import "./SearchResult.css";

function SearchResult({ spotify }) {
	const [result, setResult] = useState();
	let { term } = useParams();
	const [termKnown, setTermKnown] = useState(term !== undefined ? true : false);

	useEffect(() => {
		if (term !== undefined) {
			SearchService.getSearchResult(term).then((response) => {
				console.log(response);
				setResult(response);
			});
			setTermKnown(true);
		} else {
			setTermKnown(false);
		}
	}, [term]);

	const Result = () => {
		return result?.length ? (
			result?.map((song, idx) => <SongRow song={song} key={idx} />)
		) : (
			<h1 className="empty">no song found</h1>
		);
	};

	const SearchTermUnknown = () => {
		return <strong className="empty">Search for a song by title</strong>;
	};

	const SearchTermKnown = () => {
		return (
			<div>
				<strong>Search Result</strong>
				<h2>{term}</h2>
			</div>
		);
	};

	return (
		<div>
			<div className="body__info">
				<div className="body__infoText">
					{termKnown ? <SearchTermKnown/> : <SearchTermUnknown/>}
				</div>
			</div>

			<div className="body__songs">{termKnown && <Result />}</div>
		</div>
	);
}

export default SearchResult;

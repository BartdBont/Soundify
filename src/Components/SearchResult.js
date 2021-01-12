import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchService from "../Services/SearchService";
import SongRow from "./SongRow";
import "./SearchResult.css";

function SearchResult({ spotify }) {
	const [result, setResult] = useState([]);
	let { term } = useParams();
	const [termKnown, setTermKnown] = useState(term !== undefined ? true : false);
	const [items, setItems] = useState(10);

	useEffect(() => {
		if (term !== undefined) {
			SearchService.getSearchResult(term).then((response) => {
				setResult(response);
			});
			setTermKnown(true);
		} else {
			setTermKnown(false);
		}
		setItems(10);
	}, [term]);

	const SeeMore = () => {
		setItems(items + 10);
	}

	const Result = () => {
		return result?.length ? (
			result?.slice(0, items).map((song, idx) => <SongRow song={song} key={idx} search={true} />)
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

			<div className="body__songs">
				{termKnown && <Result />}
				{
					items >= 50 ? <h4> </h4> :
					termKnown && result.length ? <h4 className="viewMore" onClick={() => SeeMore()}>More results</h4> :
					<h4> </h4>
				}
			</div>
		</div>
	);
}

export default SearchResult;

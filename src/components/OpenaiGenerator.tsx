import { CircularProgress } from "@mui/material";
import { useOpenAi } from "../hooks/useOpenAi";
import { useEffect } from "react";
import { useFlashcards } from "../hooks/useFlashcards";

export const OpenaiGenerator = () => {
	const { setPrompt, prompt, queryAi, loading, result, resetPrompt } =
		useOpenAi();
	const { addFlashCardSet } = useFlashcards();
	useEffect(() => {
		if (result !== "") {
			// clean result
			const json = JSON.parse(result.split("```json")[1].split("```")[0]);
			console.log(json);
			addFlashCardSet({
				name: prompt,
				cards: json,
			});
			resetPrompt();
		}
	}, [result]);
	return (
		<div className="flex h-16 m-6 bg-white rounded-full">
			<input
				disabled={loading}
				value={prompt}
				placeholder="new Flashcard Topic e.g. React Topic ..."
				onChange={(e) => setPrompt(e.target.value)}
				className="flex-1 h-16 p-3 text-black rounded-full"
			></input>
			<button
				className="p-3 bg-blue-400 rounded-full"
				disabled={loading}
				onClick={async () => {
					try {
						await queryAi();
					} catch (err) {
						console.error(err);
					}
				}}
			>
				{!loading ? "Generate" : <CircularProgress></CircularProgress>}
			</button>
		</div>
	);
};

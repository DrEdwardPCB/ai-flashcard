import { useEffect, useState } from "react";
import { Flashcard } from "../types/flashcards";
import ReactCardFlip from "react-card-flip";
export interface IFlashcardDisplayProps
	extends React.HTMLProps<HTMLDivElement> {
	card: Flashcard;
}
export const FlashcardDisplay = ({ card }: IFlashcardDisplayProps) => {
	const [isFlipped, setIsFlipped] = useState(false);
	useEffect(() => {
		setIsFlipped(false);
	}, [card]);
	return (
		<div className="flex flex-col p-10">
			<div className="flex items-center justify-center">
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
					<div
						className="flex flex-col items-center justify-center gap-4 p-6 rounded shadow shadow-xl cursor-pointer rounded-3xl shadow-slate-700 bg-slate-800 h-96 w-96"
						onClick={() => setIsFlipped((prev) => !prev)}
					>
						<h1 className="text-xl font-bold">Question:</h1>
						<p>{card.question}</p>
					</div>

					<div
						className="flex flex-col items-center justify-center gap-4 p-6 rounded shadow shadow-xl cursor-pointer rounded-3xl shadow-slate-700 bg-slate-800 h-96 w-96"
						onClick={() => setIsFlipped((prev) => !prev)}
					>
						<h1 className="text-xl font-bold">Answer:</h1>
						<p>{card.answer}</p>
					</div>
				</ReactCardFlip>
			</div>
			<div className="flex"></div>
		</div>
	);
};

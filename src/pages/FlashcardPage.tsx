import { useNavigate, useParams } from "react-router-dom";
import { useFlashcards } from "../hooks/useFlashcards";
import { useEffect, useState } from "react";
import { FlashcardSet } from "../types/flashcards";
import { Button, CircularProgress } from "@mui/material";
import { FlashcardDisplay } from "../components/FlashcardDisplay";

export const FlashcardPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { getFlashCardSet } = useFlashcards();
	const [flashcardSet, setFlashcardSet] = useState<FlashcardSet | undefined>(
		undefined
	);
	const [page, setPage] = useState(0);
	useEffect(() => {
		if (id) {
			const fcs = getFlashCardSet(id);
			if (fcs) {
				setFlashcardSet(fcs);
				return;
			}
		}
		navigate("/*");
	}, [id]);

	// reset page number on page leave
	useEffect(() => {
		return () => {
			setPage(0);
		};
	}, []);
	if (flashcardSet) {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-center pt-6 text-xl font-bold">
					{flashcardSet.name}
				</div>
				<div className="flex items-center justify-center flex-1">
					<FlashcardDisplay
						card={flashcardSet.cards[page]}
					></FlashcardDisplay>
				</div>
				<div className="flex justify-between p-4">
					<Button
						onClick={() => {
							setPage((prev) => (prev > 0 ? prev - 1 : prev));
						}}
					>
						{"< prev"}
					</Button>
					<p>{`${page + 1}/${flashcardSet.cards.length}`}</p>
					<Button
						onClick={() => {
							setPage((prev) =>
								prev < flashcardSet.cards.length - 1
									? prev + 1
									: prev
							);
						}}
					>
						{"next >"}
					</Button>
				</div>
			</div>
		);
	}
	return (
		<div className="flex items-center justify-center w-full h-full">
			<CircularProgress />
		</div>
	);
};

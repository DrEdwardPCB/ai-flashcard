import React from "react";
import { useFlashcards } from "../hooks/useFlashcards";
import { FlashcardSet } from "./FlashcardSet";

export interface IFlashcardGallery extends React.HTMLProps<HTMLDivElement> {
	title: string;
}
export const FlashcardGallery = ({ title, ...props }: IFlashcardGallery) => {
	const { flashcards } = useFlashcards();
	return (
		<div {...props} className="flex-1 p-6 grow-0">
			<h1 className="text-3xl font-bold">{title}</h1>
			<div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3 xl:grid-cols-4">
				{flashcards.map((e) => (
					<FlashcardSet
						key={e.id}
						id={e.id}
						name={e.name}
						createdAt={e.createdAt}
					></FlashcardSet>
				))}
			</div>
		</div>
	);
};

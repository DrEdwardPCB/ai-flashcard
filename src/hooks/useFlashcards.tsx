import { useLocalStorage } from "usehooks-ts";
import { CreateFlashcardSet, StoredFlashcardSets } from "../types/flashcards";
import { v4 } from "uuid";
import dayjs from "dayjs";

// this hooks covers the logic of CRUD of flash card from localstorage
export const useFlashcards = () => {
	const [flashcards, setFlashcards] = useLocalStorage<StoredFlashcardSets>(
		"flashcards",
		[]
	);
	const addFlashCardSet = (set: CreateFlashcardSet) => {
		const flashcardset = Object.assign(set, {
			id: v4(),
			createdAt: dayjs().toDate(),
		});
		setFlashcards((prev) => [...prev, flashcardset]);
	};
	const deleteFlashCardSet = (id: string) => {
		setFlashcards((prev) => prev.filter((e) => e.id !== id));
	};
	const getFlashCardSet = (id: string) => {
		return flashcards.find((e) => e.id === id);
	};

	return { addFlashCardSet, deleteFlashCardSet, getFlashCardSet, flashcards };
};

export interface Flashcard {
	question: string;
	answer: string;
}
export interface FlashcardSet {
	id: string;
	name: string;
	cards: Flashcard[];
	createdAt: Date;
}
export interface CreateFlashcardSet {
	name: string;
	cards: Flashcard[];
}
export type StoredFlashcardSets = FlashcardSet[];

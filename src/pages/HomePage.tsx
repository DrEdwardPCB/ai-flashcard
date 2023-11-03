import { FlashcardGallery } from "../components/FlashcardGallery";
import { OpenaiGenerator } from "../components/OpenaiGenerator";

export const HomePage = () => {
	return (
		<div className="flex flex-col w-full h-full">
			<OpenaiGenerator></OpenaiGenerator>
			<FlashcardGallery
				className="flex-1"
				title="Suggested Card"
			></FlashcardGallery>
		</div>
	);
};

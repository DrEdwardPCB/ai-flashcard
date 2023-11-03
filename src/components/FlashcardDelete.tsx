import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { useFlashcards } from "../hooks/useFlashcards";
import { useState } from "react";

export interface IFlashcardDeleteProps {
	id: string;
	name: string;
}
export const FlashcardDelete = ({ id, name }: IFlashcardDeleteProps) => {
	const { deleteFlashCardSet } = useFlashcards();
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button
				className="max-w-[0.5rem] h-6"
				onClick={() => setOpen(true)}
			>
				x
			</Button>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogTitle>Warning</DialogTitle>
				<DialogContent>
					you are about to delete flashcard set <span>{name}</span> if
					you confirm delete, press CONFIRM, else press CANCEL
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>cancel</Button>
					<Button
						onClick={() => {
							deleteFlashCardSet(id);
							setOpen(false);
						}}
					>
						confirm
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

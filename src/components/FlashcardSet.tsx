import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { FlashcardDelete } from "./FlashcardDelete";

export interface IFlashcardSet {
	id: string;
	name: string;
	createdAt: Date;
}
export const FlashcardSet = ({ id, name, createdAt }: IFlashcardSet) => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex justify-end rounded-t bg-slate-700">
				<FlashcardDelete id={id} name={name}></FlashcardDelete>
			</div>
			<div
				onClick={() => {
					navigate(`/flashcard/${id}`);
				}}
				className="flex flex-col justify-between h-40 p-4 rounded-b shadow shadow-xl cursor-pointer shadow-slate-800 rouned-xl hover:opacity-50 bg-slate-700"
			>
				<h3 className="flex-1 text-xl font-bold">{name}</h3>
				<p className="w-full text-right">
					{dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")}
				</p>
			</div>
		</div>
	);
};

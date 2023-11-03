import OpenAI from "openai";
import { useOpenAiApiKey } from "./useApiKey";
import { useState } from "react";

export const useOpenAi = () => {
	const [getApiKey] = useOpenAiApiKey();
	const [prompt, setPrompt] = useState("");
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState("");
	const queryAi = async () => {
		if (prompt !== "") {
			setLoading(true);
			const openai = new OpenAI({
				apiKey: getApiKey(),
				dangerouslyAllowBrowser: true,
			});
			const chatCompletion = await openai.chat.completions.create({
				messages: [
					{
						role: "user",
						content: `Can you please generate 10 Question and Answer Object in the form of JSON Array related to ${prompt} and wrap the code in md json code block?`,
					},
				],
				model: "gpt-3.5-turbo",
			});
			setLoading(false);
			console.debug(chatCompletion.choices);

			setResult(
				chatCompletion.choices[0].message.content ?? "```json [] ```"
			);
		}
	};
	const resetPrompt = () => {
		setPrompt("");
	};
	return {
		queryAi,
		setPrompt,
		resetPrompt,
		loading,
		result,
		prompt,
	};
};

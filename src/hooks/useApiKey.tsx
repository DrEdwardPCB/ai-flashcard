import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { env } from "../config/env";

// this hooks handles the apiKey storage
export const useOpenAiApiKey = (): [
	{ (): string },
	{ (key: string): void }
] => {
	const [apiKey, updateApiKey] = useLocalStorage("apiKey", "");
	const setApiKey = (key: string): void => {
		updateApiKey(btoa(key));
	};
	const getApiKey = (): string => {
		return atob(apiKey);
	};
	useEffect(() => {
		setApiKey(env.VITE_OPENAI_APIKEY);
	}, []);

	return [getApiKey, setApiKey];
};

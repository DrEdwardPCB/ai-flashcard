import { cleanEnv, str } from "envalid";

export const env = cleanEnv(import.meta.env, {
	VITE_OPENAI_APIKEY: str(),
});

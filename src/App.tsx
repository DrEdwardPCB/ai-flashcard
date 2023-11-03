import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { FlashcardGalleryPage } from "./pages/FlashcardGalleryPage";
import { FlashcardPage } from "./pages/FlashcardPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar></Navbar>}>
						<Route path="/" element={<HomePage></HomePage>}></Route>
						<Route
							path="/flashcard"
							element={
								<FlashcardGalleryPage></FlashcardGalleryPage>
							}
						></Route>
						<Route
							path="/flashcard/:id"
							element={<FlashcardPage></FlashcardPage>}
						></Route>
						<Route
							path="*"
							element={<NotFoundPage></NotFoundPage>}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;

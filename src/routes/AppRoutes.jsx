import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../modules/home/pages/Home";
import JsonFormatter from "../modules/jsonFormatter/pages/JsonFormatter";
import PasswordGenerator from "../modules/passwordGenerator/pages/PasswordGenerator";
import TextCaseConverter from "../modules/textCaseConverter/pages/TextCaseConverter";
import WordCounter from "../modules/wordCounter/pages/WordCounter";
import UUIDGenerator from "../modules/uuidGenerator/pages/UUIDGenerator";
import ColorPalette from "../modules/colorPalette/pages/ColorPalette";
import TimestampConverter from "../modules/timestampConverter/pages/TimestampConverter";
import Tools from "../modules/tools/pages/Tools";
import About from "../modules/about/pages/About";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route
                    path="/tools"
                    element={<Tools />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/tools/json-formatter"
                    element={<JsonFormatter />}
                />

                <Route
                    path="/tools/password-generator"
                    element={<PasswordGenerator />}
                />

                <Route
                    path="/tools/text-case-converter"
                    element={<TextCaseConverter />}
                />

                <Route
                    path="/tools/word-counter"
                    element={<WordCounter />}
                />

                <Route
                    path="/tools/uuid-generator"
                    element={<UUIDGenerator />}
                />

                <Route
                    path="/tools/color-palette"
                    element={<ColorPalette />}
                />

                <Route
                    path="/tools/timestamp-converter"
                    element={<TimestampConverter />}
                />

            </Route>
        </Routes>
    );
};

export default AppRoutes;
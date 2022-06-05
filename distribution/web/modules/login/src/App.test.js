"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "/Users/jsanders/@Development/ts-react-template/@next/web/modules/login/src/App.test.tsx";
const react_1 = require("@testing-library/react");
const App_1 = tslib_1.__importDefault(require("./App"));
test('renders learn react link', () => {
    (0, react_1.render)((0, jsx_dev_runtime_1.jsxDEV)(App_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 6, columnNumber: 10 }, this));
    const linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map
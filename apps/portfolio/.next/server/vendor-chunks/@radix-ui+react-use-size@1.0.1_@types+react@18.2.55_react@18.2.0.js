"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-size@1.0.1_@types+react@18.2.55_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-use-size@1.0.1_@types+react@18.2.55_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSize: () => (/* binding */ $db6c3485150b8e66$export$1ab7ae714698c4b8)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n\n\nfunction $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {\n    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        if (element) {\n            // provide size as early as possible\n            setSize({\n                width: element.offsetWidth,\n                height: element.offsetHeight\n            });\n            const resizeObserver = new ResizeObserver((entries)=>{\n                if (!Array.isArray(entries)) return;\n                // Since we only observe the one element, we don't need to loop over the\n                // array\n                if (!entries.length) return;\n                const entry = entries[0];\n                let width;\n                let height;\n                if (\"borderBoxSize\" in entry) {\n                    const borderSizeEntry = entry[\"borderBoxSize\"]; // iron out differences between browsers\n                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;\n                    width = borderSize[\"inlineSize\"];\n                    height = borderSize[\"blockSize\"];\n                } else {\n                    // for browsers that don't support `borderBoxSize`\n                    // we calculate it ourselves to get the correct border box.\n                    width = element.offsetWidth;\n                    height = element.offsetHeight;\n                }\n                setSize({\n                    width: width,\n                    height: height\n                });\n            });\n            resizeObserver.observe(element, {\n                box: \"border-box\"\n            });\n            return ()=>resizeObserver.unobserve(element);\n        } else // not if it changes to another element.\n        setSize(undefined);\n    }, [\n        element\n    ]);\n    return size;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2Utc2l6ZUAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi41NV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2Utc2l6ZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDMEM7QUFJNUYsU0FBU0ksMENBQTBDQyxPQUFPO0lBQ3RELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBZUEsQ0FBQ087SUFDeENMLGtGQUFzQkEsQ0FBQztRQUNuQixJQUFJRSxTQUFTO1lBQ1Qsb0NBQW9DO1lBQ3BDRSxRQUFRO2dCQUNKRSxPQUFPSixRQUFRSyxXQUFXO2dCQUMxQkMsUUFBUU4sUUFBUU8sWUFBWTtZQUNoQztZQUNBLE1BQU1DLGlCQUFpQixJQUFJQyxlQUFlLENBQUNDO2dCQUN2QyxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0YsVUFBVTtnQkFDNUIsd0VBQXdFO2dCQUN6RSxRQUFRO2dCQUNSLElBQUksQ0FBQ0EsUUFBUUcsTUFBTSxFQUFFO2dCQUNyQixNQUFNQyxRQUFRSixPQUFPLENBQUMsRUFBRTtnQkFDeEIsSUFBSU47Z0JBQ0osSUFBSUU7Z0JBQ0osSUFBSSxtQkFBbUJRLE9BQU87b0JBQzFCLE1BQU1DLGtCQUFrQkQsS0FBSyxDQUFDLGdCQUFnQixFQUFFLHdDQUF3QztvQkFDeEYsTUFBTUUsYUFBYUwsTUFBTUMsT0FBTyxDQUFDRyxtQkFBbUJBLGVBQWUsQ0FBQyxFQUFFLEdBQUdBO29CQUN6RVgsUUFBUVksVUFBVSxDQUFDLGFBQWE7b0JBQ2hDVixTQUFTVSxVQUFVLENBQUMsWUFBWTtnQkFDcEMsT0FBTztvQkFDSCxrREFBa0Q7b0JBQ2xELDJEQUEyRDtvQkFDM0RaLFFBQVFKLFFBQVFLLFdBQVc7b0JBQzNCQyxTQUFTTixRQUFRTyxZQUFZO2dCQUNqQztnQkFDQUwsUUFBUTtvQkFDSkUsT0FBT0E7b0JBQ1BFLFFBQVFBO2dCQUNaO1lBQ0o7WUFDQUUsZUFBZVMsT0FBTyxDQUFDakIsU0FBUztnQkFDNUJrQixLQUFLO1lBQ1Q7WUFDQSxPQUFPLElBQUlWLGVBQWVXLFNBQVMsQ0FBQ25CO1FBRXhDLE9BQ0Esd0NBQXdDO1FBQ3hDRSxRQUFRQztJQUNaLEdBQUc7UUFDQ0g7S0FDSDtJQUNELE9BQU9DO0FBQ1g7QUFLOEQsQ0FDOUQsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtdXNlLXNpemVAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuNTVfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLXNpemUvZGlzdC9pbmRleC5tanM/OGJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlIGFzICQ5Z3lHUiR1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdCBhcyAkOWd5R1IkdXNlTGF5b3V0RWZmZWN0fSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0XCI7XG5cblxuXG5mdW5jdGlvbiAkZGI2YzM0ODUxNTBiOGU2NiRleHBvcnQkMWFiN2FlNzE0Njk4YzRiOChlbGVtZW50KSB7XG4gICAgY29uc3QgW3NpemUsIHNldFNpemVdID0gJDlneUdSJHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgJDlneUdSJHVzZUxheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gcHJvdmlkZSBzaXplIGFzIGVhcmx5IGFzIHBvc3NpYmxlXG4gICAgICAgICAgICBzZXRTaXplKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBvbmx5IG9ic2VydmUgdGhlIG9uZSBlbGVtZW50LCB3ZSBkb24ndCBuZWVkIHRvIGxvb3Agb3ZlciB0aGVcbiAgICAgICAgICAgICAgICAvLyBhcnJheVxuICAgICAgICAgICAgICAgIGlmICghZW50cmllcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbMF07XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoO1xuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKCdib3JkZXJCb3hTaXplJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJTaXplRW50cnkgPSBlbnRyeVsnYm9yZGVyQm94U2l6ZSddOyAvLyBpcm9uIG91dCBkaWZmZXJlbmNlcyBiZXR3ZWVuIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclNpemUgPSBBcnJheS5pc0FycmF5KGJvcmRlclNpemVFbnRyeSkgPyBib3JkZXJTaXplRW50cnlbMF0gOiBib3JkZXJTaXplRW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gYm9yZGVyU2l6ZVsnaW5saW5lU2l6ZSddO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBib3JkZXJTaXplWydibG9ja1NpemUnXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGBib3JkZXJCb3hTaXplYFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYWxjdWxhdGUgaXQgb3Vyc2VsdmVzIHRvIGdldCB0aGUgY29ycmVjdCBib3JkZXIgYm94LlxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRTaXplKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBib3g6ICdib3JkZXItYm94J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCk9PnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuICAgICAgICAgICAgO1xuICAgICAgICB9IGVsc2UgLy8gV2Ugb25seSB3YW50IHRvIHJlc2V0IHRvIGB1bmRlZmluZWRgIHdoZW4gdGhlIGVsZW1lbnQgYmVjb21lcyBgbnVsbGAsXG4gICAgICAgIC8vIG5vdCBpZiBpdCBjaGFuZ2VzIHRvIGFub3RoZXIgZWxlbWVudC5cbiAgICAgICAgc2V0U2l6ZSh1bmRlZmluZWQpO1xuICAgIH0sIFtcbiAgICAgICAgZWxlbWVudFxuICAgIF0pO1xuICAgIHJldHVybiBzaXplO1xufVxuXG5cblxuXG5leHBvcnQgeyRkYjZjMzQ4NTE1MGI4ZTY2JGV4cG9ydCQxYWI3YWU3MTQ2OThjNGI4IGFzIHVzZVNpemV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiJDlneUdSJHVzZVN0YXRlIiwidXNlTGF5b3V0RWZmZWN0IiwiJDlneUdSJHVzZUxheW91dEVmZmVjdCIsIiRkYjZjMzQ4NTE1MGI4ZTY2JGV4cG9ydCQxYWI3YWU3MTQ2OThjNGI4IiwiZWxlbWVudCIsInNpemUiLCJzZXRTaXplIiwidW5kZWZpbmVkIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZW50cnkiLCJib3JkZXJTaXplRW50cnkiLCJib3JkZXJTaXplIiwib2JzZXJ2ZSIsImJveCIsInVub2JzZXJ2ZSIsInVzZVNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs\n");

/***/ })

};
;
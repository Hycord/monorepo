"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-context@1.0.1_@types+react@18.2.55_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-context@1.0.1_@types+react@18.2.55_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs":
/*!****************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ $c512c27ab02ef895$export$fd42f52fd3ae1109),\n/* harmony export */   createContextScope: () => (/* binding */ $c512c27ab02ef895$export$50c7b4e9d9f19c1)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {\n    const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n    function Provider(props) {\n        const { children: children, ...context } = props; // Only re-memoize when prop values change\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n        const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context, Object.values(context));\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {\n            value: value\n        }, children);\n    }\n    function useContext(consumerName) {\n        const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n        if (context) return context;\n        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.\n        throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n    }\n    Provider.displayName = rootComponentName + \"Provider\";\n    return [\n        Provider,\n        useContext\n    ];\n}\n/* -------------------------------------------------------------------------------------------------\n * createContextScope\n * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {\n    let defaultContexts = [];\n    /* -----------------------------------------------------------------------------------------------\n   * createContext\n   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {\n        const BaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n        const index = defaultContexts.length;\n        defaultContexts = [\n            ...defaultContexts,\n            defaultContext\n        ];\n        function Provider(props) {\n            const { scope: scope, children: children, ...context } = props;\n            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change\n            // eslint-disable-next-line react-hooks/exhaustive-deps\n            const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context, Object.values(context));\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {\n                value: value\n            }, children);\n        }\n        function useContext(consumerName, scope) {\n            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;\n            const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n            if (context) return context;\n            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.\n            throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n        }\n        Provider.displayName = rootComponentName + \"Provider\";\n        return [\n            Provider,\n            useContext\n        ];\n    }\n    /* -----------------------------------------------------------------------------------------------\n   * createScope\n   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{\n        const scopeContexts = defaultContexts.map((defaultContext)=>{\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n        });\n        return function useScope(scope) {\n            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;\n            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n                    [`__scope${scopeName}`]: {\n                        ...scope,\n                        [scopeName]: contexts\n                    }\n                }), [\n                scope,\n                contexts\n            ]);\n        };\n    };\n    createScope.scopeName = scopeName;\n    return [\n        $c512c27ab02ef895$export$fd42f52fd3ae1109,\n        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)\n    ];\n}\n/* -------------------------------------------------------------------------------------------------\n * composeContextScopes\n * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {\n    const baseScope = scopes[0];\n    if (scopes.length === 1) return baseScope;\n    const createScope1 = ()=>{\n        const scopeHooks = scopes.map((createScope)=>({\n                useScope: createScope(),\n                scopeName: createScope.scopeName\n            }));\n        return function useComposedScopes(overrideScopes) {\n            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope, scopeName: scopeName })=>{\n                // We are calling a hook inside a callback which React warns against to avoid inconsistent\n                // renders, however, scoping doesn't have render side effects so we ignore the rule.\n                // eslint-disable-next-line react-hooks/rules-of-hooks\n                const scopeProps = useScope(overrideScopes);\n                const currentScope = scopeProps[`__scope${scopeName}`];\n                return {\n                    ...nextScopes,\n                    ...currentScope\n                };\n            }, {});\n            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n                    [`__scope${baseScope.scopeName}`]: nextScopes1\n                }), [\n                nextScopes1\n            ]);\n        };\n    };\n    createScope1.scopeName = baseScope.scopeName;\n    return createScope1;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1jb250ZXh0QDEuMC4xX0B0eXBlcytyZWFjdEAxOC4yLjU1X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStKO0FBRy9KLFNBQVNRLDBDQUEwQ0MsaUJBQWlCLEVBQUVDLGNBQWM7SUFDaEYsTUFBTUMsVUFBVSxXQUFXLEdBQUdWLG9EQUFvQkEsQ0FBQ1M7SUFDbkQsU0FBU0UsU0FBU0MsS0FBSztRQUNuQixNQUFNLEVBQUVDLFVBQVVBLFFBQVEsRUFBRyxHQUFHQyxTQUFTLEdBQUdGLE9BQU8sMENBQTBDO1FBQzdGLHVEQUF1RDtRQUN2RCxNQUFNRyxRQUFRYiw4Q0FBY0EsQ0FBQyxJQUFJWSxTQUMvQkUsT0FBT0MsTUFBTSxDQUFDSDtRQUNoQixPQUFPLFdBQVcsR0FBR1Ysb0RBQW9CQSxDQUFDTSxRQUFRQyxRQUFRLEVBQUU7WUFDeERJLE9BQU9BO1FBQ1gsR0FBR0Y7SUFDUDtJQUNBLFNBQVNSLFdBQVdhLFlBQVk7UUFDNUIsTUFBTUosVUFBVVIsaURBQWlCQSxDQUFDSTtRQUNsQyxJQUFJSSxTQUFTLE9BQU9BO1FBQ3BCLElBQUlMLG1CQUFtQlUsV0FBVyxPQUFPVixnQkFBZ0IsaUVBQWlFO1FBQzFILE1BQU0sSUFBSVcsTUFBTSxDQUFDLEVBQUUsRUFBRUYsYUFBYSx5QkFBeUIsRUFBRVYsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RjtJQUNBRyxTQUFTVSxXQUFXLEdBQUdiLG9CQUFvQjtJQUMzQyxPQUFPO1FBQ0hHO1FBQ0FOO0tBQ0g7QUFDTDtBQUNBOztrR0FFa0csR0FBRyxTQUFTaUIseUNBQXlDQyxTQUFTLEVBQUVDLHlCQUF5QixFQUFFO0lBQ3pMLElBQUlDLGtCQUFrQixFQUFFO0lBQ3hCOztrR0FFOEYsR0FBRyxTQUFTbEIsMENBQTBDQyxpQkFBaUIsRUFB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b0JBQ2IsR0FBR0UsWUFBWTtnQkFDbkI7WUFDSixHQUFHLENBQUM7WUFDSixPQUFPNUMsOENBQWNBLENBQUMsSUFBSztvQkFDbkIsQ0FBQyxDQUFDLE9BQU8sRUFBRW1DLFVBQVVkLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRW1CO2dCQUN2QyxJQUNGO2dCQUNFQTthQUNIO1FBQ0w7SUFDSjtJQUNBSixhQUFhZixTQUFTLEdBQUdjLFVBQVVkLFNBQVM7SUFDNUMsT0FBT2U7QUFDWDtBQUtvSSxDQUNwSSxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1jb250ZXh0QDEuMC4xX0B0eXBlcytyZWFjdEAxOC4yLjU1X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQvZGlzdC9pbmRleC5tanM/NjViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQgYXMgJDNia0FLJGNyZWF0ZUNvbnRleHQsIHVzZU1lbW8gYXMgJDNia0FLJHVzZU1lbW8sIGNyZWF0ZUVsZW1lbnQgYXMgJDNia0FLJGNyZWF0ZUVsZW1lbnQsIHVzZUNvbnRleHQgYXMgJDNia0FLJHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmZ1bmN0aW9uICRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCRmZDQyZjUyZmQzYWUxMTA5KHJvb3RDb21wb25lbnROYW1lLCBkZWZhdWx0Q29udGV4dCkge1xuICAgIGNvbnN0IENvbnRleHQgPSAvKiNfX1BVUkVfXyovICQzYmtBSyRjcmVhdGVDb250ZXh0KGRlZmF1bHRDb250ZXh0KTtcbiAgICBmdW5jdGlvbiBQcm92aWRlcihwcm9wcykge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBjaGlsZHJlbiAsIC4uLmNvbnRleHQgfSA9IHByb3BzOyAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICQzYmtBSyR1c2VNZW1vKCgpPT5jb250ZXh0XG4gICAgICAgICwgT2JqZWN0LnZhbHVlcyhjb250ZXh0KSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICQzYmtBSyRjcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzZUNvbnRleHQoY29uc3VtZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSAkM2JrQUskdXNlQ29udGV4dChDb250ZXh0KTtcbiAgICAgICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgICAgICBpZiAoZGVmYXVsdENvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb250ZXh0OyAvLyBpZiBhIGRlZmF1bHRDb250ZXh0IHdhc24ndCBzcGVjaWZpZWQsIGl0J3MgYSByZXF1aXJlZCBjb250ZXh0LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYCk7XG4gICAgfVxuICAgIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyAnUHJvdmlkZXInO1xuICAgIHJldHVybiBbXG4gICAgICAgIFByb3ZpZGVyLFxuICAgICAgICB1c2VDb250ZXh0XG4gICAgXTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGNyZWF0ZUNvbnRleHRTY29wZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBmdW5jdGlvbiAkYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkNTBjN2I0ZTlkOWYxOWMxKHNjb3BlTmFtZSwgY3JlYXRlQ29udGV4dFNjb3BlRGVwcyA9IFtdKSB7XG4gICAgbGV0IGRlZmF1bHRDb250ZXh0cyA9IFtdO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGNyZWF0ZUNvbnRleHRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gZnVuY3Rpb24gJGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JGZkNDJmNTJmZDNhZTExMDkocm9vdENvbXBvbmVudE5hbWUsIGRlZmF1bHRDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IEJhc2VDb250ZXh0ID0gLyojX19QVVJFX18qLyAkM2JrQUskY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGVmYXVsdENvbnRleHRzLmxlbmd0aDtcbiAgICAgICAgZGVmYXVsdENvbnRleHRzID0gW1xuICAgICAgICAgICAgLi4uZGVmYXVsdENvbnRleHRzLFxuICAgICAgICAgICAgZGVmYXVsdENvbnRleHRcbiAgICAgICAgXTtcbiAgICAgICAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2NvcGU6IHNjb3BlICwgY2hpbGRyZW46IGNoaWxkcmVuICwgLi4uY29udGV4dCB9ID0gcHJvcHM7XG4gICAgICAgICAgICBjb25zdCBDb250ZXh0ID0gKHNjb3BlID09PSBudWxsIHx8IHNjb3BlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzY29wZVtzY29wZU5hbWVdW2luZGV4XSkgfHwgQmFzZUNvbnRleHQ7IC8vIE9ubHkgcmUtbWVtb2l6ZSB3aGVuIHByb3AgdmFsdWVzIGNoYW5nZVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkM2JrQUskdXNlTWVtbygoKT0+Y29udGV4dFxuICAgICAgICAgICAgLCBPYmplY3QudmFsdWVzKGNvbnRleHQpKTtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICQzYmtBSyRjcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZSwgc2NvcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IENvbnRleHQgPSAoc2NvcGUgPT09IG51bGwgfHwgc2NvcGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNjb3BlW3Njb3BlTmFtZV1baW5kZXhdKSB8fCBCYXNlQ29udGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSAkM2JrQUskdXNlQ29udGV4dChDb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0Q29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdENvbnRleHQ7IC8vIGlmIGEgZGVmYXVsdENvbnRleHQgd2Fzbid0IHNwZWNpZmllZCwgaXQncyBhIHJlcXVpcmVkIGNvbnRleHQuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYCk7XG4gICAgICAgIH1cbiAgICAgICAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArICdQcm92aWRlcic7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBQcm92aWRlcixcbiAgICAgICAgICAgIHVzZUNvbnRleHRcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogY3JlYXRlU2NvcGVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gY29uc3QgY3JlYXRlU2NvcGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBzY29wZUNvbnRleHRzID0gZGVmYXVsdENvbnRleHRzLm1hcCgoZGVmYXVsdENvbnRleHQpPT57XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAkM2JrQUskY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdXNlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHRzID0gKHNjb3BlID09PSBudWxsIHx8IHNjb3BlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzY29wZVtzY29wZU5hbWVdKSB8fCBzY29wZUNvbnRleHRzO1xuICAgICAgICAgICAgcmV0dXJuICQzYmtBSyR1c2VNZW1vKCgpPT4oe1xuICAgICAgICAgICAgICAgICAgICBbYF9fc2NvcGUke3Njb3BlTmFtZX1gXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbc2NvcGVOYW1lXTogY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIFtcbiAgICAgICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgICAgICBjb250ZXh0c1xuICAgICAgICAgICAgXSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjcmVhdGVTY29wZS5zY29wZU5hbWUgPSBzY29wZU5hbWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgJGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JGZkNDJmNTJmZDNhZTExMDksXG4gICAgICAgICRjNTEyYzI3YWIwMmVmODk1JHZhciRjb21wb3NlQ29udGV4dFNjb3BlcyhjcmVhdGVTY29wZSwgLi4uY3JlYXRlQ29udGV4dFNjb3BlRGVwcylcbiAgICBdO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogY29tcG9zZUNvbnRleHRTY29wZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gZnVuY3Rpb24gJGM1MTJjMjdhYjAyZWY4OTUkdmFyJGNvbXBvc2VDb250ZXh0U2NvcGVzKC4uLnNjb3Blcykge1xuICAgIGNvbnN0IGJhc2VTY29wZSA9IHNjb3Blc1swXTtcbiAgICBpZiAoc2NvcGVzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGJhc2VTY29wZTtcbiAgICBjb25zdCBjcmVhdGVTY29wZTEgPSAoKT0+e1xuICAgICAgICBjb25zdCBzY29wZUhvb2tzID0gc2NvcGVzLm1hcCgoY3JlYXRlU2NvcGUpPT4oe1xuICAgICAgICAgICAgICAgIHVzZVNjb3BlOiBjcmVhdGVTY29wZSgpLFxuICAgICAgICAgICAgICAgIHNjb3BlTmFtZTogY3JlYXRlU2NvcGUuc2NvcGVOYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdXNlQ29tcG9zZWRTY29wZXMob3ZlcnJpZGVTY29wZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTY29wZXMxID0gc2NvcGVIb29rcy5yZWR1Y2UoKG5leHRTY29wZXMsIHsgdXNlU2NvcGU6IHVzZVNjb3BlICwgc2NvcGVOYW1lOiBzY29wZU5hbWUgIH0pPT57XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGNhbGxpbmcgYSBob29rIGluc2lkZSBhIGNhbGxiYWNrIHdoaWNoIFJlYWN0IHdhcm5zIGFnYWluc3QgdG8gYXZvaWQgaW5jb25zaXN0ZW50XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVycywgaG93ZXZlciwgc2NvcGluZyBkb2Vzbid0IGhhdmUgcmVuZGVyIHNpZGUgZWZmZWN0cyBzbyB3ZSBpZ25vcmUgdGhlIHJ1bGUuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVQcm9wcyA9IHVzZVNjb3BlKG92ZXJyaWRlU2NvcGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSBzY29wZVByb3BzW2BfX3Njb3BlJHtzY29wZU5hbWV9YF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV4dFNjb3BlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFNjb3BlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIHJldHVybiAkM2JrQUskdXNlTWVtbygoKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgW2BfX3Njb3BlJHtiYXNlU2NvcGUuc2NvcGVOYW1lfWBdOiBuZXh0U2NvcGVzMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIFtcbiAgICAgICAgICAgICAgICBuZXh0U2NvcGVzMVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjcmVhdGVTY29wZTEuc2NvcGVOYW1lID0gYmFzZVNjb3BlLnNjb3BlTmFtZTtcbiAgICByZXR1cm4gY3JlYXRlU2NvcGUxO1xufVxuXG5cblxuXG5leHBvcnQgeyRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCRmZDQyZjUyZmQzYWUxMTA5IGFzIGNyZWF0ZUNvbnRleHQsICRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCQ1MGM3YjRlOWQ5ZjE5YzEgYXMgY3JlYXRlQ29udGV4dFNjb3BlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiJDNia0FLJGNyZWF0ZUNvbnRleHQiLCJ1c2VNZW1vIiwiJDNia0FLJHVzZU1lbW8iLCJjcmVhdGVFbGVtZW50IiwiJDNia0FLJGNyZWF0ZUVsZW1lbnQiLCJ1c2VDb250ZXh0IiwiJDNia0FLJHVzZUNvbnRleHQiLCIkYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkZmQ0MmY1MmZkM2FlMTEwOSIsInJvb3RDb21wb25lbnROYW1lIiwiZGVmYXVsdENvbnRleHQiLCJDb250ZXh0IiwiUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiY29udGV4dCIsInZhbHVlIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc3VtZXJOYW1lIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJkaXNwbGF5TmFtZSIsIiRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCQ1MGM3YjRlOWQ5ZjE5YzEiLCJzY29wZU5hbWUiLCJjcmVhdGVDb250ZXh0U2NvcGVEZXBzIiwiZGVmYXVsdENvbnRleHRzIiwiQmFzZUNvbnRleHQiLCJpbmRleCIsImxlbmd0aCIsInNjb3BlIiwiY3JlYXRlU2NvcGUiLCJzY29wZUNvbnRleHRzIiwibWFwIiwidXNlU2NvcGUiLCJjb250ZXh0cyIsIiRjNTEyYzI3YWIwMmVmODk1JHZhciRjb21wb3NlQ29udGV4dFNjb3BlcyIsInNjb3BlcyIsImJhc2VTY29wZSIsImNyZWF0ZVNjb3BlMSIsInNjb3BlSG9va3MiLCJ1c2VDb21wb3NlZFNjb3BlcyIsIm92ZXJyaWRlU2NvcGVzIiwibmV4dFNjb3BlczEiLCJyZWR1Y2UiLCJuZXh0U2NvcGVzIiwic2NvcGVQcm9wcyIsImN1cnJlbnRTY29wZSIsImNyZWF0ZUNvbnRleHRTY29wZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.55_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\n");

/***/ })

};
;
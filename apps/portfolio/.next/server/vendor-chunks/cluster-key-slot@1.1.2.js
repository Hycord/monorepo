"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cluster-key-slot@1.1.2";
exports.ids = ["vendor-chunks/cluster-key-slot@1.1.2"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("/*\n * Copyright 2001-2010 Georges Menie (www.menie.org)\n * Copyright 2010 Salvatore Sanfilippo (adapted to Redis coding style)\n * Copyright 2015 Zihua Li (http://zihua.li) (ported to JavaScript)\n * Copyright 2016 Mike Diarmid (http://github.com/salakar) (re-write for performance, ~700% perf inc)\n * All rights reserved.\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are met:\n *\n *     * Redistributions of source code must retain the above copyright\n *       notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above copyright\n *       notice, this list of conditions and the following disclaimer in the\n *       documentation and/or other materials provided with the distribution.\n *     * Neither the name of the University of California, Berkeley nor the\n *       names of its contributors may be used to endorse or promote products\n *       derived from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\n * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */ /* CRC16 implementation according to CCITT standards.\n *\n * Note by @antirez: this is actually the XMODEM CRC 16 algorithm, using the\n * following parameters:\n *\n * Name                       : \"XMODEM\", also known as \"ZMODEM\", \"CRC-16/ACORN\"\n * Width                      : 16 bit\n * Poly                       : 1021 (That is actually x^16 + x^12 + x^5 + 1)\n * Initialization             : 0000\n * Reflect Input byte         : False\n * Reflect Output CRC         : False\n * Xor constant to output CRC : 0000\n * Output for \"123456789\"     : 31C3\n */ \nvar lookup = [\n    0x0000,\n    0x1021,\n    0x2042,\n    0x3063,\n    0x4084,\n    0x50a5,\n    0x60c6,\n    0x70e7,\n    0x8108,\n    0x9129,\n    0xa14a,\n    0xb16b,\n    0xc18c,\n    0xd1ad,\n    0xe1ce,\n    0xf1ef,\n    0x1231,\n    0x0210,\n    0x3273,\n    0x2252,\n    0x52b5,\n    0x4294,\n    0x72f7,\n    0x62d6,\n    0x9339,\n    0x8318,\n    0xb37b,\n    0xa35a,\n    0xd3bd,\n    0xc39c,\n    0xf3ff,\n    0xe3de,\n    0x2462,\n    0x3443,\n    0x0420,\n    0x1401,\n    0x64e6,\n    0x74c7,\n    0x44a4,\n    0x5485,\n    0xa56a,\n    0xb54b,\n    0x8528,\n    0x9509,\n    0xe5ee,\n    0xf5cf,\n    0xc5ac,\n    0xd58d,\n    0x3653,\n    0x2672,\n    0x1611,\n    0x0630,\n    0x76d7,\n    0x66f6,\n    0x5695,\n    0x46b4,\n    0xb75b,\n    0xa77a,\n    0x9719,\n    0x8738,\n    0xf7df,\n    0xe7fe,\n    0xd79d,\n    0xc7bc,\n    0x48c4,\n    0x58e5,\n    0x6886,\n    0x78a7,\n    0x0840,\n    0x1861,\n    0x2802,\n    0x3823,\n    0xc9cc,\n    0xd9ed,\n    0xe98e,\n    0xf9af,\n    0x8948,\n    0x9969,\n    0xa90a,\n    0xb92b,\n    0x5af5,\n    0x4ad4,\n    0x7ab7,\n    0x6a96,\n    0x1a71,\n    0x0a50,\n    0x3a33,\n    0x2a12,\n    0xdbfd,\n    0xcbdc,\n    0xfbbf,\n    0xeb9e,\n    0x9b79,\n    0x8b58,\n    0xbb3b,\n    0xab1a,\n    0x6ca6,\n    0x7c87,\n    0x4ce4,\n    0x5cc5,\n    0x2c22,\n    0x3c03,\n    0x0c60,\n    0x1c41,\n    0xedae,\n    0xfd8f,\n    0xcdec,\n    0xddcd,\n    0xad2a,\n    0xbd0b,\n    0x8d68,\n    0x9d49,\n    0x7e97,\n    0x6eb6,\n    0x5ed5,\n    0x4ef4,\n    0x3e13,\n    0x2e32,\n    0x1e51,\n    0x0e70,\n    0xff9f,\n    0xefbe,\n    0xdfdd,\n    0xcffc,\n    0xbf1b,\n    0xaf3a,\n    0x9f59,\n    0x8f78,\n    0x9188,\n    0x81a9,\n    0xb1ca,\n    0xa1eb,\n    0xd10c,\n    0xc12d,\n    0xf14e,\n    0xe16f,\n    0x1080,\n    0x00a1,\n    0x30c2,\n    0x20e3,\n    0x5004,\n    0x4025,\n    0x7046,\n    0x6067,\n    0x83b9,\n    0x9398,\n    0xa3fb,\n    0xb3da,\n    0xc33d,\n    0xd31c,\n    0xe37f,\n    0xf35e,\n    0x02b1,\n    0x1290,\n    0x22f3,\n    0x32d2,\n    0x4235,\n    0x5214,\n    0x6277,\n    0x7256,\n    0xb5ea,\n    0xa5cb,\n    0x95a8,\n    0x8589,\n    0xf56e,\n    0xe54f,\n    0xd52c,\n    0xc50d,\n    0x34e2,\n    0x24c3,\n    0x14a0,\n    0x0481,\n    0x7466,\n    0x6447,\n    0x5424,\n    0x4405,\n    0xa7db,\n    0xb7fa,\n    0x8799,\n    0x97b8,\n    0xe75f,\n    0xf77e,\n    0xc71d,\n    0xd73c,\n    0x26d3,\n    0x36f2,\n    0x0691,\n    0x16b0,\n    0x6657,\n    0x7676,\n    0x4615,\n    0x5634,\n    0xd94c,\n    0xc96d,\n    0xf90e,\n    0xe92f,\n    0x99c8,\n    0x89e9,\n    0xb98a,\n    0xa9ab,\n    0x5844,\n    0x4865,\n    0x7806,\n    0x6827,\n    0x18c0,\n    0x08e1,\n    0x3882,\n    0x28a3,\n    0xcb7d,\n    0xdb5c,\n    0xeb3f,\n    0xfb1e,\n    0x8bf9,\n    0x9bd8,\n    0xabbb,\n    0xbb9a,\n    0x4a75,\n    0x5a54,\n    0x6a37,\n    0x7a16,\n    0x0af1,\n    0x1ad0,\n    0x2ab3,\n    0x3a92,\n    0xfd2e,\n    0xed0f,\n    0xdd6c,\n    0xcd4d,\n    0xbdaa,\n    0xad8b,\n    0x9de8,\n    0x8dc9,\n    0x7c26,\n    0x6c07,\n    0x5c64,\n    0x4c45,\n    0x3ca2,\n    0x2c83,\n    0x1ce0,\n    0x0cc1,\n    0xef1f,\n    0xff3e,\n    0xcf5d,\n    0xdf7c,\n    0xaf9b,\n    0xbfba,\n    0x8fd9,\n    0x9ff8,\n    0x6e17,\n    0x7e36,\n    0x4e55,\n    0x5e74,\n    0x2e93,\n    0x3eb2,\n    0x0ed1,\n    0x1ef0\n];\n/**\n * Convert a string to a UTF8 array - faster than via buffer\n * @param str\n * @returns {Array}\n */ var toUTF8Array = function toUTF8Array(str) {\n    var char;\n    var i = 0;\n    var p = 0;\n    var utf8 = [];\n    var len = str.length;\n    for(; i < len; i++){\n        char = str.charCodeAt(i);\n        if (char < 128) {\n            utf8[p++] = char;\n        } else if (char < 2048) {\n            utf8[p++] = char >> 6 | 192;\n            utf8[p++] = char & 63 | 128;\n        } else if ((char & 0xFC00) === 0xD800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {\n            char = 0x10000 + ((char & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);\n            utf8[p++] = char >> 18 | 240;\n            utf8[p++] = char >> 12 & 63 | 128;\n            utf8[p++] = char >> 6 & 63 | 128;\n            utf8[p++] = char & 63 | 128;\n        } else {\n            utf8[p++] = char >> 12 | 224;\n            utf8[p++] = char >> 6 & 63 | 128;\n            utf8[p++] = char & 63 | 128;\n        }\n    }\n    return utf8;\n};\n/**\n * Convert a string into a redis slot hash.\n * @param str\n * @returns {number}\n */ var generate = module.exports = function generate(str) {\n    var char;\n    var i = 0;\n    var start = -1;\n    var result = 0;\n    var resultHash = 0;\n    var utf8 = typeof str === \"string\" ? toUTF8Array(str) : str;\n    var len = utf8.length;\n    while(i < len){\n        char = utf8[i++];\n        if (start === -1) {\n            if (char === 0x7B) {\n                start = i;\n            }\n        } else if (char !== 0x7D) {\n            resultHash = lookup[(char ^ resultHash >> 8) & 0xFF] ^ resultHash << 8;\n        } else if (i - 1 !== start) {\n            return resultHash & 0x3FFF;\n        }\n        result = lookup[(char ^ result >> 8) & 0xFF] ^ result << 8;\n    }\n    return result & 0x3FFF;\n};\n/**\n * Convert an array of multiple strings into a redis slot hash.\n * Returns -1 if one of the keys is not for the same slot as the others\n * @param keys\n * @returns {number}\n */ module.exports.generateMulti = function generateMulti(keys) {\n    var i = 1;\n    var len = keys.length;\n    var base = generate(keys[0]);\n    while(i < len){\n        if (generate(keys[i++]) !== base) return -1;\n    }\n    return base;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NsdXN0ZXIta2V5LXNsb3RAMS4xLjIvbm9kZV9tb2R1bGVzL2NsdXN0ZXIta2V5LXNsb3QvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEJDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQztBQUVELElBQUlBLFNBQVM7SUFDWDtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQ3hEO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFDeEQ7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUN4RDtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQ3hEO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFDeEQ7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUN4RDtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQ3hEO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFDeEQ7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUN4RDtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQ3hEO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFDeEQ7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUN4RDtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQ3hEO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFDeEQ7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUN4RDtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lBQ3hEO0lBQVE7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFRO0lB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SUFBSVYsU0FBUyxNQUFNO2dCQUNqQlUsUUFBUVQ7WUFDVjtRQUNGLE9BQU8sSUFBSUQsU0FBUyxNQUFNO1lBQ3hCWSxhQUFhZixNQUFNLENBQUMsQ0FBQ0csT0FBUVksY0FBYyxDQUFDLElBQUssS0FBSyxHQUFJQSxjQUFjO1FBQzFFLE9BQU8sSUFBSVgsSUFBSSxNQUFNUyxPQUFPO1lBQzFCLE9BQU9FLGFBQWE7UUFDdEI7UUFFQUQsU0FBU2QsTUFBTSxDQUFDLENBQUNHLE9BQVFXLFVBQVUsQ0FBQyxJQUFLLEtBQUssR0FBSUEsVUFBVTtJQUM5RDtJQUVBLE9BQU9BLFNBQVM7QUFDbEI7QUFFQTs7Ozs7Q0FLQyxHQUNESCw0QkFBNEIsR0FBRyxTQUFTSyxjQUFjQyxJQUFJO0lBQ3hELElBQUliLElBQUk7SUFDUixJQUFJRyxNQUFNVSxLQUFLVCxNQUFNO0lBQ3JCLElBQUlVLE9BQU9SLFNBQVNPLElBQUksQ0FBQyxFQUFFO0lBRTNCLE1BQU9iLElBQUlHLElBQUs7UUFDZCxJQUFJRyxTQUFTTyxJQUFJLENBQUNiLElBQUksTUFBTWMsTUFBTSxPQUFPLENBQUM7SUFDNUM7SUFFQSxPQUFPQTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHVzdGVyLWtleS1zbG90QDEuMS4yL25vZGVfbW9kdWxlcy9jbHVzdGVyLWtleS1zbG90L2xpYi9pbmRleC5qcz8yYmViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAwMS0yMDEwIEdlb3JnZXMgTWVuaWUgKHd3dy5tZW5pZS5vcmcpXG4gKiBDb3B5cmlnaHQgMjAxMCBTYWx2YXRvcmUgU2FuZmlsaXBwbyAoYWRhcHRlZCB0byBSZWRpcyBjb2Rpbmcgc3R5bGUpXG4gKiBDb3B5cmlnaHQgMjAxNSBaaWh1YSBMaSAoaHR0cDovL3ppaHVhLmxpKSAocG9ydGVkIHRvIEphdmFTY3JpcHQpXG4gKiBDb3B5cmlnaHQgMjAxNiBNaWtlIERpYXJtaWQgKGh0dHA6Ly9naXRodWIuY29tL3NhbGFrYXIpIChyZS13cml0ZSBmb3IgcGVyZm9ybWFuY2UsIH43MDAlIHBlcmYgaW5jKVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gKiAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBCZXJrZWxleSBub3IgdGhlXG4gKiAgICAgICBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICogICAgICAgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgUkVHRU5UUyBBTkQgQ09OVFJJQlVUT1JTIGBgQVMgSVMnJyBBTkQgQU5ZXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gKiBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgUkVHRU5UUyBBTkQgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZXG4gKiBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICogKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICogTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXG4gKiBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAqIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qIENSQzE2IGltcGxlbWVudGF0aW9uIGFjY29yZGluZyB0byBDQ0lUVCBzdGFuZGFyZHMuXG4gKlxuICogTm90ZSBieSBAYW50aXJlejogdGhpcyBpcyBhY3R1YWxseSB0aGUgWE1PREVNIENSQyAxNiBhbGdvcml0aG0sIHVzaW5nIHRoZVxuICogZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gKlxuICogTmFtZSAgICAgICAgICAgICAgICAgICAgICAgOiBcIlhNT0RFTVwiLCBhbHNvIGtub3duIGFzIFwiWk1PREVNXCIsIFwiQ1JDLTE2L0FDT1JOXCJcbiAqIFdpZHRoICAgICAgICAgICAgICAgICAgICAgIDogMTYgYml0XG4gKiBQb2x5ICAgICAgICAgICAgICAgICAgICAgICA6IDEwMjEgKFRoYXQgaXMgYWN0dWFsbHkgeF4xNiArIHheMTIgKyB4XjUgKyAxKVxuICogSW5pdGlhbGl6YXRpb24gICAgICAgICAgICAgOiAwMDAwXG4gKiBSZWZsZWN0IElucHV0IGJ5dGUgICAgICAgICA6IEZhbHNlXG4gKiBSZWZsZWN0IE91dHB1dCBDUkMgICAgICAgICA6IEZhbHNlXG4gKiBYb3IgY29uc3RhbnQgdG8gb3V0cHV0IENSQyA6IDAwMDBcbiAqIE91dHB1dCBmb3IgXCIxMjM0NTY3ODlcIiAgICAgOiAzMUMzXG4gKi9cblxudmFyIGxvb2t1cCA9IFtcbiAgMHgwMDAwLCAweDEwMjEsIDB4MjA0MiwgMHgzMDYzLCAweDQwODQsIDB4NTBhNSwgMHg2MGM2LCAweDcwZTcsXG4gIDB4ODEwOCwgMHg5MTI5LCAweGExNGEsIDB4YjE2YiwgMHhjMThjLCAweGQxYWQsIDB4ZTFjZSwgMHhmMWVmLFxuICAweDEyMzEsIDB4MDIxMCwgMHgzMjczLCAweDIyNTIsIDB4NTJiNSwgMHg0Mjk0LCAweDcyZjcsIDB4NjJkNixcbiAgMHg5MzM5LCAweDgzMTgsIDB4YjM3YiwgMHhhMzVhLCAweGQzYmQsIDB4YzM5YywgMHhmM2ZmLCAweGUzZGUsXG4gIDB4MjQ2MiwgMHgzNDQzLCAweDA0MjAsIDB4MTQwMSwgMHg2NGU2LCAweDc0YzcsIDB4NDRhNCwgMHg1NDg1LFxuICAweGE1NmEsIDB4YjU0YiwgMHg4NTI4LCAweDk1MDksIDB4ZTVlZSwgMHhmNWNmLCAweGM1YWMsIDB4ZDU4ZCxcbiAgMHgzNjUzLCAweDI2NzIsIDB4MTYxMSwgMHgwNjMwLCAweDc2ZDcsIDB4NjZmNiwgMHg1Njk1LCAweDQ2YjQsXG4gIDB4Yjc1YiwgMHhhNzdhLCAweDk3MTksIDB4ODczOCwgMHhmN2RmLCAweGU3ZmUsIDB4ZDc5ZCwgMHhjN2JjLFxuICAweDQ4YzQsIDB4NThlNSwgMHg2ODg2LCAweDc4YTcsIDB4MDg0MCwgMHgxODYxLCAweDI4MDIsIDB4MzgyMyxcbiAgMHhjOWNjLCAweGQ5ZWQsIDB4ZTk4ZSwgMHhmOWFmLCAweDg5NDgsIDB4OTk2OSwgMHhhOTBhLCAweGI5MmIsXG4gIDB4NWFmNSwgMHg0YWQ0LCAweDdhYjcsIDB4NmE5NiwgMHgxYTcxLCAweDBhNTAsIDB4M2EzMywgMHgyYTEyLFxuICAweGRiZmQsIDB4Y2JkYywgMHhmYmJmLCAweGViOWUsIDB4OWI3OSwgMHg4YjU4LCAweGJiM2IsIDB4YWIxYSxcbiAgMHg2Y2E2LCAweDdjODcsIDB4NGNlNCwgMHg1Y2M1LCAweDJjMjIsIDB4M2MwMywgMHgwYzYwLCAweDFjNDEsXG4gIDB4ZWRhZSwgMHhmZDhmLCAweGNkZWMsIDB4ZGRjZCwgMHhhZDJhLCAweGJkMGIsIDB4OGQ2OCwgMHg5ZDQ5LFxuICAweDdlOTcsIDB4NmViNiwgMHg1ZWQ1LCAweDRlZjQsIDB4M2UxMywgMHgyZTMyLCAweDFlNTEsIDB4MGU3MCxcbiAgMHhmZjlmLCAweGVmYmUsIDB4ZGZkZCwgMHhjZmZjLCAweGJmMWIsIDB4YWYzYSwgMHg5ZjU5LCAweDhmNzgsXG4gIDB4OTE4OCwgMHg4MWE5LCAweGIxY2EsIDB4YTFlYiwgMHhkMTBjLCAweGMxMmQsIDB4ZjE0ZSwgMHhlMTZmLFxuICAweDEwODAsIDB4MDBhMSwgMHgzMGMyLCAweDIwZTMsIDB4NTAwNCwgMHg0MDI1LCAweDcwNDYsIDB4NjA2NyxcbiAgMHg4M2I5LCAweDkzOTgsIDB4YTNmYiwgMHhiM2RhLCAweGMzM2QsIDB4ZDMxYywgMHhlMzdmLCAweGYzNWUsXG4gIDB4MDJiMSwgMHgxMjkwLCAweDIyZjMsIDB4MzJkMiwgMHg0MjM1LCAweDUyMTQsIDB4NjI3NywgMHg3MjU2LFxuICAweGI1ZWEsIDB4YTVjYiwgMHg5NWE4LCAweDg1ODksIDB4ZjU2ZSwgMHhlNTRmLCAweGQ1MmMsIDB4YzUwZCxcbiAgMHgzNGUyLCAweDI0YzMsIDB4MTRhMCwgMHgwNDgxLCAweDc0NjYsIDB4NjQ0NywgMHg1NDI0LCAweDQ0MDUsXG4gIDB4YTdkYiwgMHhiN2ZhLCAweDg3OTksIDB4OTdiOCwgMHhlNzVmLCAweGY3N2UsIDB4YzcxZCwgMHhkNzNjLFxuICAweDI2ZDMsIDB4MzZmMiwgMHgwNjkxLCAweDE2YjAsIDB4NjY1NywgMHg3Njc2LCAweDQ2MTUsIDB4NTYzNCxcbiAgMHhkOTRjLCAweGM5NmQsIDB4ZjkwZSwgMHhlOTJmLCAweDk5YzgsIDB4ODllOSwgMHhiOThhLCAweGE5YWIsXG4gIDB4NTg0NCwgMHg0ODY1LCAweDc4MDYsIDB4NjgyNywgMHgxOGMwLCAweDA4ZTEsIDB4Mzg4MiwgMHgyOGEzLFxuICAweGNiN2QsIDB4ZGI1YywgMHhlYjNmLCAweGZiMWUsIDB4OGJmOSwgMHg5YmQ4LCAweGFiYmIsIDB4YmI5YSxcbiAgMHg0YTc1LCAweDVhNTQsIDB4NmEzNywgMHg3YTE2LCAweDBhZjEsIDB4MWFkMCwgMHgyYWIzLCAweDNhOTIsXG4gIDB4ZmQyZSwgMHhlZDBmLCAweGRkNmMsIDB4Y2Q0ZCwgMHhiZGFhLCAweGFkOGIsIDB4OWRlOCwgMHg4ZGM5LFxuICAweDdjMjYsIDB4NmMwNywgMHg1YzY0LCAweDRjNDUsIDB4M2NhMiwgMHgyYzgzLCAweDFjZTAsIDB4MGNjMSxcbiAgMHhlZjFmLCAweGZmM2UsIDB4Y2Y1ZCwgMHhkZjdjLCAweGFmOWIsIDB4YmZiYSwgMHg4ZmQ5LCAweDlmZjgsXG4gIDB4NmUxNywgMHg3ZTM2LCAweDRlNTUsIDB4NWU3NCwgMHgyZTkzLCAweDNlYjIsIDB4MGVkMSwgMHgxZWYwXG5dO1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBVVEY4IGFycmF5IC0gZmFzdGVyIHRoYW4gdmlhIGJ1ZmZlclxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge0FycmF5fVxuICovXG52YXIgdG9VVEY4QXJyYXkgPSBmdW5jdGlvbiB0b1VURjhBcnJheShzdHIpIHtcbiAgdmFyIGNoYXI7XG4gIHZhciBpID0gMDtcbiAgdmFyIHAgPSAwO1xuICB2YXIgdXRmOCA9IFtdO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjaGFyIDwgMTI4KSB7XG4gICAgICB1dGY4W3ArK10gPSBjaGFyO1xuICAgIH0gZWxzZSBpZiAoY2hhciA8IDIwNDgpIHtcbiAgICAgIHV0ZjhbcCsrXSA9IChjaGFyID4+IDYpIHwgMTkyO1xuICAgICAgdXRmOFtwKytdID0gKGNoYXIgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgKChjaGFyICYgMHhGQzAwKSA9PT0gMHhEODAwKSAmJiAoaSArIDEpIDwgc3RyLmxlbmd0aCAmJlxuICAgICAgICAoKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4RkMwMCkgPT09IDB4REMwMCkpIHtcbiAgICAgIGNoYXIgPSAweDEwMDAwICsgKChjaGFyICYgMHgwM0ZGKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNGRik7XG4gICAgICB1dGY4W3ArK10gPSAoY2hhciA+PiAxOCkgfCAyNDA7XG4gICAgICB1dGY4W3ArK10gPSAoKGNoYXIgPj4gMTIpICYgNjMpIHwgMTI4O1xuICAgICAgdXRmOFtwKytdID0gKChjaGFyID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgdXRmOFtwKytdID0gKGNoYXIgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHV0ZjhbcCsrXSA9IChjaGFyID4+IDEyKSB8IDIyNDtcbiAgICAgIHV0ZjhbcCsrXSA9ICgoY2hhciA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIHV0ZjhbcCsrXSA9IChjaGFyICYgNjMpIHwgMTI4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1dGY4O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGludG8gYSByZWRpcyBzbG90IGhhc2guXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG52YXIgZ2VuZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdlbmVyYXRlKHN0cikge1xuICB2YXIgY2hhcjtcbiAgdmFyIGkgPSAwO1xuICB2YXIgc3RhcnQgPSAtMTtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIHZhciByZXN1bHRIYXNoID0gMDtcbiAgdmFyIHV0ZjggPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHRvVVRGOEFycmF5KHN0cikgOiBzdHI7XG4gIHZhciBsZW4gPSB1dGY4Lmxlbmd0aDtcblxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGNoYXIgPSB1dGY4W2krK107XG4gICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgaWYgKGNoYXIgPT09IDB4N0IpIHtcbiAgICAgICAgc3RhcnQgPSBpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhciAhPT0gMHg3RCkge1xuICAgICAgcmVzdWx0SGFzaCA9IGxvb2t1cFsoY2hhciBeIChyZXN1bHRIYXNoID4+IDgpKSAmIDB4RkZdIF4gKHJlc3VsdEhhc2ggPDwgOCk7XG4gICAgfSBlbHNlIGlmIChpIC0gMSAhPT0gc3RhcnQpIHtcbiAgICAgIHJldHVybiByZXN1bHRIYXNoICYgMHgzRkZGO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IGxvb2t1cFsoY2hhciBeIChyZXN1bHQgPj4gOCkpICYgMHhGRl0gXiAocmVzdWx0IDw8IDgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCAmIDB4M0ZGRjtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBtdWx0aXBsZSBzdHJpbmdzIGludG8gYSByZWRpcyBzbG90IGhhc2guXG4gKiBSZXR1cm5zIC0xIGlmIG9uZSBvZiB0aGUga2V5cyBpcyBub3QgZm9yIHRoZSBzYW1lIHNsb3QgYXMgdGhlIG90aGVyc1xuICogQHBhcmFtIGtleXNcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlTXVsdGkgPSBmdW5jdGlvbiBnZW5lcmF0ZU11bHRpKGtleXMpIHtcbiAgdmFyIGkgPSAxO1xuICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gIHZhciBiYXNlID0gZ2VuZXJhdGUoa2V5c1swXSk7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoZ2VuZXJhdGUoa2V5c1tpKytdKSAhPT0gYmFzZSkgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59O1xuIl0sIm5hbWVzIjpbImxvb2t1cCIsInRvVVRGOEFycmF5Iiwic3RyIiwiY2hhciIsImkiLCJwIiwidXRmOCIsImxlbiIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJnZW5lcmF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdGFydCIsInJlc3VsdCIsInJlc3VsdEhhc2giLCJnZW5lcmF0ZU11bHRpIiwia2V5cyIsImJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js\n");

/***/ })

};
;
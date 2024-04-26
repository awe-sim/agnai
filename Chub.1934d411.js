
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("1ItoY", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $ddd9c5742817e2e5$export$2e2bcd8739ae039);

var $f4ihl = parcelRequire("f4ihl");
var $6TTLi = parcelRequire("6TTLi");

var $6TTLi = parcelRequire("6TTLi");

var $iNI0B = parcelRequire("iNI0B");

var $kIEMX = parcelRequire("kIEMX");

var $aBY8W = parcelRequire("aBY8W");

var $37jRp = parcelRequire("37jRp");

var $aupbD = parcelRequire("aupbD");

var $laPM7 = parcelRequire("laPM7");

var $fBeQu = parcelRequire("fBeQu");

var $1NU08 = parcelRequire("1NU08");

var $fNpXe = parcelRequire("fNpXe");
const $ddd9c5742817e2e5$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="my-2"></div>`, 2), $ddd9c5742817e2e5$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-4"><div></div><div></div><div></div></div>`, 8), $ddd9c5742817e2e5$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div><sub><em>Disclaimer: Characters are owned and managed by <a class="link" href="https://chub.ai" target="_blank">CHUB.ai</a>.</em></sub></div>`, 8);
const $ddd9c5742817e2e5$var$chubTabs = {
    characters: "Characters",
    lorebooks: "Lorebooks",
    filter: "Filter Settings"
};
const $ddd9c5742817e2e5$var$Chub = ()=>{
    const params = (0, $fNpXe.useParams)();
    const nav = (0, $fNpXe.useNavigate)();
    const tabs = [
        "characters",
        "lorebooks",
        "filter"
    ];
    const [tab, setTab] = (0, $6TTLi.createSignal)(0);
    const [charModal, setCharModal] = (0, $6TTLi.createSignal)();
    const [bookModal, setBookModal] = (0, $6TTLi.createSignal)();
    const [loading, setLoading] = (0, $6TTLi.createSignal)(false);
    (0, $6TTLi.createEffect)(()=>{
        const index = tabs.indexOf(params.tab || "characters");
        setTab(index);
    });
    const currentTab = (0, $6TTLi.createMemo)(()=>tabs[tab()]);
    (0, $kIEMX.setComponentPageTitle)("CHUB");
    const tabClass = `flex flex-col gap-4`;
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Character Hub"
        }),
        (()=>{
            const _el$ = $ddd9c5742817e2e5$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $aBY8W.default), {
                get tabs () {
                    return tabs.map((t)=>$ddd9c5742817e2e5$var$chubTabs[t]);
                },
                selected: tab,
                select: (tab)=>{
                    nav(`/chub/${tabs[tab]}`);
                }
            }));
            return _el$;
        })(),
        (()=>{
            const _el$2 = $ddd9c5742817e2e5$var$_tmpl$2.cloneNode(true), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling;
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $aupbD.default), {
                loading: ()=>setLoading(true),
                setChar: (char, fullPath)=>{
                    setCharModal({
                        char: char,
                        fullPath: fullPath
                    });
                    setLoading(false);
                }
            }));
            (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $laPM7.default), {
                setBook: (book, fullPath)=>setBookModal({
                        book: book,
                        fullPath: fullPath
                    })
            }));
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $37jRp.default), {}));
            (0, $f4ihl.effect)((_p$)=>{
                const _v$ = currentTab() === "characters" ? tabClass : "hidden", _v$2 = currentTab() === "lorebooks" ? tabClass : "hidden", _v$3 = currentTab() === "filter" ? tabClass : "hidden";
                _v$ !== _p$._v$ && (0, $f4ihl.className)(_el$3, _p$._v$ = _v$);
                _v$2 !== _p$._v$2 && (0, $f4ihl.className)(_el$4, _p$._v$2 = _v$2);
                _v$3 !== _p$._v$3 && (0, $f4ihl.className)(_el$5, _p$._v$3 = _v$3);
                return _p$;
            }, {
                _v$: undefined,
                _v$2: undefined,
                _v$3: undefined
            });
            return _el$2;
        })(),
        $ddd9c5742817e2e5$var$_tmpl$3.cloneNode(true),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return loading() || !!charModal();
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $fBeQu.default), {
                    show: true,
                    close: ()=>setCharModal(),
                    get char () {
                        return charModal()?.char;
                    }
                });
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return bookModal();
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $1NU08.default), {
                    show: true,
                    close: ()=>setBookModal(),
                    get fullPath () {
                        return bookModal().fullPath;
                    },
                    get book () {
                        return bookModal().book;
                    }
                });
            }
        })
    ];
};
var $ddd9c5742817e2e5$export$2e2bcd8739ae039 = $ddd9c5742817e2e5$var$Chub;

});
parcelRegister("37jRp", function(module, exports) {

$parcel$export(module.exports, "default", () => $83daeed860b2ae12$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");

var $jFE3H = parcelRequire("jFE3H");

var $8DEla = parcelRequire("8DEla");

var $3Evae = parcelRequire("3Evae");

var $kIEMX = parcelRequire("kIEMX");

var $hc3zY = parcelRequire("hc3zY");
const $83daeed860b2ae12$var$sorts = [
    "Download Count",
    "ID",
    "Rating",
    "Rating Count",
    "Last Activity",
    "Creation Date",
    "Name",
    "Token Count"
];
const $83daeed860b2ae12$var$FilterSettings = ()=>{
    const state = (0, $hc3zY.chubStore)();
    const update = ()=>{
        (0, $hc3zY.chubStore).setPage(1);
        (0, $hc3zY.chubStore).getChars();
        (0, $hc3zY.chubStore).getBooks();
    };
    return [
        (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
            fieldName: "nsfw",
            label: "NSFW",
            helperText: "Allow NSFW characters/lorebooks to appear in results.",
            get value () {
                return state.nsfw;
            },
            onChange: (v)=>{
                (0, $hc3zY.chubStore).setNSFW(v);
                update();
            }
        }),
        (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            fieldName: "tags",
            label: "Query Tags",
            helperText: "A comma-separated list of tags to include.",
            placeholder: "E.g. blue_archive,female,anime",
            get value () {
                return state.tags;
            },
            onChange: (ev)=>{
                (0, $hc3zY.chubStore).setTags(ev.currentTarget.value);
                update();
            }
        }),
        (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            fieldName: "excludeTags",
            label: "Exclude Tags",
            helperText: "A comma-separated list of tags to exclude.",
            get value () {
                return state.excludeTags;
            },
            onChange: (ev)=>{
                (0, $hc3zY.chubStore).setExcludeTags(ev.currentTarget.value);
                update();
            }
        }),
        (0, $6TTLi.createComponent)((0, $3Evae.default), {
            fieldName: "sort",
            label: "Sort By",
            get items () {
                return (0, $kIEMX.toDropdownItems)($83daeed860b2ae12$var$sorts);
            },
            get value () {
                return state.sort;
            },
            onChange: (v)=>{
                (0, $hc3zY.chubStore).setSort(v.value);
                update();
            }
        })
    ];
};
var $83daeed860b2ae12$export$2e2bcd8739ae039 = $83daeed860b2ae12$var$FilterSettings;

});

parcelRegister("aupbD", function(module, exports) {

$parcel$export(module.exports, "default", () => $b05e4e4c30c767d4$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $2c0VG = parcelRequire("2c0VG");

var $hc3zY = parcelRequire("hc3zY");

var $cXv0j = parcelRequire("cXv0j");

var $kXQP8 = parcelRequire("kXQP8");
const $b05e4e4c30c767d4$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-center"></div>`, 2), $b05e4e4c30c767d4$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="grid w-full grid-cols-[repeat(auto-fit,minmax(160px,1fr))] flex-row flex-wrap justify-start gap-2 py-2"></div>`, 2), $b05e4e4c30c767d4$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div></div>`, 2);
const $b05e4e4c30c767d4$var$CharList = (props)=>{
    const state = (0, $hc3zY.chubStore)();
    return [
        (0, $6TTLi.createComponent)((0, $cXv0j.default), {
            get buttons () {
                return state.chars.length >= 48;
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return state.charsLoading;
            },
            get children () {
                const _el$ = $b05e4e4c30c767d4$var$_tmpl$.cloneNode(true);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $kXQP8.default), {}));
                return _el$;
            }
        }),
        (()=>{
            const _el$2 = $b05e4e4c30c767d4$var$_tmpl$2.cloneNode(true);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.chars.slice(48 * (state.page - 1));
                },
                children: (char)=>(0, $6TTLi.createComponent)((0, $2c0VG.ChubItem), {
                        get loading () {
                            return props.loading;
                        },
                        get name () {
                            return char.name;
                        },
                        get fullPath () {
                            return char.fullPath;
                        },
                        get description () {
                            return char.tagline || char.description;
                        },
                        get avatar () {
                            return `https://avatars.charhub.io/avatars/${char.fullPath}/avatar.webp` || `https://git.chub.ai/${char.fullPath}/-/raw/main/avatar.webp`;
                        },
                        get setChar () {
                            return props.setChar;
                        }
                    })
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.chars.length < 4;
                },
                get children () {
                    return (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return new Array(4 - state.chars.length);
                        },
                        children: ()=>$b05e4e4c30c767d4$var$_tmpl$3.cloneNode(true)
                    });
                }
            }), null);
            return _el$2;
        })()
    ];
};
var $b05e4e4c30c767d4$export$2e2bcd8739ae039 = $b05e4e4c30c767d4$var$CharList;

});
parcelRegister("2c0VG", function(module, exports) {

$parcel$export(module.exports, "ChubItem", () => $74a0724a5a28b71e$export$f6871d6387c3d2df);

var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $4YevP = parcelRequire("4YevP");

var $hOnm4 = parcelRequire("hOnm4");

var $4LwUs = parcelRequire("4LwUs");
const $74a0724a5a28b71e$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="bg-800 flex flex-col items-center justify-between gap-1 rounded-lg border-[1px] border-[var(--bg-600)]"><div class="w-full"><div class="block h-32 w-full cursor-pointer justify-center overflow-hidden rounded-lg rounded-b-none"><img class="h-full w-full object-cover" style="object-position: 50% 30%;"></div></div><div class="w-full text-sm"><div class="w-full overflow-hidden text-ellipsis whitespace-nowrap px-1 text-sm font-bold"></div><div class="text-600 line-clamp-3 h-[3rem] text-ellipsis px-1 text-center text-xs font-normal"></div></div></div>`, 13);
const $74a0724a5a28b71e$export$f6871d6387c3d2df = (props)=>{
    const [memorybook, setMemoryBook] = (0, $6TTLi.createSignal)({});
    const processItem = async ()=>{
        props.loading?.();
        if (props.book) {
            const book = await (0, $hOnm4.processBook)(props.fullPath);
            setMemoryBook(book);
            props.setBook?.({
                _id: "",
                kind: "memory",
                name: memorybook().name == "Exported" ? props.name : memorybook().name,
                description: memorybook().description,
                userId: "",
                entries: memorybook().entries
            }, props.fullPath);
            return;
        }
        const file = await (0, $hOnm4.processChar)(props.fullPath);
        const json = await (0, $4YevP.extractCardData)(file);
        if (!json) throw new Error("Invalid tavern image");
        props.setChar?.(Object.assign((0, $4LwUs.jsonToCharacter)(json), {
            avatar: file
        }), props.fullPath);
    };
    return (()=>{
        const _el$ = $74a0724a5a28b71e$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$2.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
        _el$3.$$click = processItem;
        (0, $f4ihl.insert)(_el$6, ()=>props.name);
        (0, $f4ihl.insert)(_el$7, ()=>props.description);
        (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$4, "src", props.avatar));
        return _el$;
    })();
};
(0, $f4ihl.delegateEvents)([
    "click"
]);

});
parcelRegister("hOnm4", function(module, exports) {

$parcel$export(module.exports, "processBook", () => $31183c332e88f70a$export$a06aaa54c3be383e);
$parcel$export(module.exports, "processChar", () => $31183c332e88f70a$export$6747f844a261adca);

var $hc3zY = parcelRequire("hc3zY");
const $31183c332e88f70a$var$headers = {
    "Content-Type": "application/json",
    accept: "/"
};
async function $31183c332e88f70a$export$a06aaa54c3be383e(fullPath) {
    const body = {
        format: "AGNAI",
        fullPath: fullPath,
        version: "main"
    };
    const res = await fetch(`${(0, $hc3zY.CHUB_URL)}/lorebooks/download`, {
        headers: $31183c332e88f70a$var$headers,
        body: JSON.stringify(body),
        method: "post"
    });
    const json = await res.json();
    return json;
}
async function $31183c332e88f70a$export$6747f844a261adca(fullPath) {
    const body = {
        format: "tavern",
        fullPath: fullPath,
        version: "main"
    };
    const res = await fetch(`${(0, $hc3zY.CHUB_URL)}/characters/download`, {
        headers: $31183c332e88f70a$var$headers,
        body: JSON.stringify(body),
        method: "post"
    });
    const blob = await res.blob();
    const file = new File([
        blob
    ], `main_${fullPath}.png`, {
        type: "image/png"
    });
    return file;
}

});


parcelRegister("cXv0j", function(module, exports) {

$parcel$export(module.exports, "default", () => $39654e72b91956a3$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $hc3zY = parcelRequire("hc3zY");

var $jFE3H = parcelRequire("jFE3H");

var $2qUsD = parcelRequire("2qUsD");

var $4P0sz = parcelRequire("4P0sz");

var $6uY8b = parcelRequire("6uY8b");
const $39654e72b91956a3$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="w-12"></div>`, 2), $39654e72b91956a3$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-2 flex justify-between"><div class="flex gap-2"></div></div>`, 4);
const $39654e72b91956a3$var$ChubNavigation = (props)=>{
    const state = (0, $hc3zY.chubStore)();
    const update = ()=>{
        (0, $hc3zY.chubStore).getBooks();
        (0, $hc3zY.chubStore).getChars();
    };
    (0, $6TTLi.onMount)(update);
    const onSearch = (ev)=>{
        (0, $hc3zY.chubStore).setSearch(ev.currentTarget.value);
        update();
        (0, $hc3zY.chubStore).setPage(1);
    };
    return (()=>{
        const _el$ = $39654e72b91956a3$var$_tmpl$2.cloneNode(true), _el$2 = _el$.firstChild;
        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            fieldName: "search",
            placeholder: "Search by name...",
            get value () {
                return state.search;
            },
            onKeyUp: onSearch
        }), null);
        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return props.buttons;
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "secondary",
                        "class": "rounded-xl",
                        onClick: ()=>{
                            if (state.page > 1) {
                                (0, $hc3zY.chubStore).setPage(state.page - 1);
                                update();
                            } else (0, $6uY8b.toastStore).error("Already on first page!");
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $4P0sz.ArrowLeft), {});
                        }
                    }),
                    (()=>{
                        const _el$3 = $39654e72b91956a3$var$_tmpl$.cloneNode(true);
                        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                            fieldName: "number",
                            get value () {
                                return state.page;
                            },
                            onKeyUp: (ev)=>{
                                const n = Number(ev.currentTarget.value);
                                if (!isNaN(n) && n !== 0) {
                                    (0, $hc3zY.chubStore).setPage(n);
                                    update();
                                } else (0, $6uY8b.toastStore).error("Not a valid page number.");
                            }
                        }));
                        return _el$3;
                    })(),
                    (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "secondary",
                        "class": "rounded-xl",
                        onClick: ()=>{
                            if (state.chars.length % 48 == 0) {
                                (0, $hc3zY.chubStore).setPage(state.page + 1);
                                update();
                            } else (0, $6uY8b.toastStore).error(`Already on last page!`);
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $4P0sz.ArrowRight), {});
                        }
                    })
                ];
            }
        }), null);
        return _el$;
    })();
};
var $39654e72b91956a3$export$2e2bcd8739ae039 = $39654e72b91956a3$var$ChubNavigation;

});


parcelRegister("laPM7", function(module, exports) {

$parcel$export(module.exports, "default", () => $ebcdabdc82f42242$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $2c0VG = parcelRequire("2c0VG");

var $hc3zY = parcelRequire("hc3zY");

var $cXv0j = parcelRequire("cXv0j");

var $kXQP8 = parcelRequire("kXQP8");
const $ebcdabdc82f42242$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-center"></div>`, 2), $ebcdabdc82f42242$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="grid w-full grid-cols-[repeat(auto-fit,minmax(105px,1fr))] flex-row flex-wrap justify-start gap-2 py-2"></div>`, 2), $ebcdabdc82f42242$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div></div>`, 2);
const $ebcdabdc82f42242$var$BookList = (props)=>{
    const state = (0, $hc3zY.chubStore)();
    return [
        (0, $6TTLi.createComponent)((0, $cXv0j.default), {
            get buttons () {
                return state.books.length >= 48;
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return state.booksLoading;
            },
            get children () {
                const _el$ = $ebcdabdc82f42242$var$_tmpl$.cloneNode(true);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $kXQP8.default), {}));
                return _el$;
            }
        }),
        (()=>{
            const _el$2 = $ebcdabdc82f42242$var$_tmpl$2.cloneNode(true);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.books;
                },
                children: (book)=>(0, $6TTLi.createComponent)((0, $2c0VG.ChubItem), {
                        get name () {
                            return book.name;
                        },
                        get fullPath () {
                            return book.fullPath;
                        },
                        get avatar () {
                            return `https://avatars.charhub.io/avatars/${book.fullPath}/avatar.webp`;
                        },
                        book: true,
                        get setBook () {
                            return props.setBook;
                        },
                        get description () {
                            return book.tagline || book.description;
                        }
                    })
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.books.length < 4;
                },
                get children () {
                    return (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return new Array(4 - state.books.length);
                        },
                        children: ()=>$ebcdabdc82f42242$var$_tmpl$3.cloneNode(true)
                    });
                }
            }), null);
            return _el$2;
        })()
    ];
};
var $ebcdabdc82f42242$export$2e2bcd8739ae039 = $ebcdabdc82f42242$var$BookList;

});

parcelRegister("fBeQu", function(module, exports) {

$parcel$export(module.exports, "default", () => $058ab200c84fa2cd$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $6LNaF = parcelRequire("6LNaF");

var $jFE3H = parcelRequire("jFE3H");

var $6uY8b = parcelRequire("6uY8b");

var $kXQP8 = parcelRequire("kXQP8");
const $058ab200c84fa2cd$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex min-h-[12rem] w-full items-center justify-center"></div>`, 2), $058ab200c84fa2cd$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<form><div class="mb-2 text-sm">Optionally modify all the aspects of the character other than the avatar.</div><div class="mb-4 text-sm">The information provided here will be saved with the character on import.</div></form>`, 6), $058ab200c84fa2cd$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<a class="text-[var(--hl-500)]"> </a>`, 2), $058ab200c84fa2cd$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<span>Override the name of the character here <i>(Optional)</i></span>`, 4);
const $058ab200c84fa2cd$var$ChubImportCharModal = (props)=>{
    let ref;
    const [char, setChar] = (0, $6TTLi.createSignal)(props.char);
    (0, $6TTLi.createEffect)(()=>{
        if (!props.char) return;
        setChar(props.char);
    });
    const onImport = ()=>{
        if (!props.char) return;
        try {
            (0, $6uY8b.characterStore).createCharacter(props.char);
        } catch (error) {
            (0, $6uY8b.toastStore).error(`Error importing ${props.char.name}! ${error}`);
        }
        props.close();
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        get title () {
            return [
                "Preview",
                (()=>{
                    const _el$5 = $058ab200c84fa2cd$var$_tmpl$3.cloneNode(true), _el$6 = _el$5.firstChild;
                    (0, $f4ihl.insert)(_el$5, ()=>char()?.name || "...", null);
                    return _el$5;
                })()
            ];
        },
        maxWidth: "half",
        get footer () {
            return [
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    schema: "secondary",
                    get onClick () {
                        return props.close;
                    },
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.X), {}),
                            "Close"
                        ];
                    }
                }),
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: onImport,
                    get disabled () {
                        return !props.char;
                    },
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Check), {}),
                            "Import"
                        ];
                    }
                })
            ];
        },
        get children () {
            return [
                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return !props.char;
                    },
                    get children () {
                        const _el$ = $058ab200c84fa2cd$var$_tmpl$.cloneNode(true);
                        (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $kXQP8.default), {}));
                        return _el$;
                    }
                }),
                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return props.char;
                    },
                    get children () {
                        const _el$2 = $058ab200c84fa2cd$var$_tmpl$2.cloneNode(true), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
                        const _ref$ = ref;
                        typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$2) : ref = _el$2;
                        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                            get when () {
                                return props.char?.name;
                            },
                            get children () {
                                return [
                                    (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        "class": "text-sm",
                                        fieldName: "name",
                                        label: "Character Name",
                                        get helperText () {
                                            return $058ab200c84fa2cd$var$_tmpl$4.cloneNode(true);
                                        },
                                        get value () {
                                            return char()?.name;
                                        },
                                        onChange: (e)=>setChar({
                                                ...char(),
                                                name: e.currentTarget.value
                                            })
                                    }),
                                    (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        isMultiline: true,
                                        fieldName: "greeting",
                                        label: "Greeting",
                                        get value () {
                                            return char()?.greeting;
                                        },
                                        "class": "text-xs",
                                        onKeyUp: (e)=>setChar({
                                                ...char(),
                                                greeting: e.currentTarget.value
                                            })
                                    }),
                                    (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        isMultiline: true,
                                        fieldName: "scenario",
                                        label: "Scenario",
                                        get value () {
                                            return char()?.scenario;
                                        },
                                        "class": "text-xs",
                                        onKeyUp: (e)=>setChar({
                                                ...char(),
                                                scenario: e.currentTarget.value
                                            })
                                    }),
                                    (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        isMultiline: true,
                                        fieldName: "sampleChat",
                                        label: "Sample Chat",
                                        get value () {
                                            return char()?.sampleChat;
                                        },
                                        "class": "text-xs",
                                        onKeyUp: (e)=>setChar({
                                                ...char(),
                                                sampleChat: e.currentTarget.value
                                            })
                                    }),
                                    (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        isMultiline: true,
                                        fieldName: "persona",
                                        label: "Persona",
                                        get value () {
                                            return char()?.persona.attributes.text[0] || "";
                                        },
                                        "class": "text-xs",
                                        onKeyUp: (e)=>{
                                            setChar({
                                                ...char(),
                                                persona: {
                                                    kind: "text",
                                                    attributes: {
                                                        text: [
                                                            e.currentTarget.value
                                                        ]
                                                    }
                                                }
                                            });
                                        }
                                    })
                                ];
                            }
                        }), null);
                        return _el$2;
                    }
                })
            ];
        }
    });
};
var $058ab200c84fa2cd$export$2e2bcd8739ae039 = $058ab200c84fa2cd$var$ChubImportCharModal;

});

parcelRegister("1NU08", function(module, exports) {

$parcel$export(module.exports, "default", () => $de91d3c03bc097e1$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $6LNaF = parcelRequire("6LNaF");

var $6uY8b = parcelRequire("6uY8b");

var $lvZnY = parcelRequire("lvZnY");
const $de91d3c03bc097e1$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="text-sm"></div>`, 2), $de91d3c03bc097e1$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<form><div class="mb-2 text-sm">Optionally modify all the aspects of the memory book other than the image.</div><div class="mb-4 text-sm">The information provided here will be saved with the memory book on import.</div></form>`, 6), $de91d3c03bc097e1$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<a class="text-[var(--hl-500)]"> </a>`, 2);
const $de91d3c03bc097e1$var$ChubImportBookModal = (props)=>{
    let ref;
    const [book, setBook] = (0, $6TTLi.createSignal)(props.book);
    const [entrySort, setEntrySort] = (0, $6TTLi.createSignal)("creationDate");
    const updateEntrySort = (item)=>{
        if (item.value === "creationDate" || item.value === "alpha") setEntrySort(item.value);
    };
    (0, $6TTLi.createEffect)(()=>{
        if (props.book.name) setBook(props.book);
    });
    const onImport = ()=>{
        try {
            (0, $6uY8b.memoryStore).create(book());
        } catch (error) {
            (0, $6uY8b.toastStore).error(`Error importing ${book().name}! ${error}`);
        }
        props.close();
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        get title () {
            return [
                "Preview",
                (()=>{
                    const _el$5 = $de91d3c03bc097e1$var$_tmpl$3.cloneNode(true), _el$6 = _el$5.firstChild;
                    (0, $f4ihl.insert)(_el$5, ()=>book()?.name, null);
                    (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$5, "href", `https://chub.ai/${props.fullPath}`));
                    return _el$5;
                })()
            ];
        },
        maxWidth: "half",
        get footer () {
            return [
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    schema: "secondary",
                    get onClick () {
                        return props.close;
                    },
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.X), {}),
                            "Close"
                        ];
                    }
                }),
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: onImport,
                    get disabled () {
                        return !book();
                    },
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Check), {}),
                            "Import"
                        ];
                    }
                })
            ];
        },
        get children () {
            const _el$ = $de91d3c03bc097e1$var$_tmpl$2.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
            const _ref$ = ref;
            typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$) : ref = _el$;
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return book().name;
                },
                get children () {
                    const _el$4 = $de91d3c03bc097e1$var$_tmpl$.cloneNode(true);
                    (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $lvZnY.default), {
                        hideSave: true,
                        get book () {
                            return book();
                        },
                        get entrySort () {
                            return entrySort();
                        },
                        updateEntrySort: updateEntrySort,
                        onChange: setBook
                    }));
                    return _el$4;
                }
            }), null);
            return _el$;
        }
    });
};
var $de91d3c03bc097e1$export$2e2bcd8739ae039 = $de91d3c03bc097e1$var$ChubImportBookModal;

});



//# sourceMappingURL=Chub.1934d411.js.map

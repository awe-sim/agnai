
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("94Ahu", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4ddcc72f2ef96846$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $6uY8b = parcelRequire("6uY8b");

var $iNI0B = parcelRequire("iNI0B");

var $3Evae = parcelRequire("3Evae");

var $jFE3H = parcelRequire("jFE3H");

var $4P0sz = parcelRequire("4P0sz");

var $fNpXe = parcelRequire("fNpXe");

var $k2U1x = parcelRequire("k2U1x");

var $gCvUs = parcelRequire("gCvUs");

var $kIEMX = parcelRequire("kIEMX");

var $2qUsD = parcelRequire("2qUsD");

var $kXQP8 = parcelRequire("kXQP8");

var $hlKH6 = parcelRequire("hlKH6");

var $2I0tL = parcelRequire("2I0tL");

var $541Tr = parcelRequire("541Tr");

var $jYtRZ = parcelRequire("jYtRZ");

var $db7k4 = parcelRequire("db7k4");

var $6LNaF = parcelRequire("6LNaF");

var $gkmLe = parcelRequire("gkmLe");

var $dOVwG = parcelRequire("dOVwG");
const $4ddcc72f2ef96846$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:block">List View</span>`, 2), $4ddcc72f2ef96846$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:block">Cards View</span>`, 2), $4ddcc72f2ef96846$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:block">Folder View</span>`, 2), $4ddcc72f2ef96846$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mb-2 flex justify-between"><div class="flex flex-wrap"><div class="m-1 ml-0 mr-1"></div><div class="flex flex-wrap"><div class="mr-1 py-1"></div></div></div><div class="flex flex-wrap"><div class="py-1"></div></div></div>`, 14), $4ddcc72f2ef96846$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center pb-2"></div>`, 2), $4ddcc72f2ef96846$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center pb-5 pt-2"></div>`, 2), $4ddcc72f2ef96846$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Import</span>`, 2), $4ddcc72f2ef96846$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Create</span>`, 2), $4ddcc72f2ef96846$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-between"><div>Characters</div><div class="flex text-base"><div class="px-1"></div><div class="px-1"></div></div></div>`, 10), $4ddcc72f2ef96846$var$_tmpl$10 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center"></div>`, 2), $4ddcc72f2ef96846$var$_tmpl$11 = /*#__PURE__*/ (0, $f4ihl.template)(`<div>Failed to load characters. Refresh to try again.</div>`, 2), $4ddcc72f2ef96846$var$_tmpl$12 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-16 flex w-full justify-center rounded-full text-xl">No characters found&nbsp;<!>&nbsp;to get started!</div>`, 3);
const $4ddcc72f2ef96846$var$CACHE_KEY = "agnai-charlist-cache";
const $4ddcc72f2ef96846$var$sortOptions = [
    {
        value: "modified",
        label: "Last Modified"
    },
    {
        value: "conversed",
        label: "Last Conversed"
    },
    {
        value: "created",
        label: "Created"
    },
    {
        value: "name",
        label: "Name"
    }
];
const $4ddcc72f2ef96846$var$CharacterList = ()=>{
    (0, $kIEMX.setComponentPageTitle)("Characters");
    const cached = $4ddcc72f2ef96846$var$getListCache();
    const [query, setQuery] = (0, $fNpXe.useSearchParams)();
    const [search, setSearch] = (0, $6TTLi.createSignal)("");
    const [sortField, setSortField] = (0, $6TTLi.createSignal)(cached.sort.field);
    const [sortDirection, setSortDirection] = (0, $6TTLi.createSignal)(cached.sort.direction);
    const chats = (0, $6uY8b.chatStore)((s)=>s.allChats);
    const tags = (0, $6uY8b.tagStore)((s)=>({
            filter: s.filter,
            hidden: s.hidden
        }));
    const cfg = (0, $6uY8b.settingStore)();
    const user = (0, $6uY8b.userStore)();
    const state = (0, $6uY8b.chatStore)((s)=>{
        const allChars = s.allChars.list.filter((ch)=>ch.userId === user.user?._id).map((ch)=>({
                ...ch,
                chat: $4ddcc72f2ef96846$var$findLatestChat(ch._id, chats)
            }));
        return {
            allChars: allChars,
            list: allChars.filter((ch)=>ch.userId === user.user?._id && !ch.favorite),
            loading: s.allLoading,
            loaded: s.loaded
        };
    });
    const favorites = (0, $6TTLi.createMemo)(()=>{
        const field = sortField();
        const dir = sortDirection();
        return state.allChars.filter((ch)=>!!ch.favorite).filter((ch)=>ch.name.toLowerCase().includes(search().toLowerCase().trim())).filter((ch)=>tags.filter.length === 0 || ch.tags?.some((t)=>tags.filter.includes(t))).filter((ch)=>!ch.tags || !ch.tags.some((t)=>tags.hidden.includes(t))).sort($4ddcc72f2ef96846$var$getSortFunction(field, dir));
    });
    const sortedChars = (0, $6TTLi.createMemo)(()=>{
        const field = sortField();
        const dir = sortDirection();
        const sorted = state.list.slice().filter((ch)=>ch.userId === user.user?._id).filter((ch)=>ch.name.toLowerCase().includes(search().toLowerCase().trim())).filter((ch)=>tags.filter.length === 0 || ch.tags?.some((t)=>tags.filter.includes(t))).filter((ch)=>!ch.tags || !ch.tags.some((t)=>tags.hidden.includes(t))).sort($4ddcc72f2ef96846$var$getSortFunction(field, dir));
        return sorted;
    });
    const [view, setView] = (0, $6TTLi.createSignal)(cached.view || "list");
    const [showImport, setImport] = (0, $6TTLi.createSignal)(false);
    const [importPath, setImportPath] = (0, $6TTLi.createSignal)(query.import);
    const importQueue = [];
    const pager = (0, $dOVwG.usePagination)({
        name: "character-list",
        items: sortedChars,
        pageSize: 50
    });
    const onImport = (chars)=>{
        importQueue.push(...chars);
        dequeue();
        setImport(false);
        setImportPath();
        setQuery({
            import: undefined
        });
    };
    const dequeue = ()=>{
        const char = importQueue.shift();
        if (!char) return;
        (0, $6uY8b.characterStore).createCharacter(char, dequeue);
    };
    const getNextView = ()=>{
        const curr = view();
        if (cfg.flags.folders) return curr === "list" ? "cards" : curr === "cards" ? "folders" : "list";
        return curr === "list" ? "cards" : "list";
    };
    (0, $6TTLi.createEffect)(()=>{
        if (!state.allChars.length) return;
        (0, $6uY8b.tagStore).updateTags(state.allChars);
    });
    (0, $6TTLi.createEffect)(()=>{
        const next = {
            view: view(),
            sort: {
                field: sortField(),
                direction: sortDirection()
            }
        };
        $4ddcc72f2ef96846$var$saveListCache(next);
    });
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            get title () {
                return (()=>{
                    const _el$13 = $4ddcc72f2ef96846$var$_tmpl$9.cloneNode(true), _el$14 = _el$13.firstChild, _el$15 = _el$14.nextSibling, _el$16 = _el$15.firstChild, _el$18 = _el$16.nextSibling;
                    (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        onClick: ()=>setImport(true),
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Import), {}),
                                $4ddcc72f2ef96846$var$_tmpl$7.cloneNode(true)
                            ];
                        }
                    }));
                    (0, $f4ihl.insert)(_el$18, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                        href: "/character/create",
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                        $4ddcc72f2ef96846$var$_tmpl$8.cloneNode(true)
                                    ];
                                }
                            });
                        }
                    }));
                    return _el$13;
                })();
            }
        }),
        (()=>{
            const _el$ = $4ddcc72f2ef96846$var$_tmpl$4.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$2.nextSibling, _el$7 = _el$6.firstChild;
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "search",
                placeholder: "Search by name...",
                onKeyUp: (ev)=>setSearch(ev.currentTarget.value)
            }));
            (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                "class": "m-1 ml-0 bg-[var(--bg-600)]",
                fieldName: "sortBy",
                items: $4ddcc72f2ef96846$var$sortOptions,
                get value () {
                    return sortField();
                },
                onChange: (next)=>setSortField(next.value)
            }), _el$5);
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                schema: "secondary",
                "class": "rounded-xl",
                onClick: ()=>{
                    const next = sortDirection() === "asc" ? "desc" : "asc";
                    setSortDirection(next);
                },
                get children () {
                    return (0, $f4ihl.memo)(()=>sortDirection() === "asc")() ? (0, $6TTLi.createComponent)((0, $4P0sz.SortAsc), {}) : (0, $6TTLi.createComponent)((0, $4P0sz.SortDesc), {});
                }
            }));
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $hlKH6.default), {
                "class": "m-1"
            }), null);
            (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                schema: "secondary",
                onClick: ()=>setView(getNextView()),
                get children () {
                    return (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                    get when () {
                                        return getNextView() === "list";
                                    },
                                    get children () {
                                        return [
                                            $4ddcc72f2ef96846$var$_tmpl$.cloneNode(true),
                                            " ",
                                            (0, $6TTLi.createComponent)((0, $4P0sz.LayoutList), {})
                                        ];
                                    }
                                }),
                                (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                    get when () {
                                        return getNextView() === "cards";
                                    },
                                    get children () {
                                        return [
                                            $4ddcc72f2ef96846$var$_tmpl$2.cloneNode(true),
                                            " ",
                                            (0, $6TTLi.createComponent)((0, $4P0sz.Image), {})
                                        ];
                                    }
                                }),
                                (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                    get when () {
                                        return getNextView() === "folders";
                                    },
                                    get children () {
                                        return [
                                            $4ddcc72f2ef96846$var$_tmpl$3.cloneNode(true),
                                            " ",
                                            (0, $6TTLi.createComponent)((0, $4P0sz.Image), {})
                                        ];
                                    }
                                })
                            ];
                        }
                    });
                }
            }));
            return _el$;
        })(),
        (()=>{
            const _el$11 = $4ddcc72f2ef96846$var$_tmpl$5.cloneNode(true);
            (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $dOVwG.ManualPaginate), {
                pager: pager
            }));
            return _el$11;
        })(),
        (0, $6TTLi.createComponent)($4ddcc72f2ef96846$var$Characters, {
            get characters () {
                return pager.items();
            },
            get loading () {
                return state.loading || false;
            },
            get loaded () {
                return !!state.loaded;
            },
            get type () {
                return view();
            },
            get filter () {
                return search();
            },
            get sortField () {
                return sortField();
            },
            get sortDirection () {
                return sortDirection();
            },
            get favorites () {
                return favorites();
            }
        }),
        (()=>{
            const _el$12 = $4ddcc72f2ef96846$var$_tmpl$6.cloneNode(true);
            (0, $f4ihl.insert)(_el$12, (0, $6TTLi.createComponent)((0, $dOVwG.ManualPaginate), {
                pager: pager
            }));
            return _el$12;
        })(),
        (0, $6TTLi.createComponent)((0, $k2U1x.default), {
            get charhubPath () {
                return importPath();
            },
            get show () {
                return showImport() || !!importPath();
            },
            close: ()=>setImport(false),
            onSave: onImport
        })
    ];
};
const $4ddcc72f2ef96846$var$Characters = (props)=>{
    const [editChar, setEditChar] = (0, $6TTLi.createSignal)();
    const [showGrouping, setShowGrouping] = (0, $6TTLi.createSignal)(false);
    const groups = (0, $6TTLi.createMemo)(()=>{
        const groups = [
            {
                label: "Favorites",
                list: props.favorites
            },
            {
                label: "",
                list: props.characters
            }
        ];
        if (groups[0].list.length === 0) {
            setShowGrouping(false);
            return [
                groups[1]
            ];
        }
        setShowGrouping(true);
        return groups;
    });
    const toggleFavorite = (charId, favorite)=>{
        (0, $6uY8b.characterStore).setFavorite(charId, favorite);
    };
    const [showDelete, setDelete] = (0, $6TTLi.createSignal)();
    const [download, setDownload] = (0, $6TTLi.createSignal)();
    return [
        (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
            get fallback () {
                return $4ddcc72f2ef96846$var$_tmpl$11.cloneNode(true);
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return props.loading;
                        },
                        get children () {
                            const _el$20 = $4ddcc72f2ef96846$var$_tmpl$10.cloneNode(true);
                            (0, $f4ihl.insert)(_el$20, (0, $6TTLi.createComponent)((0, $kXQP8.default), {}));
                            return _el$20;
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return props.characters.length === 0 && props.favorites.length === 0 && props.loaded;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)($4ddcc72f2ef96846$var$NoCharacters, {});
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return props.loaded;
                        },
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                    get when () {
                                        return !props.type || props.type === "list";
                                    },
                                    get children () {
                                        return (0, $6TTLi.createComponent)((0, $541Tr.CharacterListView), {
                                            get groups () {
                                                return groups();
                                            },
                                            get showGrouping () {
                                                return showGrouping();
                                            },
                                            toggleFavorite: toggleFavorite,
                                            setDownload: setDownload,
                                            setDelete: setDelete,
                                            setEdit: setEditChar
                                        });
                                    }
                                }),
                                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                    get when () {
                                        return props.type === "cards";
                                    },
                                    get children () {
                                        return (0, $6TTLi.createComponent)((0, $jYtRZ.CharacterCardView), {
                                            get groups () {
                                                return groups();
                                            },
                                            get showGrouping () {
                                                return showGrouping();
                                            },
                                            toggleFavorite: toggleFavorite,
                                            setDelete: setDelete,
                                            setDownload: setDownload,
                                            setEdit: setEditChar
                                        });
                                    }
                                }),
                                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                    get when () {
                                        return props.type === "folders";
                                    },
                                    get children () {
                                        return (0, $6TTLi.createComponent)((0, $db7k4.CharacterFolderView), {
                                            get groups () {
                                                return groups();
                                            },
                                            get showGrouping () {
                                                return showGrouping();
                                            },
                                            toggleFavorite: toggleFavorite,
                                            setDelete: setDelete,
                                            setDownload: setDownload,
                                            get sort () {
                                                return props.sortDirection;
                                            },
                                            get characters () {
                                                return props.characters;
                                            },
                                            setEdit: setEditChar
                                        });
                                    }
                                })
                            ];
                        }
                    })
                ];
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return download();
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $2I0tL.DownloadModal), {
                    show: true,
                    close: ()=>setDownload(),
                    get charId () {
                        return download()._id;
                    }
                });
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return editChar();
            },
            get children () {
                return (0, $6TTLi.createComponent)($4ddcc72f2ef96846$var$EditCharacter, {
                    get char () {
                        return editChar();
                    },
                    close: ()=>setEditChar()
                });
            }
        }),
        (0, $6TTLi.createComponent)((0, $gCvUs.default), {
            get char () {
                return showDelete();
            },
            get show () {
                return !!showDelete();
            },
            close: ()=>setDelete(undefined)
        })
    ];
};
const $4ddcc72f2ef96846$var$EditCharacter = (props)=>{
    const [footer, setFooter] = (0, $6TTLi.createSignal)();
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get title () {
            return `Editing: ${props.char?.name}`;
        },
        show: true,
        get close () {
            return props.close;
        },
        maxWidth: "half",
        get footer () {
            return footer();
        },
        get children () {
            return (0, $6TTLi.createComponent)((0, $gkmLe.CreateCharacterForm), {
                get editId () {
                    return props.char?._id;
                },
                get close () {
                    return props.close;
                },
                noTitle: true,
                footer: setFooter
            });
        }
    });
};
function $4ddcc72f2ef96846$var$getSortableValue(char, field) {
    switch(field){
        case "name":
            return char.name.toLowerCase();
        case "created":
            return char.createdAt;
        case "modified":
            return char.updatedAt;
        case "conversed":
            return char.chat?.updatedAt || new Date(0).toISOString();
        default:
            return 0;
    }
}
function $4ddcc72f2ef96846$var$getSortFunction(field, direction) {
    return (left, right)=>{
        const mod = direction === "asc" ? 1 : -1;
        const l = $4ddcc72f2ef96846$var$getSortableValue(left, field);
        const r = $4ddcc72f2ef96846$var$getSortableValue(right, field);
        return l > r ? mod : l === r ? 0 : -mod;
    };
}
function $4ddcc72f2ef96846$var$getListCache() {
    const existing = (0, $kIEMX.storage).localGetItem($4ddcc72f2ef96846$var$CACHE_KEY);
    const defaultCache = {
        sort: {
            field: "modified",
            direction: "desc"
        },
        view: "list"
    };
    if (!existing) return defaultCache;
    return {
        ...defaultCache,
        ...JSON.parse(existing)
    };
}
function $4ddcc72f2ef96846$var$saveListCache(cache) {
    (0, $kIEMX.storage).localSetItem($4ddcc72f2ef96846$var$CACHE_KEY, JSON.stringify(cache));
}
const $4ddcc72f2ef96846$var$NoCharacters = ()=>(()=>{
        const _el$22 = $4ddcc72f2ef96846$var$_tmpl$12.cloneNode(true), _el$23 = _el$22.firstChild, _el$25 = _el$23.nextSibling, _el$24 = _el$25.nextSibling;
        (0, $f4ihl.insert)(_el$22, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            "class": "text-[var(--hl-500)]",
            href: "/character/create",
            children: "Create a character"
        }), _el$25);
        return _el$22;
    })();
var $4ddcc72f2ef96846$export$2e2bcd8739ae039 = $4ddcc72f2ef96846$var$CharacterList;
function $4ddcc72f2ef96846$var$findLatestChat(charId, chats) {
    let match;
    for (const chat of chats){
        if (chat.characterId !== charId) continue;
        if (!match) {
            match = chat;
            continue;
        }
        if (chat.updatedAt > match.updatedAt) match = chat;
    }
    return match;
}

});
parcelRegister("gCvUs", function(module, exports) {

$parcel$export(module.exports, "default", () => $6f1f7d3691544466$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $4P0sz = parcelRequire("4P0sz");

var $bexPb = parcelRequire("bexPb");

var $2qUsD = parcelRequire("2qUsD");

var $6LNaF = parcelRequire("6LNaF");

var $6uY8b = parcelRequire("6uY8b");
const $6f1f7d3691544466$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col items-center gap-4"><div class="font-bold">This will delete all of the chats associated with this character!</div><div>Are you sure you wish to delete this character?</div><div class="flex justify-center gap-4"></div></div>`, 8);
const $6f1f7d3691544466$var$DeleteCharacterModal = (props)=>{
    const onDelete = ()=>{
        if (!props.char) return;
        (0, $6uY8b.characterStore).deleteCharacter(props.char._id, props.close);
    };
    const onArchive = ()=>{
        if (!props.char) return;
        if (props.char.tags?.includes("archived")) return;
        (0, $6uY8b.characterStore).editCharacter(props.char._id, {
            tags: props.char.tags?.concat("archived") ?? [
                "archived"
            ]
        }, props.close);
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show && !!props.char;
        },
        title: "Confirm Deletion",
        get close () {
            return props.close;
        },
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
                            "Cancel"
                        ];
                    }
                }),
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    schema: "secondary",
                    onClick: onArchive,
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Archive), {}),
                            " Archive"
                        ];
                    }
                }),
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    schema: "red",
                    onClick: onDelete,
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}),
                            " Delete"
                        ];
                    }
                })
            ];
        },
        get children () {
            const _el$ = $6f1f7d3691544466$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling;
            (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $bexPb.CharacterAvatar), {
                get char () {
                    return props.char;
                },
                format: {
                    size: "md",
                    corners: "circle"
                }
            }), null);
            (0, $f4ihl.insert)(_el$4, ()=>props.char.name, null);
            return _el$;
        }
    });
};
var $6f1f7d3691544466$export$2e2bcd8739ae039 = $6f1f7d3691544466$var$DeleteCharacterModal;

});

parcelRegister("hlKH6", function(module, exports) {

$parcel$export(module.exports, "default", () => $a8964abe10c3c550$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $6RpYU = parcelRequire("6RpYU");

var $2qUsD = parcelRequire("2qUsD");

var $4P0sz = parcelRequire("4P0sz");

var $hBgCm = parcelRequire("hBgCm");

var $6uY8b = parcelRequire("6uY8b");
const $a8964abe10c3c550$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="ellipsis"></span>`, 2), $a8964abe10c3c550$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="absolute right-0"></span>`, 2), $a8964abe10c3c550$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex max-h-[50vh] max-w-[50vw] flex-col sm:max-w-[30vw]"><div class="flex-1 overflow-y-auto"><div class="flex flex-col gap-2 p-2"><div class="bg-700 flex w-full cursor-pointer flex-row items-center justify-between gap-4 rounded-xl px-2 py-1"><div class="ellipsis flex h-3/4 items-center"><div class="font-bold">Reset Tag Filters</div></div></div></div></div></div>`, 12), $a8964abe10c3c550$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="py-1"></div>`, 2), $a8964abe10c3c550$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="bg-700 flex w-full cursor-pointer flex-row items-center justify-between gap-4 rounded-xl px-2 py-1"><div class="ellipsis flex h-3/4 items-center gap-1"><span></span><span></span><span></span><span class="select-none"><span class="font-bold"></span><span>(<!>)</span></span></div></div>`, 17);
const $a8964abe10c3c550$var$TagSelect = (props)=>{
    const state = (0, $6uY8b.tagStore)();
    const [opts, setOpts] = (0, $6TTLi.createSignal)(false);
    const setDefault = ()=>{
        (0, $6uY8b.tagStore).setDefault();
    };
    const toggle = (value)=>{
        (0, $6uY8b.tagStore).toggle(value);
    };
    return [
        (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
            get label () {
                return props.label;
            },
            get helperText () {
                return props.helperText;
            }
        }),
        (()=>{
            const _el$ = $a8964abe10c3c550$var$_tmpl$4.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                schema: "secondary",
                "class": "relative w-48 rounded-xl",
                onClick: ()=>setOpts(!opts()),
                alignLeft: true,
                get children () {
                    return [
                        (()=>{
                            const _el$2 = $a8964abe10c3c550$var$_tmpl$.cloneNode(true);
                            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return state.filter.length;
                                },
                                get children () {
                                    return state.filter.join(", ");
                                }
                            }), null);
                            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return !state.filter.length;
                                },
                                children: "All tags"
                            }), null);
                            return _el$2;
                        })(),
                        (()=>{
                            const _el$3 = $a8964abe10c3c550$var$_tmpl$2.cloneNode(true);
                            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $4P0sz.ChevronDown), {}));
                            return _el$3;
                        })()
                    ];
                }
            }), null);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6RpYU.DropMenu), {
                get show () {
                    return opts();
                },
                close: ()=>setOpts(false),
                customPosition: "top-[8px] left-[0px]",
                get children () {
                    const _el$4 = $a8964abe10c3c550$var$_tmpl$3.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$7.firstChild, _el$9 = _el$8.firstChild;
                    _el$7.$$click = ()=>setDefault();
                    (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $4P0sz.X), {}), _el$9);
                    (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return state.tags;
                        },
                        children: (option)=>(()=>{
                                const _el$10 = $a8964abe10c3c550$var$_tmpl$5.cloneNode(true), _el$11 = _el$10.firstChild, _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling, _el$15 = _el$14.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, _el$18 = _el$17.firstChild, _el$20 = _el$18.nextSibling, _el$19 = _el$20.nextSibling;
                                _el$10.$$click = ()=>toggle(option.tag);
                                (0, $f4ihl.insert)(_el$12, (0, $6TTLi.createComponent)((0, $4P0sz.CheckSquare), {}));
                                (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $4P0sz.XSquare), {}));
                                (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $4P0sz.Square), {}));
                                (0, $f4ihl.insert)(_el$16, ()=>option.tag);
                                (0, $f4ihl.insert)(_el$17, ()=>option.count, _el$20);
                                (0, $f4ihl.effect)((_p$)=>{
                                    const _v$ = !state.filter.includes(option.tag), _v$2 = !state.hidden.includes(option.tag), _v$3 = !!(state.hidden.includes(option.tag) || state.filter.includes(option.tag)), _v$4 = !!(option.tag === "archived");
                                    _v$ !== _p$._v$ && _el$12.classList.toggle("hidden", _p$._v$ = _v$);
                                    _v$2 !== _p$._v$2 && _el$13.classList.toggle("hidden", _p$._v$2 = _v$2);
                                    _v$3 !== _p$._v$3 && _el$14.classList.toggle("hidden", _p$._v$3 = _v$3);
                                    _v$4 !== _p$._v$4 && _el$15.classList.toggle("text-neutral-500", _p$._v$4 = _v$4);
                                    return _p$;
                                }, {
                                    _v$: undefined,
                                    _v$2: undefined,
                                    _v$3: undefined,
                                    _v$4: undefined
                                });
                                return _el$10;
                            })()
                    }), null);
                    return _el$4;
                }
            }), null);
            return _el$;
        })()
    ];
};
var $a8964abe10c3c550$export$2e2bcd8739ae039 = $a8964abe10c3c550$var$TagSelect;
(0, $f4ihl.delegateEvents)([
    "click"
]);

});

parcelRegister("541Tr", function(module, exports) {

$parcel$export(module.exports, "CharacterListView", () => $4f3ef1567779f0be$export$5c5973f010ab67ba);

var $f4ihl = parcelRequire("f4ihl");
var $6TTLi = parcelRequire("6TTLi");

var $6TTLi = parcelRequire("6TTLi");

var $a2o17 = parcelRequire("a2o17");

var $fNpXe = parcelRequire("fNpXe");

var $bexPb = parcelRequire("bexPb");

var $4P0sz = parcelRequire("4P0sz");

var $6RpYU = parcelRequire("6RpYU");

var $2qUsD = parcelRequire("2qUsD");
const $4f3ef1567779f0be$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full flex-col gap-2"></div>`, 2), $4f3ef1567779f0be$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<h2 class="text-xl font-bold"></h2>`, 2), $4f3ef1567779f0be$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex max-w-full flex-col overflow-hidden"><span class="ellipsis font-bold"></span><span class="ellipsis"></span></div>`, 6), $4f3ef1567779f0be$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="bg-800 flex w-full flex-row items-center justify-between gap-4 rounded-xl px-2 py-1 hover:bg-[var(--bg-700)]"></div>`, 2), $4f3ef1567779f0be$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<a href="#" role="button"></a>`, 2), $4f3ef1567779f0be$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 p-2 font-bold"></div>`, 2), $4f3ef1567779f0be$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<div><div class="hidden flex-row items-center justify-center gap-2 sm:flex"><a href="#" role="button"></a><a href="#" role="button"></a><a href="#" role="button"></a></div><div class="flex items-center sm:hidden"></div></div>`, 12);
const $4f3ef1567779f0be$export$5c5973f010ab67ba = (props)=>{
    return (()=>{
        const _el$ = $4f3ef1567779f0be$var$_tmpl$.cloneNode(true);
        (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
            get each () {
                return props.groups;
            },
            children: (group, i)=>[
                    (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                        get when () {
                            return props.showGrouping && group.label;
                        },
                        get children () {
                            const _el$2 = $4f3ef1567779f0be$var$_tmpl$2.cloneNode(true);
                            (0, $f4ihl.insert)(_el$2, ()=>group.label);
                            return _el$2;
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return group.list;
                        },
                        children: (char)=>(0, $6TTLi.createComponent)($4f3ef1567779f0be$var$Character, {
                                type: "list",
                                char: char,
                                edit: ()=>props.setEdit(char),
                                "delete": ()=>props.setDelete(char),
                                download: ()=>props.setDownload(char),
                                toggleFavorite: (value)=>props.toggleFavorite(char._id, value)
                            })
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                        get when () {
                            return i() < props.groups.length - 1;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $a2o17.default), {});
                        }
                    })
                ]
        }));
        return _el$;
    })();
};
const $4f3ef1567779f0be$var$Character = (props)=>{
    return (()=>{
        const _el$3 = $4f3ef1567779f0be$var$_tmpl$4.cloneNode(true);
        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            "class": "ellipsis flex h-3/4 grow cursor-pointer items-center gap-4",
            get href () {
                return `/character/${props.char._id}/chats`;
            },
            role: "link",
            get ["aria-label"] () {
                return `Open chats with ${props.char.name}`;
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $bexPb.CharacterAvatar), {
                        get char () {
                            return props.char;
                        },
                        zoom: 1.75,
                        format: {
                            size: "md",
                            corners: "circle"
                        }
                    }),
                    (()=>{
                        const _el$4 = $4f3ef1567779f0be$var$_tmpl$3.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
                        (0, $f4ihl.insert)(_el$5, ()=>props.char.name);
                        (0, $f4ihl.insert)(_el$6, ()=>props.char.description);
                        return _el$4;
                    })()
                ];
            }
        }), null);
        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)($4f3ef1567779f0be$var$CharacterListOptions, {
            get char () {
                return props.char;
            },
            get ["delete"] () {
                return props.delete;
            },
            get download () {
                return props.download;
            },
            get edit () {
                return props.edit;
            },
            get toggleFavorite () {
                return props.toggleFavorite;
            }
        }), null);
        return _el$3;
    })();
};
const $4f3ef1567779f0be$var$CharacterListOptions = (props)=>{
    const [listOpts, setListOpts] = (0, $6TTLi.createSignal)(false);
    const nav = (0, $fNpXe.useNavigate)();
    return (()=>{
        const _el$7 = $4f3ef1567779f0be$var$_tmpl$7.cloneNode(true), _el$8 = _el$7.firstChild, _el$11 = _el$8.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$8.nextSibling;
        (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return props.char.favorite;
            },
            get children () {
                const _el$9 = $4f3ef1567779f0be$var$_tmpl$5.cloneNode(true);
                _el$9.$$click = ()=>props.toggleFavorite(false);
                (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                    "class": "icon-button fill-[var(--text-900)] text-[var(--text-900)]"
                }));
                (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$9, "aria-label", `Remove ${props.char.name} from favorite characters`));
                return _el$9;
            }
        }), _el$11);
        (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return !props.char.favorite;
            },
            get children () {
                const _el$10 = $4f3ef1567779f0be$var$_tmpl$5.cloneNode(true);
                _el$10.$$click = ()=>props.toggleFavorite(true);
                (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                    "class": "icon-button"
                }));
                (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$10, "aria-label", `Add ${props.char.name} to favorite characters`));
                return _el$10;
            }
        }), _el$11);
        (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            get href () {
                return `/chats/create/${props.char._id}`;
            },
            role: "button",
            get ["aria-label"] () {
                return `Create new chat with ${props.char.name}`;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.MessageCircle), {
                    "class": "icon-button"
                });
            }
        }), _el$11);
        (0, $f4ihl.addEventListener)(_el$11, "click", props.download, true);
        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $4P0sz.Download), {
            "class": "icon-button"
        }));
        (0, $f4ihl.addEventListener)(_el$12, "click", props.edit, true);
        (0, $f4ihl.insert)(_el$12, (0, $6TTLi.createComponent)((0, $4P0sz.Edit), {
            "class": "icon-button"
        }));
        (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            get href () {
                return `/character/create/${props.char._id}`;
            },
            role: "button",
            get ["aria-label"] () {
                return `Duplicate character ${props.char.name}`;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {
                    "class": "icon-button"
                });
            }
        }), _el$13);
        (0, $f4ihl.addEventListener)(_el$13, "click", props.delete, true);
        (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {
            "class": "icon-button"
        }));
        _el$14.$$click = ()=>setListOpts(true);
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $4P0sz.MoreHorizontal), {
            "class": "icon-button"
        }));
        (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $6RpYU.DropMenu), {
            "class": "bg-[var(--bg-700)]",
            get show () {
                return listOpts();
            },
            close: ()=>setListOpts(false),
            customPosition: "right-[10px]",
            vert: "down",
            get children () {
                const _el$15 = $4f3ef1567779f0be$var$_tmpl$6.cloneNode(true);
                (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: ()=>props.toggleFavorite(!props.char.favorite),
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return props.char.favorite;
                                },
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                                            "class": "text-900 fill-[var(--text-900)]"
                                        }),
                                        " Unfavorite"
                                    ];
                                }
                            }),
                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return !props.char.favorite;
                                },
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Star), {}),
                                        " Favorite"
                                    ];
                                }
                            })
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: ()=>nav(`/chats/create/${props.char._id}`),
                    alignLeft: true,
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.MessageCircle), {}),
                            " Chat"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    get onClick () {
                        return props.download;
                    },
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Download), {}),
                            " Download"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    get onClick () {
                        return props.edit;
                    },
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Edit), {}),
                            " Edit"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    onClick: ()=>nav(`/character/create/${props.char._id}`),
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {}),
                            " Duplicate"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    schema: "red",
                    get onClick () {
                        return props.delete;
                    },
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}),
                            " Delete"
                        ];
                    }
                }), null);
                return _el$15;
            }
        }), null);
        (0, $f4ihl.effect)((_p$)=>{
            const _v$ = `Download character ${props.char.name}`, _v$2 = `Edit character ${props.char.name}`, _v$3 = `Delete character ${props.char.name}`;
            _v$ !== _p$._v$ && (0, $f4ihl.setAttribute)(_el$11, "aria-label", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && (0, $f4ihl.setAttribute)(_el$12, "aria-label", _p$._v$2 = _v$2);
            _v$3 !== _p$._v$3 && (0, $f4ihl.setAttribute)(_el$13, "aria-label", _p$._v$3 = _v$3);
            return _p$;
        }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
        });
        return _el$7;
    })();
};
(0, $f4ihl.delegateEvents)([
    "click"
]);

});

parcelRegister("jYtRZ", function(module, exports) {

$parcel$export(module.exports, "CharacterCardView", () => $a88c9295a37a1c2f$export$1edd78cddd924a8b);

var $f4ihl = parcelRequire("f4ihl");
var $6TTLi = parcelRequire("6TTLi");

var $6TTLi = parcelRequire("6TTLi");

var $a2o17 = parcelRequire("a2o17");

var $fNpXe = parcelRequire("fNpXe");

var $2qKik = parcelRequire("2qKik");

var $kIEMX = parcelRequire("kIEMX");

var $4P0sz = parcelRequire("4P0sz");

var $6RpYU = parcelRequire("6RpYU");

var $2qUsD = parcelRequire("2qUsD");
const $a88c9295a37a1c2f$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<h2 class="text-xl font-bold"></h2>`, 2), $a88c9295a37a1c2f$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="grid w-full grid-cols-[repeat(auto-fit,minmax(160px,1fr))] flex-row flex-wrap justify-start gap-2 py-2"></div>`, 2), $a88c9295a37a1c2f$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div></div>`, 2), $a88c9295a37a1c2f$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<img class="h-full w-full object-cover" style="object-position: 50% 30%;">`, 1), $a88c9295a37a1c2f$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<button aria-label="Open Recent Chat"></button>`, 2), $a88c9295a37a1c2f$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<button aria-label="Open Character Chats"></button>`, 2), $a88c9295a37a1c2f$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 p-2"></div>`, 2), $a88c9295a37a1c2f$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="bg-800 flex flex-col items-center justify-between gap-1 rounded-lg border-[1px] border-[var(--bg-600)]"><div class="w-full"></div><div class="w-full text-sm"><div class="overflow-hidden text-ellipsis whitespace-nowrap px-1 text-center font-bold"></div><div class="text-600 line-clamp-3 h-[3rem] text-ellipsis px-1 text-center text-xs font-normal"></div><div class="flex justify-between p-1"><button aria-label="Toggle Favorite"></button><div class="text-500 text-xs italic"></div></div><div class="float-left ml-[3px] mt-[-224px]"><div class="cursor-pointer rounded-md border-[1px] border-[var(--bg-400)] bg-[var(--bg-700)] p-[2px]"></div></div><div class="float-right mr-[3px] mt-[-224px] flex justify-end"><div class="rounded-md border-[1px] border-[var(--bg-400)] bg-[var(--bg-700)] p-[2px]"></div></div></div></div>`, 24);
const $a88c9295a37a1c2f$export$1edd78cddd924a8b = (props)=>{
    return (0, $6TTLi.createComponent)((0, $6TTLi.For), {
        get each () {
            return props.groups;
        },
        children: (group, i)=>[
                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return props.showGrouping;
                    },
                    get children () {
                        const _el$ = $a88c9295a37a1c2f$var$_tmpl$.cloneNode(true);
                        (0, $f4ihl.insert)(_el$, ()=>group.label);
                        return _el$;
                    }
                }),
                (()=>{
                    const _el$2 = $a88c9295a37a1c2f$var$_tmpl$2.cloneNode(true);
                    (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return group.list;
                        },
                        children: (char)=>(0, $6TTLi.createComponent)($a88c9295a37a1c2f$var$Character, {
                                edit: ()=>props.setEdit(char),
                                char: char,
                                "delete": ()=>props.setDelete(char),
                                download: ()=>props.setDownload(char),
                                toggleFavorite: (value)=>props.toggleFavorite(char._id, value)
                            })
                    }), null);
                    (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                        get when () {
                            return group.list.length < 4;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                                get each () {
                                    return new Array(4 - group.list.length);
                                },
                                children: ()=>$a88c9295a37a1c2f$var$_tmpl$3.cloneNode(true)
                            });
                        }
                    }), null);
                    return _el$2;
                })(),
                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return i() < props.groups.length - 1;
                    },
                    get children () {
                        return (0, $6TTLi.createComponent)((0, $a2o17.default), {});
                    }
                })
            ]
    });
};
const $a88c9295a37a1c2f$var$Character = (props)=>{
    const [opts, setOpts] = (0, $6TTLi.createSignal)(false);
    const nav = (0, $fNpXe.useNavigate)();
    let ref;
    const size = 20;
    return (()=>{
        const _el$4 = $a88c9295a37a1c2f$var$_tmpl$8.cloneNode(true), _el$5 = _el$4.firstChild, _el$7 = _el$5.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$10 = _el$9.nextSibling, _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$15 = _el$10.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$15.nextSibling, _el$18 = _el$17.firstChild;
        const _ref$ = ref;
        typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$4) : ref = _el$4;
        (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return props.char.visualType === "sprite" && props.char.sprite;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                get href () {
                                    return `/character/${props.char._id}/chats`;
                                },
                                "class": "block h-32 w-full justify-center overflow-hidden rounded-lg",
                                get children () {
                                    return (0, $6TTLi.createComponent)((0, $2qKik.default), {
                                        container: ref,
                                        get body () {
                                            return props.char.sprite;
                                        }
                                    });
                                }
                            });
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return props.char.avatar;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                get href () {
                                    return props.char.chat ? `/chat/${props.char.chat._id}` : `/character/${props.char._id}/chats`;
                                },
                                "class": "block h-32 w-full justify-center overflow-hidden rounded-lg rounded-b-none",
                                get children () {
                                    const _el$6 = $a88c9295a37a1c2f$var$_tmpl$4.cloneNode(true);
                                    (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$6, "src", (0, $kIEMX.getAssetUrl)(props.char.avatar)));
                                    return _el$6;
                                }
                            });
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        when: true,
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                get href () {
                                    return `/character/${props.char._id}/chats`;
                                },
                                "class": "bg-700 flex h-32 w-full items-center justify-center rounded-lg rounded-b-none",
                                get children () {
                                    return (0, $6TTLi.createComponent)((0, $4P0sz.VenetianMask), {
                                        size: 24
                                    });
                                }
                            });
                        }
                    })
                ];
            }
        }));
        (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            "class": "link",
            get href () {
                return `/character/${props.char._id}/chats`;
            },
            get children () {
                return props.char.name;
            }
        }));
        (0, $f4ihl.insert)(_el$9, ()=>props.char.description);
        _el$11.$$click = ()=>props.toggleFavorite(!props.char.favorite);
        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return props.char.favorite;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                    size: size,
                    "class": "text-900 fill-[var(--text-900)]"
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return !props.char.favorite;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                    size: size
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$12, (()=>{
            const _c$ = (0, $f4ihl.memo)(()=>!!props.char.chat);
            return ()=>_c$() ? (0, $kIEMX.toDuration)(new Date(props.char.chat.updatedAt)) + " ago" : "";
        })());
        (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return props.char.chat;
                        },
                        get children () {
                            const _el$13 = $a88c9295a37a1c2f$var$_tmpl$5.cloneNode(true);
                            _el$13.$$click = ()=>nav(`/chat/${props.char.chat?._id}`);
                            (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $4P0sz.ArrowRight), {
                                size: size
                            }));
                            return _el$13;
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return !props.char.chat;
                        },
                        get children () {
                            const _el$14 = $a88c9295a37a1c2f$var$_tmpl$6.cloneNode(true);
                            _el$14.$$click = ()=>nav(`/chats/create/${props.char._id}`);
                            (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $4P0sz.ArrowRight), {
                                size: size
                            }));
                            return _el$14;
                        }
                    })
                ];
            }
        }), null);
        (0, $f4ihl.addEventListener)(_el$16, "click", props.download, true);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)((0, $4P0sz.Download), {
            size: size
        }));
        _el$17.$$click = ()=>setOpts(true);
        (0, $f4ihl.insert)(_el$18, (0, $6TTLi.createComponent)((0, $4P0sz.Menu), {
            size: size,
            "class": "icon-button",
            color: "var(--bg-100)"
        }));
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)((0, $6RpYU.DropMenu), {
            get show () {
                return opts();
            },
            close: ()=>setOpts(false),
            customPosition: "right-[9px] top-[6px]",
            get children () {
                const _el$19 = $a88c9295a37a1c2f$var$_tmpl$7.cloneNode(true);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    onClick: ()=>nav(`/chats/create/${props.char._id}`),
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.MessageCirclePlus), {
                                size: size
                            }),
                            " New Chat"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    get onClick () {
                        return props.edit;
                    },
                    "aria-label": "Edit",
                    alignLeft: true,
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Pencil), {
                                size: size
                            }),
                            " Edit"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    onClick: ()=>nav(`/character/create/${props.char._id}`),
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {}),
                            " Duplicate"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    size: "sm",
                    schema: "red",
                    onClick: ()=>{
                        setOpts(false);
                        props.delete();
                    },
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}),
                            " Delete"
                        ];
                    }
                }), null);
                return _el$19;
            }
        }), null);
        return _el$4;
    })();
};
(0, $f4ihl.delegateEvents)([
    "click"
]);

});

parcelRegister("db7k4", function(module, exports) {

$parcel$export(module.exports, "CharacterFolderView", () => $ce22f1e326d3f5c0$export$46fa80a2e5192d88);

var $f4ihl = parcelRequire("f4ihl");
var $6TTLi = parcelRequire("6TTLi");

var $6TTLi = parcelRequire("6TTLi");

var $faKez = parcelRequire("faKez");

var $jvoA6 = parcelRequire("jvoA6");

var $4P0sz = parcelRequire("4P0sz");

var $bexPb = parcelRequire("bexPb");

var $fNpXe = parcelRequire("fNpXe");

var $2qUsD = parcelRequire("2qUsD");

var $6RpYU = parcelRequire("6RpYU");
const $ce22f1e326d3f5c0$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col"></div>`, 2), $ce22f1e326d3f5c0$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div></div>`, 2), $ce22f1e326d3f5c0$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-1"></div>`, 2), $ce22f1e326d3f5c0$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="my-1 flex flex-col gap-1"></div>`, 2), $ce22f1e326d3f5c0$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="rounded-md border-[1px] border-[var(--bg-700)] px-1"><div class="my-1 flex cursor-pointer items-center"></div></div>`, 4), $ce22f1e326d3f5c0$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex max-w-full gap-1 overflow-hidden"><span class="ellipsis  font-bold"></span><span class="ellipsis"></span></div>`, 6), $ce22f1e326d3f5c0$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex h-8 w-full items-center justify-between rounded-md border-[1px] border-[var(--bg-800)] hover:border-[var(--bg-600)]"><div class="mx-2 my-1"></div></div>`, 4), $ce22f1e326d3f5c0$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 p-2 font-bold"></div>`, 2), $ce22f1e326d3f5c0$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<div><div class="hidden flex-row items-center justify-center gap-2 sm:flex"><a></a><a></a></div><div class="flex items-center sm:hidden"></div></div>`, 10);
/**
 * Work in progress
 * @todo
 * - Assign folders to characters
 * - Move characters between folders (potentially using dragging in addition to basic modal)
 */ const $ce22f1e326d3f5c0$var$randomFolders = [
    "/",
    "/foo",
    "/foo/bar/",
    "/foo/qux",
    "/test"
];
function $ce22f1e326d3f5c0$var$random() {
    const ele = Math.floor(Math.random() * $ce22f1e326d3f5c0$var$randomFolders.length);
    return $ce22f1e326d3f5c0$var$randomFolders[ele];
}
const $ce22f1e326d3f5c0$export$46fa80a2e5192d88 = (props)=>{
    const sort = (l, r)=>{
        return l.name.localeCompare(r.name) * (props.sort === "asc" ? 1 : -1);
    };
    const folders = (0, $6TTLi.createMemo)(()=>{
        const tree = {
            "/": {
                path: "/",
                depth: 1,
                list: []
            }
        };
        for (const char of props.characters){
            let folder = char.folder || $ce22f1e326d3f5c0$var$random();
            if (!folder.startsWith("/")) folder = "/" + folder;
            if (!folder.endsWith("/")) folder += "/";
            folder = $ce22f1e326d3f5c0$var$toFolderSlug(folder);
            const depth = folder.match(/\//g)?.length ?? 0;
            if (!tree[folder]) tree[folder] = {
                path: folder,
                depth: depth,
                list: []
            };
            tree[folder].list.push(char);
        }
        for(const folder in tree)tree[folder].list.sort(sort);
        return tree;
    });
    const [states, setStates] = (0, $jvoA6.createStore)({
        "/": true
    });
    const toggle = (id)=>{
        const prev = states[id] ?? false;
        console.log(id, "-->", !prev);
        setStates(id, !prev);
    };
    return (()=>{
        const _el$ = $ce22f1e326d3f5c0$var$_tmpl$.cloneNode(true);
        (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)($ce22f1e326d3f5c0$var$FolderContents, {
            get folder () {
                return folders()["/"];
            },
            get tree () {
                return folders();
            },
            states: states,
            toggleState: toggle,
            get toggleFavorite () {
                return props.toggleFavorite;
            },
            get setEdit () {
                return props.setEdit;
            },
            get setDelete () {
                return props.setDelete;
            },
            get setDownload () {
                return props.setDownload;
            }
        }));
        return _el$;
    })();
};
const $ce22f1e326d3f5c0$var$FolderContents = (props)=>{
    const children = (0, $6TTLi.createMemo)(()=>{
        const folders = $ce22f1e326d3f5c0$var$getChildFolders(props.tree, props.folder.path, "asc");
        return folders;
    });
    return (()=>{
        const _el$2 = $ce22f1e326d3f5c0$var$_tmpl$5.cloneNode(true), _el$3 = _el$2.firstChild;
        _el$3.$$click = ()=>props.toggleState(props.folder.path);
        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return !props.states[props.folder.path];
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $4P0sz.FolderClosed), {
                        size: 16
                    }),
                    (()=>{
                        const _el$4 = $ce22f1e326d3f5c0$var$_tmpl$2.cloneNode(true);
                        (0, $f4ihl.insert)(_el$4, (()=>{
                            const _c$ = (0, $f4ihl.memo)(()=>props.folder.path === "/");
                            return ()=>_c$() ? "root" : props.folder.path.slice(1, -1);
                        })());
                        return _el$4;
                    })()
                ];
            }
        }), null);
        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return props.states[props.folder.path];
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $4P0sz.FolderOpen), {
                        size: 16
                    }),
                    (()=>{
                        const _el$5 = $ce22f1e326d3f5c0$var$_tmpl$2.cloneNode(true);
                        (0, $f4ihl.insert)(_el$5, (()=>{
                            const _c$2 = (0, $f4ihl.memo)(()=>props.folder.path === "/");
                            return ()=>_c$2() ? "root" : props.folder.path.slice(1, -1);
                        })());
                        return _el$5;
                    })()
                ];
            }
        }), null);
        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return props.states[props.folder.path];
            },
            get children () {
                return [
                    (()=>{
                        const _el$6 = $ce22f1e326d3f5c0$var$_tmpl$3.cloneNode(true);
                        (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                            get each () {
                                return children();
                            },
                            children: (child)=>(()=>{
                                    const _el$8 = $ce22f1e326d3f5c0$var$_tmpl$2.cloneNode(true);
                                    (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)($ce22f1e326d3f5c0$var$FolderContents, {
                                        folder: child,
                                        get tree () {
                                            return props.tree;
                                        },
                                        get states () {
                                            return props.states;
                                        },
                                        get setDelete () {
                                            return props.setDelete;
                                        },
                                        get setDownload () {
                                            return props.setDownload;
                                        },
                                        get setEdit () {
                                            return props.setEdit;
                                        },
                                        get toggleFavorite () {
                                            return props.toggleFavorite;
                                        },
                                        get toggleState () {
                                            return props.toggleState;
                                        }
                                    }));
                                    (0, $f4ihl.effect)((_p$)=>{
                                        const _v$ = `${props.folder.depth * 6}px`, _v$2 = `${props.folder.depth * 6}px`;
                                        _v$ !== _p$._v$ && _el$8.style.setProperty("margin-left", _p$._v$ = _v$);
                                        _v$2 !== _p$._v$2 && _el$8.style.setProperty("margin-right", _p$._v$2 = _v$2);
                                        return _p$;
                                    }, {
                                        _v$: undefined,
                                        _v$2: undefined
                                    });
                                    return _el$8;
                                })()
                        }));
                        return _el$6;
                    })(),
                    (()=>{
                        const _el$7 = $ce22f1e326d3f5c0$var$_tmpl$4.cloneNode(true);
                        (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                            get each () {
                                return props.folder.list;
                            },
                            children: (char)=>(0, $6TTLi.createComponent)($ce22f1e326d3f5c0$var$Character, {
                                    edit: ()=>props.setEdit(char),
                                    char: char,
                                    toggleFavorite: (v)=>props.toggleFavorite(char._id, v),
                                    "delete": ()=>props.setDelete(char),
                                    download: ()=>props.setDelete(char)
                                })
                        }));
                        return _el$7;
                    })()
                ];
            }
        }), null);
        return _el$2;
    })();
};
const $ce22f1e326d3f5c0$var$Character = (props)=>{
    return (()=>{
        const _el$9 = $ce22f1e326d3f5c0$var$_tmpl$7.cloneNode(true), _el$13 = _el$9.firstChild;
        (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            "class": "ellipsis flex h-3/4 grow cursor-pointer items-center gap-2",
            get href () {
                return `/character/${props.char._id}/chats`;
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $bexPb.CharacterAvatar), {
                        format: {
                            size: "xs",
                            corners: "circle"
                        },
                        get char () {
                            return props.char;
                        },
                        zoom: 1.75
                    }),
                    (()=>{
                        const _el$10 = $ce22f1e326d3f5c0$var$_tmpl$6.cloneNode(true), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling;
                        _el$11.style.setProperty("min-width", "fit-content");
                        (0, $f4ihl.insert)(_el$11, ()=>props.char.name);
                        (0, $f4ihl.insert)(_el$12, ()=>props.char.description);
                        return _el$10;
                    })()
                ];
            }
        }), _el$13);
        (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)($ce22f1e326d3f5c0$var$CharacterListOptions, {
            get char () {
                return props.char;
            },
            get ["delete"] () {
                return props.delete;
            },
            get download () {
                return props.download;
            },
            get edit () {
                return props.edit;
            },
            get toggleFavorite () {
                return props.toggleFavorite;
            }
        }));
        return _el$9;
    })();
};
const $ce22f1e326d3f5c0$var$CharacterListOptions = (props)=>{
    const [listOpts, setListOpts] = (0, $6TTLi.createSignal)(false);
    const nav = (0, $fNpXe.useNavigate)();
    return (()=>{
        const _el$14 = $ce22f1e326d3f5c0$var$_tmpl$9.cloneNode(true), _el$15 = _el$14.firstChild, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, _el$18 = _el$15.nextSibling;
        (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return props.char.favorite;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                    "class": "icon-button fill-[var(--text-900)] text-[var(--text-900)]",
                    onClick: ()=>props.toggleFavorite(false)
                });
            }
        }), _el$16);
        (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return !props.char.favorite;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                    "class": "icon-button",
                    onClick: ()=>props.toggleFavorite(true)
                });
            }
        }), _el$16);
        (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            get href () {
                return `/chats/create/${props.char._id}`;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.FolderCog), {
                    "class": "icon-button"
                });
            }
        }), _el$16);
        (0, $f4ihl.addEventListener)(_el$16, "click", props.download, true);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)((0, $4P0sz.Download), {
            "class": "icon-button"
        }));
        (0, $f4ihl.addEventListener)(_el$17, "click", props.edit, true);
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)((0, $4P0sz.Edit), {
            "class": "icon-button"
        }));
        (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            get href () {
                return `/character/create/${props.char._id}`;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {
                    "class": "icon-button"
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {
            "class": "icon-button",
            get onClick () {
                return props.delete;
            }
        }), null);
        _el$18.$$click = ()=>setListOpts(true);
        (0, $f4ihl.insert)(_el$18, (0, $6TTLi.createComponent)((0, $4P0sz.MoreHorizontal), {
            "class": "icon-button"
        }));
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $6RpYU.DropMenu), {
            "class": "bg-[var(--bg-700)]",
            get show () {
                return listOpts();
            },
            close: ()=>setListOpts(false),
            customPosition: "right-[10px]",
            vert: "down",
            get children () {
                const _el$19 = $ce22f1e326d3f5c0$var$_tmpl$8.cloneNode(true);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: ()=>props.toggleFavorite(!props.char.favorite),
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return props.char.favorite;
                                },
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Star), {
                                            "class": "text-900 fill-[var(--text-900)]"
                                        }),
                                        " Unfavorite"
                                    ];
                                }
                            }),
                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return !props.char.favorite;
                                },
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Star), {}),
                                        " Favorite"
                                    ];
                                }
                            })
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: ()=>nav(`/chats/create/${props.char._id}`),
                    alignLeft: true,
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.MessageCircle), {}),
                            " Chat"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    get onClick () {
                        return props.download;
                    },
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Download), {}),
                            " Download"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    get onClick () {
                        return props.edit;
                    },
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Edit), {}),
                            " Edit"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    onClick: ()=>nav(`/character/create/${props.char._id}`),
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {}),
                            " Duplicate"
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$19, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    alignLeft: true,
                    schema: "red",
                    get onClick () {
                        return props.delete;
                    },
                    size: "sm",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}),
                            " Delete"
                        ];
                    }
                }), null);
                return _el$19;
            }
        }), null);
        return _el$14;
    })();
};
function $ce22f1e326d3f5c0$var$toFolderSlug(name) {
    if (!name.startsWith("/")) name = "/" + name;
    if (!name.endsWith("/")) name += "/";
    return name.split("/").map((0, $faKez.slugify)).join("/");
}
function $ce22f1e326d3f5c0$var$getChildFolders(tree, path, sort) {
    const parent = tree[path];
    const children = [];
    const prefix = path.endsWith("/") ? path : path + "/";
    const target = parent.depth + 1;
    for (const [key, { depth: depth, list: list }] of Object.entries(tree)){
        if (depth !== target) continue;
        if (tree[key] === parent) continue;
        if (key.startsWith(prefix)) children.push({
            path: key,
            list: list,
            depth: depth
        });
    }
    children.sort((l, r)=>l.path.localeCompare(r.path) * (sort === "asc" ? 1 : -1));
    return children;
}
(0, $f4ihl.delegateEvents)([
    "click"
]);

});



//# sourceMappingURL=CharacterList.33563193.js.map

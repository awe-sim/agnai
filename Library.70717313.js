
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("56KQt", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $7c9f6e3e30f55eb7$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");

var $6TTLi = parcelRequire("6TTLi");

var $aBY8W = parcelRequire("aBY8W");

var $kIEMX = parcelRequire("kIEMX");

var $aoUvN = parcelRequire("aoUvN");

var $iC2j6 = parcelRequire("iC2j6");

var $is6kd = parcelRequire("is6kd");

var $fNpXe = parcelRequire("fNpXe");
const $7c9f6e3e30f55eb7$export$2e2bcd8739ae039 = ()=>{
    const [params, setParams] = (0, $fNpXe.useSearchParams)();
    (0, $kIEMX.setComponentPageTitle)("Library");
    const allowed = (0, $6TTLi.createMemo)(()=>{
        const base = [
            "Memories",
            "Scenarios",
            "Prompt Templates",
            "Embeddings"
        ];
        return base;
    });
    const tabs = (0, $aBY8W.useTabs)(allowed(), +(params.tab || "0"));
    (0, $6TTLi.createEffect)(()=>{
        const index = tabs.selected();
        setParams({
            tab: index
        });
    });
    return [
        (0, $6TTLi.createComponent)((0, $aBY8W.default), {
            get tabs () {
                return tabs.tabs;
            },
            get select () {
                return tabs.select;
            },
            get selected () {
                return tabs.selected;
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return tabs.current() === "Memories";
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $is6kd.BooksTab), {});
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return tabs.current() === "Scenarios";
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $aoUvN.default), {});
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return tabs.current() === "Prompt Templates";
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $iC2j6.default), {});
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return tabs.current() === "Embeddings";
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $is6kd.EmbedsTab), {});
                        }
                    })
                ];
            }
        })
    ];
};

});
parcelRegister("iC2j6", function(module, exports) {

$parcel$export(module.exports, "default", () => $60a8a3b43163d27a$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $iNI0B = parcelRequire("iNI0B");

var $2qUsD = parcelRequire("2qUsD");

var $fzplS = parcelRequire("fzplS");

var $4P0sz = parcelRequire("4P0sz");

var $a2o17 = parcelRequire("a2o17");

var $3Xq0A = parcelRequire("3Xq0A");

var $bGUql = parcelRequire("bGUql");

var $6LNaF = parcelRequire("6LNaF");

var $i6jKH = parcelRequire("i6jKH");

var $jFE3H = parcelRequire("jFE3H");

var $kIEMX = parcelRequire("kIEMX");

var $6uY8b = parcelRequire("6uY8b");
const $60a8a3b43163d27a$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center">You have no prompt templates saved</div>`, 2), $60a8a3b43163d27a$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full flex-col gap-4"><div class="flex w-full justify-end"></div><div class="flex w-full flex-col gap-2"><div class="flex justify-center text-xl font-bold">Built-in Templates</div></div></div>`, 8), $60a8a3b43163d27a$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex gap-2"><div class="bg-800 hover:bg-700 w-full cursor-pointer rounded-md p-2"></div></div>`, 4), $60a8a3b43163d27a$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full gap-2 font-bold"><div class="bg-800 hover:bg-700 w-full cursor-pointer rounded-md p-2"></div></div>`, 4), $60a8a3b43163d27a$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-4 text-sm"></form>`, 2);
const $60a8a3b43163d27a$export$2e2bcd8739ae039 = ()=>{
    const state = (0, $fzplS.presetStore)((s)=>({
            templates: s.templates
        }));
    const [show, setShow] = (0, $6TTLi.createSignal)(false);
    const [edit, setEdit] = (0, $6TTLi.createSignal)();
    const [initial, setInitial] = (0, $6TTLi.createSignal)();
    const builtins = (0, $6TTLi.createMemo)(()=>Object.entries((0, $3Xq0A.templates)).map(([name, template])=>({
                name: name,
                template: template
            })));
    (0, $6TTLi.onMount)(()=>{
        (0, $fzplS.presetStore).getTemplates();
    });
    const close = ()=>{
        setEdit();
        setShow(false);
        setInitial("");
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Prompt Templates"
        }),
        (()=>{
            const _el$ = $60a8a3b43163d27a$var$_tmpl$2.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$5 = _el$3.firstChild;
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>setShow(true),
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {
                            size: 16
                        }),
                        " Template"
                    ];
                }
            }));
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.templates.length === 0;
                },
                get children () {
                    return $60a8a3b43163d27a$var$_tmpl$.cloneNode(true);
                }
            }), _el$5);
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.templates;
                },
                children: (each)=>(()=>{
                        const _el$6 = $60a8a3b43163d27a$var$_tmpl$3.cloneNode(true), _el$7 = _el$6.firstChild;
                        _el$7.$$click = ()=>{
                            setEdit(each);
                            setShow(true);
                        };
                        (0, $f4ihl.insert)(_el$7, ()=>each.name);
                        (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "secondary",
                            onClick: ()=>{
                                setInitial(each.template);
                                setShow(true);
                            },
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {});
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "red",
                            onClick: ()=>{
                                (0, $fzplS.presetStore).deleteTemplate(each._id);
                            },
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {});
                            }
                        }), null);
                        return _el$6;
                    })()
            }), _el$5);
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $a2o17.default), {}), _el$5);
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return builtins();
                },
                children: (each)=>(()=>{
                        const _el$8 = $60a8a3b43163d27a$var$_tmpl$4.cloneNode(true), _el$9 = _el$8.firstChild;
                        _el$9.$$click = ()=>{
                            setInitial(each.template);
                            setShow(true);
                        };
                        (0, $f4ihl.insert)(_el$9, ()=>each.name);
                        return _el$8;
                    })()
            }), null);
            return _el$;
        })(),
        (0, $6TTLi.createComponent)($60a8a3b43163d27a$var$TemplateModal, {
            get show () {
                return show();
            },
            close: close,
            get initial () {
                return initial();
            },
            get edit () {
                return edit();
            }
        })
    ];
};
const $60a8a3b43163d27a$var$TemplateModal = (props)=>{
    let form;
    const submit = ()=>{
        const { name: name, template: template } = (0, $kIEMX.getStrictForm)(form, {
            name: "string",
            template: "string"
        });
        form.reportValidity();
        if (!form.checkValidity()) return;
        if (props.edit) {
            (0, $fzplS.presetStore).updateTemplate(props.edit._id, {
                name: name,
                template: template
            }, ()=>{
                (0, $6uY8b.toastStore).success("Template updated");
                props.close();
            });
            return;
        }
        (0, $fzplS.presetStore).createTemplate(name, template, ()=>{
            (0, $6uY8b.toastStore).success("Template created");
            props.close();
        });
    };
    const Footer = [
        (0, $6TTLi.createComponent)((0, $2qUsD.default), {
            schema: "secondary",
            get onClick () {
                return props.close;
            },
            children: "Cancel"
        }),
        (0, $6TTLi.createComponent)((0, $2qUsD.default), {
            schema: "primary",
            onClick: submit,
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                    " Save"
                ];
            }
        })
    ];
    (0, $bGUql.useRootModal)({
        id: "prompt-templates",
        element: (0, $6TTLi.createComponent)((0, $6LNaF.default), {
            title: "Prompt Templates",
            maxWidth: "half",
            get show () {
                return props.show;
            },
            get close () {
                return props.close;
            },
            footer: Footer,
            get children () {
                const _el$10 = $60a8a3b43163d27a$var$_tmpl$5.cloneNode(true);
                const _ref$ = form;
                typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$10) : form = _el$10;
                (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    fieldName: "name",
                    placeholder: "Name",
                    label: "Name",
                    get value () {
                        return props.edit?.name || "";
                    },
                    required: true
                }), null);
                (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $i6jKH.default), {
                    fieldName: "template",
                    get value () {
                        return props.edit?.template || props.initial || "";
                    },
                    minHeight: 100,
                    showHelp: true
                }), null);
                return _el$10;
            }
        })
    });
    return null;
};
(0, $f4ihl.delegateEvents)([
    "click"
]);

});

parcelRegister("is6kd", function(module, exports) {

$parcel$export(module.exports, "EmbedsTab", () => $295e2b2b2c417cb4$export$e38fafc6046b3053);
$parcel$export(module.exports, "BooksTab", () => $295e2b2b2c417cb4$export$a0b398d858865b05);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $fNpXe = parcelRequire("fNpXe");

var $5XPGF = parcelRequire("5XPGF");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $beorv = parcelRequire("beorv");

var $6LNaF = parcelRequire("6LNaF");

var $iNI0B = parcelRequire("iNI0B");

var $6uY8b = parcelRequire("6uY8b");

var $a7G5r = parcelRequire("a7G5r");

var $9uOXv = parcelRequire("9uOXv");

var $4qo1b = parcelRequire("4qo1b");

var $6vHKE = parcelRequire("6vHKE");
const $295e2b2b2c417cb4$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2"></div>`, 2), $295e2b2b2c417cb4$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex cursor-pointer"></div>`, 2), $295e2b2b2c417cb4$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="ellipsis font-bold"></div>`, 2), $295e2b2b2c417cb4$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-2 flex w-full items-center gap-4"><div class="icon-button"></div><div class="icon-button"></div></div>`, 6), $295e2b2b2c417cb4$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-end gap-4"></div>`, 2), $295e2b2b2c417cb4$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col items-center"></div>`, 2), $295e2b2b2c417cb4$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<a href="https://github.com/agnaistic/agnai/blob/dev/instructions/memory.md" target="_blank" class="link">Memory Book Guide</a>`, 2), $295e2b2b2c417cb4$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="ellipsis font-bold"></span>`, 2), $295e2b2b2c417cb4$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="ml-2"></span>`, 2), $295e2b2b2c417cb4$var$_tmpl$10 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-2 flex w-full items-center gap-4"><a class="icon-button"></a><div class="icon-button"></div></div>`, 6), $295e2b2b2c417cb4$var$_tmpl$11 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center">You have no memory books yet. Click Create to get started.</div>`, 2);
const $295e2b2b2c417cb4$export$e38fafc6046b3053 = (props)=>{
    const state = (0, $6uY8b.memoryStore)();
    const [editing, setEditing] = (0, $6TTLi.createSignal)();
    const [deleting, setDeleting] = (0, $6TTLi.createSignal)();
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Memory - Embeddings"
        }),
        (0, $6TTLi.createComponent)((0, $9uOXv.default), {}),
        (()=>{
            const _el$ = $295e2b2b2c417cb4$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.embeds;
                },
                children: (each)=>(()=>{
                        const _el$2 = $295e2b2b2c417cb4$var$_tmpl$4.cloneNode(true), _el$5 = _el$2.firstChild, _el$6 = _el$5.nextSibling;
                        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $a7G5r.SolidCard), {
                            size: "md",
                            "class": "flex w-full items-center gap-1",
                            bg: "bg-800",
                            get children () {
                                return [
                                    (()=>{
                                        const _el$3 = $295e2b2b2c417cb4$var$_tmpl$2.cloneNode(true);
                                        (0, $f4ihl.insert)(_el$3, (()=>{
                                            const _c$ = (0, $f4ihl.memo)(()=>each.state === "loaded");
                                            return ()=>_c$() ? (0, $6TTLi.createComponent)((0, $4P0sz.FileCheck), {}) : (0, $6TTLi.createComponent)((0, $4P0sz.FileX), {
                                                    "class": "text-gray-500"
                                                });
                                        })());
                                        (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$3, "title", each.state === "loaded" ? "Loaded" : "Not loaded"));
                                        return _el$3;
                                    })(),
                                    (()=>{
                                        const _el$4 = $295e2b2b2c417cb4$var$_tmpl$3.cloneNode(true);
                                        (0, $f4ihl.insert)(_el$4, ()=>each.id);
                                        return _el$4;
                                    })()
                                ];
                            }
                        }), _el$5);
                        _el$5.$$click = ()=>setEditing(each.id);
                        (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $4P0sz.Edit), {}));
                        _el$6.$$click = ()=>setDeleting(each.id);
                        (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}));
                        return _el$2;
                    })()
            }));
            return _el$;
        })(),
        (0, $6TTLi.createComponent)((0, $6vHKE.EditEmbedModal), {
            get show () {
                return !!editing();
            },
            get embedId () {
                return editing();
            },
            close: ()=>setEditing()
        }),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            confirm: ()=>(0, $4qo1b.embedApi).removeDocument(deleting()),
            get show () {
                return !!deleting();
            },
            close: ()=>setDeleting(),
            get message () {
                return `Are you sure you wish to delete this embedding?\n\n${deleting()}`;
            }
        })
    ];
};
const $295e2b2b2c417cb4$export$a0b398d858865b05 = (props)=>{
    const state = (0, $6uY8b.memoryStore)();
    const [showImport, setImport] = (0, $6TTLi.createSignal)(false);
    const [deleting, setDeleting] = (0, $6TTLi.createSignal)();
    const removeBook = (book)=>{
        (0, $6uY8b.memoryStore).remove(book._id);
    };
    (0, $6TTLi.createEffect)(()=>{
        (0, $6uY8b.memoryStore).getAll();
    });
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Memory - Books",
            get subtitle () {
                return [
                    " ",
                    $295e2b2b2c417cb4$var$_tmpl$7.cloneNode(true)
                ];
            }
        }),
        (()=>{
            const _el$7 = $295e2b2b2c417cb4$var$_tmpl$5.cloneNode(true);
            (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>setImport(true),
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Upload), {}),
                        " Import Book"
                    ];
                }
            }), null);
            (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                href: "/memory/new",
                get children () {
                    return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                "Create Book"
                            ];
                        }
                    });
                }
            }), null);
            return _el$7;
        })(),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return !state.books.list.length;
            },
            get children () {
                return (0, $6TTLi.createComponent)($295e2b2b2c417cb4$var$NoBooks, {});
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return state.books.list.length;
            },
            get children () {
                return (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                    get each () {
                        return state.books.list;
                    },
                    children: (book)=>(()=>{
                            const _el$10 = $295e2b2b2c417cb4$var$_tmpl$10.cloneNode(true), _el$13 = _el$10.firstChild, _el$14 = _el$13.nextSibling;
                            (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                get href () {
                                    return `/memory/${book._id}`;
                                },
                                "class": "ellipsis flex h-12 w-full cursor-pointer items-center gap-2 rounded-xl bg-[var(--bg-800)] px-4 hover:bg-[var(--bg-700)]",
                                get children () {
                                    return [
                                        (()=>{
                                            const _el$11 = $295e2b2b2c417cb4$var$_tmpl$8.cloneNode(true);
                                            (0, $f4ihl.insert)(_el$11, ()=>book.name);
                                            return _el$11;
                                        })(),
                                        (()=>{
                                            const _el$12 = $295e2b2b2c417cb4$var$_tmpl$9.cloneNode(true);
                                            (0, $f4ihl.insert)(_el$12, ()=>book.description);
                                            return _el$12;
                                        })()
                                    ];
                                }
                            }), _el$13);
                            (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $4P0sz.Download), {}));
                            _el$14.$$click = ()=>setDeleting(book);
                            (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}));
                            (0, $f4ihl.effect)((_p$)=>{
                                const _v$ = `data:text/json:charset=utf-8,${$295e2b2b2c417cb4$var$encodeBook(book)}`, _v$2 = `book-${book._id.slice(0, 4)}-${book.name}.json`;
                                _v$ !== _p$._v$ && (0, $f4ihl.setAttribute)(_el$13, "href", _p$._v$ = _v$);
                                _v$2 !== _p$._v$2 && (0, $f4ihl.setAttribute)(_el$13, "download", _p$._v$2 = _v$2);
                                return _p$;
                            }, {
                                _v$: undefined,
                                _v$2: undefined
                            });
                            return _el$10;
                        })()
                });
            }
        }),
        $295e2b2b2c417cb4$var$_tmpl$6.cloneNode(true),
        (0, $6TTLi.createComponent)($295e2b2b2c417cb4$var$ImportMemoryModal, {
            get show () {
                return showImport();
            },
            close: ()=>setImport(false)
        }),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            confirm: ()=>removeBook(deleting()),
            get message () {
                return `Are you sure you wish to delete this memory book?\n\n${deleting()?.name}`;
            },
            close: ()=>setDeleting(),
            get show () {
                return !!deleting();
            }
        })
    ];
};
const $295e2b2b2c417cb4$var$NoBooks = ()=>$295e2b2b2c417cb4$var$_tmpl$11.cloneNode(true);
const $295e2b2b2c417cb4$var$ImportMemoryModal = (props)=>{
    const [json, setJson] = (0, $6TTLi.createSignal)();
    const updateJson = async (files)=>{
        if (!files.length) return setJson();
        try {
            const content = await (0, $beorv.getFileAsString)(files[0]);
            const json = JSON.parse(content);
            $295e2b2b2c417cb4$var$validateBookJson(json);
            setJson(json);
            (0, $6uY8b.toastStore).success("Character file accepted");
        } catch (ex) {
            (0, $6uY8b.toastStore).warn(`Invalid memory book JSON. ${ex.message}`);
        }
    };
    const onImport = ()=>{
        if (!json()) return;
        (0, $6uY8b.memoryStore).create(json(), props.close);
    };
    const Footer = [
        (0, $6TTLi.createComponent)((0, $2qUsD.default), {
            get onClick () {
                return props.close;
            },
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $4P0sz.X), {}),
                    " Cancel"
                ];
            }
        }),
        (0, $6TTLi.createComponent)((0, $2qUsD.default), {
            onClick: onImport,
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $4P0sz.Upload), {}),
                    " Import"
                ];
            }
        })
    ];
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        title: "Import Memory Book",
        footer: Footer,
        get children () {
            return (0, $6TTLi.createComponent)((0, $beorv.default), {
                fieldName: "json",
                label: "JSON File",
                accept: "text/json,application/json",
                helperText: "Only Agnaistic exported memory books are currently supported.",
                required: true,
                onUpdate: updateJson
            });
        }
    });
};
function $295e2b2b2c417cb4$var$encodeBook(book) {
    const { _id: _id, userId: userId, ...body } = book;
    return encodeURIComponent(JSON.stringify(body, null, 2));
}
function $295e2b2b2c417cb4$var$validateBookJson(json) {
    const book = json;
    const entries = [];
    /**
   * - Attempt to convert any "should-be" numbers to numbers
   * - Remove entries with no prompt text
   * - Remove entries with no keywords
   * - Coalesce enable to true
   * - Coalese name to empty string
   */ if (Array.isArray(book?.entries)) for (const entry of book.entries){
        entry.priority = $295e2b2b2c417cb4$var$toNumber(entry.priority);
        entry.weight = $295e2b2b2c417cb4$var$toNumber(entry.weight);
        if (entry.enabled === undefined) entry.enabled = true;
        if (!entry.name) entry.name = "";
        if (!entry.entry) continue;
        if (!Array.isArray(entry.keywords)) continue;
        entries.push(entry);
    }
    json.entries = entries;
    (0, $5XPGF.assertValid)({
        kind: [
            "memory"
        ],
        name: "string",
        description: "string?",
        entries: [
            {
                name: "string",
                entry: "string",
                keywords: [
                    "string"
                ],
                priority: "number",
                weight: "number",
                enabled: "boolean"
            }
        ]
    }, json);
}
function $295e2b2b2c417cb4$var$toNumber(value) {
    const num = +value;
    if (isNaN(num)) return 0;
    return num;
}
(0, $f4ihl.delegateEvents)([
    "click"
]);

});



//# sourceMappingURL=Library.70717313.js.map

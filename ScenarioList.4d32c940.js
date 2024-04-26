
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("aoUvN", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f9c82f239099c646$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $6uY8b = parcelRequire("6uY8b");

var $fNpXe = parcelRequire("fNpXe");

var $iNI0B = parcelRequire("iNI0B");

var $kXQP8 = parcelRequire("kXQP8");

var $2qUsD = parcelRequire("2qUsD");

var $4P0sz = parcelRequire("4P0sz");

var $3cnie = parcelRequire("3cnie");
const $f9c82f239099c646$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center"></div>`, 2), $f9c82f239099c646$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-16 flex w-full justify-center rounded-full text-xl">You have no scenarios yet.</div>`, 2), $f9c82f239099c646$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2"></div>`, 2), $f9c82f239099c646$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Import Scenario</span>`, 2), $f9c82f239099c646$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Create Scenario</span>`, 2), $f9c82f239099c646$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-between"><div>Scenarios</div><div class="flex text-base"><div class="px-1"></div><div class="px-1"></div></div></div>`, 10), $f9c82f239099c646$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-4"></div>`, 2), $f9c82f239099c646$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col justify-center gap-0 p-2"><div class="overflow-hidden text-ellipsis whitespace-nowrap font-bold leading-5"></div></div>`, 4), $f9c82f239099c646$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-between gap-2 rounded-lg bg-[var(--bg-800)] p-1 hover:bg-[var(--bg-700)]"></div>`, 2);
const $f9c82f239099c646$var$ScenarioList = ()=>{
    const scenarioState = (0, $6uY8b.scenarioStore)();
    const nav = (0, $fNpXe.useNavigate)();
    const [showImport, setShowImport] = (0, $6TTLi.createSignal)(false);
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.scenarioStore).getAll();
    });
    const create = ()=>{
        (0, $6uY8b.scenarioStore).create({
            name: "",
            description: "",
            overwriteCharacterScenario: false,
            text: "",
            instructions: "",
            states: [],
            entries: []
        }, (r)=>nav(`/scenario/${r._id}`));
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            get title () {
                return (()=>{
                    const _el$4 = $f9c82f239099c646$var$_tmpl$6.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.firstChild, _el$9 = _el$7.nextSibling;
                    (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "secondary",
                        onClick: ()=>setShowImport(true),
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Upload), {}),
                                $f9c82f239099c646$var$_tmpl$4.cloneNode(true)
                            ];
                        }
                    }));
                    (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "primary",
                        onClick: ()=>create(),
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                $f9c82f239099c646$var$_tmpl$5.cloneNode(true)
                            ];
                        }
                    }));
                    return _el$4;
                })();
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return scenarioState.loading;
                        },
                        get children () {
                            const _el$ = $f9c82f239099c646$var$_tmpl$.cloneNode(true);
                            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $kXQP8.default), {}));
                            return _el$;
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return scenarioState.scenarios.length === 0;
                        },
                        get children () {
                            return $f9c82f239099c646$var$_tmpl$2.cloneNode(true);
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return scenarioState.scenarios.length > 0;
                        },
                        get children () {
                            const _el$3 = $f9c82f239099c646$var$_tmpl$3.cloneNode(true);
                            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                                get each () {
                                    return scenarioState.scenarios;
                                },
                                children: (scenario)=>(()=>{
                                        const _el$11 = $f9c82f239099c646$var$_tmpl$9.cloneNode(true);
                                        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                            "class": "flex w-full cursor-pointer gap-2",
                                            get href () {
                                                return `/scenario/${scenario._id}`;
                                            },
                                            get children () {
                                                const _el$12 = $f9c82f239099c646$var$_tmpl$8.cloneNode(true), _el$13 = _el$12.firstChild;
                                                (0, $f4ihl.insert)(_el$13, ()=>scenario.name || "Unnamed Scenario");
                                                (0, $f4ihl.insert)(_el$12, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                                    get when () {
                                                        return scenario.description;
                                                    },
                                                    get children () {
                                                        const _el$14 = $f9c82f239099c646$var$_tmpl$7.cloneNode(true);
                                                        (0, $f4ihl.insert)(_el$14, ()=>scenario.description);
                                                        return _el$14;
                                                    }
                                                }), null);
                                                return _el$12;
                                            }
                                        }));
                                        return _el$11;
                                    })()
                            }));
                            return _el$3;
                        }
                    })
                ];
            }
        }),
        (0, $6TTLi.createComponent)((0, $3cnie.default), {
            get show () {
                return showImport();
            },
            close: ()=>setShowImport(false)
        })
    ];
};
var $f9c82f239099c646$export$2e2bcd8739ae039 = $f9c82f239099c646$var$ScenarioList;

});
parcelRegister("3cnie", function(module, exports) {

$parcel$export(module.exports, "default", () => $015910192867ca65$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $4P0sz = parcelRequire("4P0sz");

var $2qUsD = parcelRequire("2qUsD");

var $beorv = parcelRequire("beorv");

var $6LNaF = parcelRequire("6LNaF");

var $6uY8b = parcelRequire("6uY8b");
const $015910192867ca65$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<ul class="list-inside list-disc"></ul>`, 2), $015910192867ca65$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2"></div>`, 2), $015910192867ca65$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<li class="flex flex-row items-center gap-2"><div></div><span></span></li>`, 6);
const $015910192867ca65$var$supportedScenarioSchemas = [
    "https://agnai.chat/schemas/scenario-schema-v1.json"
];
const $015910192867ca65$var$ImportScenarioModal = (props)=>{
    const [status, setStatus] = (0, $6TTLi.createSignal)("pending");
    const [importing, setImporting] = (0, $6TTLi.createSignal)(false);
    const [json, setJson] = (0, $6TTLi.createSignal)([]);
    const canImport = (0, $6TTLi.createMemo)(()=>json().some((s)=>s.status === "pending"));
    const onFileSelect = async (files)=>{
        if (importing()) return;
        setJson([]);
        if (!files.length) return;
        for (let file of files)try {
            const content = await (0, $beorv.getFileAsString)(file);
            const parsed = JSON.parse(content);
            if (!parsed) {
                (0, $6uY8b.toastStore).error(`File was not a valid JSON: ${file.file.name}`);
                continue;
            }
            if (!$015910192867ca65$var$supportedScenarioSchemas.includes(parsed.$schema)) {
                (0, $6uY8b.toastStore).error(`File was not a supported scenario (incorrect schema): ${file.file.name}`);
                continue;
            }
            delete parsed.$schema;
            setJson([
                ...json(),
                {
                    scenario: parsed,
                    status: "pending"
                }
            ]);
        } catch (ex) {
            const message = ex instanceof Error ? ex.message : "Unknown error";
            (0, $6uY8b.toastStore).warn(`Invalid scenario: ${message}`);
        }
    };
    const onImport = ()=>{
        if (importing()) return;
        setImporting(true);
        importNext();
    };
    const importNext = ()=>{
        const next = json().find((s)=>s.status === "pending");
        if (!next) {
            setImporting(false);
            setStatus(json().every((s)=>s.status === "success") ? "success" : "failed");
            return;
        }
        (0, $6uY8b.scenarioStore).create(next.scenario, ()=>{
            setJson([
                ...json().map((s)=>s === next ? {
                        ...next,
                        status: "success"
                    } : s)
            ]);
            importNext();
        }, ()=>{
            setJson([
                ...json().map((s)=>s === next ? {
                        ...next,
                        status: "failed"
                    } : s)
            ]);
            importNext();
        });
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        title: "Import Scenario",
        get close () {
            return props.close;
        },
        get footer () {
            return [
                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return status() === "success";
                    },
                    get children () {
                        return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "primary",
                            get onClick () {
                                return props.close;
                            },
                            get children () {
                                return [
                                    (0, $6TTLi.createComponent)((0, $4P0sz.Check), {}),
                                    "Done"
                                ];
                            }
                        });
                    }
                }),
                (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return status() !== "success";
                    },
                    get children () {
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
                                onClick: onImport,
                                get disabled () {
                                    return !canImport();
                                },
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Upload), {}),
                                        "Import"
                                    ];
                                }
                            })
                        ];
                    }
                })
            ];
        },
        get children () {
            const _el$ = $015910192867ca65$var$_tmpl$2.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return (0, $f4ihl.memo)(()=>!!!importing())() && status() !== "success";
                },
                get children () {
                    return (0, $6TTLi.createComponent)((0, $beorv.default), {
                        label: "Scenario JSON File",
                        fieldName: "json",
                        accept: "application/json,text/json",
                        helperText: "Supported formats: Agnaistic",
                        required: true,
                        onUpdate: onFileSelect
                    });
                }
            }), null);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return json().length;
                },
                get children () {
                    const _el$2 = $015910192867ca65$var$_tmpl$.cloneNode(true);
                    (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return json();
                        },
                        children: (s)=>(()=>{
                                const _el$3 = $015910192867ca65$var$_tmpl$3.cloneNode(true), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
                                (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $4P0sz.Check), {
                                    size: 16
                                }));
                                (0, $f4ihl.insert)(_el$5, ()=>s.scenario.name);
                                (0, $f4ihl.effect)((_p$)=>{
                                    const _v$ = !!(s.status === "success"), _v$2 = !!(s.status === "pending"), _v$3 = !!(s.status === "failed");
                                    _v$ !== _p$._v$ && _el$4.classList.toggle("text-green-500", _p$._v$ = _v$);
                                    _v$2 !== _p$._v$2 && _el$4.classList.toggle("text-gray-500", _p$._v$2 = _v$2);
                                    _v$3 !== _p$._v$3 && _el$4.classList.toggle("text-red-500", _p$._v$3 = _v$3);
                                    return _p$;
                                }, {
                                    _v$: undefined,
                                    _v$2: undefined,
                                    _v$3: undefined
                                });
                                return _el$3;
                            })()
                    }));
                    return _el$2;
                }
            }), null);
            return _el$;
        }
    });
};
var $015910192867ca65$export$2e2bcd8739ae039 = $015910192867ca65$var$ImportScenarioModal;

});



//# sourceMappingURL=ScenarioList.4d32c940.js.map

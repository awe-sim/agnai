
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("fuw6U", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "GenerationPresetsPage", () => $7a039f38990206fb$export$bd7afd383c03b1f4);
$parcel$export(module.exports, "default", () => $7a039f38990206fb$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $fNpXe = parcelRequire("fNpXe");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $3jTlY = parcelRequire("3jTlY");

var $2qUsD = parcelRequire("2qUsD");

var $3Evae = parcelRequire("3Evae");

var $hOqLr = parcelRequire("hOqLr");

var $6LNaF = parcelRequire("6LNaF");

var $iNI0B = parcelRequire("iNI0B");

var $jFE3H = parcelRequire("jFE3H");

var $kIEMX = parcelRequire("kIEMX");

var $6uY8b = parcelRequire("6uY8b");

var $kXQP8 = parcelRequire("kXQP8");

var $a7G5r = parcelRequire("a7G5r");
const $7a039f38990206fb$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-row justify-end"></div>`, 2), $7a039f38990206fb$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-4"><div class="flex gap-4"></div><div class="flex flex-col"><div>ID: </div></div></form>`, 8), $7a039f38990206fb$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 pb-10"><div class="flex flex-col gap-4 p-2"></div></div>`, 4), $7a039f38990206fb$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<form></form>`, 2);
const $7a039f38990206fb$export$bd7afd383c03b1f4 = ()=>{
    const { updateTitle: updateTitle } = (0, $kIEMX.setComponentPageTitle)("Preset");
    let ref;
    const params = (0, $fNpXe.useParams)();
    const [query] = (0, $fNpXe.useSearchParams)();
    const nav = (0, $fNpXe.useNavigate)();
    const [edit, setEdit] = (0, $6TTLi.createSignal)(false);
    const [editing, setEditing] = (0, $6TTLi.createSignal)();
    const [deleting, setDeleting] = (0, $6TTLi.createSignal)(false);
    const onEdit = (preset)=>{
        nav(`/presets/${preset._id}`);
    };
    const state = (0, $6uY8b.presetStore)(({ presets: presets, saving: saving, importing: importing })=>({
            saving: saving,
            presets: presets,
            items: presets.map((p)=>({
                    label: p.name,
                    value: p._id
                })),
            importing: importing,
            editing: (0, $3jTlY.isDefaultPreset)(query.preset) ? (0, $3jTlY.defaultPresets)[query.preset] : presets.find((pre)=>pre._id === query.preset || params.id)
        }));
    (0, $6TTLi.onMount)(async ()=>{
        if (params.id === "new") {
            const copySource = query.preset;
            if (copySource) updateTitle(`Copy preset ${copySource}`);
            else if (state.importing) updateTitle(`Import preset`);
            else updateTitle(`Create preset`);
            setEditing();
            await Promise.resolve();
            if (state.importing) {
                setEditing({
                    ...state.importing,
                    kind: "gen-setting",
                    userId: "",
                    _id: "",
                    name: ""
                });
                (0, $6uY8b.presetStore).setImportPreset();
                return;
            }
            const template = (0, $3jTlY.isDefaultPreset)(query.preset) ? (0, $3jTlY.defaultPresets)[query.preset] : state.presets.find((p)=>p._id === query.preset);
            const preset = template ? {
                ...template
            } : {
                ...$7a039f38990206fb$var$emptyPreset
            };
            setEditing({
                ...$7a039f38990206fb$var$emptyPreset,
                ...preset,
                _id: "",
                kind: "gen-setting",
                userId: ""
            });
            return;
        } else if (params.id === "default") {
            setEditing();
            await Promise.resolve();
            if (!(0, $3jTlY.isDefaultPreset)(query.preset)) return;
            setEditing({
                ...$7a039f38990206fb$var$emptyPreset,
                ...(0, $3jTlY.defaultPresets)[query.preset],
                _id: "",
                kind: "gen-setting",
                userId: "SYSTEM"
            });
            return;
        }
        const preset = editing();
        if (params.id && !preset) {
            const preset = state.presets.find((p)=>p._id === params.id);
            setEditing(preset);
            return;
        }
        if (params.id && preset && preset._id !== params.id) {
            setEditing();
            await Promise.resolve();
            const preset = state.presets.find((p)=>p._id === params.id);
            setEditing(preset);
        }
        if (params.id && preset) updateTitle(`Edit preset ${preset.name}`);
    });
    const startNew = ()=>{
        nav("/presets/new");
    };
    const deletePreset = ()=>{
        const preset = editing();
        if (!preset) return;
        (0, $6uY8b.presetStore).deletePreset(preset._id, ()=>nav("/presets"));
        setEditing();
    };
    const onSave = (_ev, force)=>{
        if (state.saving) return;
        const body = (0, $hOqLr.getPresetFormData)(ref);
        if (!body.service) {
            (0, $6uY8b.toastStore).error(`You must select an AI service before saving`);
            return;
        }
        const prev = editing();
        if (prev?._id) (0, $6uY8b.presetStore).updatePreset(prev._id, body);
        else (0, $6uY8b.presetStore).createPreset(body, (newPreset)=>{
            nav(`/presets/${newPreset._id}`);
            setEditing(newPreset);
        });
    };
    if (params.id && params.id !== "new" && !state.editing) return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Generation Presets"
        }),
        (0, $6TTLi.createComponent)((0, $kXQP8.default), {})
    ];
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Generation Presets"
        }),
        (()=>{
            const _el$ = $7a039f38990206fb$var$_tmpl$3.cloneNode(true), _el$2 = _el$.firstChild;
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return params.id === "default";
                },
                get children () {
                    return (0, $6TTLi.createComponent)((0, $a7G5r.TitleCard), {
                        type: "orange",
                        "class": "font-bold",
                        get children () {
                            return [
                                "This is a built-in preset and cannot be saved.",
                                " ",
                                (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                    "class": "link",
                                    get href () {
                                        return `/presets/new?preset=${query.preset}`;
                                    },
                                    children: "Click here"
                                }),
                                " ",
                                "if you'd like to create a copy of this preset."
                            ];
                        }
                    });
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return editing();
                },
                get children () {
                    const _el$3 = $7a039f38990206fb$var$_tmpl$2.cloneNode(true), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild;
                    _el$3.addEventListener("submit", onSave);
                    const _ref$ = ref;
                    typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$3) : ref = _el$3;
                    (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                        get when () {
                            return state.presets.length > 1;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                onClick: ()=>setEdit(true),
                                children: "Load Preset"
                            });
                        }
                    }), null);
                    (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        onClick: startNew,
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                "New Preset"
                            ];
                        }
                    }), null);
                    (0, $f4ihl.insert)(_el$6, ()=>editing()?._id || "New Preset", null);
                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                        fieldName: "id",
                        get value () {
                            return editing()?._id || "New Preset";
                        },
                        disabled: true,
                        "class": "hidden"
                    }), null);
                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                        fieldName: "name",
                        label: "Name",
                        helperText: "A name or short description of your preset",
                        placeholder: "Preset name",
                        get value () {
                            return editing()?.name;
                        },
                        required: true,
                        parentClass: "mb-2"
                    }), null);
                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $hOqLr.default), {
                        get inherit () {
                            return editing();
                        },
                        get disabled () {
                            return params.id === "default";
                        },
                        onSave: ()=>{}
                    }), null);
                    (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                        get when () {
                            return editing()?.userId !== "SYSTEM";
                        },
                        get children () {
                            const _el$8 = $7a039f38990206fb$var$_tmpl$.cloneNode(true);
                            (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                get disabled () {
                                    return state.saving;
                                },
                                onClick: onSave,
                                get children () {
                                    return [
                                        (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                                        " Save"
                                    ];
                                }
                            }));
                            return _el$8;
                        }
                    }), null);
                    return _el$3;
                }
            }));
            return _el$;
        })(),
        (0, $6TTLi.createComponent)($7a039f38990206fb$var$EditPreset, {
            get show () {
                return edit();
            },
            close: ()=>setEdit(false),
            select: onEdit
        }),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return deleting();
            },
            close: ()=>setDeleting(false),
            confirm: deletePreset,
            message: "Are you sure you wish to delete this preset?"
        })
    ];
};
var $7a039f38990206fb$export$2e2bcd8739ae039 = $7a039f38990206fb$export$bd7afd383c03b1f4;
const $7a039f38990206fb$var$emptyPreset = {
    ...(0, $3jTlY.defaultPresets).basic,
    service: "",
    name: "",
    maxTokens: 300
};
const $7a039f38990206fb$var$EditPreset = (props)=>{
    const params = (0, $fNpXe.useParams)();
    let ref;
    const state = (0, $6uY8b.presetStore)();
    const select = ()=>{
        const body = (0, $kIEMX.getStrictForm)(ref, {
            preset: "string"
        });
        const preset = state.presets.find((preset)=>preset._id === body.preset);
        props.select(preset);
        props.close();
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        title: "Load Preset",
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
                            " Cancel"
                        ];
                    }
                }),
                (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: select,
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Edit), {}),
                            " Load Preset"
                        ];
                    }
                })
            ];
        },
        get children () {
            const _el$9 = $7a039f38990206fb$var$_tmpl$4.cloneNode(true);
            const _ref$2 = ref;
            typeof _ref$2 === "function" ? (0, $f4ihl.use)(_ref$2, _el$9) : ref = _el$9;
            (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                fieldName: "preset",
                label: "Preset",
                helperText: "Select a preset to start editing. If you are currently editing a preset, it won't be in the list.",
                get items () {
                    return state.presets.filter((pre)=>pre._id !== params.id).map((pre)=>({
                            label: pre.name,
                            value: pre._id
                        }));
                }
            }));
            return _el$9;
        }
    });
};

});


//# sourceMappingURL=GenerationPresets.cd674ede.js.map

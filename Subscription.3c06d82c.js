
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("fGAXN", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "Subscription", () => $e8f38de6a2a022c0$export$f55210826850c514);
$parcel$export(module.exports, "default", () => $e8f38de6a2a022c0$export$2e2bcd8739ae039);

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

var $CqU9k = parcelRequire("CqU9k");

var $kXQP8 = parcelRequire("kXQP8");

var $8DEla = parcelRequire("8DEla");

var $a7G5r = parcelRequire("a7G5r");

var $bGUql = parcelRequire("bGUql");
const $e8f38de6a2a022c0$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-4"><div class="flex gap-4"></div><div class="flex flex-col"><div>ID: </div></div><div class="flex flex-row justify-end"></div></form>`, 10), $e8f38de6a2a022c0$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 pb-10"><div class="flex flex-col gap-4 p-2"></div></div>`, 4), $e8f38de6a2a022c0$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col items-center gap-2 text-sm"><div>Your gaslight is missing a <code>{{personality}}</code> placeholder. This is almost never what you want. It is recommended for your gaslight to contain the placeholders:<br> <code>{{personality}}, {{scenario}} and {{memory}}</code></div><p>Are you sure you wish to proceed?</p></div>`, 11), $e8f38de6a2a022c0$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<form></form>`, 2);
const $e8f38de6a2a022c0$var$tokenizers = [
    {
        label: "None",
        value: ""
    },
    {
        label: "Llama",
        value: "llama"
    },
    {
        label: "Turbo",
        value: "turbo"
    },
    {
        label: "DaVinci",
        value: "davinci"
    },
    {
        label: "Novel Kayra",
        value: "novel-modern"
    },
    {
        label: "Novel (Old)",
        value: "novel"
    },
    {
        label: "Mistral",
        value: "mistral"
    },
    {
        label: "Yi",
        value: "yi"
    },
    {
        label: "Cohere",
        value: "cohere"
    }
];
const $e8f38de6a2a022c0$export$f55210826850c514 = ()=>{
    const { updateTitle: updateTitle } = (0, $kIEMX.setComponentPageTitle)("Subscription");
    let ref;
    const params = (0, $fNpXe.useParams)();
    const [query] = (0, $fNpXe.useSearchParams)();
    const nav = (0, $fNpXe.useNavigate)();
    const [edit, setEdit] = (0, $6TTLi.createSignal)(false);
    const [editing, setEditing] = (0, $6TTLi.createSignal)();
    const [deleting, setDeleting] = (0, $6TTLi.createSignal)(false);
    const [missingPlaceholder, setMissingPlaceholder] = (0, $6TTLi.createSignal)();
    const [service, setService] = (0, $6TTLi.createSignal)();
    const [replacing, setReplacing] = (0, $6TTLi.createSignal)(false);
    const onEdit = (preset)=>{
        nav(`/admin/subscriptions/${preset._id}`);
    };
    const cfg = (0, $6uY8b.settingStore)((s)=>s.config);
    const state = (0, $6uY8b.presetStore)(({ subs: subs, saving: saving })=>({
            saving: saving,
            subs: subs,
            items: subs.map((p)=>({
                    label: p.name,
                    value: p._id
                })),
            editing: subs.find((pre)=>pre._id === query.preset || params.id)
        }));
    (0, $6TTLi.createEffect)(()=>{
        const inherit = editing();
        const svc = service();
        if (!inherit?.service || !!svc) return;
        setService(inherit.service);
    });
    (0, $6TTLi.createEffect)(async ()=>{
        if (params.id === "new") {
            const copySource = query.preset;
            if (copySource) updateTitle(`Copy subscription ${copySource}`);
            else updateTitle(`Create subscription`);
            setEditing();
            await Promise.resolve();
            const template = (0, $3jTlY.isDefaultPreset)(query.preset) ? (0, $3jTlY.defaultPresets)[query.preset] : state.subs.find((p)=>p._id === query.preset);
            const preset = template ? {
                ...template
            } : {
                ...$e8f38de6a2a022c0$var$emptyPreset
            };
            setEditing({
                ...$e8f38de6a2a022c0$var$emptyPreset,
                ...preset,
                _id: "",
                kind: "subscription-setting",
                subLevel: 0,
                subModel: "",
                subApiKey: "",
                subDisabled: false,
                allowGuestUsage: false
            });
            return;
        } else if (params.id === "default") {
            setEditing();
            await Promise.resolve();
            if (!(0, $3jTlY.isDefaultPreset)(query.preset)) return;
            setEditing({
                ...$e8f38de6a2a022c0$var$emptyPreset,
                ...(0, $3jTlY.defaultPresets)[query.preset],
                _id: "",
                subLevel: 0,
                subModel: "",
                subApiKey: "",
                subDisabled: false,
                kind: "subscription-setting"
            });
            return;
        }
        const subscription = editing();
        if (params.id && !subscription) {
            const match = state.subs.find((p)=>p._id === params.id);
            if (!match) (0, $6uY8b.presetStore).getSubscriptions();
            setEditing(match);
            return;
        }
        if (params.id && subscription && subscription._id !== params.id) {
            setEditing();
            await Promise.resolve();
            const preset = state.subs.find((p)=>p._id === params.id);
            setEditing(preset);
        }
        if (params.id && subscription) updateTitle(`Edit subscription ${subscription.name}`);
    });
    const startNew = ()=>{
        nav("/admin/subscriptions/new");
    };
    const deletePreset = ()=>{
        const preset = editing();
        if (!preset) return;
        (0, $6uY8b.presetStore).deleteSubscription(preset._id, ()=>nav("/admin/subscriptions"));
    };
    const onSave = (_ev, force)=>{
        if (state.saving) return;
        const validator = {
            service: [
                "",
                ...(0, $CqU9k.AI_ADAPTERS)
            ],
            subLevel: "number",
            subModel: "string",
            subServiceUrl: "string",
            subDisabled: "boolean",
            subApiKey: "string",
            isDefaultSub: "boolean",
            thirdPartyFormat: "string?",
            allowGuestUsage: "boolean",
            tokenizer: "string?",
            guidanceCapable: "boolean?"
        };
        const presetData = (0, $hOqLr.getPresetFormData)(ref);
        const subData = (0, $kIEMX.getStrictForm)(ref, validator);
        const body = {
            ...presetData,
            ...subData
        };
        body.thirdPartyFormat = body.thirdPartyFormat || null;
        if (!body.service) {
            (0, $6uY8b.toastStore).error(`You must select an AI service before saving`);
            return;
        }
        if (body.openRouterModel) {
            const actual = cfg.openRouter.models.find((or)=>or.id === body.openRouterModel);
            body.openRouterModel = actual || undefined;
        }
        if (!force && body.gaslight && !body.gaslight.includes("{{personality}}")) {
            setMissingPlaceholder(true);
            return;
        }
        const prev = editing();
        const registered = (0, $hOqLr.getRegisteredSettings)(body.service, ref);
        body.registered = {
            ...prev?.registered
        };
        body.registered[body.service] = registered;
        if (prev?._id) (0, $6uY8b.presetStore).updateSubscription(prev._id, body);
        else (0, $6uY8b.presetStore).createSubscription(body, (newPreset)=>{
            nav(`/admin/subscriptions/${newPreset._id}`);
        });
        setMissingPlaceholder(false);
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            get title () {
                return (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                    "class": "link",
                    href: "/admin/subscriptions",
                    children: "Subscription"
                });
            }
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
            get children () {
                return [
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        get when () {
                            return params.id && params.id !== "new" && !state.editing;
                        },
                        get children () {
                            return (0, $6TTLi.createComponent)((0, $kXQP8.default), {});
                        }
                    }),
                    (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                        when: true,
                        get children () {
                            const _el$ = $e8f38de6a2a022c0$var$_tmpl$2.cloneNode(true), _el$2 = _el$.firstChild;
                            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                get when () {
                                    return editing();
                                },
                                get children () {
                                    const _el$3 = $e8f38de6a2a022c0$var$_tmpl$.cloneNode(true), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$5.nextSibling;
                                    _el$3.addEventListener("submit", onSave);
                                    const _ref$ = ref;
                                    typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$3) : ref = _el$3;
                                    (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                        get when () {
                                            return state.subs.length > 1;
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
                                                "New Subscription"
                                            ];
                                        }
                                    }), null);
                                    (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                        onClick: ()=>setReplacing(true),
                                        schema: "red",
                                        children: "Replace/Supercede"
                                    }), null);
                                    (0, $f4ihl.insert)(_el$6, ()=>editing()?._id || "New Subscription", null);
                                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        fieldName: "id",
                                        get value () {
                                            return editing()?._id || "";
                                        },
                                        disabled: true,
                                        "class": "hidden"
                                    }), null);
                                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        fieldName: "name",
                                        label: "Name",
                                        helperText: "A name or short description of your preset",
                                        placeholder: "E.g. Premium+++++",
                                        get value () {
                                            return editing()?.name;
                                        },
                                        required: true,
                                        parentClass: "mb-2"
                                    }), null);
                                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        fieldName: "subApiKey",
                                        label: "API Key",
                                        helperText: "(Optional) API Key for your AI service if applicable.",
                                        get placeholder () {
                                            return editing()?.subApiKeySet ? "API Key is set" : "API Key is not set";
                                        },
                                        type: "password",
                                        get value () {
                                            return editing()?.subApiKey || "";
                                        },
                                        required: true,
                                        parentClass: "mb-2"
                                    }), null);
                                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                        type: "number",
                                        fieldName: "subLevel",
                                        label: "Subscription Level",
                                        helperText: 'Anything above -1 requires a "subscription". All users by default are -1.',
                                        placeholder: "0",
                                        get value () {
                                            return editing()?.subLevel ?? 0;
                                        },
                                        required: true
                                    }), null);
                                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                        get hide () {
                                            return service() !== "agnaistic";
                                        },
                                        "class": "mt-4",
                                        get children () {
                                            return [
                                                (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                                    fieldName: "subModel",
                                                    label: "Model",
                                                    helperText: "Agnaistic service only",
                                                    placeholder: "",
                                                    get value () {
                                                        return editing()?.subModel;
                                                    },
                                                    required: true,
                                                    parentClass: "mb-2"
                                                }),
                                                (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                                    fieldName: "subServiceUrl",
                                                    label: "Model Service URL",
                                                    helperText: "Agnaistic service only",
                                                    placeholder: "https://...",
                                                    get value () {
                                                        return editing()?.subServiceUrl;
                                                    },
                                                    required: true,
                                                    parentClass: "mb-2"
                                                }),
                                                (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                                                    fieldName: "guidanceCapable",
                                                    label: "Guidance Capable",
                                                    helperText: "Agnaistic service only",
                                                    get value () {
                                                        return editing()?.guidanceCapable;
                                                    }
                                                })
                                            ];
                                        }
                                    }), null);
                                    (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                        "class": "mt-4 flex flex-col gap-2",
                                        get children () {
                                            return [
                                                (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                                                    fieldName: "subDisabled",
                                                    label: "Subscription Disabled",
                                                    helperText: "Disable the use of this subscription",
                                                    get value () {
                                                        return editing()?.subDisabled ?? false;
                                                    }
                                                }),
                                                (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                                                    fieldName: "isDefaultSub",
                                                    label: "Is Default Subscription",
                                                    helperText: "Is chosen as fallback when no subscription is provided with a request",
                                                    get value () {
                                                        return editing()?.isDefaultSub ?? false;
                                                    }
                                                }),
                                                (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                                                    fieldName: "allowGuestUsage",
                                                    label: "Allow Guest Usage",
                                                    helperText: "Typically for default subscriptions. Require users to sign in to use this subscription.",
                                                    get value () {
                                                        return editing()?.allowGuestUsage === false ? false : true;
                                                    }
                                                })
                                            ];
                                        }
                                    }), null);
                                    (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                                        fieldName: "tokenizer",
                                        items: $e8f38de6a2a022c0$var$tokenizers,
                                        get value () {
                                            return editing()?.tokenizer;
                                        },
                                        label: "Tokenizer Override",
                                        helperText: "Optional. For use with custom models."
                                    }), _el$8);
                                    (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $hOqLr.default), {
                                        get inherit () {
                                            return editing();
                                        },
                                        get disabled () {
                                            return params.id === "default";
                                        },
                                        onService: setService,
                                        onSave: ()=>{}
                                    }), _el$8);
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
                                    return _el$3;
                                }
                            }));
                            return _el$;
                        }
                    })
                ];
            }
        }),
        (0, $6TTLi.createComponent)($e8f38de6a2a022c0$var$EditPreset, {
            get show () {
                return edit();
            },
            close: ()=>setEdit(false),
            select: onEdit
        }),
        (0, $6TTLi.createComponent)($e8f38de6a2a022c0$var$SupercedeModal, {
            get show () {
                return replacing();
            },
            close: ()=>setReplacing(false)
        }),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return deleting();
            },
            close: ()=>setDeleting(false),
            confirm: deletePreset,
            message: "Are you sure you wish to delete this preset?"
        }),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return !!missingPlaceholder();
            },
            close: ()=>setMissingPlaceholder(false),
            confirm: ()=>onSave(ref, true),
            get message () {
                return $e8f38de6a2a022c0$var$_tmpl$3.cloneNode(true);
            }
        })
    ];
};
var $e8f38de6a2a022c0$export$2e2bcd8739ae039 = $e8f38de6a2a022c0$export$f55210826850c514;
const $e8f38de6a2a022c0$var$SupercedeModal = (props)=>{
    let form;
    const params = (0, $fNpXe.useParams)();
    const nav = (0, $fNpXe.useNavigate)();
    const state = (0, $6uY8b.presetStore)((s)=>({
            subs: s.subs
        }));
    const replacements = (0, $6TTLi.createMemo)(()=>state.subs.filter((sub)=>sub._id !== params.id).map((sub)=>({
                label: `[${sub.subLevel}] ${sub.name}`,
                value: sub._id
            })));
    const onSubmit = ()=>{
        const subscriptionId = params.id;
        const { replacementId: replacementId } = (0, $kIEMX.getStrictForm)(form, {
            replacementId: "string"
        });
        (0, $6uY8b.presetStore).replaceSubscription(subscriptionId, replacementId, ()=>{
            props.close();
            nav(`/admin/subscriptions`);
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
            schema: "green",
            onClick: onSubmit,
            children: "Replace"
        })
    ];
    (0, $bGUql.useRootModal)({
        id: "replace-subscription",
        element: (0, $6TTLi.createComponent)((0, $6LNaF.default), {
            get show () {
                return props.show;
            },
            get close () {
                return props.close;
            },
            title: "Replace Subscription",
            footer: Footer,
            get children () {
                const _el$10 = $e8f38de6a2a022c0$var$_tmpl$4.cloneNode(true);
                const _ref$2 = form;
                typeof _ref$2 === "function" ? (0, $f4ihl.use)(_ref$2, _el$10) : form = _el$10;
                (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                    get items () {
                        return replacements();
                    },
                    fieldName: "replacementId",
                    label: "Replacement Subscription",
                    helperText: "The subscription that will supercede the current subscription"
                }));
                return _el$10;
            }
        })
    });
    return null;
};
const $e8f38de6a2a022c0$var$emptyPreset = {
    ...(0, $3jTlY.defaultPresets).basic,
    ...(0, $3jTlY.defaultPresets).agnai,
    name: "",
    temp: 0.85,
    topK: 0,
    topP: 1,
    tailFreeSampling: 0.95,
    repetitionPenalty: 1.1,
    repetitionPenaltyRange: 64,
    maxContextLength: 4090,
    maxTokens: 250,
    streamResponse: true
};
const $e8f38de6a2a022c0$var$EditPreset = (props)=>{
    const params = (0, $fNpXe.useParams)();
    let ref;
    const state = (0, $6uY8b.presetStore)();
    const select = ()=>{
        const body = (0, $kIEMX.getStrictForm)(ref, {
            preset: "string"
        });
        const preset = state.subs.find((preset)=>preset._id === body.preset);
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
            const _el$11 = $e8f38de6a2a022c0$var$_tmpl$4.cloneNode(true);
            const _ref$3 = ref;
            typeof _ref$3 === "function" ? (0, $f4ihl.use)(_ref$3, _el$11) : ref = _el$11;
            (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $3Evae.default), {
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
            return _el$11;
        }
    });
};

});


//# sourceMappingURL=Subscription.3c06d82c.js.map

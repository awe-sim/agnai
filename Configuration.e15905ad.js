
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("ekEkX", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $56accd796da5cc8d$export$2e2bcd8739ae039);

var $f4ihl = parcelRequire("f4ihl");
var $6TTLi = parcelRequire("6TTLi");

var $6TTLi = parcelRequire("6TTLi");

var $6uY8b = parcelRequire("6uY8b");

var $fNpXe = parcelRequire("fNpXe");

var $iNI0B = parcelRequire("iNI0B");

var $8DEla = parcelRequire("8DEla");

var $3Evae = parcelRequire("3Evae");

var $jFE3H = parcelRequire("jFE3H");

var $kIEMX = parcelRequire("kIEMX");

var $4P0sz = parcelRequire("4P0sz");

var $2qUsD = parcelRequire("2qUsD");

var $a2o17 = parcelRequire("a2o17");
const $56accd796da5cc8d$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-2"><div class="flex justify-end"></div></form>`, 4), $56accd796da5cc8d$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex gap-2"><div>Agnaistic Images Host</div></div>`, 4), $56accd796da5cc8d$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex gap-2"><div>Agnaistic TTS Host</div></div>`, 4), $56accd796da5cc8d$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex items-center gap-2">Image Models </div>`, 2), $56accd796da5cc8d$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-1"><div class="flex w-full items-center gap-2"></div><table class="table-auto border-separate border-spacing-2"><thead><tr></tr></thead><tbody><tr></tr><tr></tr></tbody></table></div>`, 16), $56accd796da5cc8d$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<th class="rounded-md border-[var(--bg-600)] px-2 font-bold"></th>`, 2), $56accd796da5cc8d$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<td></td>`, 2);
const $56accd796da5cc8d$export$2e2bcd8739ae039 = ()=>{
    let form;
    const user = (0, $6uY8b.userStore)();
    const nav = (0, $fNpXe.useNavigate)();
    const state = (0, $6uY8b.settingStore)((s)=>s.config);
    const [slots, setSlots] = (0, $6TTLi.createSignal)(state.serverConfig?.slots || "{}");
    if (!user.user?.admin) {
        nav("/");
        return null;
    }
    const formatSlots = (ev)=>{
        try {
            const obj = JSON.parse(ev.currentTarget.value || "{}");
            setSlots(JSON.stringify(obj, null, 2));
        } catch (ex) {}
    };
    const models = (0, $6TTLi.createSignal)(Array.isArray(state.serverConfig?.imagesModels) ? state.serverConfig.imagesModels : []);
    const submit = ()=>{
        const body = (0, $kIEMX.getStrictForm)(form, {
            apiAccess: [
                "off",
                "users",
                "subscribers",
                "admins"
            ],
            slots: "string",
            maintenance: "boolean",
            maintenanceMessage: "string",
            termsOfService: "string",
            privacyStatement: "string",
            policiesEnabled: "boolean",
            imagesHost: "string",
            imagesEnabled: "boolean",
            supportEmail: "string",
            ttsEnabled: "boolean",
            ttsHost: "string"
        });
        (0, $6uY8b.adminStore).updateServerConfig({
            ...body,
            slots: slots(),
            imagesModels: models[0](),
            enabledAdapters: []
        });
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Server Configuration"
        }),
        (()=>{
            const _el$ = $56accd796da5cc8d$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild;
            _el$.addEventListener("submit", (ev)=>ev.preventDefault());
            const _ref$ = form;
            typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$) : form = _el$;
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                fieldName: "apiAccess",
                label: "API Access Level",
                items: [
                    {
                        label: "Off",
                        value: "off"
                    },
                    {
                        label: "All Users",
                        value: "users"
                    },
                    {
                        label: "Subscribers",
                        value: "subscribers"
                    },
                    {
                        label: "Adminstrators",
                        value: "admins"
                    }
                ],
                get value () {
                    return state.serverConfig?.apiAccess || "off";
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "imagesHost",
                get label () {
                    return (()=>{
                        const _el$3 = $56accd796da5cc8d$var$_tmpl$2.cloneNode(true), _el$4 = _el$3.firstChild;
                        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                            fieldName: "imagesEnabled",
                            get value () {
                                return state.serverConfig?.imagesEnabled;
                            }
                        }), null);
                        return _el$3;
                    })();
                },
                get value () {
                    return state.serverConfig?.imagesHost;
                },
                get classList () {
                    return {
                        hidden: !state.adapters.includes("agnaistic")
                    };
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "ttsHost",
                get label () {
                    return (()=>{
                        const _el$5 = $56accd796da5cc8d$var$_tmpl$3.cloneNode(true), _el$6 = _el$5.firstChild;
                        (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                            fieldName: "ttsEnabled",
                            get value () {
                                return state.serverConfig?.ttsEnabled;
                            }
                        }), null);
                        return _el$5;
                    })();
                },
                get value () {
                    return state.serverConfig?.ttsHost;
                },
                get classList () {
                    return {
                        hidden: !state.adapters.includes("agnaistic")
                    };
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "supportEmail",
                label: "Support Email",
                helperText: "If provided, a link to this email will be added to the main navigation",
                get value () {
                    return state.serverConfig?.supportEmail;
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$ImageModels, {
                signal: models
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                fieldName: "maintenance",
                label: "Maintenace Mode Enabled",
                helperText: "Caution: If your database is no available, this flag will not work. Use the environment variable instead.",
                get value () {
                    return state.serverConfig?.maintenance;
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "maintenanceMessage",
                isMultiline: true,
                label: "Maintenance Message",
                helperText: "Markdown is supported",
                get value () {
                    return state.serverConfig?.maintenanceMessage;
                }
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "slots",
                label: "Slots Configuration",
                helperText: "Must be JSON. Merged with remote slots config -- This config overrides slots.txt",
                get value () {
                    return slots();
                },
                onInput: formatSlots,
                isMultiline: true
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                fieldName: "policiesEnabled",
                label: "Enable Policies",
                helperText: "Display TOS and Privacy Statements",
                disabled: true,
                "class": "hidden"
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "termsOfService",
                label: "Terms of Service",
                helperText: "Not yet implemented",
                isMultiline: true,
                disabled: true
            }), _el$2);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "privacyStatement",
                label: "PrivacyStatement",
                helperText: "Not yet implemented",
                isMultiline: true,
                disabled: true
            }), _el$2);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: submit,
                "class": "w-fit",
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.SaveIcon), {}),
                        " Save"
                    ];
                }
            }));
            return _el$;
        })()
    ];
};
const $56accd796da5cc8d$var$ImageModels = (props)=>{
    const rows = (0, $kIEMX.useRowHelper)({
        signal: props.signal,
        empty: {
            name: "",
            desc: "",
            init: {
                steps: 5,
                cfg: 2,
                height: 1024,
                width: 1024
            },
            limit: {
                steps: 128,
                cfg: 20,
                height: 1024,
                width: 1024
            }
        }
    });
    return [
        (()=>{
            const _el$7 = $56accd796da5cc8d$var$_tmpl$4.cloneNode(true), _el$8 = _el$7.firstChild;
            (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                size: "sm",
                get onClick () {
                    return rows.add;
                },
                children: "Add"
            }), null);
            return _el$7;
        })(),
        (0, $6TTLi.createComponent)((0, $6TTLi.For), {
            get each () {
                return rows.items();
            },
            children: (item, i)=>(0, $6TTLi.createComponent)($56accd796da5cc8d$var$ImageModel, {
                    get index () {
                        return i();
                    },
                    item: item,
                    get updater () {
                        return rows.updater;
                    },
                    get remove () {
                        return rows.remove;
                    }
                })
        })
    ];
};
const $56accd796da5cc8d$var$ImageModel = (props)=>{
    return (()=>{
        const _el$10 = $56accd796da5cc8d$var$_tmpl$5.cloneNode(true), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.firstChild, _el$14 = _el$13.firstChild, _el$15 = _el$13.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling;
        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            fieldName: "model.name",
            parentClass: "w-1/2",
            placeholder: "Model Name...",
            get onChange () {
                return props.updater(props.index, "name");
            },
            get value () {
                return props.item.name;
            }
        }), null);
        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            fieldName: "model.desc",
            parentClass: "w-1/2",
            placeholder: "Model Description...",
            get onChange () {
                return props.updater(props.index, "desc");
            },
            get value () {
                return props.item.desc;
            }
        }), null);
        (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
            size: "sm",
            schema: "red",
            onClick: ()=>props.remove(props.index),
            children: "Remove"
        }), null);
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Th, {}), null);
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Th, {
            children: "Steps"
        }), null);
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Th, {
            children: "CFG"
        }), null);
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Th, {
            children: "Width"
        }), null);
        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Th, {
            children: "Height"
        }), null);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            "class": "px-2 font-bold",
            children: "Recommended"
        }), null);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.init.steps",
                    get onChange () {
                        return props.updater(props.index, "init.steps");
                    },
                    get value () {
                        return props.item.init.steps;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.init.cfg",
                    get onChange () {
                        return props.updater(props.index, "init.cfg");
                    },
                    get value () {
                        return props.item.init.cfg;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.init.width",
                    get onChange () {
                        return props.updater(props.index, "init.width");
                    },
                    get value () {
                        return props.item.init.width;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$16, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.init.height",
                    get onChange () {
                        return props.updater(props.index, "init.height");
                    },
                    get value () {
                        return props.item.init.height;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            "class": "px-2 font-bold",
            children: "Maximums"
        }), null);
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.limit.steps",
                    get onChange () {
                        return props.updater(props.index, "limit.steps");
                    },
                    get value () {
                        return props.item.limit.steps;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.limit.cfg",
                    get onChange () {
                        return props.updater(props.index, "limit.cfg");
                    },
                    get value () {
                        return props.item.limit.cfg;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.limit.width",
                    get onChange () {
                        return props.updater(props.index, "limit.width");
                    },
                    get value () {
                        return props.item.limit.width;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$17, (0, $6TTLi.createComponent)($56accd796da5cc8d$var$Td, {
            get children () {
                return (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    parentClass: "col-span-2",
                    fieldName: "model.limit.height",
                    get onChange () {
                        return props.updater(props.index, "limit.height");
                    },
                    get value () {
                        return props.item.limit.height;
                    }
                });
            }
        }), null);
        (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $a2o17.default), {}), null);
        return _el$10;
    })();
};
const $56accd796da5cc8d$var$Th = (props)=>(()=>{
        const _el$18 = $56accd796da5cc8d$var$_tmpl$6.cloneNode(true);
        (0, $f4ihl.insert)(_el$18, ()=>props.children);
        (0, $f4ihl.effect)((_p$)=>{
            const _v$ = !!props.children, _v$2 = !!props.children;
            _v$ !== _p$._v$ && _el$18.classList.toggle("border", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && _el$18.classList.toggle("bg-[var(--bg-700)]", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: undefined,
            _v$2: undefined
        });
        return _el$18;
    })();
const $56accd796da5cc8d$var$Td = (props)=>(()=>{
        const _el$19 = $56accd796da5cc8d$var$_tmpl$7.cloneNode(true);
        (0, $f4ihl.insert)(_el$19, ()=>props.children);
        (0, $f4ihl.effect)((_p$)=>{
            const _v$3 = `rounded-md border-[var(--bg-600)] ${props.class || ""}`, _v$4 = !!props.children;
            _v$3 !== _p$._v$3 && (0, $f4ihl.className)(_el$19, _p$._v$3 = _v$3);
            _v$4 !== _p$._v$4 && _el$19.classList.toggle("border", _p$._v$4 = _v$4);
            return _p$;
        }, {
            _v$3: undefined,
            _v$4: undefined
        });
        return _el$19;
    })();

});


//# sourceMappingURL=Configuration.e15905ad.js.map

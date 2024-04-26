
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("hDc32", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $0cb1f8cdd14fcfd1$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $fNpXe = parcelRequire("fNpXe");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $6LNaF = parcelRequire("6LNaF");

var $iNI0B = parcelRequire("iNI0B");

var $3jTlY = parcelRequire("3jTlY");

var $6uY8b = parcelRequire("6uY8b");

var $kIEMX = parcelRequire("kIEMX");

var $lAxvf = parcelRequire("lAxvf");

var $beorv = parcelRequire("beorv");

var $5XPGF = parcelRequire("5XPGF");
const $0cb1f8cdd14fcfd1$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mb-4 flex w-full justify-end gap-2"></div>`, 2), $0cb1f8cdd14fcfd1$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col items-center gap-2"><div>Built-in Presets</div></div>`, 4), $0cb1f8cdd14fcfd1$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="ml-4 flex w-full flex-col items-start"><div><div></div><div class="mr-1 text-xs italic text-[var(--text-600)]"></div></div></div>`, 8), $0cb1f8cdd14fcfd1$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="bg-800 flex w-full items-center gap-2 rounded-xl py-1 hover:bg-[var(--bg-600)]"></div>`, 2), $0cb1f8cdd14fcfd1$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="x ml-4 flex w-full flex-col items-start"> <div class="text-md"></div><div class="mr-1 text-xs italic text-[var(--text-600)]"></div></div>`, 6), $0cb1f8cdd14fcfd1$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full items-center gap-2"></div>`, 2);
const $0cb1f8cdd14fcfd1$var$PresetList = ()=>{
    (0, $kIEMX.setComponentPageTitle)("Presets");
    const nav = (0, $fNpXe.useNavigate)();
    const state = (0, $6uY8b.presetStore)((s)=>({
            presets: s.presets.map((pre)=>({
                    ...pre,
                    label: `[${(0, $lAxvf.getServiceName)(pre.service)}] ${pre.name}`
                })).sort((0, $lAxvf.sortByLabel))
        }));
    const cfg = (0, $6uY8b.settingStore)((s)=>s.config);
    const useableServices = (0, $6TTLi.createMemo)(()=>(0, $kIEMX.getUsableServices)());
    const defaults = Object.entries((0, $3jTlY.defaultPresets)).filter(([_, pre])=>{
        if (!cfg.adapters.includes(pre.service)) return false;
        if (!useableServices().includes(pre.service)) return false;
        if (pre.service !== "agnaistic") return true;
        return cfg.subs.length > 0;
    }).map(([id, cfg])=>({
            ...cfg,
            label: `[${cfg.service}] ${cfg.name}`,
            _id: id
        })).sort((0, $lAxvf.sortByLabel));
    const [deleting, setDeleting] = (0, $6TTLi.createSignal)();
    const [importing, setImporting] = (0, $6TTLi.createSignal)(false);
    const deletePreset = ()=>{
        const presetId = deleting();
        if (!presetId) return;
        (0, $6uY8b.presetStore).deletePreset(presetId, ()=>nav("/presets"));
        setDeleting();
    };
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.presetStore).getPresets();
    });
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Generation Presets"
        }),
        (()=>{
            const _el$ = $0cb1f8cdd14fcfd1$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                href: "/presets/new",
                get children () {
                    return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                "New"
                            ];
                        }
                    });
                }
            }), null);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>setImporting(true),
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Import), {
                            size: 20
                        }),
                        " Import"
                    ];
                }
            }), null);
            return _el$;
        })(),
        (()=>{
            const _el$2 = $0cb1f8cdd14fcfd1$var$_tmpl$2.cloneNode(true), _el$3 = _el$2.firstChild;
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.presets;
                },
                children: (preset)=>(()=>{
                        const _el$4 = $0cb1f8cdd14fcfd1$var$_tmpl$4.cloneNode(true);
                        (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                            get href () {
                                return `/presets/${preset._id}`;
                            },
                            "class": " flex w-full",
                            get children () {
                                const _el$5 = $0cb1f8cdd14fcfd1$var$_tmpl$3.cloneNode(true), _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$7.nextSibling;
                                (0, $f4ihl.insert)(_el$7, ()=>preset.name);
                                (0, $f4ihl.insert)(_el$8, ()=>(0, $lAxvf.getServiceName)(preset.service));
                                return _el$5;
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "clear",
                            size: "sm",
                            onClick: ()=>nav(`/presets/new?preset=${preset._id}`),
                            "class": "icon-button",
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {});
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "clear",
                            size: "sm",
                            onClick: ()=>setDeleting(preset._id),
                            "class": "icon-button",
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {});
                            }
                        }), null);
                        return _el$4;
                    })()
            }), _el$3);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                each: defaults,
                children: (preset)=>(()=>{
                        const _el$9 = $0cb1f8cdd14fcfd1$var$_tmpl$6.cloneNode(true);
                        (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                            get href () {
                                return `/presets/new?preset=${preset._id}`;
                            },
                            "class": "bg-800 flex w-full gap-2 rounded-xl hover:bg-[var(--bg-600)]",
                            get children () {
                                const _el$10 = $0cb1f8cdd14fcfd1$var$_tmpl$5.cloneNode(true), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling;
                                (0, $f4ihl.insert)(_el$12, ()=>preset.name);
                                (0, $f4ihl.insert)(_el$13, ()=>(0, $lAxvf.getServiceName)(preset.service));
                                return _el$10;
                            }
                        }));
                        return _el$9;
                    })()
            }), null);
            return _el$2;
        })(),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return importing();
            },
            get children () {
                return (0, $6TTLi.createComponent)($0cb1f8cdd14fcfd1$var$ImportPreset, {
                    success: ()=>nav(`/presets/new`),
                    close: ()=>setImporting(false)
                });
            }
        }),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return !!deleting();
            },
            close: ()=>setDeleting(),
            confirm: deletePreset,
            message: "Are you sure you wish to delete this preset?"
        })
    ];
};
const $0cb1f8cdd14fcfd1$var$importValid = {
    ...(0, $3jTlY.presetValidator),
    order: "any",
    disabledSamplers: "any",
    name: "string?",
    oaiModel: "string?",
    claudeModel: "string?"
};
const $0cb1f8cdd14fcfd1$var$ImportPreset = (props)=>{
    const onChange = async (files)=>{
        if (!files.length) return;
        try {
            const content = await (0, $beorv.getFileAsString)(files[0]);
            const parsed = JSON.parse(content);
            const { errors: errors, actual: actual } = (0, $5XPGF.validateBody)($0cb1f8cdd14fcfd1$var$importValid, parsed, {
                notThrow: true
            });
            if (errors.length) {
                (0, $6uY8b.toastStore).error(`Preset is not valid: ${errors.join(", ")}`);
                console.log(errors);
                return;
            }
            (0, $6uY8b.presetStore).setImportPreset(actual);
            props.success();
        } catch (ex) {
            (0, $6uY8b.toastStore).error(`Could not parse preset: ${ex.message}`);
            return;
        }
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        show: true,
        get close () {
            return props.close;
        },
        title: "Import Preset",
        get children () {
            return (0, $6TTLi.createComponent)((0, $beorv.default), {
                fieldName: "file",
                label: "Preset JSON",
                onUpdate: onChange
            });
        }
    });
};
var $0cb1f8cdd14fcfd1$export$2e2bcd8739ae039 = $0cb1f8cdd14fcfd1$var$PresetList;

});


//# sourceMappingURL=PresetList.f0e45518.js.map

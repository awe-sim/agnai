
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("D1kOo", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $c4122e1a963e7116$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $fNpXe = parcelRequire("fNpXe");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $6LNaF = parcelRequire("6LNaF");

var $iNI0B = parcelRequire("iNI0B");

var $6uY8b = parcelRequire("6uY8b");

var $kIEMX = parcelRequire("kIEMX");

var $lAxvf = parcelRequire("lAxvf");

var $a2o17 = parcelRequire("a2o17");

var $a7G5r = parcelRequire("a7G5r");
const $c4122e1a963e7116$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mb-4 flex w-full justify-end gap-2"></div>`, 2), $c4122e1a963e7116$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center text-xl font-bold">No Tiers</div>`, 2), $c4122e1a963e7116$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex justify-center text-xl font-bold">Tiers</div>`, 2), $c4122e1a963e7116$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full flex-col gap-2"></div>`, 2), $c4122e1a963e7116$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col items-center gap-2"><div class="flex justify-center font-bold">Subscription Presets</div></div>`, 4), $c4122e1a963e7116$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="text-600 ml-2 text-xs italic">Stripe: $</span>`, 2), $c4122e1a963e7116$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="text-600 ml-2 text-xs italic">Patreon: $</span>`, 2), $c4122e1a963e7116$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="text-600 ml-2 text-xs italic">disabled</span>`, 2), $c4122e1a963e7116$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full gap-2"><div class="flex min-w-fit gap-2"></div></div>`, 4), $c4122e1a963e7116$var$_tmpl$10 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="ml-4 flex w-full items-center"><div><span class="mr-1 text-xs italic text-[var(--text-600)]">[Level: <!>] </span><span class="mr-1 text-xs italic text-[var(--text-600)]"></span></div></div>`, 9), $c4122e1a963e7116$var$_tmpl$11 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full items-center gap-2"></div>`, 2);
const $c4122e1a963e7116$var$SubscriptionList = ()=>{
    (0, $kIEMX.setComponentPageTitle)("Subscriptions");
    const nav = (0, $fNpXe.useNavigate)();
    const state = (0, $6uY8b.presetStore)((s)=>({
            subs: s.subs.map((pre)=>({
                    ...pre,
                    label: `[${(0, $lAxvf.getServiceName)(pre.service)}] ${pre.name}`
                })).sort((0, $lAxvf.sortByLabel))
        }));
    const cfg = (0, $6uY8b.userStore)();
    const [deleting, setDeleting] = (0, $6TTLi.createSignal)();
    const deleteSub = ()=>{
        const presetId = deleting();
        if (!presetId) return;
        (0, $6uY8b.presetStore).deleteSubscription(presetId, ()=>nav("/admin/subscriptions"));
        setDeleting();
    };
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.presetStore).getSubscriptions();
        (0, $6uY8b.userStore).getTiers();
    });
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Subscriptions"
        }),
        (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            href: "/admin/metrics",
            "class": "link",
            children: "\u2190 Back to Manage"
        }),
        (()=>{
            const _el$ = $c4122e1a963e7116$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                href: "/admin/tiers/new",
                get children () {
                    return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                "Subscription Tier"
                            ];
                        }
                    });
                }
            }), null);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                href: "/admin/subscriptions/new",
                get children () {
                    return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                                "Subscription Preset"
                            ];
                        }
                    });
                }
            }), null);
            return _el$;
        })(),
        (()=>{
            const _el$2 = $c4122e1a963e7116$var$_tmpl$5.cloneNode(true), _el$6 = _el$2.firstChild;
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return cfg.tiers.length === 0;
                },
                get children () {
                    return $c4122e1a963e7116$var$_tmpl$2.cloneNode(true);
                }
            }), _el$6);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return cfg.tiers.length > 0;
                },
                get children () {
                    return [
                        $c4122e1a963e7116$var$_tmpl$3.cloneNode(true),
                        (()=>{
                            const _el$5 = $c4122e1a963e7116$var$_tmpl$4.cloneNode(true);
                            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                                get each () {
                                    return cfg.tiers;
                                },
                                children: (each)=>(()=>{
                                        const _el$7 = $c4122e1a963e7116$var$_tmpl$9.cloneNode(true), _el$13 = _el$7.firstChild;
                                        (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                                            get href () {
                                                return `/admin/tiers/${each._id}`;
                                            },
                                            "class": "w-full",
                                            get children () {
                                                return (0, $6TTLi.createComponent)((0, $a7G5r.SolidCard), {
                                                    get bg () {
                                                        return each.enabled ? "bg-800" : "rose-900";
                                                    },
                                                    hover: "bg-700",
                                                    "class": "w-full cursor-pointer",
                                                    get children () {
                                                        return [
                                                            (0, $f4ihl.memo)(()=>each.name),
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                                                get when () {
                                                                    return each.cost > 0 && !!each.priceId;
                                                                },
                                                                get children () {
                                                                    const _el$8 = $c4122e1a963e7116$var$_tmpl$6.cloneNode(true), _el$9 = _el$8.firstChild;
                                                                    (0, $f4ihl.insert)(_el$8, ()=>each.cost / 100, null);
                                                                    return _el$8;
                                                                }
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                                                get when () {
                                                                    return each.patreon?.cost > 0;
                                                                },
                                                                get children () {
                                                                    const _el$10 = $c4122e1a963e7116$var$_tmpl$7.cloneNode(true), _el$11 = _el$10.firstChild;
                                                                    (0, $f4ihl.insert)(_el$10, ()=>(each.patreon?.cost / 100).toFixed(2), null);
                                                                    return _el$10;
                                                                }
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                                                get when () {
                                                                    return !each.enabled;
                                                                },
                                                                get children () {
                                                                    return $c4122e1a963e7116$var$_tmpl$8.cloneNode(true);
                                                                }
                                                            })
                                                        ];
                                                    }
                                                });
                                            }
                                        }), _el$13);
                                        (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                            get when () {
                                                return each.enabled;
                                            },
                                            get children () {
                                                return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                                    schema: "green",
                                                    onClick: ()=>(0, $6uY8b.adminStore).updateTier(each._id, {
                                                            enabled: false
                                                        }),
                                                    children: "Enabled"
                                                });
                                            }
                                        }), null);
                                        (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                            get when () {
                                                return !each.enabled;
                                            },
                                            get children () {
                                                return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                                    schema: "red",
                                                    onClick: ()=>(0, $6uY8b.adminStore).updateTier(each._id, {
                                                            enabled: true
                                                        }),
                                                    children: "Disabled"
                                                });
                                            }
                                        }), null);
                                        return _el$7;
                                    })()
                            }));
                            return _el$5;
                        })()
                    ];
                }
            }), _el$6);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $a2o17.default), {}), _el$6);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.subs;
                },
                children: (sub)=>(()=>{
                        const _el$14 = $c4122e1a963e7116$var$_tmpl$11.cloneNode(true);
                        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
                            get href () {
                                return `/admin/subscriptions/${sub._id}`;
                            },
                            "class": "flex h-12 w-full gap-2 rounded-xl hover:bg-[var(--bg-600)]",
                            get classList () {
                                return {
                                    "bg-red-900": sub.subDisabled && !sub.isDefaultSub,
                                    "text-500": sub.subDisabled && !sub.isDefaultSub,
                                    "bg-800": !sub.subDisabled && !sub.isDefaultSub,
                                    "bg-[var(--hl-800)]": sub.isDefaultSub
                                };
                            },
                            get children () {
                                const _el$15 = $c4122e1a963e7116$var$_tmpl$10.cloneNode(true), _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.firstChild, _el$20 = _el$18.nextSibling, _el$19 = _el$20.nextSibling, _el$21 = _el$17.nextSibling;
                                (0, $f4ihl.insert)(_el$17, ()=>sub.subLevel, _el$20);
                                (0, $f4ihl.insert)(_el$17, ()=>(0, $lAxvf.getServiceName)(sub.service), null);
                                (0, $f4ihl.insert)(_el$16, ()=>sub.name, _el$21);
                                (0, $f4ihl.insert)(_el$21, ()=>sub.isDefaultSub ? " default" : "", null);
                                (0, $f4ihl.insert)(_el$21, ()=>sub.subDisabled ? " (disabled)" : "", null);
                                return _el$15;
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "clear",
                            size: "sm",
                            onClick: ()=>nav(`/admin/subscriptions/new?preset=${sub._id}`),
                            "class": "icon-button",
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {});
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$14, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                            schema: "clear",
                            size: "sm",
                            onClick: ()=>setDeleting(sub._id),
                            "class": "icon-button",
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {});
                            }
                        }), null);
                        return _el$14;
                    })()
            }), null);
            return _el$2;
        })(),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return !!deleting();
            },
            close: ()=>setDeleting(),
            confirm: deleteSub,
            message: "Are you sure you wish to delete this subscription?"
        })
    ];
};
var $c4122e1a963e7116$export$2e2bcd8739ae039 = $c4122e1a963e7116$var$SubscriptionList;

});


//# sourceMappingURL=SubscriptionList.99b6fedd.js.map

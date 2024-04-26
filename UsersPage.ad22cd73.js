
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("aTavp", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $ce36a2ec1e2d27b0$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $4P0sz = parcelRequire("4P0sz");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $6LNaF = parcelRequire("6LNaF");

var $iNI0B = parcelRequire("iNI0B");

var $jFE3H = parcelRequire("jFE3H");

var $kIEMX = parcelRequire("kIEMX");

var $6uY8b = parcelRequire("6uY8b");

var $3Evae = parcelRequire("3Evae");

var $fNpXe = parcelRequire("fNpXe");

var $faKez = parcelRequire("faKez");
const $ce36a2ec1e2d27b0$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div><div class="flex flex-col gap-2 pb-4"><form class="flex justify-between"><div class="flex flex-wrap gap-2"></div></form></div></div>`, 8), $ce36a2ec1e2d27b0$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="bg-800 flex h-12 flex-row items-center gap-2 rounded-xl"><div class="flex w-6/12 px-2"><div><span class="text-600 text-[0.5rem]"></span> </div></div><div class="flex w-6/12 justify-end gap-2 pr-2"></div></div>`, 10), $ce36a2ec1e2d27b0$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-center"><img class="h-[128px]"></div>`, 3), $ce36a2ec1e2d27b0$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><th>Session IDs</th><td></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><th>Customer ID</th><td></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><th>Period Start</th><td></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><th></th><td></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><th>State</th><td></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><td colspan="2"><div class="bg-700 mt-4 flex justify-center">History</div></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$10 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><td colspan="2"><div class="bg-700 mt-4 flex justify-center">Session: </div></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$11 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><td colspan="2"><pre class="text-xs"></pre></td></tr>`, 6), $ce36a2ec1e2d27b0$var$_tmpl$12 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col items-center gap-4"><table class="w-full table-auto"><tbody><tr><th>User ID</th><td></td></tr><tr><th>Handle</th><td></td></tr><tr><th>Characters</th><td></td></tr><tr><th>Chats</th><td></td></tr><tr><td colspan="2"><div class="bg-700 mt-4 flex justify-center">Subscription Details</div></td></tr><tr><th>Gift</th><td><div class="flex gap-1"></div></td></tr><tr><th>Assign Sub</th><td><div class="flex gap-1"></div></td></tr><tr><th>Subscription Level</th><td>Native:<!> / Patreon:</td></tr></tbody></table></div>`, 59), $ce36a2ec1e2d27b0$var$_tmpl$13 = /*#__PURE__*/ (0, $f4ihl.template)(`<tr><th> <span class="text-500 text-xs"> ago</span></th><td> <span class="text-[var(--hl-700)]"></span></td></tr>`, 10), $ce36a2ec1e2d27b0$var$_tmpl$14 = /*#__PURE__*/ (0, $f4ihl.template)(`<div>Update password for: <b></b></div>`, 4), $ce36a2ec1e2d27b0$var$_tmpl$15 = /*#__PURE__*/ (0, $f4ihl.template)(`<div><form></form></div>`, 4);
const $ce36a2ec1e2d27b0$var$UsersPage = ()=>{
    let ref;
    (0, $kIEMX.setComponentPageTitle)("Users");
    const state = (0, $6uY8b.adminStore)();
    const config = (0, $6uY8b.userStore)();
    const [pw, setPw] = (0, $6TTLi.createSignal)();
    const [info, setInfo] = (0, $6TTLi.createSignal)();
    const loadInfo = (id, name)=>{
        setInfo({
            id: id,
            name: name
        });
        (0, $6uY8b.adminStore).getInfo(id);
    };
    const search = (ev)=>{
        ev?.preventDefault();
        const opts = (0, $kIEMX.getStrictForm)(ref, {
            username: "string",
            subscribed: "boolean",
            customerId: "string"
        });
        (0, $6uY8b.adminStore).getUsers(opts);
    };
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.adminStore).getUsers({
            username: "",
            subscribed: false,
            customerId: ""
        });
        (0, $6uY8b.presetStore).getSubscriptions();
        (0, $6uY8b.userStore).getTiers();
    });
    const subTiers = (0, $6TTLi.createMemo)(()=>{
        const base = [
            {
                label: "[-1] None",
                value: "-1"
            }
        ];
        const tiers = config.tiers.map((tier)=>({
                label: `[${tier.level}] ${tier.name} ${!tier.enabled ? "(disabled)" : ""}`,
                value: tier._id
            })) || [];
        return base.concat(tiers).sort((l, r)=>+l.value - +r.value);
    });
    return (()=>{
        const _el$ = $ce36a2ec1e2d27b0$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
        (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "User Management"
        }), _el$2);
        (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            href: "/admin/metrics",
            "class": "link",
            children: "\u2190 Back to Manage"
        }), _el$2);
        _el$3.addEventListener("submit", search);
        const _ref$ = ref;
        typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$3) : ref = _el$3;
        (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            "class": "text-xs",
            fieldName: "username",
            placeholder: "Username"
        }), null);
        (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
            "class": "text-xs",
            fieldName: "customerId",
            placeholder: "Customer ID"
        }), null);
        (0, $f4ihl.insert)(_el$4, (0, $6TTLi.createComponent)((0, $2qUsD.ToggleButton), {
            fieldName: "subscribed",
            children: "Subscribed"
        }), null);
        (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
            onClick: search,
            children: "Search"
        }), null);
        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
            get each () {
                return state.users;
            },
            children: (user)=>(()=>{
                    const _el$5 = $ce36a2ec1e2d27b0$var$_tmpl$2.cloneNode(true), _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$10 = _el$6.nextSibling;
                    (0, $f4ihl.insert)(_el$8, ()=>user._id);
                    (0, $f4ihl.insert)(_el$7, ()=>user.username, null);
                    (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                        "class": "text-xs",
                        fieldName: "subTier",
                        get value () {
                            return (0, $faKez.getUserSubscriptionTier)(user, config.tiers)?.tier._id || "";
                        },
                        get items () {
                            return subTiers();
                        },
                        disabled: true,
                        onChange: (ev)=>{
                            (0, $6uY8b.adminStore).changeUserTier(user._id, ev.value);
                        }
                    }), null);
                    (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        size: "sm",
                        onClick: ()=>setPw(user),
                        children: "Set Password"
                    }), null);
                    (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        size: "sm",
                        onClick: ()=>loadInfo(user._id, user.username),
                        children: "Info"
                    }), null);
                    return _el$5;
                })()
        }), null);
        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)($ce36a2ec1e2d27b0$var$PasswordModal, {
            get show () {
                return !!pw();
            },
            get user () {
                return pw();
            },
            close: ()=>setPw(undefined)
        }), null);
        (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)($ce36a2ec1e2d27b0$var$InfoModel, {
            get show () {
                return !!info();
            },
            close: ()=>setInfo(),
            get userId () {
                return info()?.id;
            },
            get name () {
                return info()?.name;
            }
        }), null);
        return _el$;
    })();
};
var $ce36a2ec1e2d27b0$export$2e2bcd8739ae039 = $ce36a2ec1e2d27b0$var$UsersPage;
const $ce36a2ec1e2d27b0$var$InfoModel = (props)=>{
    let subId;
    const state = (0, $6uY8b.adminStore)();
    const tiers = (0, $6uY8b.userStore)((s)=>({
            list: s.tiers
        }));
    const [session, setSession] = (0, $6TTLi.createSignal)();
    const [manualId, setManualId] = (0, $6TTLi.createSignal)(state.info?.manualSub?.tierId || "");
    const [expiry, setExpiry] = (0, $6TTLi.createSignal)(new Date(state.info?.manualSub?.expiresAt || (0, $faKez.now)()));
    const subTiers = (0, $6TTLi.createMemo)(()=>{
        const base = [
            {
                label: "[-1] None",
                value: "-1"
            }
        ];
        const list = tiers.list.map((tier)=>({
                label: `[${tier.level}] ${tier.name} ${!tier.enabled ? "(disabled)" : ""}`,
                value: tier._id
            })) || [];
        return base.concat(list).sort((l, r)=>+l.value - +r.value);
    });
    const assignSub = ()=>{
        const id = subId.value;
        if (!id) return (0, $6uY8b.toastStore).error(`No subscription ID`);
        (0, $6uY8b.adminStore).assignSubscription(props.userId, id);
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        get title () {
            return `${props.name}: ${state.info?.handle || "..."}`;
        },
        get footer () {
            return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                get onClick () {
                    return props.close;
                },
                children: "Close"
            });
        },
        maxWidth: "half",
        get children () {
            const _el$11 = $ce36a2ec1e2d27b0$var$_tmpl$12.cloneNode(true), _el$14 = _el$11.firstChild, _el$15 = _el$14.firstChild, _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.nextSibling, _el$19 = _el$16.nextSibling, _el$20 = _el$19.firstChild, _el$21 = _el$20.nextSibling, _el$22 = _el$19.nextSibling, _el$23 = _el$22.firstChild, _el$24 = _el$23.nextSibling, _el$25 = _el$22.nextSibling, _el$26 = _el$25.firstChild, _el$27 = _el$26.nextSibling, _el$28 = _el$25.nextSibling, _el$29 = _el$28.nextSibling, _el$30 = _el$29.firstChild, _el$31 = _el$30.nextSibling, _el$32 = _el$31.firstChild, _el$33 = _el$29.nextSibling, _el$34 = _el$33.firstChild, _el$35 = _el$34.nextSibling, _el$36 = _el$35.firstChild, _el$40 = _el$33.nextSibling, _el$41 = _el$40.firstChild, _el$42 = _el$41.nextSibling, _el$43 = _el$42.firstChild, _el$45 = _el$43.nextSibling, _el$44 = _el$45.nextSibling;
            (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.info?.avatar;
                },
                get children () {
                    const _el$12 = $ce36a2ec1e2d27b0$var$_tmpl$3.cloneNode(true), _el$13 = _el$12.firstChild;
                    (0, $f4ihl.effect)(()=>(0, $f4ihl.setAttribute)(_el$13, "src", (0, $kIEMX.getAssetUrl)(state.info?.avatar)));
                    return _el$12;
                }
            }), _el$14);
            (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>(0, $6uY8b.adminStore).impersonate(state.info?.userId),
                children: "Impersonate"
            }), _el$14);
            (0, $f4ihl.insert)(_el$18, ()=>state.info?.userId);
            (0, $f4ihl.insert)(_el$21, ()=>state.info?.handle);
            (0, $f4ihl.insert)(_el$24, ()=>state.info?.characters);
            (0, $f4ihl.insert)(_el$27, ()=>state.info?.chats);
            (0, $f4ihl.insert)(_el$32, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                "class": "text-sm",
                fieldName: "manualId",
                get items () {
                    return subTiers();
                },
                onChange: (ev)=>setManualId(ev.value),
                get value () {
                    return state.info?.manualSub?.tierId;
                }
            }), null);
            (0, $f4ihl.insert)(_el$32, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                parentClass: "text-xs",
                fieldName: "expiry",
                type: "datetime-local",
                get value () {
                    return (0, $kIEMX.toLocalTime)(state.info?.manualSub?.expiresAt || (0, $faKez.now)());
                },
                onChange: (ev)=>setExpiry(new Date(ev.currentTarget.value))
            }), null);
            (0, $f4ihl.insert)(_el$32, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>(0, $6uY8b.adminStore).assignGift(props.userId, manualId(), expiry()),
                children: "Apply"
            }), null);
            (0, $f4ihl.insert)(_el$36, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                ref (r$) {
                    const _ref$2 = subId;
                    typeof _ref$2 === "function" ? _ref$2(r$) : subId = r$;
                },
                parentClass: "w-full",
                fieldName: "subscriptionId",
                placeholder: "Stripe Subscription ID"
            }), null);
            (0, $f4ihl.insert)(_el$36, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: assignSub,
                children: "Assign"
            }), null);
            (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.info?.stripeSessions?.length;
                },
                get children () {
                    const _el$37 = $ce36a2ec1e2d27b0$var$_tmpl$4.cloneNode(true), _el$38 = _el$37.firstChild, _el$39 = _el$38.nextSibling;
                    (0, $f4ihl.insert)(_el$39, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                        get each () {
                            return state.info?.stripeSessions;
                        },
                        children: (id)=>(0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                size: "pill",
                                onClick: ()=>(0, $6uY8b.adminStore).viewSession(id, setSession),
                                get children () {
                                    return [
                                        (0, $f4ihl.memo)(()=>id.slice(8, 16)),
                                        "..."
                                    ];
                                }
                            })
                    }));
                    return _el$37;
                }
            }), _el$40);
            (0, $f4ihl.insert)(_el$42, ()=>state.info?.sub?.level ?? "-1", _el$45);
            (0, $f4ihl.insert)(_el$42, ()=>state.info?.patreon?.sub?.level ?? "-1", null);
            (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.info?.billing;
                },
                get children () {
                    return [
                        (()=>{
                            const _el$46 = $ce36a2ec1e2d27b0$var$_tmpl$5.cloneNode(true), _el$47 = _el$46.firstChild, _el$48 = _el$47.nextSibling;
                            (0, $f4ihl.insert)(_el$48, ()=>state.info?.billing?.customerId);
                            return _el$46;
                        })(),
                        (()=>{
                            const _el$49 = $ce36a2ec1e2d27b0$var$_tmpl$6.cloneNode(true), _el$50 = _el$49.firstChild, _el$51 = _el$50.nextSibling;
                            (0, $f4ihl.insert)(_el$51, ()=>new Date(state.info?.billing?.lastRenewed).toLocaleString());
                            return _el$49;
                        })(),
                        (()=>{
                            const _el$52 = $ce36a2ec1e2d27b0$var$_tmpl$7.cloneNode(true), _el$53 = _el$52.firstChild, _el$54 = _el$53.nextSibling;
                            (0, $f4ihl.insert)(_el$53, ()=>state.info?.state.downgrade ? "Downgrading at" : state.info?.state.state === "cancelled" ? "Cancelled at" : state.info?.billing?.cancelling ? "Cancels at" : "Renews at");
                            (0, $f4ihl.insert)(_el$54, ()=>new Date(state.info?.billing?.validUntil).toLocaleString());
                            return _el$52;
                        })()
                    ];
                }
            }), null);
            (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.info?.state.history.length ?? false;
                },
                get children () {
                    return [
                        (()=>{
                            const _el$55 = $ce36a2ec1e2d27b0$var$_tmpl$8.cloneNode(true), _el$56 = _el$55.firstChild, _el$57 = _el$56.nextSibling;
                            (0, $f4ihl.insert)(_el$57, ()=>state.info?.state.state);
                            return _el$55;
                        })(),
                        $ce36a2ec1e2d27b0$var$_tmpl$9.cloneNode(true),
                        (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                            get each () {
                                return state.info?.state.history;
                            },
                            children: (item)=>{
                                const tier = item.tierId ? tiers.list.find((t)=>t._id === item.tierId) : undefined;
                                return (()=>{
                                    const _el$66 = $ce36a2ec1e2d27b0$var$_tmpl$13.cloneNode(true), _el$67 = _el$66.firstChild, _el$68 = _el$67.firstChild, _el$69 = _el$68.nextSibling, _el$70 = _el$69.firstChild, _el$71 = _el$67.nextSibling, _el$72 = _el$71.firstChild, _el$73 = _el$72.nextSibling;
                                    (0, $f4ihl.insert)(_el$67, ()=>new Date(item.time).toLocaleString(), _el$68);
                                    (0, $f4ihl.insert)(_el$69, ()=>(0, $faKez.elapsedSince)(new Date(item.time)), _el$70);
                                    (0, $f4ihl.insert)(_el$71, ()=>item.type, _el$72);
                                    (0, $f4ihl.insert)(_el$73, ()=>tier ? `(tier #${tier.level} ${tier.name})` : "");
                                    return _el$66;
                                })();
                            }
                        })
                    ];
                }
            }), null);
            (0, $f4ihl.insert)(_el$15, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return !!session();
                },
                get children () {
                    return [
                        (()=>{
                            const _el$59 = $ce36a2ec1e2d27b0$var$_tmpl$10.cloneNode(true), _el$60 = _el$59.firstChild, _el$61 = _el$60.firstChild, _el$62 = _el$61.firstChild;
                            (0, $f4ihl.insert)(_el$61, ()=>session()?.id, null);
                            return _el$59;
                        })(),
                        (()=>{
                            const _el$63 = $ce36a2ec1e2d27b0$var$_tmpl$11.cloneNode(true), _el$64 = _el$63.firstChild, _el$65 = _el$64.firstChild;
                            (0, $f4ihl.insert)(_el$65, ()=>JSON.stringify(session(), null, 2));
                            return _el$63;
                        })()
                    ];
                }
            }), null);
            return _el$11;
        }
    });
};
const $ce36a2ec1e2d27b0$var$PasswordModal = (props)=>{
    let ref;
    const save = ()=>{
        const body = (0, $kIEMX.getStrictForm)(ref, {
            newPassword: "string"
        });
        (0, $6uY8b.adminStore).setPassword(props.user._id, body.newPassword, props.close);
    };
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        title: "Change Password",
        get footer () {
            return [
                " ",
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
                    onClick: save,
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                            " Update"
                        ];
                    }
                })
            ];
        },
        get children () {
            return [
                (()=>{
                    const _el$74 = $ce36a2ec1e2d27b0$var$_tmpl$14.cloneNode(true), _el$75 = _el$74.firstChild, _el$76 = _el$75.nextSibling;
                    (0, $f4ihl.insert)(_el$76, ()=>props.user.username);
                    return _el$74;
                })(),
                (()=>{
                    const _el$77 = $ce36a2ec1e2d27b0$var$_tmpl$15.cloneNode(true), _el$78 = _el$77.firstChild;
                    const _ref$3 = ref;
                    typeof _ref$3 === "function" ? (0, $f4ihl.use)(_ref$3, _el$78) : ref = _el$78;
                    (0, $f4ihl.insert)(_el$78, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                        type: "password",
                        fieldName: "newPassword",
                        required: true
                    }));
                    return _el$77;
                })()
            ];
        }
    });
};

});


//# sourceMappingURL=UsersPage.ad22cd73.js.map

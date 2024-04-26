
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("bfcbo", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f85552682e26ad94$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $iNI0B = parcelRequire("iNI0B");

var $4P0sz = parcelRequire("4P0sz");

var $2qUsD = parcelRequire("2qUsD");

var $jFE3H = parcelRequire("jFE3H");

var $fNpXe = parcelRequire("fNpXe");

var $6uY8b = parcelRequire("6uY8b");

var $faKez = parcelRequire("faKez");

var $8DEla = parcelRequire("8DEla");

var $kIEMX = parcelRequire("kIEMX");

var $a7G5r = parcelRequire("a7G5r");

var $i5LtX = parcelRequire("i5LtX");
const $f85552682e26ad94$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-end"></div>`, 2), $f85552682e26ad94$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-2 flex w-full flex-col gap-2"></div>`, 2), $f85552682e26ad94$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex items-center gap-2"><div class="flex w-full cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-[var(--bg-700)]"><div class="font-bold"></div><div class="flex gap-1"></div></div><div class="flex min-w-fit gap-2"></div></div>`, 10), $f85552682e26ad94$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-2"><div class="flex justify-end gap-2"></div><div class="w-full rounded-md border-[1px] border-[var(--bg-600)] sm:w-1/2"><div class="flex flex-col rounded-t-md bg-[var(--hl-800)] p-2"><div class="text-lg font-bold"></div><div class="text-700 text-xs"> ago</div></div><div class="rendered-markdown bg-900 rounded-b-md p-2"></div></div></form>`, 14);
const $f85552682e26ad94$export$2e2bcd8739ae039 = ()=>{
    const params = (0, $fNpXe.useParams)();
    return (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
        get children () {
            return [
                (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                    get when () {
                        return !params.id;
                    },
                    get children () {
                        return (0, $6TTLi.createComponent)($f85552682e26ad94$var$AnnoucementList, {});
                    }
                }),
                (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                    get when () {
                        return !!params.id;
                    },
                    get children () {
                        return (0, $6TTLi.createComponent)($f85552682e26ad94$var$Announcement, {});
                    }
                })
            ];
        }
    });
};
const $f85552682e26ad94$var$AnnoucementList = (props)=>{
    const state = (0, $6uY8b.announceStore)();
    const nav = (0, $fNpXe.useNavigate)();
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.announceStore).getAllAdmin();
    });
    const hide = (id)=>{
        (0, $6uY8b.announceStore).update(id, {
            hide: true
        });
    };
    const unhide = (id)=>{
        (0, $6uY8b.announceStore).update(id, {
            hide: false
        });
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Manage Announcements"
        }),
        (()=>{
            const _el$ = $f85552682e26ad94$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>nav("/admin/announcements/new"),
                get children () {
                    return [
                        "Create ",
                        (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {})
                    ];
                }
            }));
            return _el$;
        })(),
        (()=>{
            const _el$2 = $f85552682e26ad94$var$_tmpl$2.cloneNode(true);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return state.admin;
                },
                children: (item)=>(()=>{
                        const _el$3 = $f85552682e26ad94$var$_tmpl$3.cloneNode(true), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling;
                        _el$4.$$click = ()=>nav(`/admin/announcements/${item._id}`);
                        (0, $f4ihl.insert)(_el$5, ()=>item.title);
                        (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
                            get children () {
                                return [
                                    "Created: ",
                                    (0, $f4ihl.memo)(()=>new Date(item.showAt).toLocaleString())
                                ];
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
                            get children () {
                                return [
                                    (0, $f4ihl.memo)(()=>(0, $faKez.elapsedSince)(new Date(item.showAt))),
                                    " ago"
                                ];
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$6, ()=>$f85552682e26ad94$var$Label(item), null);
                        (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                            get when () {
                                return !item.hide;
                            },
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                    onClick: ()=>hide(item._id),
                                    get children () {
                                        return [
                                            (0, $6TTLi.createComponent)((0, $4P0sz.Eye), {}),
                                            " Hide"
                                        ];
                                    }
                                });
                            }
                        }), null);
                        (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                            get when () {
                                return item.hide;
                            },
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                    schema: "gray",
                                    onClick: ()=>unhide(item._id),
                                    get children () {
                                        return [
                                            (0, $6TTLi.createComponent)((0, $4P0sz.EyeOff), {}),
                                            " Unhide"
                                        ];
                                    }
                                });
                            }
                        }), null);
                        (0, $f4ihl.effect)((_p$)=>{
                            const _v$ = !!item.deletedAt, _v$2 = !!item.hide, _v$3 = !!(!item.hide && item.showAt >= (0, $faKez.now)()), _v$4 = !!(!item.hide && item.showAt < (0, $faKez.now)());
                            _v$ !== _p$._v$ && _el$4.classList.toggle("hidden", _p$._v$ = _v$);
                            _v$2 !== _p$._v$2 && _el$4.classList.toggle("bg-900", _p$._v$2 = _v$2);
                            _v$3 !== _p$._v$3 && _el$4.classList.toggle("bg-[var(--hl-700)]", _p$._v$3 = _v$3);
                            _v$4 !== _p$._v$4 && _el$4.classList.toggle("bg-800", _p$._v$4 = _v$4);
                            return _p$;
                        }, {
                            _v$: undefined,
                            _v$2: undefined,
                            _v$3: undefined,
                            _v$4: undefined
                        });
                        return _el$3;
                    })()
            }));
            return _el$2;
        })()
    ];
};
function $f85552682e26ad94$var$Label(item) {
    const date = new Date(item.showAt);
    if (item.deletedAt) return (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
        type: "rose",
        children: "Deleted"
    });
    if (item.hide) return (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
        type: "coolgray",
        children: "Hidden"
    });
    if (date.valueOf() >= Date.now()) return (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
        type: "premium",
        children: "Pending"
    });
    return (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
        type: "green",
        children: "Active"
    });
}
const $f85552682e26ad94$var$Announcement = (props)=>{
    let ref;
    const nav = (0, $fNpXe.useNavigate)();
    const params = (0, $fNpXe.useParams)();
    const state = (0, $6uY8b.announceStore)((s)=>({
            item: s.admin.find((a)=>a._id === params.id)
        }));
    const [title, setTitle] = (0, $6TTLi.createSignal)(state.item?.title || "");
    const [content, setContent] = (0, $6TTLi.createSignal)(state.item?.content || "");
    const [showAt, setShowAt] = (0, $6TTLi.createSignal)(new Date(state.item?.showAt || (0, $faKez.now)()));
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.announceStore).getAllAdmin();
    });
    const onSave = ()=>{
        const body = (0, $kIEMX.getStrictForm)(ref, {
            title: "string",
            content: "string",
            hide: "boolean",
            showAt: "string"
        });
        const showAt = new Date(body.showAt);
        if (isNaN(showAt.valueOf())) {
            (0, $6uY8b.toastStore).error(`"Display At" is required`);
            return;
        }
        body.showAt = showAt.toISOString();
        if (params.id === "new") (0, $6uY8b.announceStore).create(body, (announce)=>{
            nav(`/admin/announcements/${announce._id}`);
        });
        else (0, $6uY8b.announceStore).update(params.id, body);
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Announcement"
        }),
        (()=>{
            const _el$8 = $f85552682e26ad94$var$_tmpl$4.cloneNode(true), _el$9 = _el$8.firstChild, _el$10 = _el$9.nextSibling, _el$11 = _el$10.firstChild, _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling, _el$14 = _el$13.firstChild, _el$15 = _el$11.nextSibling;
            const _ref$ = ref;
            typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$8) : ref = _el$8;
            (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "id",
                disabled: true,
                get value () {
                    return params.id;
                },
                label: "ID"
            }), _el$9);
            (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "title",
                label: "Title",
                get value () {
                    return state.item?.title;
                },
                onInput: (ev)=>setTitle(ev.currentTarget.value)
            }), _el$9);
            (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "content",
                label: "Content",
                get value () {
                    return state.item?.content;
                },
                isMultiline: true,
                "class": "min-h-[80px]",
                onInput: (ev)=>setContent(ev.currentTarget.value)
            }), _el$9);
            (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                fieldName: "hide",
                label: "Hide Announcement",
                get value () {
                    return state.item?.hide;
                }
            }), _el$9);
            (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                type: "datetime-local",
                label: "Display At",
                fieldName: "showAt",
                get value () {
                    return (0, $f4ihl.memo)(()=>!!state.item?.showAt)() ? (0, $kIEMX.toLocalTime)(state.item.showAt) : (0, $kIEMX.toLocalTime)((0, $faKez.now)());
                },
                onChange: (ev)=>setShowAt(new Date(ev.currentTarget.value))
            }), _el$9);
            (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: onSave,
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                        " ",
                        (0, $f4ihl.memo)(()=>params.id === "new" ? "Create" : "Update")
                    ];
                }
            }));
            (0, $f4ihl.insert)(_el$12, title);
            (0, $f4ihl.insert)(_el$13, ()=>(0, $faKez.elapsedSince)(showAt()), _el$14);
            (0, $f4ihl.effect)(()=>_el$15.innerHTML = (0, $i5LtX.markdown).makeHtml(content()));
            return _el$8;
        })()
    ];
};
(0, $f4ihl.delegateEvents)([
    "click"
]);

});


//# sourceMappingURL=Announcements.4ed13ef0.js.map

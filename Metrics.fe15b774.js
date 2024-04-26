
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("lrnpK", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $7b47373a2a415837$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $2qUsD = parcelRequire("2qUsD");

var $hBgCm = parcelRequire("hBgCm");

var $iNI0B = parcelRequire("iNI0B");

var $kIEMX = parcelRequire("kIEMX");

var $6uY8b = parcelRequire("6uY8b");

var $a7G5r = parcelRequire("a7G5r");

var $jFE3H = parcelRequire("jFE3H");

var $6LNaF = parcelRequire("6LNaF");
const $7b47373a2a415837$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mb-4 flex gap-4"></div>`, 2), $7b47373a2a415837$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<form></form>`, 2), $7b47373a2a415837$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 text-xl"></div>`, 2);
const $7b47373a2a415837$var$MetricsPage = ()=>{
    let refForm;
    (0, $kIEMX.setComponentPageTitle)("Metrics");
    const state = (0, $6uY8b.adminStore)();
    const [refMsg, setRefMsg] = (0, $6TTLi.createSignal)();
    const [confirm, setConfirm] = (0, $6TTLi.createSignal)(false);
    (0, $6TTLi.onMount)(()=>(0, $6uY8b.adminStore).getMetrics());
    const sendAll = ()=>{
        const { message: message } = (0, $kIEMX.getStrictForm)(refForm, {
            message: "string"
        });
        (0, $6uY8b.adminStore).sendAll(message, ()=>{
            refMsg().value = "";
        });
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Metrics"
        }),
        (()=>{
            const _el$ = $7b47373a2a415837$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                get onClick () {
                    return (0, $6uY8b.adminStore).getMetrics;
                },
                children: "Refresh"
            }));
            return _el$;
        })(),
        (()=>{
            const _el$2 = $7b47373a2a415837$var$_tmpl$3.cloneNode(true);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                fieldName: "active",
                label: "Online Users",
                get helperText () {
                    return state.metrics?.connected || "...";
                }
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                fieldName: "active",
                label: "Max Online Users",
                get helperText () {
                    return state.metrics?.maxLiveCount || "...";
                }
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                fieldName: "totalUsers",
                label: "Registered Users",
                get helperText () {
                    return state.metrics?.totalUsers || "...";
                }
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                fieldName: "services",
                label: "Services",
                get helperText () {
                    return state.metrics?.each.length;
                }
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                get children () {
                    const _el$3 = $7b47373a2a415837$var$_tmpl$2.cloneNode(true);
                    const _ref$ = refForm;
                    typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$3) : refForm = _el$3;
                    (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                        label: "Message All Users"
                    }), null);
                    (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                        ref: setRefMsg,
                        fieldName: "message",
                        isMultiline: true
                    }), null);
                    (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        onClick: ()=>setConfirm(true),
                        children: "Send"
                    }), null);
                    return _el$3;
                }
            }), null);
            return _el$2;
        })(),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return confirm();
            },
            close: ()=>setConfirm(false),
            confirm: sendAll,
            message: "Are you sure you wish to send a message to all users?"
        })
    ];
};
var $7b47373a2a415837$export$2e2bcd8739ae039 = $7b47373a2a415837$var$MetricsPage;

});


//# sourceMappingURL=Metrics.fe15b774.js.map

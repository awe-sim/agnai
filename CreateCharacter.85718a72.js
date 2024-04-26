
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("1Hu8V", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $d3dc3c872b997aba$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");

var $kIEMX = parcelRequire("kIEMX");

var $fNpXe = parcelRequire("fNpXe");

var $gkmLe = parcelRequire("gkmLe");
const $d3dc3c872b997aba$var$CreateCharacter = ()=>{
    const params = (0, $fNpXe.useParams)();
    const [query] = (0, $fNpXe.useSearchParams)();
    (0, $kIEMX.setComponentPageTitle)(params.editId ? "Edit character" : params.duplicateId ? "Copy character" : "Create character");
    return (0, $6TTLi.createComponent)((0, $gkmLe.CreateCharacterForm), {
        get editId () {
            return params.editId;
        },
        get duplicateId () {
            return params.duplicateId;
        },
        get ["import"] () {
            return query.import;
        }
    });
};
var $d3dc3c872b997aba$export$2e2bcd8739ae039 = $d3dc3c872b997aba$var$CreateCharacter;

});


//# sourceMappingURL=CreateCharacter.85718a72.js.map


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("5Ph0S", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $d8b82b59400854ad$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $fNpXe = parcelRequire("fNpXe");

var $iNI0B = parcelRequire("iNI0B");

var $kIEMX = parcelRequire("kIEMX");

var $6uY8b = parcelRequire("6uY8b");

var $6TTLi = parcelRequire("6TTLi");

var $lvZnY = parcelRequire("lvZnY");

var $2qUsD = parcelRequire("2qUsD");

var $hBgCm = parcelRequire("hBgCm");

var $4P0sz = parcelRequire("4P0sz");

var $lblf7 = parcelRequire("lblf7");
const $d8b82b59400854ad$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<form><div class="mt-4 flex justify-end"></div><div class="mt-4 flex justify-end"></div><div class="mt-8 flex flex-col"><div class="flex flex-col gap-2"><div class="text-lg font-bold">Definitions</div></div></div></form>`, 12), $d8b82b59400854ad$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<code>{{char}}</code>`, 2), $d8b82b59400854ad$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<code>{{user}}</code>`, 2);
const $d8b82b59400854ad$var$EditMemoryPage = ()=>{
    const { updateTitle: updateTitle } = (0, $kIEMX.setComponentPageTitle)("Memory book");
    let ref;
    const nav = (0, $fNpXe.useNavigate)();
    const params = (0, $fNpXe.useParams)();
    const state = (0, $6uY8b.memoryStore)();
    const [editing, setEditing] = (0, $6TTLi.createSignal)();
    const [entrySort, setEntrySort] = (0, $6TTLi.createSignal)("creationDate");
    const updateEntrySort = (item)=>{
        if (item.value === "creationDate" || item.value === "alpha") setEntrySort(item.value);
    };
    const updateBook = (update)=>{
        const prev = editing();
        setEditing({
            ...prev,
            ...update
        });
    };
    (0, $6TTLi.onMount)(()=>{
        if (params.id === "new") {
            updateTitle("Create memory book");
            setEditing((0, $lblf7.emptyBookWithEmptyEntry)());
            return;
        }
        const match = state.books.list.find((m)=>m._id === params.id);
        if (match) {
            updateTitle(`Edit ${match.name}`);
            setEditing(match);
        }
    });
    const saveBook = (ev)=>{
        ev.preventDefault();
        // Why do we set the sort to creationDate before saving, then restore the
        // previous sort? Two reasons:
        // - Creation date is not actually saved in the DB
        // - When saving the memory book, the data is taken from the DOM
        // (This should ideally be improved in a future patch)
        // Therefore every time we save the memory book we have to ensure the DOM
        // has the entries in creation order, for now.
        const oldEntrySort = entrySort();
        setEntrySort("creationDate");
        const body = editing();
        if (!params.id || !body) return;
        if (params.id === "new") (0, $6uY8b.memoryStore).create(body, (book)=>{
            setEditing(book);
            nav(`/memory/${book._id}`);
        });
        else (0, $6uY8b.memoryStore).update(params.id, body);
        setEntrySort(oldEntrySort);
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Edit Memory Book"
        }),
        (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
            get when () {
                return !!editing();
            },
            get children () {
                const _el$ = $d8b82b59400854ad$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild;
                _el$.addEventListener("submit", saveBook);
                const _ref$ = ref;
                typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$) : ref = _el$;
                (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    type: "submit",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                            (0, $f4ihl.memo)(()=>!editing()?._id ? "Create Book" : "Update Book")
                        ];
                    }
                }));
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $lvZnY.default), {
                    get book () {
                        return editing();
                    },
                    get entrySort () {
                        return entrySort();
                    },
                    updateEntrySort: updateEntrySort,
                    onChange: updateBook
                }), _el$3);
                (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    type: "submit",
                    get children () {
                        return [
                            (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                            (0, $f4ihl.memo)(()=>!editing()?._id ? "Create Book" : "Update Book")
                        ];
                    }
                }));
                (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                    fieldName: "priorty",
                    label: "Priority",
                    helperText: "When deciding which entries to INCLUDE in the prompt, the higher the priority entries win."
                }), null);
                (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                    fieldName: "weight",
                    label: "Weight",
                    helperText: "When deciding how to ORDER entries, the higher the weight the closer to the bottom."
                }), null);
                (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                    fieldName: "keywords",
                    label: "Keywords",
                    get helperText () {
                        return [
                            "These are the terms that trigger the entry to be potentially included in the prompt. You can use ",
                            $d8b82b59400854ad$var$_tmpl$2.cloneNode(true),
                            " and ",
                            $d8b82b59400854ad$var$_tmpl$3.cloneNode(true),
                            " ",
                            "placeholders here."
                        ];
                    }
                }), null);
                (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                    fieldName: "entry",
                    label: "Entry",
                    get helperText () {
                        return [
                            "This is the text that will be included in the prompt. You can use",
                            " ",
                            $d8b82b59400854ad$var$_tmpl$2.cloneNode(true),
                            " and ",
                            $d8b82b59400854ad$var$_tmpl$3.cloneNode(true),
                            " placeholders here."
                        ];
                    }
                }), null);
                return _el$;
            }
        })
    ];
};
var $d8b82b59400854ad$export$2e2bcd8739ae039 = $d8b82b59400854ad$var$EditMemoryPage;

});


//# sourceMappingURL=EditMemoryPage.7c09a1bf.js.map

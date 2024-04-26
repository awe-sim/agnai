
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("e7l5T", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $fb16225ac0dd50c1$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $fNpXe = parcelRequire("fNpXe");

var $6TTLi = parcelRequire("6TTLi");

var $6uY8b = parcelRequire("6uY8b");

var $iNI0B = parcelRequire("iNI0B");

var $jFE3H = parcelRequire("jFE3H");

var $8DEla = parcelRequire("8DEla");

var $a7G5r = parcelRequire("a7G5r");

var $kIEMX = parcelRequire("kIEMX");

var $2qUsD = parcelRequire("2qUsD");

var $3Evae = parcelRequire("3Evae");

var $c427l = parcelRequire("c427l");
const $fb16225ac0dd50c1$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-2"><div class="text-lg font-bold">Preview</div><div class="flex w-full justify-end"></div></form>`, 6);
const $fb16225ac0dd50c1$export$2e2bcd8739ae039 = (props)=>{
    let form;
    const params = (0, $fNpXe.useParams)();
    const cfg = (0, $6uY8b.userStore)();
    const admin = (0, $6uY8b.adminStore)();
    const settings = (0, $6uY8b.settingStore)();
    const products = (0, $6TTLi.createMemo)(()=>{
        const list = admin.products.map((product)=>{
            const price = admin.prices.find((price)=>price.id === product.default_price);
            const cost = price?.unit_amount ? `$${price.unit_amount / 100}` : "";
            return {
                label: `${product.name} ${cost}`,
                value: product.id
            };
        });
        return [
            {
                label: "No payment required",
                value: ""
            }
        ].concat(list);
    });
    const [editing, setEditing] = (0, $6TTLi.createSignal)(params.id ? cfg.tiers.find((t)=>t._id === params.id) : undefined);
    const [name, setName] = (0, $6TTLi.createSignal)(editing()?.name || "");
    const [desc, setDesc] = (0, $6TTLi.createSignal)(editing()?.description || "");
    const [productId, setProductId] = (0, $6TTLi.createSignal)(editing()?.productId);
    const price = (0, $6TTLi.createMemo)(()=>{
        const product = admin.products.find((p)=>p.id === productId());
        if (!product) return 0;
        const price = admin.prices.find((pr)=>pr.id === product.default_price);
        return price?.unit_amount || 0;
    });
    const patreonTiers = (0, $6TTLi.createMemo)(()=>{
        const items = [
            {
                label: "None",
                value: ""
            }
        ];
        for (const tier of admin.patreonTiers)items.push({
            label: `$${(tier.attributes.amount_cents / 100).toFixed(2)} ${tier.attributes.title}`,
            value: tier.id
        });
        return items;
    });
    const onSubmit = ()=>{
        const data = (0, $kIEMX.getStrictForm)(form, {
            name: "string",
            description: "string",
            level: "number",
            productId: "string",
            enabled: "boolean",
            disableSlots: "boolean?",
            apiAccess: "boolean",
            patreonTier: "string",
            guidanceAccess: "boolean",
            imagesAccess: "boolean"
        });
        const product = admin.products.find((p)=>p.id === data.productId);
        const price = admin.prices.find((p)=>p.id === product?.default_price);
        const patreonTier = admin.patreonTiers.find((t)=>t.id === data.patreonTier);
        const patreon = patreonTier ? {
            tierId: patreonTier.id,
            cost: patreonTier.attributes.amount_cents
        } : null;
        if (!product) {
            if (data.productId) {
                (0, $6uY8b.toastStore).error(`Cannot submit: Product "${data.productId}" not found`);
                return;
            }
        }
        const priceId = product ? product.default_price : "";
        if (!product?.default_price && data.productId) {
            (0, $6uY8b.toastStore).error(`Cannot submit: Product "${data.productId}" does not have a price`);
            return;
        }
        if (!price && data.productId) {
            (0, $6uY8b.toastStore).error(`Cannot submit: Price "${product?.default_price}" not found`);
            return;
        }
        const id = editing()?._id;
        const tier = {
            ...data,
            name: data.name,
            description: data.description,
            level: data.level,
            productId: data.productId,
            enabled: data.enabled,
            cost: price ? price.unit_amount : 0,
            patreon: patreon,
            priceId: priceId
        };
        if (id) (0, $6uY8b.adminStore).updateTier(id, tier);
        else (0, $6uY8b.adminStore).createTier(tier, (tier)=>setEditing(tier));
    };
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.adminStore).getProducts();
        (0, $6uY8b.userStore).getTiers();
    });
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            title: "Subscription Tier"
        }),
        (0, $6TTLi.createComponent)((0, $fNpXe.A), {
            href: "/admin/subscriptions",
            "class": "link",
            children: "\u2190 Back to Subscriptions"
        }),
        (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
            get children () {
                const _el$ = $fb16225ac0dd50c1$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
                const _ref$ = form;
                typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$) : form = _el$;
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    fieldName: "id",
                    label: "ID",
                    disabled: true,
                    get value () {
                        return editing()?._id;
                    }
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    fieldName: "name",
                    label: "Name",
                    get value () {
                        return editing()?.name;
                    },
                    onInput: (ev)=>setName(ev.currentTarget.value)
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    fieldName: "description",
                    label: "Description",
                    helperText: "This is be rendered using the markdown renderer. HTML is also supported here.",
                    get value () {
                        return editing()?.description;
                    },
                    isMultiline: true,
                    onInput: (ev)=>setDesc(ev.currentTarget.value)
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                    fieldName: "apiAccess",
                    label: "API Access Capable",
                    helperText: "If enabled, this tier can use API access if the server allows it",
                    get value () {
                        return editing()?.apiAccess ?? false;
                    }
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                    fieldName: "guidanceAccess",
                    label: "Guidance (V2) Access Capable",
                    helperText: "If enabled, this tier can use GuidanceV2 if the server/preset allows it",
                    get value () {
                        return editing()?.guidanceAccess ?? false;
                    },
                    get classList () {
                        return {
                            hidden: !settings.config.adapters.includes("agnaistic")
                        };
                    }
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                    fieldName: "imagesAccess",
                    label: "Image Generation Access",
                    helperText: "If enabled, this tier can use Agnaistic Image Generation",
                    get value () {
                        return editing()?.imagesAccess ?? false;
                    },
                    get classList () {
                        return {
                            hidden: !settings.config.adapters.includes("agnaistic")
                        };
                    }
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                    fieldName: "patreonTier",
                    label: "Patreon Tier",
                    helperText: "If Patreon is linked, the minimum tier is required",
                    get value () {
                        return editing()?.patreon?.tierId;
                    },
                    get items () {
                        return patreonTiers();
                    }
                }), _el$2);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $c427l.TierCard), {
                    get tier () {
                        return {
                            name: name(),
                            description: desc(),
                            cost: price(),
                            disableSlots: false,
                            apiAccess: false,
                            guidanceAccess: false,
                            imagesAccess: false
                        };
                    }
                }), _el$3);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $3Evae.default), {
                    fieldName: "productId",
                    label: "Stripe Product",
                    get items () {
                        return products();
                    },
                    get value () {
                        return editing()?.productId;
                    },
                    onChange: (ev)=>setProductId(ev.value)
                }), _el$3);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                    type: "number",
                    fieldName: "level",
                    label: "Level",
                    get value () {
                        return editing()?.level ?? -1;
                    }
                }), _el$3);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                    fieldName: "enabled",
                    label: "Enabled",
                    helperText: "If disabled, this tier will not be available to users for selection.",
                    get value () {
                        return editing()?.enabled;
                    }
                }), _el$3);
                (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                    get when () {
                        return !!settings.slots.publisherId;
                    },
                    get children () {
                        return (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                            fieldName: "disableSlots",
                            label: "Disable Slots",
                            helperText: "This tier will prevent slots from rendering",
                            get value () {
                                return editing()?.disableSlots;
                            }
                        });
                    }
                }), _el$3);
                (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                    onClick: onSubmit,
                    children: "Save"
                }));
                return _el$;
            }
        })
    ];
};

});


//# sourceMappingURL=Tiers.74a92146.js.map

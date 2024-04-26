
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire5275"];
var parcelRegister = parcelRequire.register;
parcelRegister("dumYn", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $700ee951fa7a8cb2$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $6uY8b = parcelRequire("6uY8b");

var $iNI0B = parcelRequire("iNI0B");

var $2qUsD = parcelRequire("2qUsD");

var $4P0sz = parcelRequire("4P0sz");

var $fNpXe = parcelRequire("fNpXe");

var $jFE3H = parcelRequire("jFE3H");

var $kIEMX = parcelRequire("kIEMX");

var $a2o17 = parcelRequire("a2o17");

var $8DEla = parcelRequire("8DEla");

var $6LNaF = parcelRequire("6LNaF");

var $VRscO = parcelRequire("VRscO");

var $1Cpmo = parcelRequire("1Cpmo");
const $700ee951fa7a8cb2$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<p> event(s)</p>`, 2), $700ee951fa7a8cb2$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex items-center gap-2"></div>`, 2), $700ee951fa7a8cb2$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="text-lg font-bold">Scenario Details</div>`, 2), $700ee951fa7a8cb2$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<form class="flex flex-col gap-4"></form>`, 2), $700ee951fa7a8cb2$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Duplicate</span>`, 2), $700ee951fa7a8cb2$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Download</span>`, 2), $700ee951fa7a8cb2$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<span class="hidden sm:inline">Delete</span>`, 2), $700ee951fa7a8cb2$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-between"><div>Edit Scenario</div><div class="flex text-base"><div class="px-1"></div><div class="px-1"></div><div class="px-1"></div></div></div>`, 12), $700ee951fa7a8cb2$var$_tmpl$9 = /*#__PURE__*/ (0, $f4ihl.template)(`<p>No events attached to this scenario</p>`, 2);
const $700ee951fa7a8cb2$var$CreateScenario = ()=>{
    let ref;
    const params = (0, $fNpXe.useParams)();
    const nav = (0, $fNpXe.useNavigate)();
    const state = (0, $6uY8b.scenarioStore)((x)=>({
            loading: x.loading,
            scenario: x.scenarios.find((s)=>s._id === params.editId)
        }));
    const [showDelete, setShowDelete] = (0, $6TTLi.createSignal)(false);
    const [showDownload, setShowDownload] = (0, $6TTLi.createSignal)(false);
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.scenarioStore).getOne(params.editId);
    });
    const confirmDelete = ()=>{
        (0, $6uY8b.scenarioStore).remove(params.editId, ()=>nav("/scenario"));
    };
    const duplicateScenario = ()=>{
        if (!state.scenario) return;
        const clone = (0, $kIEMX.deepCloneAndRemoveFields)(state.scenario, [
            "_id",
            "userId",
            "kind"
        ]);
        (0, $6uY8b.scenarioStore).create(clone, (r)=>nav(`/scenario/${r._id}/edit`));
    };
    return [
        (0, $6TTLi.createComponent)((0, $iNI0B.default), {
            get title () {
                return (()=>{
                    const _el$6 = $700ee951fa7a8cb2$var$_tmpl$8.cloneNode(true), _el$7 = _el$6.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$8.firstChild, _el$11 = _el$9.nextSibling, _el$13 = _el$11.nextSibling;
                    (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "secondary",
                        onClick: ()=>duplicateScenario(),
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Copy), {}),
                                $700ee951fa7a8cb2$var$_tmpl$5.cloneNode(true)
                            ];
                        }
                    }));
                    (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "secondary",
                        onClick: ()=>setShowDownload(true),
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Download), {}),
                                $700ee951fa7a8cb2$var$_tmpl$6.cloneNode(true)
                            ];
                        }
                    }));
                    (0, $f4ihl.insert)(_el$13, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                        schema: "red",
                        onClick: ()=>setShowDelete(true),
                        get children () {
                            return [
                                (0, $6TTLi.createComponent)((0, $4P0sz.Trash), {}),
                                $700ee951fa7a8cb2$var$_tmpl$7.cloneNode(true)
                            ];
                        }
                    }));
                    return _el$6;
                })();
            }
        }),
        (()=>{
            const _el$ = $700ee951fa7a8cb2$var$_tmpl$2.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                get when () {
                    return state.scenario?.entries.length ?? false;
                },
                get fallback () {
                    return $700ee951fa7a8cb2$var$_tmpl$9.cloneNode(true);
                },
                get children () {
                    const _el$2 = $700ee951fa7a8cb2$var$_tmpl$.cloneNode(true), _el$3 = _el$2.firstChild;
                    (0, $f4ihl.insert)(_el$2, ()=>state.scenario.entries.length, _el$3);
                    return _el$2;
                }
            }));
            return _el$;
        })(),
        (0, $6TTLi.createComponent)((0, $a2o17.default), {}),
        $700ee951fa7a8cb2$var$_tmpl$3.cloneNode(true),
        (()=>{
            const _el$5 = $700ee951fa7a8cb2$var$_tmpl$4.cloneNode(true);
            const _ref$ = ref;
            typeof _ref$ === "function" ? (0, $f4ihl.use)(_ref$, _el$5) : ref = _el$5;
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "name",
                required: true,
                label: "Name",
                helperText: "The name of your scenario.",
                placeholder: "My scenario",
                get value () {
                    return state.scenario?.name;
                }
            }), null);
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "description",
                label: "Description",
                helperText: "More information about your scenario.",
                placeholder: "This scenario is about...",
                get value () {
                    return state.scenario?.description;
                }
            }), null);
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "text",
                isMultiline: true,
                label: "Prompt Text",
                helperText: "Optional. Additional text to add to the scenario prompt.",
                placeholder: "{{char}} and {{user}} are in a scenario. They are...",
                get value () {
                    return state.scenario?.text;
                }
            }), null);
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $8DEla.Toggle), {
                fieldName: "overwriteCharacterScenario",
                label: "Overwrite character's scenario",
                helperText: "If the character already has a scenario, overwrite it with this one. Otherwise, append to it.",
                get value () {
                    return state.scenario?.overwriteCharacterScenario;
                }
            }), null);
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                fieldName: "instructions",
                isMultiline: true,
                label: "User Instructions",
                helperText: "Optional. Text to display to the user to help them understand how to use this scenario.",
                placeholder: "Thanks for trying out my scenario! Use the Trigger Event menu to move the story forward.",
                get value () {
                    return state.scenario?.instructions;
                }
            }), null);
            (0, $f4ihl.insert)(_el$5, (0, $6TTLi.createComponent)((0, $1Cpmo.default), {
                get editId () {
                    return params.editId;
                },
                form: ref
            }), null);
            return _el$5;
        })(),
        (0, $6TTLi.createComponent)((0, $6LNaF.ConfirmModal), {
            get show () {
                return !!showDelete();
            },
            close: ()=>setShowDelete(false),
            confirm: confirmDelete,
            message: "Are you sure wish to delete this scenario?"
        }),
        (0, $6TTLi.createComponent)((0, $VRscO.ExportScenarioModal), {
            get show () {
                return !!showDownload();
            },
            close: ()=>setShowDownload(false),
            get scenario () {
                return showDownload() ? state.scenario : undefined;
            }
        })
    ];
};
var $700ee951fa7a8cb2$export$2e2bcd8739ae039 = $700ee951fa7a8cb2$var$CreateScenario;

});
parcelRegister("VRscO", function(module, exports) {

$parcel$export(module.exports, "ExportScenarioModal", () => $9276ad09eb909306$export$d95ab172b9e1c70b);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $6LNaF = parcelRequire("6LNaF");

var $2qUsD = parcelRequire("2qUsD");

var $4P0sz = parcelRequire("4P0sz");

var $kIEMX = parcelRequire("kIEMX");
const $9276ad09eb909306$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex w-full justify-center"><a></a></div>`, 4);
const $9276ad09eb909306$export$d95ab172b9e1c70b = (props)=>{
    const filename = (0, $6TTLi.createMemo)(()=>{
        if (!props.scenario) return;
        const name = props.scenario.name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
        return `${name}.scenario.json`;
    });
    const encodedJson = (0, $6TTLi.createMemo)(()=>{
        if (!props.scenario) return "";
        const clone = (0, $kIEMX.deepCloneAndRemoveFields)(props.scenario, [
            "_id",
            "userId",
            "kind"
        ]);
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
            ...clone,
            $schema: "https://agnai.chat/schemas/scenario-schema-v1.json"
        }));
        return dataStr;
    });
    return (0, $6TTLi.createComponent)((0, $6LNaF.default), {
        get show () {
            return props.show;
        },
        get close () {
            return props.close;
        },
        title: "Download Scenario",
        get footer () {
            return (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                schema: "secondary",
                get onClick () {
                    return props.close;
                },
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.X), {}),
                        " Close"
                    ];
                }
            });
        },
        get children () {
            const _el$ = $9276ad09eb909306$var$_tmpl$.cloneNode(true), _el$2 = _el$.firstChild;
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                        (0, $f4ihl.memo)(()=>filename())
                    ];
                }
            }));
            (0, $f4ihl.effect)((_p$)=>{
                const _v$ = encodedJson(), _v$2 = filename();
                _v$ !== _p$._v$ && (0, $f4ihl.setAttribute)(_el$2, "href", _p$._v$ = _v$);
                _v$2 !== _p$._v$2 && (0, $f4ihl.setAttribute)(_el$2, "download", _p$._v$2 = _v$2);
                return _p$;
            }, {
                _v$: undefined,
                _v$2: undefined
            });
            return _el$;
        }
    });
};

});

parcelRegister("1Cpmo", function(module, exports) {

$parcel$export(module.exports, "default", () => $880c7efba8190020$export$2e2bcd8739ae039);

var $6TTLi = parcelRequire("6TTLi");
var $f4ihl = parcelRequire("f4ihl");

var $6TTLi = parcelRequire("6TTLi");

var $6uY8b = parcelRequire("6uY8b");

var $2qUsD = parcelRequire("2qUsD");

var $4P0sz = parcelRequire("4P0sz");

var $fNpXe = parcelRequire("fNpXe");

var $jFE3H = parcelRequire("jFE3H");

var $hOKUV = parcelRequire("hOKUV");

var $3Evae = parcelRequire("3Evae");

var $888ae = parcelRequire("888ae");

var $kIEMX = parcelRequire("kIEMX");

var $inmHT = parcelRequire("inmHT");

var $i6jKH = parcelRequire("i6jKH");

var $hBgCm = parcelRequire("hBgCm");

var $a7G5r = parcelRequire("a7G5r");
const $880c7efba8190020$var$_tmpl$ = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex gap-2"></div>`, 2), $880c7efba8190020$var$_tmpl$2 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mt-16 flex w-full justify-center rounded-full text-xl">You have no events yet.</div>`, 2), $880c7efba8190020$var$_tmpl$3 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="relative flex flex-col gap-4"><div class="sticky top-0 z-[1] flex items-center justify-between rounded-md bg-[var(--bg-900)] p-2"><div class="text-lg font-bold">Events</div></div><div class="mt-4 flex justify-end gap-2"></div></div>`, 8), $880c7efba8190020$var$_tmpl$4 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="flex flex-col gap-2 p-4"></div>`, 2), $880c7efba8190020$var$_tmpl$5 = /*#__PURE__*/ (0, $f4ihl.template)(`<button class="ml-2"></button>`, 2), $880c7efba8190020$var$_tmpl$6 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="mb-1 flex w-full items-start justify-between gap-2"><div class="flex gap-2"><div class="ml-2 flex flex-col justify-center space-y-1"></div></div></div>`, 6), $880c7efba8190020$var$_tmpl$7 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="space-y-4"><p>Events are triggers when:</p><ul class="list-inside list-disc"><li><code>Greeting</code>: The very first time the user starts a chat</li><li><code>Manual Trigger</code>: When the user uses the <i>Trigger Event</i> menu in the chat</li><li><code>Chat Opened</code>: When the user opens a chat with a character after some time</li><li><code>Message Received</code>: When the character writes something</li></ul><p>Whenever an event is triggered, a prompt will be sent to the character.</p><ul class="list-inside list-disc"><li><code>World</code>: The event will be shown as if something happened independently of the character.</li><li><code>Character</code>: The event will be shown as if the character wrote it, for example if the character does something.</li><li><code>Hidden</code>: The event will be hidden from the user. This is useful to make the character do something, and make it look like it was on their own initiative.</li><li><code>OOC</code>: The event will be hidden from the character. This is useful to give information or clues to the user.</li></ul><p>The prompt text will have processing.</p><ul class="list-inside list-disc"><li>The <code>{{char}}</code> and <code>{{user}}</code> placeholders will be replaced</li><li>Any text with <code>(OOC: TEXT)</code> will be hidden from the user, so you can add additional instructions for the character.</li><li>It is recommended to wrap your text in <code>*asterisks*</code> unless you want the character to <i>say</i> the prompt text.</li></ul><p>Finally, you can use the states to control which events are triggered under which conditions. The chat will keep track of a list of <i>states</i>, which can be assigned by events.</p><ul class="list-inside list-disc"><li>Required states are states that must exist in the chat to allow the trigger to run. You can also prefix a required state by <code>!</code> to require the state <i>not</i> to exist in the chat for the event to run. You can specify multiple states by separating them with a comma.</li><li>Assigned states are states that will be added to the chat whenever the event is triggered. You can also prefix an assigned state by <code>!</code> to <i>remove</i> the state from the chat. You can specify multiple states by separating them with a comma.</li></ul><p>When multiple events can run, they will be randomly selected.</p></div>`, 84), $880c7efba8190020$var$_tmpl$8 = /*#__PURE__*/ (0, $f4ihl.template)(`<div class="text-lg font-bold">Scenario Events Help</div>`, 2);
const $880c7efba8190020$var$eventTypeOptions = [
    {
        value: "hidden",
        label: "Hidden (not shown to the user)"
    },
    {
        value: "world",
        label: "World (shown, external to the character)"
    },
    {
        value: "character",
        label: "Character (shown, thought or action by the character)"
    },
    {
        value: "ooc",
        label: "Out Of Character (only visible by the user)"
    }
];
const $880c7efba8190020$var$triggerTypeOptions = [
    {
        value: "onGreeting",
        label: "Greeting"
    },
    {
        value: "onManualTrigger",
        label: "Manual Trigger"
    },
    {
        value: "onChatOpened",
        label: "Chat Opened"
    },
    {
        value: "onCharacterMessageReceived",
        label: "Message Received"
    }
];
const $880c7efba8190020$var$EditScenarioEvents = (props)=>{
    const nav = (0, $fNpXe.useNavigate)();
    const state = (0, $6uY8b.scenarioStore)((x)=>({
            loading: x.loading,
            scenario: x.scenarios.find((s)=>s._id === props.editId)
        }));
    const [entries, setEntries] = (0, $6TTLi.createSignal)([]);
    const availableStates = (0, $6TTLi.createMemo)(()=>{
        const states = new Set();
        for (const entry of entries())for (const state of entry.assigns.concat(entry.requires)){
            if (state.startsWith("!")) continue;
            states.add(state);
        }
        for (const state of Array.from(states))states.add(`!${state}`);
        return Array.from(states);
    });
    (0, $6TTLi.onMount)(()=>{
        (0, $6uY8b.scenarioStore).getAll();
    });
    const invalidStates = (0, $6TTLi.createMemo)(()=>{
        const bad = new Set();
        const mod = availableStates();
        const set = new Set(mod);
        for (const entry of entries()){
            const both = entry.requires.concat(entry.assigns);
            for (const tag of both)if (!set.has(tag)) bad.add(tag);
        }
        return Array.from(bad.keys());
    });
    (0, $6TTLi.createEffect)(()=>{
        setEntries(state.scenario?.entries || []);
    });
    const updateEntry = (index, update)=>{
        setEntries((prev)=>{
            return prev.map((entry, i)=>index !== i ? entry : {
                    ...entry,
                    ...update
                });
        });
    };
    const addEntry = ()=>{
        const requiresGreeting = state.scenario?.overwriteCharacterScenario && !entries().some((e)=>e.trigger.kind === "onGreeting");
        const newEvent = {
            name: requiresGreeting ? "Greeting" : "",
            type: "world",
            text: "",
            requires: [],
            assigns: [],
            trigger: requiresGreeting ? {
                kind: "onGreeting"
            } : {
                kind: "onManualTrigger",
                probability: 1
            }
        };
        setEntries([
            ...entries(),
            newEvent
        ]);
    };
    const moveItem = (index, direction)=>{
        const newItems = [
            ...entries()
        ];
        const itemToMove = newItems.splice(index, 1)[0];
        newItems.splice(index + direction, 0, itemToMove);
        setEntries(newItems);
    };
    const removeEntry = (entry)=>{
        setEntries(entries().filter((e)=>e !== entry));
    };
    const changeTriggerKind = (entry, kind)=>{
        let trigger;
        switch(kind){
            case "onGreeting":
                trigger = {
                    kind: "onGreeting"
                };
                break;
            case "onManualTrigger":
                trigger = {
                    kind: "onManualTrigger",
                    probability: 1
                };
                break;
            case "onChatOpened":
                trigger = {
                    kind: "onChatOpened",
                    awayHours: 2
                };
                break;
            case "onCharacterMessageReceived":
                trigger = {
                    kind: "onCharacterMessageReceived",
                    minMessagesSinceLastEvent: 5
                };
                break;
        }
        const newEntry = {
            ...entry,
            trigger: trigger
        };
        setEntries(entries().map((e)=>e === entry ? newEntry : e));
    };
    const onSubmit = ()=>{
        if (!state.scenario) return;
        const body = (0, $kIEMX.getStrictForm)(props.form, {
            name: "string",
            description: "string?",
            text: "string",
            overwriteCharacterScenario: "boolean",
            instructions: "string?"
        });
        const inputs = (0, $kIEMX.getForm)(props.form);
        const ents = entries();
        for(let i = 0; i < ents.length; i++){
            const entry = ents[i];
            entry.name = inputs["name." + i];
            entry.text = inputs["text." + i];
            entry.type = inputs["type." + i];
            entry.trigger.kind = inputs["trigger-kind." + i];
            switch(entry.trigger.kind){
                case "onManualTrigger":
                    entry.trigger.probability = +inputs["trigger-probability." + i];
                    break;
                case "onCharacterMessageReceived":
                    entry.trigger.minMessagesSinceLastEvent = +inputs["trigger-minMessagesSinceLastEvent." + i];
                    break;
                case "onChatOpened":
                    entry.trigger.awayHours = +inputs["trigger-awayHours." + i];
                    break;
            }
        }
        const update = {
            name: body.name,
            description: body.description,
            text: body.text,
            states: [],
            overwriteCharacterScenario: body.overwriteCharacterScenario,
            instructions: body.instructions,
            entries: ents
        };
        (0, $6uY8b.scenarioStore).update(state.scenario._id, update);
    };
    return [
        (0, $6TTLi.createComponent)($880c7efba8190020$var$EventsHelp, {}),
        (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
            label: "States Used",
            helperText: "The states you have used in your events so far"
        }),
        (()=>{
            const _el$ = $880c7efba8190020$var$_tmpl$.cloneNode(true);
            (0, $f4ihl.insert)(_el$, (0, $6TTLi.createComponent)((0, $6TTLi.For), {
                get each () {
                    return availableStates();
                },
                children: (state)=>{
                    if (state.startsWith("!")) return null;
                    return (0, $6TTLi.createComponent)((0, $a7G5r.Pill), {
                        type: "hl",
                        children: state
                    });
                }
            }));
            return _el$;
        })(),
        (()=>{
            const _el$2 = $880c7efba8190020$var$_tmpl$3.cloneNode(true), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$3.nextSibling;
            (0, $f4ihl.insert)(_el$3, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: addEntry,
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Plus), {}),
                        " Create Event"
                    ];
                }
            }), null);
            (0, $f4ihl.insert)(_el$2, (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                            get when () {
                                return !entries().length;
                            },
                            get children () {
                                return $880c7efba8190020$var$_tmpl$2.cloneNode(true);
                            }
                        }),
                        (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                            when: true,
                            get children () {
                                return (0, $6TTLi.createComponent)((0, $6TTLi.Index), {
                                    get each () {
                                        return entries();
                                    },
                                    children: (entry, index)=>(0, $6TTLi.createComponent)((0, $hOKUV.default), {
                                            get open () {
                                                return !entry().text;
                                            },
                                            get title () {
                                                return (()=>{
                                                    const _el$8 = $880c7efba8190020$var$_tmpl$6.cloneNode(true), _el$9 = _el$8.firstChild, _el$10 = _el$9.firstChild;
                                                    (0, $f4ihl.insert)(_el$8, (0, $6TTLi.createComponent)((0, $jFE3H.default), {
                                                        fieldName: `name.${index}`,
                                                        required: true,
                                                        "class": "border-[1px]",
                                                        parentClass: "w-full",
                                                        get value () {
                                                            return entry().name;
                                                        },
                                                        placeholder: 'Event name, e.g. "Greeting"',
                                                        onChange: (ev)=>updateEntry(index, {
                                                                name: ev.currentTarget.value
                                                            })
                                                    }), _el$9);
                                                    (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                                        when: index !== 0,
                                                        get children () {
                                                            const _el$11 = $880c7efba8190020$var$_tmpl$5.cloneNode(true);
                                                            _el$11.$$click = ()=>moveItem(index, -1);
                                                            (0, $f4ihl.insert)(_el$11, (0, $6TTLi.createComponent)((0, $4P0sz.ChevronUp), {
                                                                size: 16
                                                            }));
                                                            return _el$11;
                                                        }
                                                    }), null);
                                                    (0, $f4ihl.insert)(_el$10, (0, $6TTLi.createComponent)((0, $6TTLi.Show), {
                                                        get when () {
                                                            return index !== entries().length - 1;
                                                        },
                                                        get children () {
                                                            const _el$12 = $880c7efba8190020$var$_tmpl$5.cloneNode(true);
                                                            _el$12.$$click = ()=>moveItem(index, 1);
                                                            (0, $f4ihl.insert)(_el$12, (0, $6TTLi.createComponent)((0, $4P0sz.ChevronDown), {
                                                                size: 16
                                                            }));
                                                            return _el$12;
                                                        }
                                                    }), null);
                                                    (0, $f4ihl.insert)(_el$9, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                                                        schema: "clear",
                                                        "class": "icon-button",
                                                        onClick: ()=>removeEntry(entry()),
                                                        get children () {
                                                            return (0, $6TTLi.createComponent)((0, $4P0sz.X), {});
                                                        }
                                                    }), null);
                                                    return _el$8;
                                                })();
                                            },
                                            get children () {
                                                const _el$7 = $880c7efba8190020$var$_tmpl$4.cloneNode(true);
                                                (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                                    get children () {
                                                        return [
                                                            (0, $6TTLi.createComponent)((0, $3Evae.default), {
                                                                fieldName: `trigger-kind.${index}`,
                                                                label: "Trigger",
                                                                items: $880c7efba8190020$var$triggerTypeOptions,
                                                                get value () {
                                                                    return entry().trigger.kind;
                                                                },
                                                                onChange: (option)=>changeTriggerKind(entry(), option.value)
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                                                                label: "Required States",
                                                                helperText: "Which state(s) are required before this event can be triggered."
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $inmHT.default), {
                                                                fieldName: `requires.${index}`,
                                                                get disabled () {
                                                                    return entry().trigger.kind === "onGreeting";
                                                                },
                                                                get availableTags () {
                                                                    return availableStates();
                                                                },
                                                                get value () {
                                                                    return entry().requires || [];
                                                                },
                                                                placeholder: "States required to trigger",
                                                                onSelect: (ev)=>updateEntry(index, {
                                                                        requires: ev
                                                                    })
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                                                                label: "States to Assign",
                                                                helperText: "When triggered, which states will be assigned to the chat"
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $inmHT.default), {
                                                                fieldName: `assigns.${index}`,
                                                                get availableTags () {
                                                                    return availableStates();
                                                                },
                                                                get value () {
                                                                    return entry().assigns;
                                                                },
                                                                placeholder: "States to add when triggered",
                                                                onSelect: (ev)=>updateEntry(index, {
                                                                        assigns: ev
                                                                    })
                                                            })
                                                        ];
                                                    }
                                                }), null);
                                                (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                                    get children () {
                                                        return (0, $6TTLi.createComponent)((0, $3Evae.default), {
                                                            fieldName: `type.${index}`,
                                                            label: "Type",
                                                            helperText: "How will this event be shown to the user.",
                                                            items: $880c7efba8190020$var$eventTypeOptions,
                                                            get value () {
                                                                return entry().type;
                                                            },
                                                            onChange: (ev)=>updateEntry(index, {
                                                                    type: ev.value
                                                                })
                                                        });
                                                    }
                                                }), null);
                                                (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $hBgCm.FormLabel), {
                                                    label: "Prompt Text",
                                                    helperText: "The prompt text to send whenever this event occurs. The (OOC: something) text will be hidden from the user."
                                                }), null);
                                                (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $i6jKH.default), {
                                                    fieldName: `text.${index}`,
                                                    showHelp: true,
                                                    placeholder: "*{{char}} suddenly remembers something important to say to {{user}}!* (OOC: Make up a personal memory with {{user}}.)",
                                                    hideHelperText: true,
                                                    noDummyPreview: true,
                                                    get value () {
                                                        return entry().text;
                                                    },
                                                    onChange: (ev)=>updateEntry(index, {
                                                            text: ev
                                                        }),
                                                    include: [
                                                        "char",
                                                        "user",
                                                        "random",
                                                        "roll",
                                                        "idle_duration",
                                                        "chat_age"
                                                    ]
                                                }), null);
                                                (0, $f4ihl.insert)(_el$7, (0, $6TTLi.createComponent)((0, $6TTLi.Switch), {
                                                    get children () {
                                                        return [
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                                                get when () {
                                                                    return entry().trigger.kind === "onGreeting";
                                                                },
                                                                get children () {
                                                                    return (0, $6TTLi.createComponent)((0, $a7G5r.TitleCard), {
                                                                        children: "Automatically sent when starting a new chat."
                                                                    });
                                                                }
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                                                get when () {
                                                                    return entry().trigger.kind === "onManualTrigger";
                                                                },
                                                                get children () {
                                                                    return (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                                                        get children () {
                                                                            return (0, $6TTLi.createComponent)((0, $888ae.default), {
                                                                                fieldName: `trigger-probability.${index}`,
                                                                                label: "Probability",
                                                                                helperText: "Manual triggers will be randomly selected, with higher probability for higher values.",
                                                                                get value () {
                                                                                    return entry().trigger.probability;
                                                                                },
                                                                                min: 0,
                                                                                max: 100,
                                                                                step: 0.01,
                                                                                onChange: (ev)=>updateEntry(index, {
                                                                                        trigger: {
                                                                                            kind: "onManualTrigger",
                                                                                            probability: ev
                                                                                        }
                                                                                    })
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                                                get when () {
                                                                    return entry().trigger.kind === "onChatOpened";
                                                                },
                                                                get children () {
                                                                    return (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                                                        get children () {
                                                                            return (0, $6TTLi.createComponent)((0, $888ae.default), {
                                                                                fieldName: `trigger-awayHours.${index}`,
                                                                                label: "After (hours)",
                                                                                helperText: "After how many hours should this trigger be activated? The longest trigger will be selected.",
                                                                                get value () {
                                                                                    return entry().trigger.awayHours;
                                                                                },
                                                                                min: 0,
                                                                                max: 168,
                                                                                step: 1,
                                                                                onChange: (ev)=>updateEntry(index, {
                                                                                        trigger: {
                                                                                            kind: "onChatOpened",
                                                                                            awayHours: ev
                                                                                        }
                                                                                    })
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            }),
                                                            (0, $6TTLi.createComponent)((0, $6TTLi.Match), {
                                                                get when () {
                                                                    return entry().trigger.kind === "onCharacterMessageReceived";
                                                                },
                                                                get children () {
                                                                    return (0, $6TTLi.createComponent)((0, $a7G5r.Card), {
                                                                        get children () {
                                                                            return (0, $6TTLi.createComponent)((0, $888ae.default), {
                                                                                fieldName: `trigger-minMessagesSinceLastEvent.${index}`,
                                                                                label: "After (messages since last event)",
                                                                                helperText: "After how many message should this trigger be activated? The shortest trigger will be selected.",
                                                                                get value () {
                                                                                    return entry().trigger.minMessagesSinceLastEvent;
                                                                                },
                                                                                min: 2,
                                                                                max: 100,
                                                                                step: 1,
                                                                                onChange: (ev)=>updateEntry(index, {
                                                                                        trigger: {
                                                                                            kind: "onCharacterMessageReceived",
                                                                                            minMessagesSinceLastEvent: ev
                                                                                        }
                                                                                    })
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            })
                                                        ];
                                                    }
                                                }), null);
                                                return _el$7;
                                            }
                                        })
                                });
                            }
                        })
                    ];
                }
            }), _el$6);
            (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: ()=>nav(`/memory?tab=1`),
                schema: "secondary",
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.X), {}),
                        "Cancel"
                    ];
                }
            }), null);
            (0, $f4ihl.insert)(_el$6, (0, $6TTLi.createComponent)((0, $2qUsD.default), {
                onClick: onSubmit,
                get disabled () {
                    return state.loading || invalidStates().length > 0;
                },
                get children () {
                    return [
                        (0, $6TTLi.createComponent)((0, $4P0sz.Save), {}),
                        "Update"
                    ];
                }
            }), null);
            return _el$2;
        })()
    ];
};
var $880c7efba8190020$export$2e2bcd8739ae039 = $880c7efba8190020$var$EditScenarioEvents;
const $880c7efba8190020$var$EventsHelp = ()=>{
    return (0, $6TTLi.createComponent)((0, $hOKUV.default), {
        "class": "mb-2 bg-[var(--bg-800)]",
        open: false,
        titleClickOpen: true,
        get title () {
            return $880c7efba8190020$var$_tmpl$8.cloneNode(true);
        },
        get children () {
            return $880c7efba8190020$var$_tmpl$7.cloneNode(true);
        }
    });
};
(0, $f4ihl.delegateEvents)([
    "click"
]);

});



//# sourceMappingURL=EditScenario.da052a76.js.map

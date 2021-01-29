import { MarkupKind, CompletionItemKind } from "vscode-languageserver";

export const HalcmdManpage = [{
    label: "loadrt",
    kind: CompletionItemKind.Function,
    detail: "loadrt modname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(load realtime module)_ Loads a realtime HAL module called `modname`. halcmd looks for the module in a directory specified at compile time.',
            'In systems with realtime, halcmd calls the linuxcnc_module_helper to load realtime modules. linuxcnc_module_helper is a setuid program and is compiled with a whitelist of modules it is allowed to load. This is currently just a list of LinuxCNC-related modules. The linuxcnc_module_helper execs insmod, so return codes and error messages are those from insmod. Administrators who wish to restrict which users can load these LinuxCNC-related kernel modules can do this by setting the permissions and group on linuxcnc_module_helper appropriately.',
            'In systems without realtime halcmd calls the rtapi_app which creates the simulated realtime environment if it did not yet exist, and then loads the requested component with a call to dlopen(3).'
        ].join('\n')
    },
}, {
    label: "unloadrt",
    kind: CompletionItemKind.Function,
    detail: "unloadrt modname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(unload realtime module)_ Unloads a realtime HAL module called modname. If modname is "all", it will unload all currently loaded realtime HAL modules. unloadrt also works by execing linuxcnc_module_helper or rtapi_app, just like loadrt.'
        ].join('\n')
    }
}, {
    label: "loadusr",
    kind: CompletionItemKind.Function,
    detail: "loadusr [flags] unix-command",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(load Userspace component)_ Executes the given unix-command, usually to load a userspace component.',
            '[flags] may be one or more of:',
            '',
            ' * −W to wait for the component to become ready. The component is assumed to have the same name as the first argument of the command.',
            ' * −Wn name to wait for the component, which will have the given name.',
            ' * −w to wait for the program to exit',
            ' * −i to ignore the program return value (with −w)'
        ].join('\n')
    }
}, {
    label: "waitusr",
    kind: CompletionItemKind.Function,
    detail: "waitusr name",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(wait for Userspace component)_ Waits for user space component name to disconnect from HAL (usually on exit). The component must already be loaded. Useful near the end of a HAL file to wait until the user closes some user interface component before cleaning up and exiting.'
        ].join('\n')
    }
}, {
    label: "unloadusr",
    kind: CompletionItemKind.Function,
    detail: "unloadusr compname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(unload Userspace component)_ Unloads a userspace component called compname. If compname is "all", it will unload all userspace components. unloadusr works by sending SIGTERM to all userspace components.'
        ].join('\n')
    }
}, {
    label: "unload",
    kind: CompletionItemKind.Function,
    detail: "unload compname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Unloads a userspace component or realtime module. If compname is "all", it will unload all userspace components and realtime modules.'
        ].join('\n')
    }
}, {
    label: "newsig",
    kind: CompletionItemKind.Function,
    detail: "newsig signame type",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '**(OBSOLETE - use net instead)** _(new signal)_ Creates a new HAL signal called signame that may later be used to connect two or more HAL component pins. type is the data type of the new signal, and must be one of "bit", "s32", "u32", or "float". Fails if a signal of the same name already exists.'
        ].join('\n')
    },
    deprecated: true
}, {
    label: "delsig",
    kind: CompletionItemKind.Function,
    detail: "delsig signame",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '(delete signal) Deletes HAL signal signame. Any pins currently linked to the signal will be unlinked. Fails if signame does not exist.'
        ].join('\n')
    }
}, {
    label: "sets",
    kind: CompletionItemKind.Function,
    detail: "sets signame value",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '(set signal) Sets the value of signal signame to value. Fails if signame does not exist, if it already has a writer, or if value is not a legal value. Legal values depend on the signals’s type.'
        ].join('\n')
    }
}, {
    label: "stype",
    kind: CompletionItemKind.Function,
    detail: "stype name",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '(signal type) Gets the type of signal name. Fails if name does not exist as a signal.'
        ].join('\n')
    }
}, {
    label: "gets",
    kind: CompletionItemKind.Function,
    detail: "gets signame",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '(get signal) Gets the value of signal signame. Fails if signame does not exist.'
        ].join('\n')
    }
}, {
    label: "linkps",
    kind: CompletionItemKind.Function,
    detail: "linkps pinname [arrow] signame",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '**(OBSOLETE - use net instead)** _(link pin to signal)_ Establishs a link between a HAL component pin pinname and a HAL signal signame. Any previous link to pinname will be broken. arrow can be "=>", "<=", "<=>", or omitted. halcmd ignores arrows, but they can be useful in command files to document the direction of data flow. Arrows should not be used on the command line since the shell might try to interpret them. Fails if either pinname or signame does not exist, or if they are not the same type type.'
        ].join('\n')
    },
    deprecated: true
}, {
    label: "linksp",
    kind: CompletionItemKind.Function,
    detail: "linksp signame [arrow] pinname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '**(OBSOLETE - use net instead)** _(link signal to pin)_ Works like linkps but reverses the order of the arguments. halcmd treats both link commands exactly the same. Use whichever you prefer.'
        ].join('\n')
    },
    deprecated: true
}, {
    label: "linkpp",
    kind: CompletionItemKind.Function,
    detail: "linkpp pinname1 [arrow] pinname2",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '**(OBSOLETE - use net instead)** _(link pin to pin)_ Shortcut for linkps that creates the signal (named like the first pin), then links them both to that signal. halcmd treats this just as if it were:',
            ' * halcmd newsig pinname1',
            ' * halcmd linksp pinname1 pinname1',
            ' * halcmd linksp pinname1 pinname2',
        ].join('\n')
    },
    deprecated: true
}, {
    label: "net",
    kind: CompletionItemKind.Function,
    detail: "net signame pinname ...",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Create signname to match the type of pinname if it does not yet exist. Then, link signame to each pinname in turn. Arrows may be used as in linkps. When linking a pin to a signal for the first time, the signal value will inherit the pin’s default value.'
        ].join('\n')
    }
}, {
    label: "unlinkp",
    kind: CompletionItemKind.Function,
    detail: "unlinkp pinname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(unlink pin)_ Breaks any previous link to pinname. Fails if pinname does not exist. An unlinked pin will retain the last value of the signal it was linked to.'
        ].join('\n')
    }
}, {
    label: "setp",
    kind: CompletionItemKind.Function,
    detail: "setp name value",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(set parameter or pin)_ Sets the value of parameter or pin name to value. Fails if name does not exist as a pin or parameter, if it is a parameter that is not writable, if it is a pin that is an output, if it is a pin that is already attached to a signal, or if value is not a legal value. Legal values depend on the type of the pin or parameter. If a pin and a parameter both exist with the given name, the parameter is acted on.',
            '```linuxcnc-hal',
            '   paramname = value',
            '   pinname = value',
            '```',
            'Identical to setp. This alternate form of the command may be more convenient and readable when used in a file.'
        ].join('\n')
    }
}, {
    label: "ptype",
    kind: CompletionItemKind.Function,
    detail: "ptype name",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(parameter or pin type)_ Gets the type of parameter or pin name. Fails if name does not exist as a pin or parameter. If a pin and a parameter both exist with the given name, the parameter is acted on.'
        ].join('\n')
    }
}, {
    label: "getp",
    kind: CompletionItemKind.Function,
    detail: "getp name",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(get parameter or pin)_ Gets the value of parameter or pin name. Fails if name does not exist as a pin or parameter. If a pin and a parameter both exist with the given name, the parameter is acted on.'
        ].join('\n')
    }
}, {
    label: "addf",
    kind: CompletionItemKind.Function,
    detail: "addf functname threadname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(add function)_ Adds function functname to realtime thread threadname. functname will run after any functions that were previously added to the thread. Fails if either functname or threadname does not exist, or if they are incompatible.'
        ].join('\n')
    }
}, {
    label: "delf",
    kind: CompletionItemKind.Function,
    detail: "delf functname threadname",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            '_(delete function)_ Removes function functname from realtime thread threadname. Fails if either functname or threadname does not exist, or if functname is not currently part of threadname.'
        ].join('\n')
    }
}, {
    label: "start",
    kind: CompletionItemKind.Function,
    detail: "start",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Starts execution of realtime threads. Each thread periodically calls all of the functions that were added to it with the addf command, in the order in which they were added.'
        ].join('\n')
    }
}, {
    label: "stop",
    kind: CompletionItemKind.Function,
    detail: "stop",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Stops execution of realtime threads. The threads will no longer call their functions.'
        ].join('\n')
    }
}, {
    label: "show",
    kind: CompletionItemKind.Function,
    detail: "show [item]",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Prints HAL items to stdout in human readable format. item can be one of "comp" (components), "pin", "sig" (signals), "param" (parameters), "funct" (functions), "thread", or "alias". The type "all" can be used to show matching items of all the preceding types. If item is omitted, show will print everything.'
        ].join('\n')
    }
}, {
    label: "item",
    kind: CompletionItemKind.Function,
    detail: "item",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'This is equivalent to `show all [item].`'
        ].join('\n')
    }
}, {
    label: "save",
    kind: CompletionItemKind.Function,
    detail: "save [item]",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Prints HAL items to stdout in the form of HAL commands. These commands can be redirected to a file and later executed using halcmd −f to restore the saved configuration. item can be one of the following:',

            '"comp" generates a loadrt command for realtime component.',

            '"alias" generates an alias command for each pin or parameter alias pairing',

            '"sig" (or "signal") generates a newsig command for each signal, and "sigu" generates a newsig command for each unlinked signal (for use with netl and netla).',

            '"link" and "linka" both generate linkps commands for each link. (linka includes arrows, while link does not.)',

            '"net" and "neta" both generate one newsig command for each signal, followed by linksp commands for each pin linked to that signal. (neta includes arrows.)',

            '"netl" generates one net command for each linked signal, and "netla" (or "netal") generates a similar command using arrows.',

            '"param" (or "parameter) "generates one setp command for each parameter.',

            '"thread" generates one addf command for each function in each realtime thread.',

            'If item is omitted (or all), save does the equivalent of comp, alias, sigu, netla, param, and thread.'
        ].join('\n')
    }
}, {
    label: "source",
    kind: CompletionItemKind.Function,
    detail: "source filename.hal",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Execute the commands from filename.hal.'
        ].join('\n')
    }
}, {
    label: "alias",
    kind: CompletionItemKind.Function,
    detail: "alias type name alias",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Assigns "alias" as a second name for the pin or parameter "name". For most operations, an alias provides a second name that can be used to refer to a pin or parameter, both the original name and the alias will work.',
            '"type" must be pin or param.',
            '"name" must be an existing name or alias of the specified type.'
        ].join('\n')
    }
}, {
    label: "unalias",
    kind: CompletionItemKind.Function,
    detail: "unalias type alias",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Removes any alias from the pin or parameter alias.',
            '"type" must be pin or param',
            '"alias" must be an existing name or alias of the specified type.'
        ].join('\n')
    }
}, {
    label: "list",
    kind: CompletionItemKind.Function,
    detail: "list type [pattern]",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Prints the names of HAL items of the specified type.',
            '’type’ is ’comp’, ’pin’, ’sig’, ’param’, ’funct’, or',
            '’thread’. If ’pattern’ is specified it prints only',
            'those names that match the pattern, which may be a',
            '’shell glob’.',
            'For ’sig’, ’pin’ and ’param’, the first pattern may be',
            '−tdatatype where datatype is the data type (e.g., ’float’)',
            'in this case, the listed pins, signals, or parameters',
            'are restricted to the given data type',
            'Names are printed on a single line, space separated.'
        ].join('\n')
    }
}, {
    label: "lock",
    kind: CompletionItemKind.Function,
    detail: "lock [all|tune|none]",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [
            'Locks HAL to some degree.',
            'none - no locking done.',
            'tune - some tuning is possible (setp & such).',
            'all - HAL completely locked.'
        ].join('\n')
    }
}, {
    label: "unlock",
    kind: CompletionItemKind.Function,
    detail: "unlock [all|tune]",
    documentation: {
        kind: MarkupKind.Markdown,
        value: [

            'Unlocks HAL to some degree.',
            'tune - some tuning is possible (setp & such).',
            'all - HAL completely unlocked.'].join('\n')
    }
}
];
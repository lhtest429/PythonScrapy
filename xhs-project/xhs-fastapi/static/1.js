var v_saf;
!function () {
    var n = Function.toString, t = [], i = [], o = [].indexOf.bind(t), e = [].push.bind(t), r = [].push.bind(i);

    function u(n, t) {
        return -1 == o(n) && (e(n), r(`function ${t || n.name || ""}() { [native code] }`)), n
    }

    Object.defineProperty(Function.prototype, "toString", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
            return "function" == typeof this && i[o(this)] || n.call(this)
        }
    }), u(Function.prototype.toString, "toString"), v_saf = u
}();


function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
        constructor: {value: t, writable: !0, configurable: !0}
    }), e && Object.setPrototypeOf(t, e)
}

Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() {
        return Object.getPrototypeOf(this).constructor.name
    }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function () {
    if (!v_new_toggle) {
        v_console_logger.apply(this, arguments)
    }
}
var v_random = (function () {
    var seed = 276951438;
    return function random() {
        return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)
    }
})()
var v_new = function (v) {
    var temp = v_new_toggle;
    v_new_toggle = true;
    var r = new v;
    v_new_toggle = temp;
    return r
}


MutationRecord = v_saf(function MutationRecord() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
NodeList = v_saf(function NodeList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
EventTarget = v_saf(function EventTarget() {
    ;
})
HTMLCollection = v_saf(function HTMLCollection() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceTiming = v_saf(function PerformanceTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
HTMLAllCollection = v_saf(function HTMLAllCollection() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Navigator = v_saf(function Navigator() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;this._plugins = typeof PluginArray == 'undefined' ? [] : v_new(PluginArray);
    this._mimeTypes = typeof MimeTypeArray == 'undefined' ? [] : v_new(MimeTypeArray)
})
MessageChannel = v_saf(function MessageChannel() {
    ;
})
webkitURL = v_saf(function webkitURL() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
URLSearchParams = v_saf(function URLSearchParams() {
    ;
})
Crypto = v_saf(function Crypto() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
    this.getRandomValues = function () {
        v_console_log('  [*] Crypto -> getRandomValues[func]')
        var e = arguments[0];
        return e.map(function (x, i) {
            return e[i] = v_random() * 1073741824
        });
    }
    this.randomUUID = function () {
        v_console_log('  [*] Crypto -> randomUUID[func]')

        function get2() {
            return (v_random() * 255 ^ 0).toString(16).padStart(2, '0')
        }

        function rpt(func, num) {
            var r = [];
            for (var i = 0; i < num; i++) {
                r.push(func())
            }
            ;
            return r.join('')
        }

        return [rpt(get2, 4), rpt(get2, 2), rpt(get2, 2), rpt(get2, 2), rpt(get2, 6)].join('-')
    }
})
Storage = v_saf(function Storage() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
DOMParser = v_saf(function DOMParser() {
    ;
})
Permissions = v_saf(function Permissions() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
WebGLRenderingContext = v_saf(function WebGLRenderingContext() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;

    function WebGLBuffer() {
    }

    function WebGLProgram() {
    }

    function WebGLShader() {
    }

    this._toggle = {}
    this.createBuffer = function () {
        v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]');
        return v_new(WebGLBuffer)
    }
    this.createProgram = function () {
        v_console_log('  [*] WebGLRenderingContext -> createProgram[func]');
        return v_new(WebGLProgram)
    }
    this.createShader = function () {
        v_console_log('  [*] WebGLRenderingContext -> createShader[func]');
        return v_new(WebGLShader)
    }
    this.getSupportedExtensions = function () {
        v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
        return [
            "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
            "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
            "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
            "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
            "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw",
        ]
    }
    var self = this
    this.getExtension = function (key) {
        v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)

        class WebGLDebugRendererInfo {
            get UNMASKED_VENDOR_WEBGL() {
                self._toggle[37445] = 1;
                return 37445
            }

            get UNMASKED_RENDERER_WEBGL() {
                self._toggle[37446] = 1;
                return 37446
            }
        }

        class EXTTextureFilterAnisotropic {
        }

        class WebGLLoseContext {
            loseContext() {
            }

            restoreContext() {
            }
        }

        if (key == 'WEBGL_debug_renderer_info') {
            var r = new WebGLDebugRendererInfo
        }
        if (key == 'EXT_texture_filter_anisotropic') {
            var r = new EXTTextureFilterAnisotropic
        }
        if (key == 'WEBGL_lose_context') {
            var r = new WebGLLoseContext
        } else {
            var r = new WebGLDebugRendererInfo
        }
        return r
    }
    this.getParameter = function (key) {
        v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
        if (this._toggle[key]) {
            if (key == 37445) {
                return "Google Inc. (NVIDIA)"
            }
            if (key == 37446) {
                return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)"
            }
        } else {
            if (key == 33902) {
                return new Float32Array([1, 1])
            }
            if (key == 33901) {
                return new Float32Array([1, 1024])
            }
            if (key == 35661) {
                return 32
            }
            if (key == 34047) {
                return 16
            }
            if (key == 34076) {
                return 16384
            }
            if (key == 36349) {
                return 1024
            }
            if (key == 34024) {
                return 16384
            }
            if (key == 34930) {
                return 16
            }
            if (key == 3379) {
                return 16384
            }
            if (key == 36348) {
                return 30
            }
            if (key == 34921) {
                return 16
            }
            if (key == 35660) {
                return 16
            }
            if (key == 36347) {
                return 4095
            }
            if (key == 3386) {
                return new Int32Array([32767, 32767])
            }
            if (key == 3410) {
                return 8
            }
            if (key == 7937) {
                return "WebKit WebGL"
            }
            if (key == 35724) {
                return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)"
            }
            if (key == 3415) {
                return 0
            }
            if (key == 7936) {
                return "WebKit"
            }
            if (key == 7938) {
                return "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
            }
            if (key == 3411) {
                return 8
            }
            if (key == 3412) {
                return 8
            }
            if (key == 3413) {
                return 8
            }
            if (key == 3414) {
                return 24
            }
            return null
        }
    }
    this.getContextAttributes = function () {
        v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
        return {
            alpha: true,
            antialias: true,
            depth: true,
            desynchronized: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: false,
            xrCompatible: false,
        }
    }
    this.getShaderPrecisionFormat = function (a, b) {
        v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')

        function WebGLShaderPrecisionFormat() {
        }

        var r1 = v_new(WebGLShaderPrecisionFormat)
        r1.rangeMin = 127
        r1.rangeMax = 127
        r1.precision = 23
        var r2 = v_new(WebGLShaderPrecisionFormat)
        r2.rangeMin = 31
        r2.rangeMax = 30
        r2.precision = 0
        if (a == 35633 && b == 36338) {
            return r1
        }
        if (a == 35633 && b == 36337) {
            return r1
        }
        if (a == 35633 && b == 36336) {
            return r1
        }
        if (a == 35633 && b == 36341) {
            return r2
        }
        if (a == 35633 && b == 36340) {
            return r2
        }
        if (a == 35633 && b == 36339) {
            return r2
        }
        if (a == 35632 && b == 36338) {
            return r1
        }
        if (a == 35632 && b == 36337) {
            return r1
        }
        if (a == 35632 && b == 36336) {
            return r1
        }
        if (a == 35632 && b == 36341) {
            return r2
        }
        if (a == 35632 && b == 36340) {
            return r2
        }
        if (a == 35632 && b == 36339) {
            return r2
        }
        throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')
})
DOMTokenList = v_saf(function DOMTokenList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
History = v_saf(function History() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceObserver = v_saf(function PerformanceObserver() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
WebKitMutationObserver = v_saf(function WebKitMutationObserver() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
MutationObserver = v_saf(function MutationObserver() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Event = v_saf(function Event() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceEntry = v_saf(function PerformanceEntry() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PluginArray = v_saf(function PluginArray() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
    this[0] = v_new(Plugin);
    this[0].description = "Portable Document Format";
    this[0].filename = "internal-pdf-viewer";
    this[0].length = 1;
    this[0].name = "Chromium PDF Plugin";
    this[1] = v_new(Plugin);
    this[1].description = "";
    this[1].filename = "mhjfbmdgcfjbbpaeojofohoefgiehjai";
    this[1].length = 1;
    this[1].name = "Chromium PDF Viewer";
})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Image = v_saf(function Image() {
    ;
    return v_new(HTMLImageElement)
})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
DOMRectReadOnly = v_saf(function DOMRectReadOnly() {
    ;
})
ResizeObserver = v_saf(function ResizeObserver() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
NavigatorUAData = v_saf(function NavigatorUAData() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Plugin = v_saf(function Plugin() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
AudioParam = v_saf(function AudioParam() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
AudioBuffer = v_saf(function AudioBuffer() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
IntersectionObserver = v_saf(function IntersectionObserver() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
IntersectionObserverEntry = v_saf(function IntersectionObserverEntry() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Node = v_saf(function Node() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Node, EventTarget)
Performance = v_saf(function Performance() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Performance, EventTarget)
MessagePort = v_saf(function MessagePort() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(MessagePort, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(XMLHttpRequestEventTarget, EventTarget)
CustomEvent = v_saf(function CustomEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(CustomEvent, Event)
PermissionStatus = v_saf(function PermissionStatus() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PermissionStatus, EventTarget)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceResourceTiming, PerformanceEntry)
PromiseRejectionEvent = v_saf(function PromiseRejectionEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PromiseRejectionEvent, Event)
MediaQueryList = v_saf(function MediaQueryList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(MediaQueryList, EventTarget)
DOMRect = v_saf(function DOMRect() {
    ;
});
_inherits(DOMRect, DOMRectReadOnly)
UIEvent = v_saf(function UIEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(UIEvent, Event)
VisualViewport = v_saf(function VisualViewport() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(VisualViewport, EventTarget)
PageTransitionEvent = v_saf(function PageTransitionEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PageTransitionEvent, Event)
NetworkInformation = v_saf(function NetworkInformation() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(NetworkInformation, EventTarget)
Screen = v_saf(function Screen() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Screen, EventTarget)
BaseAudioContext = v_saf(function BaseAudioContext() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(BaseAudioContext, EventTarget)
AudioNode = v_saf(function AudioNode() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(AudioNode, EventTarget)
OfflineAudioCompletionEvent = v_saf(function OfflineAudioCompletionEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(OfflineAudioCompletionEvent, Event)
Element = v_saf(function Element() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Element, Node)
Document = v_saf(function Document() {
    ;
});
_inherits(Document, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest() {
    ;
});
_inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
CharacterData = v_saf(function CharacterData() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(CharacterData, Node)
MouseEvent = v_saf(function MouseEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(MouseEvent, UIEvent)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
AudioScheduledSourceNode = v_saf(function AudioScheduledSourceNode() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(AudioScheduledSourceNode, AudioNode)
DynamicsCompressorNode = v_saf(function DynamicsCompressorNode() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(DynamicsCompressorNode, AudioNode)
OfflineAudioContext = v_saf(function OfflineAudioContext() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(OfflineAudioContext, BaseAudioContext)
HTMLElement = v_saf(function HTMLElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLElement, Element)
OscillatorNode = v_saf(function OscillatorNode() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(OscillatorNode, AudioScheduledSourceNode)
SVGElement = v_saf(function SVGElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(SVGElement, Element)
HTMLCanvasElement = v_saf(function HTMLCanvasElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLCanvasElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;v_hook_href(this, 'HTMLAnchorElement', location.href)
});
_inherits(HTMLAnchorElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLMediaElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLScriptElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLImageElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLLinkElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLInputElement, HTMLElement)
HTMLButtonElement = v_saf(function HTMLButtonElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLButtonElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLIFrameElement, HTMLElement)
HTMLTemplateElement = v_saf(function HTMLTemplateElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLTemplateElement, HTMLElement)
Window = v_saf(function Window() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;Object.defineProperty(this, 'location', {
        get() {
            return location
        }
    })
});
_inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLBodyElement, HTMLElement)
MimeTypeArray = v_saf(function MimeTypeArray() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
    this[0] = v_new(Plugin);
    this[0].description = "";
    this[0].enabledPlugin = {"0": {}};
    this[0].suffixes = "pdf";
    this[0].type = "application/pdf";
    this[1] = v_new(Plugin);
    this[1].description = "Portable Document Format";
    this[1].enabledPlugin = {"0": {}};
    this[1].suffixes = "pdf";
    this[1].type = "application/x-google-chrome-pdf";
})
MimeType = v_saf(function MimeType() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Location = v_saf(function Location() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceElementTiming = v_saf(function PerformanceElementTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformancePaintTiming = v_saf(function PerformancePaintTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
HTMLUnknownElement = v_saf(function HTMLUnknownElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
TouchEvent = v_saf(function TouchEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(TouchEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PointerEvent, MouseEvent)
HTMLDivElement = v_saf(function HTMLDivElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLDivElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLStyleElement, HTMLElement)
Object.defineProperties(MutationRecord.prototype, {
    type: {
        get() {
            v_console_log("  [*] MutationRecord -> type[get]", "childList");
            return "childList"
        }
    },
    addedNodes: {
        get() {
            v_console_log("  [*] MutationRecord -> addedNodes[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "MutationRecord", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(NodeList.prototype, {
    length: {
        get() {
            v_console_log("  [*] NodeList -> length[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "NodeList", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(EventTarget.prototype, {
    dispatchEvent: {
        value: v_saf(function dispatchEvent() {
            v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));
        })
    },
    removeEventListener: {
        value: v_saf(function removeEventListener() {
            v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "EventTarget", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLCollection.prototype, {
    length: {
        get() {
            v_console_log("  [*] HTMLCollection -> length[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "HTMLCollection", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceTiming.prototype, {
    navigationStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1702522527971);
            return 1702522527971
        }
    },
    domainLookupEnd: {
        get() {
            v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", 1702522527984);
            return 1702522527984
        }
    },
    domainLookupStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", 1702522527984);
            return 1702522527984
        }
    },
    connectEnd: {
        get() {
            v_console_log("  [*] PerformanceTiming -> connectEnd[get]", 1702522527984);
            return 1702522527984
        }
    },
    connectStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> connectStart[get]", 1702522527984);
            return 1702522527984
        }
    },
    responseEnd: {
        get() {
            v_console_log("  [*] PerformanceTiming -> responseEnd[get]", 1702522528131);
            return 1702522528131
        }
    },
    requestStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> requestStart[get]", 1702522527987);
            return 1702522527987
        }
    },
    responseStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> responseStart[get]", 1702522528079);
            return 1702522528079
        }
    },
    domInteractive: {
        get() {
            v_console_log("  [*] PerformanceTiming -> domInteractive[get]", 1702522528167);
            return 1702522528167
        }
    },
    loadEventStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", 1702525249575);
            return 1702525249575
        }
    },
    domContentLoadedEventEnd: {
        get() {
            v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", 1702523332124);
            return 1702523332124
        }
    },
    redirectEnd: {
        get() {
            v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", 0);
            return 0
        }
    },
    redirectStart: {
        get() {
            v_console_log("  [*] PerformanceTiming -> redirectStart[get]", 0);
            return 0
        }
    },
    loadEventEnd: {
        get() {
            v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 0);
            return 0
        }
    },
    toJSON: {
        value: v_saf(function toJSON() {
            v_console_log("  [*] PerformanceTiming -> toJSON[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "PerformanceTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLAllCollection.prototype, {
    length: {
        get() {
            v_console_log("  [*] HTMLAllCollection -> length[get]", 391);
            return 391
        }
    },
    [Symbol.toStringTag]: {value: "HTMLAllCollection", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Navigator.prototype, {
    userAgent: {
        get() {
            v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.9 Safari/537.36");
            return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.9 Safari/537.36"
        }
    },
    product: {
        get() {
            v_console_log("  [*] Navigator -> product[get]", "Gecko");
            return "Gecko"
        }
    },
    webdriver: {
        get() {
            v_console_log("  [*] Navigator -> webdriver[get]", false);
            return false
        }
    },
    permissions: {
        get() {
            v_console_log("  [*] Navigator -> permissions[get]", {});
            return {}
        }
    },
    vendorSub: {
        get() {
            v_console_log("  [*] Navigator -> vendorSub[get]", "");
            return ""
        }
    },
    productSub: {
        get() {
            v_console_log("  [*] Navigator -> productSub[get]", "20030107");
            return "20030107"
        }
    },
    vendor: {
        get() {
            v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");
            return "Google Inc."
        }
    },
    maxTouchPoints: {
        get() {
            v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);
            return 0
        }
    },
    scheduling: {
        get() {
            v_console_log("  [*] Navigator -> scheduling[get]", {});
            return {}
        }
    },
    userActivation: {
        get() {
            v_console_log("  [*] Navigator -> userActivation[get]", {});
            return {}
        }
    },
    doNotTrack: {
        get() {
            v_console_log("  [*] Navigator -> doNotTrack[get]", "1");
            return "1"
        }
    },
    geolocation: {
        get() {
            v_console_log("  [*] Navigator -> geolocation[get]", {});
            return {}
        }
    },
    connection: {
        get() {
            v_console_log("  [*] Navigator -> connection[get]", {});
            return {}
        }
    },
    plugins: {
        get() {
            v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);
            return this._plugins || []
        }
    },
    mimeTypes: {
        get() {
            v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);
            return this._mimeTypes || []
        }
    },
    pdfViewerEnabled: {
        get() {
            v_console_log("  [*] Navigator -> pdfViewerEnabled[get]", true);
            return true
        }
    },
    webkitTemporaryStorage: {
        get() {
            v_console_log("  [*] Navigator -> webkitTemporaryStorage[get]", {});
            return {}
        }
    },
    webkitPersistentStorage: {
        get() {
            v_console_log("  [*] Navigator -> webkitPersistentStorage[get]", {});
            return {}
        }
    },
    hardwareConcurrency: {
        get() {
            v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 16);
            return 16
        }
    },
    cookieEnabled: {
        get() {
            v_console_log("  [*] Navigator -> cookieEnabled[get]", true);
            return true
        }
    },
    appCodeName: {
        get() {
            v_console_log("  [*] Navigator -> appCodeName[get]", "Mozilla");
            return "Mozilla"
        }
    },
    appName: {
        get() {
            v_console_log("  [*] Navigator -> appName[get]", "Netscape");
            return "Netscape"
        }
    },
    appVersion: {
        get() {
            v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.9 Safari/537.36");
            return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.9 Safari/537.36"
        }
    },
    platform: {
        get() {
            v_console_log("  [*] Navigator -> platform[get]", "Win32");
            return "Win32"
        }
    },
    language: {
        get() {
            v_console_log("  [*] Navigator -> language[get]", "zh-CN");
            return "zh-CN"
        }
    },
    languages: {
        get() {
            v_console_log("  [*] Navigator -> languages[get]", {});
            return {}
        }
    },
    onLine: {
        get() {
            v_console_log("  [*] Navigator -> onLine[get]", true);
            return true
        }
    },
    ink: {
        get() {
            v_console_log("  [*] Navigator -> ink[get]", {});
            return {}
        }
    },
    mediaCapabilities: {
        get() {
            v_console_log("  [*] Navigator -> mediaCapabilities[get]", {});
            return {}
        }
    },
    mediaSession: {
        get() {
            v_console_log("  [*] Navigator -> mediaSession[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "Navigator", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MessageChannel.prototype, {
    port2: {
        get() {
            v_console_log("  [*] MessageChannel -> port2[get]", {});
            return {}
        }
    },
    port1: {
        get() {
            v_console_log("  [*] MessageChannel -> port1[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "MessageChannel", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(webkitURL.prototype, {
    searchParams: {
        get() {
            v_console_log("  [*] webkitURL -> searchParams[get]", {});
            return {}
        }
    },
    pathname: {
        get() {
            v_console_log("  [*] webkitURL -> pathname[get]", "/explore");
            return "/explore"
        }, set() {
            v_console_log("  [*] webkitURL -> pathname[set]", [].slice.call(arguments));
            return "/explore"
        }
    },
    href: {
        get() {
            v_console_log("  [*] webkitURL -> href[get]", "https://edith.xiaohongshu.com/api/sns/web/racing_report");
            return "https://edith.xiaohongshu.com/api/sns/web/racing_report"
        }
    },
    username: {
        get() {
            v_console_log("  [*] webkitURL -> username[get]", "a");
            return "a"
        }
    },
    host: {
        get() {
            v_console_log("  [*] webkitURL -> host[get]", "x");
            return "x"
        }
    },
    hash: {
        get() {
            v_console_log("  [*] webkitURL -> hash[get]", "#%D0%B1");
            return "#%D0%B1"
        }
    },
    origin: {
        get() {
            v_console_log("  [*] webkitURL -> origin[get]", "https://edith.xiaohongshu.com");
            return "https://edith.xiaohongshu.com"
        }
    },
    [Symbol.toStringTag]: {value: "webkitURL", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(URLSearchParams.prototype, {
    forEach: {
        value: v_saf(function forEach() {
            v_console_log("  [*] URLSearchParams -> forEach[func]", [].slice.call(arguments));
        })
    },
    get: {
        value: v_saf(function get() {
            v_console_log("  [*] URLSearchParams -> get[func]", [].slice.call(arguments));
        })
    },
    toString: {
        value: v_saf(function toString() {
            v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "URLSearchParams", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Crypto.prototype, {
    [Symbol.toStringTag]: {value: "Crypto", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {value: "Storage", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DOMParser.prototype, {
    parseFromString: {
        value: v_saf(function parseFromString() {
            v_console_log("  [*] DOMParser -> parseFromString[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "DOMParser", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Permissions.prototype, {
    query: {
        value: v_saf(function query() {
            v_console_log("  [*] Permissions -> query[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "Permissions", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
    DEPTH_BUFFER_BIT: {"value": 256, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BUFFER_BIT: {"value": 1024, "writable": false, "enumerable": true, "configurable": false},
    COLOR_BUFFER_BIT: {"value": 16384, "writable": false, "enumerable": true, "configurable": false},
    POINTS: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    LINES: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    LINE_LOOP: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    LINE_STRIP: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    TRIANGLES: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    TRIANGLE_STRIP: {"value": 5, "writable": false, "enumerable": true, "configurable": false},
    TRIANGLE_FAN: {"value": 6, "writable": false, "enumerable": true, "configurable": false},
    ZERO: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    ONE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    SRC_COLOR: {"value": 768, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_SRC_COLOR: {"value": 769, "writable": false, "enumerable": true, "configurable": false},
    SRC_ALPHA: {"value": 770, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_SRC_ALPHA: {"value": 771, "writable": false, "enumerable": true, "configurable": false},
    DST_ALPHA: {"value": 772, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_DST_ALPHA: {"value": 773, "writable": false, "enumerable": true, "configurable": false},
    DST_COLOR: {"value": 774, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_DST_COLOR: {"value": 775, "writable": false, "enumerable": true, "configurable": false},
    SRC_ALPHA_SATURATE: {"value": 776, "writable": false, "enumerable": true, "configurable": false},
    FUNC_ADD: {"value": 32774, "writable": false, "enumerable": true, "configurable": false},
    BLEND_EQUATION: {"value": 32777, "writable": false, "enumerable": true, "configurable": false},
    BLEND_EQUATION_RGB: {"value": 32777, "writable": false, "enumerable": true, "configurable": false},
    BLEND_EQUATION_ALPHA: {"value": 34877, "writable": false, "enumerable": true, "configurable": false},
    FUNC_SUBTRACT: {"value": 32778, "writable": false, "enumerable": true, "configurable": false},
    FUNC_REVERSE_SUBTRACT: {"value": 32779, "writable": false, "enumerable": true, "configurable": false},
    BLEND_DST_RGB: {"value": 32968, "writable": false, "enumerable": true, "configurable": false},
    BLEND_SRC_RGB: {"value": 32969, "writable": false, "enumerable": true, "configurable": false},
    BLEND_DST_ALPHA: {"value": 32970, "writable": false, "enumerable": true, "configurable": false},
    BLEND_SRC_ALPHA: {"value": 32971, "writable": false, "enumerable": true, "configurable": false},
    CONSTANT_COLOR: {"value": 32769, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_CONSTANT_COLOR: {"value": 32770, "writable": false, "enumerable": true, "configurable": false},
    CONSTANT_ALPHA: {"value": 32771, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_CONSTANT_ALPHA: {"value": 32772, "writable": false, "enumerable": true, "configurable": false},
    BLEND_COLOR: {"value": 32773, "writable": false, "enumerable": true, "configurable": false},
    ARRAY_BUFFER: {"value": 34962, "writable": false, "enumerable": true, "configurable": false},
    ELEMENT_ARRAY_BUFFER: {"value": 34963, "writable": false, "enumerable": true, "configurable": false},
    ARRAY_BUFFER_BINDING: {"value": 34964, "writable": false, "enumerable": true, "configurable": false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value": 34965, "writable": false, "enumerable": true, "configurable": false},
    STREAM_DRAW: {"value": 35040, "writable": false, "enumerable": true, "configurable": false},
    STATIC_DRAW: {"value": 35044, "writable": false, "enumerable": true, "configurable": false},
    DYNAMIC_DRAW: {"value": 35048, "writable": false, "enumerable": true, "configurable": false},
    BUFFER_SIZE: {"value": 34660, "writable": false, "enumerable": true, "configurable": false},
    BUFFER_USAGE: {"value": 34661, "writable": false, "enumerable": true, "configurable": false},
    CURRENT_VERTEX_ATTRIB: {"value": 34342, "writable": false, "enumerable": true, "configurable": false},
    FRONT: {"value": 1028, "writable": false, "enumerable": true, "configurable": false},
    BACK: {"value": 1029, "writable": false, "enumerable": true, "configurable": false},
    FRONT_AND_BACK: {"value": 1032, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_2D: {"value": 3553, "writable": false, "enumerable": true, "configurable": false},
    CULL_FACE: {"value": 2884, "writable": false, "enumerable": true, "configurable": false},
    BLEND: {"value": 3042, "writable": false, "enumerable": true, "configurable": false},
    DITHER: {"value": 3024, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_TEST: {"value": 2960, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_TEST: {"value": 2929, "writable": false, "enumerable": true, "configurable": false},
    SCISSOR_TEST: {"value": 3089, "writable": false, "enumerable": true, "configurable": false},
    POLYGON_OFFSET_FILL: {"value": 32823, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value": 32926, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_COVERAGE: {"value": 32928, "writable": false, "enumerable": true, "configurable": false},
    NO_ERROR: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    INVALID_ENUM: {"value": 1280, "writable": false, "enumerable": true, "configurable": false},
    INVALID_VALUE: {"value": 1281, "writable": false, "enumerable": true, "configurable": false},
    INVALID_OPERATION: {"value": 1282, "writable": false, "enumerable": true, "configurable": false},
    OUT_OF_MEMORY: {"value": 1285, "writable": false, "enumerable": true, "configurable": false},
    CW: {"value": 2304, "writable": false, "enumerable": true, "configurable": false},
    CCW: {"value": 2305, "writable": false, "enumerable": true, "configurable": false},
    LINE_WIDTH: {"value": 2849, "writable": false, "enumerable": true, "configurable": false},
    ALIASED_POINT_SIZE_RANGE: {"value": 33901, "writable": false, "enumerable": true, "configurable": false},
    ALIASED_LINE_WIDTH_RANGE: {"value": 33902, "writable": false, "enumerable": true, "configurable": false},
    CULL_FACE_MODE: {"value": 2885, "writable": false, "enumerable": true, "configurable": false},
    FRONT_FACE: {"value": 2886, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_RANGE: {"value": 2928, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_WRITEMASK: {"value": 2930, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_CLEAR_VALUE: {"value": 2931, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_FUNC: {"value": 2932, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_CLEAR_VALUE: {"value": 2961, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_FUNC: {"value": 2962, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_FAIL: {"value": 2964, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_PASS_DEPTH_FAIL: {"value": 2965, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_PASS_DEPTH_PASS: {"value": 2966, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_REF: {"value": 2967, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_VALUE_MASK: {"value": 2963, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_WRITEMASK: {"value": 2968, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_FUNC: {"value": 34816, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_FAIL: {"value": 34817, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value": 34818, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value": 34819, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_REF: {"value": 36003, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_VALUE_MASK: {"value": 36004, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_WRITEMASK: {"value": 36005, "writable": false, "enumerable": true, "configurable": false},
    VIEWPORT: {"value": 2978, "writable": false, "enumerable": true, "configurable": false},
    SCISSOR_BOX: {"value": 3088, "writable": false, "enumerable": true, "configurable": false},
    COLOR_CLEAR_VALUE: {"value": 3106, "writable": false, "enumerable": true, "configurable": false},
    COLOR_WRITEMASK: {"value": 3107, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_ALIGNMENT: {"value": 3317, "writable": false, "enumerable": true, "configurable": false},
    PACK_ALIGNMENT: {"value": 3333, "writable": false, "enumerable": true, "configurable": false},
    MAX_TEXTURE_SIZE: {"value": 3379, "writable": false, "enumerable": true, "configurable": false},
    MAX_VIEWPORT_DIMS: {"value": 3386, "writable": false, "enumerable": true, "configurable": false},
    SUBPIXEL_BITS: {"value": 3408, "writable": false, "enumerable": true, "configurable": false},
    RED_BITS: {"value": 3410, "writable": false, "enumerable": true, "configurable": false},
    GREEN_BITS: {"value": 3411, "writable": false, "enumerable": true, "configurable": false},
    BLUE_BITS: {"value": 3412, "writable": false, "enumerable": true, "configurable": false},
    ALPHA_BITS: {"value": 3413, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_BITS: {"value": 3414, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BITS: {"value": 3415, "writable": false, "enumerable": true, "configurable": false},
    POLYGON_OFFSET_UNITS: {"value": 10752, "writable": false, "enumerable": true, "configurable": false},
    POLYGON_OFFSET_FACTOR: {"value": 32824, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_BINDING_2D: {"value": 32873, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_BUFFERS: {"value": 32936, "writable": false, "enumerable": true, "configurable": false},
    SAMPLES: {"value": 32937, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_COVERAGE_VALUE: {"value": 32938, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_COVERAGE_INVERT: {"value": 32939, "writable": false, "enumerable": true, "configurable": false},
    COMPRESSED_TEXTURE_FORMATS: {"value": 34467, "writable": false, "enumerable": true, "configurable": false},
    DONT_CARE: {"value": 4352, "writable": false, "enumerable": true, "configurable": false},
    FASTEST: {"value": 4353, "writable": false, "enumerable": true, "configurable": false},
    NICEST: {"value": 4354, "writable": false, "enumerable": true, "configurable": false},
    GENERATE_MIPMAP_HINT: {"value": 33170, "writable": false, "enumerable": true, "configurable": false},
    BYTE: {"value": 5120, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_BYTE: {"value": 5121, "writable": false, "enumerable": true, "configurable": false},
    SHORT: {"value": 5122, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT: {"value": 5123, "writable": false, "enumerable": true, "configurable": false},
    INT: {"value": 5124, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_INT: {"value": 5125, "writable": false, "enumerable": true, "configurable": false},
    FLOAT: {"value": 5126, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_COMPONENT: {"value": 6402, "writable": false, "enumerable": true, "configurable": false},
    ALPHA: {"value": 6406, "writable": false, "enumerable": true, "configurable": false},
    RGB: {"value": 6407, "writable": false, "enumerable": true, "configurable": false},
    RGBA: {"value": 6408, "writable": false, "enumerable": true, "configurable": false},
    LUMINANCE: {"value": 6409, "writable": false, "enumerable": true, "configurable": false},
    LUMINANCE_ALPHA: {"value": 6410, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT_4_4_4_4: {"value": 32819, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT_5_5_5_1: {"value": 32820, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT_5_6_5: {"value": 33635, "writable": false, "enumerable": true, "configurable": false},
    FRAGMENT_SHADER: {"value": 35632, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_SHADER: {"value": 35633, "writable": false, "enumerable": true, "configurable": false},
    MAX_VERTEX_ATTRIBS: {"value": 34921, "writable": false, "enumerable": true, "configurable": false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value": 36347, "writable": false, "enumerable": true, "configurable": false},
    MAX_VARYING_VECTORS: {"value": 36348, "writable": false, "enumerable": true, "configurable": false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value": 35661, "writable": false, "enumerable": true, "configurable": false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value": 35660, "writable": false, "enumerable": true, "configurable": false},
    MAX_TEXTURE_IMAGE_UNITS: {"value": 34930, "writable": false, "enumerable": true, "configurable": false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value": 36349, "writable": false, "enumerable": true, "configurable": false},
    SHADER_TYPE: {"value": 35663, "writable": false, "enumerable": true, "configurable": false},
    DELETE_STATUS: {"value": 35712, "writable": false, "enumerable": true, "configurable": false},
    LINK_STATUS: {"value": 35714, "writable": false, "enumerable": true, "configurable": false},
    VALIDATE_STATUS: {"value": 35715, "writable": false, "enumerable": true, "configurable": false},
    ATTACHED_SHADERS: {"value": 35717, "writable": false, "enumerable": true, "configurable": false},
    ACTIVE_UNIFORMS: {"value": 35718, "writable": false, "enumerable": true, "configurable": false},
    ACTIVE_ATTRIBUTES: {"value": 35721, "writable": false, "enumerable": true, "configurable": false},
    SHADING_LANGUAGE_VERSION: {"value": 35724, "writable": false, "enumerable": true, "configurable": false},
    CURRENT_PROGRAM: {"value": 35725, "writable": false, "enumerable": true, "configurable": false},
    NEVER: {"value": 512, "writable": false, "enumerable": true, "configurable": false},
    LESS: {"value": 513, "writable": false, "enumerable": true, "configurable": false},
    EQUAL: {"value": 514, "writable": false, "enumerable": true, "configurable": false},
    LEQUAL: {"value": 515, "writable": false, "enumerable": true, "configurable": false},
    GREATER: {"value": 516, "writable": false, "enumerable": true, "configurable": false},
    NOTEQUAL: {"value": 517, "writable": false, "enumerable": true, "configurable": false},
    GEQUAL: {"value": 518, "writable": false, "enumerable": true, "configurable": false},
    ALWAYS: {"value": 519, "writable": false, "enumerable": true, "configurable": false},
    KEEP: {"value": 7680, "writable": false, "enumerable": true, "configurable": false},
    REPLACE: {"value": 7681, "writable": false, "enumerable": true, "configurable": false},
    INCR: {"value": 7682, "writable": false, "enumerable": true, "configurable": false},
    DECR: {"value": 7683, "writable": false, "enumerable": true, "configurable": false},
    INVERT: {"value": 5386, "writable": false, "enumerable": true, "configurable": false},
    INCR_WRAP: {"value": 34055, "writable": false, "enumerable": true, "configurable": false},
    DECR_WRAP: {"value": 34056, "writable": false, "enumerable": true, "configurable": false},
    VENDOR: {"value": 7936, "writable": false, "enumerable": true, "configurable": false},
    RENDERER: {"value": 7937, "writable": false, "enumerable": true, "configurable": false},
    VERSION: {"value": 7938, "writable": false, "enumerable": true, "configurable": false},
    NEAREST: {"value": 9728, "writable": false, "enumerable": true, "configurable": false},
    LINEAR: {"value": 9729, "writable": false, "enumerable": true, "configurable": false},
    NEAREST_MIPMAP_NEAREST: {"value": 9984, "writable": false, "enumerable": true, "configurable": false},
    LINEAR_MIPMAP_NEAREST: {"value": 9985, "writable": false, "enumerable": true, "configurable": false},
    NEAREST_MIPMAP_LINEAR: {"value": 9986, "writable": false, "enumerable": true, "configurable": false},
    LINEAR_MIPMAP_LINEAR: {"value": 9987, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_MAG_FILTER: {"value": 10240, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_MIN_FILTER: {"value": 10241, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_WRAP_S: {"value": 10242, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_WRAP_T: {"value": 10243, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE: {"value": 5890, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP: {"value": 34067, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_BINDING_CUBE_MAP: {"value": 34068, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value": 34069, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value": 34070, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value": 34071, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value": 34072, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value": 34073, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value": 34074, "writable": false, "enumerable": true, "configurable": false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value": 34076, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE0: {"value": 33984, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE1: {"value": 33985, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE2: {"value": 33986, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE3: {"value": 33987, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE4: {"value": 33988, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE5: {"value": 33989, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE6: {"value": 33990, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE7: {"value": 33991, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE8: {"value": 33992, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE9: {"value": 33993, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE10: {"value": 33994, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE11: {"value": 33995, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE12: {"value": 33996, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE13: {"value": 33997, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE14: {"value": 33998, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE15: {"value": 33999, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE16: {"value": 34000, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE17: {"value": 34001, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE18: {"value": 34002, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE19: {"value": 34003, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE20: {"value": 34004, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE21: {"value": 34005, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE22: {"value": 34006, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE23: {"value": 34007, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE24: {"value": 34008, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE25: {"value": 34009, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE26: {"value": 34010, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE27: {"value": 34011, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE28: {"value": 34012, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE29: {"value": 34013, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE30: {"value": 34014, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE31: {"value": 34015, "writable": false, "enumerable": true, "configurable": false},
    ACTIVE_TEXTURE: {"value": 34016, "writable": false, "enumerable": true, "configurable": false},
    REPEAT: {"value": 10497, "writable": false, "enumerable": true, "configurable": false},
    CLAMP_TO_EDGE: {"value": 33071, "writable": false, "enumerable": true, "configurable": false},
    MIRRORED_REPEAT: {"value": 33648, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_VEC2: {"value": 35664, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_VEC3: {"value": 35665, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_VEC4: {"value": 35666, "writable": false, "enumerable": true, "configurable": false},
    INT_VEC2: {"value": 35667, "writable": false, "enumerable": true, "configurable": false},
    INT_VEC3: {"value": 35668, "writable": false, "enumerable": true, "configurable": false},
    INT_VEC4: {"value": 35669, "writable": false, "enumerable": true, "configurable": false},
    BOOL: {"value": 35670, "writable": false, "enumerable": true, "configurable": false},
    BOOL_VEC2: {"value": 35671, "writable": false, "enumerable": true, "configurable": false},
    BOOL_VEC3: {"value": 35672, "writable": false, "enumerable": true, "configurable": false},
    BOOL_VEC4: {"value": 35673, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_MAT2: {"value": 35674, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_MAT3: {"value": 35675, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_MAT4: {"value": 35676, "writable": false, "enumerable": true, "configurable": false},
    SAMPLER_2D: {"value": 35678, "writable": false, "enumerable": true, "configurable": false},
    SAMPLER_CUBE: {"value": 35680, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value": 34338, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value": 34339, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value": 34340, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value": 34341, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value": 34922, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value": 34373, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value": 34975, "writable": false, "enumerable": true, "configurable": false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value": 35738, "writable": false, "enumerable": true, "configurable": false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value": 35739, "writable": false, "enumerable": true, "configurable": false},
    COMPILE_STATUS: {"value": 35713, "writable": false, "enumerable": true, "configurable": false},
    LOW_FLOAT: {"value": 36336, "writable": false, "enumerable": true, "configurable": false},
    MEDIUM_FLOAT: {"value": 36337, "writable": false, "enumerable": true, "configurable": false},
    HIGH_FLOAT: {"value": 36338, "writable": false, "enumerable": true, "configurable": false},
    LOW_INT: {"value": 36339, "writable": false, "enumerable": true, "configurable": false},
    MEDIUM_INT: {"value": 36340, "writable": false, "enumerable": true, "configurable": false},
    HIGH_INT: {"value": 36341, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER: {"value": 36160, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER: {"value": 36161, "writable": false, "enumerable": true, "configurable": false},
    RGBA4: {"value": 32854, "writable": false, "enumerable": true, "configurable": false},
    RGB5_A1: {"value": 32855, "writable": false, "enumerable": true, "configurable": false},
    RGB565: {"value": 36194, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_COMPONENT16: {"value": 33189, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_INDEX8: {"value": 36168, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_STENCIL: {"value": 34041, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_WIDTH: {"value": 36162, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_HEIGHT: {"value": 36163, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value": 36164, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_RED_SIZE: {"value": 36176, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_GREEN_SIZE: {"value": 36177, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_BLUE_SIZE: {"value": 36178, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_ALPHA_SIZE: {"value": 36179, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_DEPTH_SIZE: {"value": 36180, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_STENCIL_SIZE: {"value": 36181, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value": 36048, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value": 36049, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {
        "value": 36050,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {
        "value": 36051,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    COLOR_ATTACHMENT0: {"value": 36064, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_ATTACHMENT: {"value": 36096, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_ATTACHMENT: {"value": 36128, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_STENCIL_ATTACHMENT: {"value": 33306, "writable": false, "enumerable": true, "configurable": false},
    NONE: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_COMPLETE: {"value": 36053, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value": 36054, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {
        "value": 36055,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value": 36057, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_UNSUPPORTED: {"value": 36061, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_BINDING: {"value": 36006, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_BINDING: {"value": 36007, "writable": false, "enumerable": true, "configurable": false},
    MAX_RENDERBUFFER_SIZE: {"value": 34024, "writable": false, "enumerable": true, "configurable": false},
    INVALID_FRAMEBUFFER_OPERATION: {"value": 1286, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_FLIP_Y_WEBGL: {"value": 37440, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value": 37441, "writable": false, "enumerable": true, "configurable": false},
    CONTEXT_LOST_WEBGL: {"value": 37442, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value": 37443, "writable": false, "enumerable": true, "configurable": false},
    BROWSER_DEFAULT_WEBGL: {"value": 37444, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "WebGLRenderingContext", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DOMTokenList.prototype, {
    length: {
        get() {
            v_console_log("  [*] DOMTokenList -> length[get]", 0);
            return 0
        }
    },
    add: {
        value: v_saf(function add() {
            v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));
        })
    },
    remove: {
        value: v_saf(function remove() {
            v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "DOMTokenList", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(History.prototype, {
    state: {
        get() {
            v_console_log("  [*] History -> state[get]", {});
            return {}
        }
    },
    length: {
        get() {
            v_console_log("  [*] History -> length[get]", 3);
            return 3
        }
    },
    replaceState: {
        value: v_saf(function replaceState() {
            v_console_log("  [*] History -> replaceState[func]", [].slice.call(arguments));
        })
    },
    scrollRestoration: {
        set() {
            v_console_log("  [*] History -> scrollRestoration[set]", [].slice.call(arguments));
            return 3
        }
    },
    [Symbol.toStringTag]: {value: "History", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceObserver.prototype, {
    observe: {
        value: v_saf(function observe() {
            v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));
        })
    },
    disconnect: {
        value: v_saf(function disconnect() {
            v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "PerformanceObserver", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(WebKitMutationObserver.prototype, {
    disconnect: {
        value: v_saf(function disconnect() {
            v_console_log("  [*] WebKitMutationObserver -> disconnect[func]", [].slice.call(arguments));
        })
    },
    observe: {
        value: v_saf(function observe() {
            v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "WebKitMutationObserver", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MutationObserver.prototype, {
    disconnect: {
        value: v_saf(function disconnect() {
            v_console_log("  [*] MutationObserver -> disconnect[func]", [].slice.call(arguments));
        })
    },
    observe: {
        value: v_saf(function observe() {
            v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "MutationObserver", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Event.prototype, {
    target: {
        get() {
            v_console_log("  [*] Event -> target[get]", {});
            return {}
        }
    },
    type: {
        get() {
            v_console_log("  [*] Event -> type[get]", "load");
            return "load"
        }
    },
    NONE: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    CAPTURING_PHASE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    AT_TARGET: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    BUBBLING_PHASE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "Event", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceEntry.prototype, {
    name: {
        get() {
            v_console_log("  [*] PerformanceEntry -> name[get]", "http://sns-webpic-qc.xhscdn.com/202312141140/f5ba98601d23be2dfa9c3490bb5d11fb/1040g00830rnjvs5mig5g5o1e8ptgbqnbnspkpdo!nc_n_webp_mw_1");
            return "http://sns-webpic-qc.xhscdn.com/202312141140/f5ba98601d23be2dfa9c3490bb5d11fb/1040g00830rnjvs5mig5g5o1e8ptgbqnbnspkpdo!nc_n_webp_mw_1"
        }
    },
    startTime: {
        get() {
            v_console_log("  [*] PerformanceEntry -> startTime[get]", 201.40000000037253);
            return 201.40000000037253
        }
    },
    toJSON: {
        value: v_saf(function toJSON() {
            v_console_log("  [*] PerformanceEntry -> toJSON[func]", [].slice.call(arguments));
        })
    },
    duration: {
        get() {
            v_console_log("  [*] PerformanceEntry -> duration[get]", 240);
            return 240
        }
    },
    entryType: {
        get() {
            v_console_log("  [*] PerformanceEntry -> entryType[get]", "event");
            return "event"
        }
    },
    [Symbol.toStringTag]: {value: "PerformanceEntry", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PluginArray.prototype, {
    length: {
        get() {
            v_console_log("  [*] PluginArray -> length[get]", 2);
            return 2
        }
    },
    [Symbol.toStringTag]: {value: "PluginArray", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
    getEntries: {
        value: v_saf(function getEntries() {
            v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {
        value: "PerformanceObserverEntryList",
        writable: false,
        enumerable: false,
        configurable: true
    },
})
Object.defineProperties(Image.prototype, {
    src: {
        set() {
            v_console_log("  [*] Image -> src[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "Image", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
    setProperty: {
        value: v_saf(function setProperty() {
            v_console_log("  [*] CSSStyleDeclaration -> setProperty[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "CSSStyleDeclaration", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
    top: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> top[get]", 64);
            return 64
        }
    },
    left: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> left[get]", 1648);
            return 1648
        }
    },
    right: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> right[get]", 1840);
            return 1840
        }
    },
    bottom: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 56);
            return 56
        }
    },
    [Symbol.toStringTag]: {value: "DOMRectReadOnly", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(ResizeObserver.prototype, {
    observe: {
        value: v_saf(function observe() {
            v_console_log("  [*] ResizeObserver -> observe[func]", [].slice.call(arguments));
        })
    },
    disconnect: {
        value: v_saf(function disconnect() {
            v_console_log("  [*] ResizeObserver -> disconnect[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "ResizeObserver", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(NavigatorUAData.prototype, {
    brands: {
        get() {
            v_console_log("  [*] NavigatorUAData -> brands[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "NavigatorUAData", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {value: "Plugin", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    rect: {
        value: v_saf(function rect() {
            v_console_log("  [*] CanvasRenderingContext2D -> rect[func]", [].slice.call(arguments));
        })
    },
    textBaseline: {
        set() {
            v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments));
        }
    },
    fillStyle: {
        set() {
            v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments));
        }
    },
    fillRect: {
        value: v_saf(function fillRect() {
            v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments));
        })
    },
    font: {
        set() {
            v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments));
        }
    },
    fillText: {
        value: v_saf(function fillText() {
            v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));
        })
    },
    globalCompositeOperation: {
        set() {
            v_console_log("  [*] CanvasRenderingContext2D -> globalCompositeOperation[set]", [].slice.call(arguments));
        }
    },
    beginPath: {
        value: v_saf(function beginPath() {
            v_console_log("  [*] CanvasRenderingContext2D -> beginPath[func]", [].slice.call(arguments));
        })
    },
    arc: {
        value: v_saf(function arc() {
            v_console_log("  [*] CanvasRenderingContext2D -> arc[func]", [].slice.call(arguments));
        })
    },
    closePath: {
        value: v_saf(function closePath() {
            v_console_log("  [*] CanvasRenderingContext2D -> closePath[func]", [].slice.call(arguments));
        })
    },
    fill: {
        value: v_saf(function fill() {
            v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "CanvasRenderingContext2D", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(AudioParam.prototype, {
    setValueAtTime: {
        value: v_saf(function setValueAtTime() {
            v_console_log("  [*] AudioParam -> setValueAtTime[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "AudioParam", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(AudioBuffer.prototype, {
    getChannelData: {
        value: v_saf(function getChannelData() {
            v_console_log("  [*] AudioBuffer -> getChannelData[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "AudioBuffer", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(IntersectionObserver.prototype, {
    observe: {
        value: v_saf(function observe() {
            v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));
        })
    },
    disconnect: {
        value: v_saf(function disconnect() {
            v_console_log("  [*] IntersectionObserver -> disconnect[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "IntersectionObserver", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(IntersectionObserverEntry.prototype, {
    isIntersecting: {
        get() {
            v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", true);
            return true
        }
    },
    [Symbol.toStringTag]: {value: "IntersectionObserverEntry", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Node.prototype, {
    childNodes: {
        get() {
            v_console_log("  [*] Node -> childNodes[get]", {});
            return {}
        }
    },
    insertBefore: {
        value: v_saf(function insertBefore() {
            v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));
        })
    },
    appendChild: {
        value: v_saf(function appendChild() {
            v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));
        })
    },
    parentNode: {
        get() {
            v_console_log("  [*] Node -> parentNode[get]", {});
            return {}
        }
    },
    removeChild: {
        value: v_saf(function removeChild() {
            v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));
        })
    },
    hasChildNodes: {
        value: v_saf(function hasChildNodes() {
            v_console_log("  [*] Node -> hasChildNodes[func]", [].slice.call(arguments));
        })
    },
    firstChild: {
        get() {
            v_console_log("  [*] Node -> firstChild[get]", {});
            return {}
        }
    },
    nodeType: {
        get() {
            v_console_log("  [*] Node -> nodeType[get]", 1);
            return 1
        }
    },
    nextSibling: {
        get() {
            v_console_log("  [*] Node -> nextSibling[get]", {});
            return {}
        }
    },
    textContent: {
        get() {
            v_console_log("  [*] Node -> textContent[get]", "发布");
            return "发布"
        }, set() {
            v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));
            return "发布"
        }
    },
    lastChild: {
        get() {
            v_console_log("  [*] Node -> lastChild[get]", {});
            return {}
        }
    },
    contains: {
        value: v_saf(function contains() {
            v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));
        })
    },
    ownerDocument: {
        get() {
            v_console_log("  [*] Node -> ownerDocument[get]", {});
            return {}
        }
    },
    nodeName: {
        get() {
            v_console_log("  [*] Node -> nodeName[get]", "DIV");
            return "DIV"
        }
    },
    ELEMENT_NODE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    ATTRIBUTE_NODE: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    TEXT_NODE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    CDATA_SECTION_NODE: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    ENTITY_REFERENCE_NODE: {"value": 5, "writable": false, "enumerable": true, "configurable": false},
    ENTITY_NODE: {"value": 6, "writable": false, "enumerable": true, "configurable": false},
    PROCESSING_INSTRUCTION_NODE: {"value": 7, "writable": false, "enumerable": true, "configurable": false},
    COMMENT_NODE: {"value": 8, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_NODE: {"value": 9, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_TYPE_NODE: {"value": 10, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_FRAGMENT_NODE: {"value": 11, "writable": false, "enumerable": true, "configurable": false},
    NOTATION_NODE: {"value": 12, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_DISCONNECTED: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_PRECEDING: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_FOLLOWING: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_CONTAINS: {"value": 8, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value": 16, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
        "value": 32,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    [Symbol.toStringTag]: {value: "Node", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Performance.prototype, {
    timing: {
        get() {
            v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));
            return v_new(PerformanceTiming)
        }
    },
    now: {
        value: v_saf(function now() {
            v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));
        })
    },
    onresourcetimingbufferfull: {
        set() {
            v_console_log("  [*] Performance -> onresourcetimingbufferfull[set]", [].slice.call(arguments));
            return {}
        }
    },
    mark: {
        value: v_saf(function mark() {
            v_console_log("  [*] Performance -> mark[func]", [].slice.call(arguments));
        })
    },
    getEntriesByType: {
        value: v_saf(function getEntriesByType() {
            v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments));
            if (arguments[0] == 'resource') {
                return v_new(PerformanceResourceTiming)
            }
        })
    },
    measure: {
        value: v_saf(function measure() {
            v_console_log("  [*] Performance -> measure[func]", [].slice.call(arguments));
        })
    },
    getEntriesByName: {
        value: v_saf(function getEntriesByName() {
            v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments));
        })
    },
    memory: {
        get() {
            v_console_log("  [*] Performance -> memory[get]", {});
            return {}
        }
    },
    clearResourceTimings: {
        value: v_saf(function clearResourceTimings() {
            v_console_log("  [*] Performance -> clearResourceTimings[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "Performance", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MessagePort.prototype, {
    onmessage: {
        set() {
            v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "MessagePort", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    onabort: {
        set() {
            v_console_log("  [*] XMLHttpRequestEventTarget -> onabort[set]", [].slice.call(arguments));
        }
    },
    onerror: {
        set() {
            v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments));
        }
    },
    ontimeout: {
        set() {
            v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "XMLHttpRequestEventTarget", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(CustomEvent.prototype, {
    detail: {
        get() {
            v_console_log("  [*] CustomEvent -> detail[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "CustomEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PermissionStatus.prototype, {
    state: {
        get() {
            v_console_log("  [*] PermissionStatus -> state[get]", "denied");
            return "denied"
        }
    },
    [Symbol.toStringTag]: {value: "PermissionStatus", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
    initiatorType: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> initiatorType[get]", "css");
            return "css"
        }
    },
    responseStart: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> responseStart[get]", 2724364.299999999);
            return 2724364.299999999
        }
    },
    requestStart: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> requestStart[get]", 2724063);
            return 2724063
        }
    },
    connectEnd: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> connectEnd[get]", 2724037.9000000004);
            return 2724037.9000000004
        }
    },
    connectStart: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> connectStart[get]", 2724037.9000000004);
            return 2724037.9000000004
        }
    },
    responseEnd: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 2724367.9000000004);
            return 2724367.9000000004
        }
    },
    transferSize: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> transferSize[get]", 41128);
            return 41128
        }
    },
    fetchStart: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> fetchStart[get]", 2721237.0999999996);
            return 2721237.0999999996
        }
    },
    toJSON: {
        value: v_saf(function toJSON() {
            v_console_log("  [*] PerformanceResourceTiming -> toJSON[func]", [].slice.call(arguments));
        })
    },
    domainLookupEnd: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> domainLookupEnd[get]", 13);
            return 13
        }
    },
    domainLookupStart: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> domainLookupStart[get]", 13);
            return 13
        }
    },
    redirectEnd: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> redirectEnd[get]", 0);
            return 0
        }
    },
    redirectStart: {
        get() {
            v_console_log("  [*] PerformanceResourceTiming -> redirectStart[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "PerformanceResourceTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PromiseRejectionEvent.prototype, {
    reason: {
        get() {
            v_console_log("  [*] PromiseRejectionEvent -> reason[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "PromiseRejectionEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MediaQueryList.prototype, {
    matches: {
        get() {
            v_console_log("  [*] MediaQueryList -> matches[get]", false);
            return false
        }
    },
    onchange: {
        set() {
            v_console_log("  [*] MediaQueryList -> onchange[set]", [].slice.call(arguments));
            return false
        }
    },
    [Symbol.toStringTag]: {value: "MediaQueryList", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DOMRect.prototype, {
    height: {
        get() {
            v_console_log("  [*] DOMRect -> height[get]", 0);
            return 0
        }
    },
    width: {
        get() {
            v_console_log("  [*] DOMRect -> width[get]", 1920);
            return 1920
        }
    },
    [Symbol.toStringTag]: {value: "DOMRect", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(UIEvent.prototype, {
    [Symbol.toStringTag]: {value: "UIEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(VisualViewport.prototype, {
    width: {
        get() {
            v_console_log("  [*] VisualViewport -> width[get]", 1920);
            return 1920
        }
    },
    height: {
        get() {
            v_console_log("  [*] VisualViewport -> height[get]", 370);
            return 370
        }
    },
    offsetLeft: {
        get() {
            v_console_log("  [*] VisualViewport -> offsetLeft[get]", 0);
            return 0
        }
    },
    offsetTop: {
        get() {
            v_console_log("  [*] VisualViewport -> offsetTop[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "VisualViewport", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PageTransitionEvent.prototype, {
    persisted: {
        get() {
            v_console_log("  [*] PageTransitionEvent -> persisted[get]", false);
            return false
        }
    },
    [Symbol.toStringTag]: {value: "PageTransitionEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(NetworkInformation.prototype, {
    onchange: {
        get() {
            v_console_log("  [*] NetworkInformation -> onchange[get]", {});
            return {}
        }
    },
    effectiveType: {
        get() {
            v_console_log("  [*] NetworkInformation -> effectiveType[get]", "4g");
            return "4g"
        }
    },
    rtt: {
        get() {
            v_console_log("  [*] NetworkInformation -> rtt[get]", 50);
            return 50
        }
    },
    downlink: {
        get() {
            v_console_log("  [*] NetworkInformation -> downlink[get]", 10);
            return 10
        }
    },
    saveData: {
        get() {
            v_console_log("  [*] NetworkInformation -> saveData[get]", false);
            return false
        }
    },
    [Symbol.toStringTag]: {value: "NetworkInformation", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Screen.prototype, {
    colorDepth: {
        get() {
            v_console_log("  [*] Screen -> colorDepth[get]", 24);
            return 24
        }
    },
    pixelDepth: {
        get() {
            v_console_log("  [*] Screen -> pixelDepth[get]", 24);
            return 24
        }
    },
    width: {
        get() {
            v_console_log("  [*] Screen -> width[get]", 1920);
            return 1920
        }
    },
    height: {
        get() {
            v_console_log("  [*] Screen -> height[get]", 1080);
            return 1080
        }
    },
    availWidth: {
        get() {
            v_console_log("  [*] Screen -> availWidth[get]", 1920);
            return 1920
        }
    },
    availHeight: {
        get() {
            v_console_log("  [*] Screen -> availHeight[get]", 1032);
            return 1032
        }
    },
    [Symbol.toStringTag]: {value: "Screen", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(BaseAudioContext.prototype, {
    createOscillator: {
        value: v_saf(function createOscillator() {
            v_console_log("  [*] BaseAudioContext -> createOscillator[func]", [].slice.call(arguments));
        })
    },
    currentTime: {
        get() {
            v_console_log("  [*] BaseAudioContext -> currentTime[get]", 0);
            return 0
        }
    },
    createDynamicsCompressor: {
        value: v_saf(function createDynamicsCompressor() {
            v_console_log("  [*] BaseAudioContext -> createDynamicsCompressor[func]", [].slice.call(arguments));
        })
    },
    destination: {
        get() {
            v_console_log("  [*] BaseAudioContext -> destination[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "BaseAudioContext", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(AudioNode.prototype, {
    connect: {
        value: v_saf(function connect() {
            v_console_log("  [*] AudioNode -> connect[func]", [].slice.call(arguments));
        })
    },
    disconnect: {
        value: v_saf(function disconnect() {
            v_console_log("  [*] AudioNode -> disconnect[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "AudioNode", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
    renderedBuffer: {
        get() {
            v_console_log("  [*] OfflineAudioCompletionEvent -> renderedBuffer[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {
        value: "OfflineAudioCompletionEvent",
        writable: false,
        enumerable: false,
        configurable: true
    },
})
Object.defineProperties(Element.prototype, {
    tagName: {
        get() {
            v_console_log("  [*] Element -> tagName[get]", this.v_tagName);
            return this.v_tagName
        }
    },
    clientHeight: {
        get() {
            v_console_log("  [*] Element -> clientHeight[get]", 406);
            return 406
        }
    },
    children: {
        get() {
            v_console_log("  [*] Element -> children[get]", {});
            return {}
        }
    },
    setAttribute: {
        value: v_saf(function setAttribute() {
            v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));
        })
    },
    getAttribute: {
        value: v_saf(function getAttribute() {
            v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));
        })
    },
    querySelector: {
        value: v_saf(function querySelector() {
            v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments));
        })
    },
    remove: {
        value: v_saf(function remove() {
            v_console_log("  [*] Element -> remove[func]", [].slice.call(arguments));
        })
    },
    namespaceURI: {
        get() {
            v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");
            return "http://www.w3.org/1999/xhtml"
        }
    },
    clientWidth: {
        get() {
            v_console_log("  [*] Element -> clientWidth[get]", 1920);
            return 1920
        }
    },
    scrollWidth: {
        get() {
            v_console_log("  [*] Element -> scrollWidth[get]", 704);
            return 704
        }
    },
    scrollTop: {
        get() {
            v_console_log("  [*] Element -> scrollTop[get]", 0);
            return 0
        }, set() {
            v_console_log("  [*] Element -> scrollTop[set]", [].slice.call(arguments));
            return 0
        }
    },
    className: {
        set() {
            v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));
            return 0
        }
    },
    setAttributeNS: {
        value: v_saf(function setAttributeNS() {
            v_console_log("  [*] Element -> setAttributeNS[func]", [].slice.call(arguments));
        })
    },
    innerHTML: {
        get() {
            v_console_log("  [*] Element -> innerHTML[get]", "(e=>{const t=localStorage.getItem(\"xhs-pc-theme\")||\"\",o=null===(e=window.matchMedia(\"(prefers-color-scheme: dark)\"))||void 0===e?void 0:e.matches;var r;(t&&\"system\"!==t?\"dark\"===t:o)&&(null===(r=document)||void 0===r||null===(r=r.querySelector(\"meta[name='theme-color']\"))||void 0===r||r.setAttribute(\"content\",\"rgb(10, 10, 10)\"),document.documentElement.setAttribute(\"dark\",\"\"))})();");
            return "(e=>{const t=localStorage.getItem(\"xhs-pc-theme\")||\"\",o=null===(e=window.matchMedia(\"(prefers-color-scheme: dark)\"))||void 0===e?void 0:e.matches;var r;(t&&\"system\"!==t?\"dark\"===t:o)&&(null===(r=document)||void 0===r||null===(r=r.querySelector(\"meta[name='theme-color']\"))||void 0===r||r.setAttribute(\"content\",\"rgb(10, 10, 10)\"),document.documentElement.setAttribute(\"dark\",\"\"))})();"
        }, set() {
            v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));
            return "(e=>{const t=localStorage.getItem(\"xhs-pc-theme\")||\"\",o=null===(e=window.matchMedia(\"(prefers-color-scheme: dark)\"))||void 0===e?void 0:e.matches;var r;(t&&\"system\"!==t?\"dark\"===t:o)&&(null===(r=document)||void 0===r||null===(r=r.querySelector(\"meta[name='theme-color']\"))||void 0===r||r.setAttribute(\"content\",\"rgb(10, 10, 10)\"),document.documentElement.setAttribute(\"dark\",\"\"))})();"
        }
    },
    getBoundingClientRect: {
        value: v_saf(function getBoundingClientRect() {
            v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));
        })
    },
    getAttributeNames: {
        value: v_saf(function getAttributeNames() {
            v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));
        })
    },
    assignedSlot: {
        get() {
            v_console_log("  [*] Element -> assignedSlot[get]", {});
            return {}
        }
    },
    scrollLeft: {
        get() {
            v_console_log("  [*] Element -> scrollLeft[get]", 0);
            return 0
        }
    },
    clientLeft: {
        get() {
            v_console_log("  [*] Element -> clientLeft[get]", 0);
            return 0
        }
    },
    clientTop: {
        get() {
            v_console_log("  [*] Element -> clientTop[get]", 0);
            return 0
        }
    },
    classList: {
        get() {
            v_console_log("  [*] Element -> classList[get]", {});
            return {}
        }
    },
    removeAttribute: {
        value: v_saf(function removeAttribute() {
            v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));
        })
    },
    id: {
        set() {
            v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "Element", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Document.prototype, {
    documentElement: {
        get() {
            v_console_log("  [*] Document -> documentElement[get]", document);
            return document
        }
    },
    createElement: {
        value: v_saf(function createElement() {
            v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));
            return _createElement(arguments[0])
        })
    },
    all: {
        get() {
            v_console_log("  [*] Document -> all[get]", {});
            return {}
        }
    },
    readyState: {
        get() {
            v_console_log("  [*] Document -> readyState[get]", "complete");
            return "complete"
        }
    },
    importNode: {
        value: v_saf(function importNode() {
            v_console_log("  [*] Document -> importNode[func]", [].slice.call(arguments));
        })
    },
    title: {
        set() {
            v_console_log("  [*] Document -> title[set]", [].slice.call(arguments));
            return "complete"
        }
    },
    referrer: {
        get() {
            v_console_log("  [*] Document -> referrer[get]", "https://www.xiaohongshu.com/web-login/captcha?redirectPath=https%3A%2F%2Fwww.xiaohongshu.com%2Fexplore&callFrom=web&biz=sns_web&verifyUuid=fba6a635-22fd-46fa-99db-8a5c1a806f89*MOUZyJAY&verifyType=102&verifyBiz=461");
            return "https://www.xiaohongshu.com/web-login/captcha?redirectPath=https%3A%2F%2Fwww.xiaohongshu.com%2Fexplore&callFrom=web&biz=sns_web&verifyUuid=fba6a635-22fd-46fa-99db-8a5c1a806f89*MOUZyJAY&verifyType=102&verifyBiz=461"
        }
    },
    visibilityState: {
        get() {
            v_console_log("  [*] Document -> visibilityState[get]", "visible");
            return "visible"
        }
    },
    createTextNode: {
        value: v_saf(function createTextNode() {
            v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));
        })
    },
    createComment: {
        value: v_saf(function createComment() {
            v_console_log("  [*] Document -> createComment[func]", [].slice.call(arguments));
        })
    },
    createElementNS: {
        value: v_saf(function createElementNS() {
            v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments));
        })
    },
    createDocumentFragment: {
        value: v_saf(function createDocumentFragment() {
            v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));
        })
    },
    defaultView: {
        get() {
            v_console_log("  [*] Document -> defaultView[get]", {});
            return {}
        }
    },
    wasDiscarded: {
        get() {
            v_console_log("  [*] Document -> wasDiscarded[get]", false);
            return false
        }
    },
    createEvent: {
        value: v_saf(function createEvent() {
            v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));
        })
    },
    onreadystatechange: {"enumerable": true, "configurable": true},
    onmouseenter: {"enumerable": true, "configurable": true},
    onmouseleave: {"enumerable": true, "configurable": true},
    [Symbol.toStringTag]: {value: "Document", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
    UNSENT: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    OPENED: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    HEADERS_RECEIVED: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    LOADING: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    DONE: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "XMLHttpRequest", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(CharacterData.prototype, {
    data: {
        get() {
            v_console_log("  [*] CharacterData -> data[get]", "");
            return ""
        }
    },
    [Symbol.toStringTag]: {value: "CharacterData", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MouseEvent.prototype, {
    [Symbol.toStringTag]: {value: "MouseEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
    type: {
        get() {
            v_console_log("  [*] PerformanceNavigationTiming -> type[get]", "reload");
            return "reload"
        }
    },
    domInteractive: {
        get() {
            v_console_log("  [*] PerformanceNavigationTiming -> domInteractive[get]", 196);
            return 196
        }
    },
    domContentLoadedEventStart: {
        get() {
            v_console_log("  [*] PerformanceNavigationTiming -> domContentLoadedEventStart[get]", 804152.2999999989);
            return 804152.2999999989
        }
    },
    loadEventStart: {
        get() {
            v_console_log("  [*] PerformanceNavigationTiming -> loadEventStart[get]", 2721603.5999999996);
            return 2721603.5999999996
        }
    },
    domContentLoadedEventEnd: {
        get() {
            v_console_log("  [*] PerformanceNavigationTiming -> domContentLoadedEventEnd[get]", 804152.9000000004);
            return 804152.9000000004
        }
    },
    loadEventEnd: {
        get() {
            v_console_log("  [*] PerformanceNavigationTiming -> loadEventEnd[get]", 2721647);
            return 2721647
        }
    },
    [Symbol.toStringTag]: {
        value: "PerformanceNavigationTiming",
        writable: false,
        enumerable: false,
        configurable: true
    },
})
Object.defineProperties(AudioScheduledSourceNode.prototype, {
    start: {
        value: v_saf(function start() {
            v_console_log("  [*] AudioScheduledSourceNode -> start[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "AudioScheduledSourceNode", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DynamicsCompressorNode.prototype, {
    threshold: {
        get() {
            v_console_log("  [*] DynamicsCompressorNode -> threshold[get]", {});
            return {}
        }
    },
    knee: {
        get() {
            v_console_log("  [*] DynamicsCompressorNode -> knee[get]", {});
            return {}
        }
    },
    ratio: {
        get() {
            v_console_log("  [*] DynamicsCompressorNode -> ratio[get]", {});
            return {}
        }
    },
    reduction: {
        get() {
            v_console_log("  [*] DynamicsCompressorNode -> reduction[get]", 0);
            return 0
        }
    },
    attack: {
        get() {
            v_console_log("  [*] DynamicsCompressorNode -> attack[get]", {});
            return {}
        }
    },
    release: {
        get() {
            v_console_log("  [*] DynamicsCompressorNode -> release[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "DynamicsCompressorNode", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(OfflineAudioContext.prototype, {
    startRendering: {
        value: v_saf(function startRendering() {
            v_console_log("  [*] OfflineAudioContext -> startRendering[func]", [].slice.call(arguments));
        })
    },
    oncomplete: {
        set() {
            v_console_log("  [*] OfflineAudioContext -> oncomplete[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "OfflineAudioContext", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLElement.prototype, {
    style: {
        get() {
            v_console_log("  [*] HTMLElement -> style[get]", this.v_style);
            return this.v_style
        }
    },
    onerror: {
        get() {
            v_console_log("  [*] HTMLElement -> onerror[get]", {});
            return {}
        }, set() {
            v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));
            return {}
        }
    },
    onload: {
        get() {
            v_console_log("  [*] HTMLElement -> onload[get]", {});
            return {}
        }, set() {
            v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));
            return {}
        }
    },
    offsetHeight: {
        get() {
            v_console_log("  [*] HTMLElement -> offsetHeight[get]", 20);
            return 20
        }
    },
    dataset: {
        get() {
            v_console_log("  [*] HTMLElement -> dataset[get]", {});
            return {}
        }
    },
    offsetParent: {
        get() {
            v_console_log("  [*] HTMLElement -> offsetParent[get]", {});
            return {}
        }
    },
    offsetWidth: {
        get() {
            v_console_log("  [*] HTMLElement -> offsetWidth[get]", 468);
            return 468
        }
    },
    onmouseenter: {"enumerable": true, "configurable": true},
    onmouseleave: {"enumerable": true, "configurable": true},
    [Symbol.toStringTag]: {value: "HTMLElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(OscillatorNode.prototype, {
    type: {
        set() {
            v_console_log("  [*] OscillatorNode -> type[set]", [].slice.call(arguments));
        }
    },
    frequency: {
        get() {
            v_console_log("  [*] OscillatorNode -> frequency[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "OscillatorNode", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(SVGElement.prototype, {
    style: {
        get() {
            v_console_log("  [*] SVGElement -> style[get]",);
        }
    },
    onmouseenter: {"enumerable": true, "configurable": true},
    onmouseleave: {"enumerable": true, "configurable": true},
    [Symbol.toStringTag]: {value: "SVGElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
    getContext: {
        value: v_saf(function getContext() {
            v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));
            if (arguments[0] == '2d') {
                var r = v_new(CanvasRenderingContext2D);
                return r
            }
            ;
            if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
                var r = v_new(WebGLRenderingContext);
                r._canvas = this;
                return r
            }
            ;
            return null
        })
    },
    width: {
        set() {
            v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments));
        }
    },
    height: {
        set() {
            v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLCanvasElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
    target: {
        set() {
            v_console_log("  [*] HTMLAnchorElement -> target[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLAnchorElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
    canPlayType: {
        value: v_saf(function canPlayType() {
            v_console_log("  [*] HTMLMediaElement -> canPlayType[func]", [].slice.call(arguments));
        })
    },
    NETWORK_EMPTY: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    NETWORK_IDLE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    NETWORK_LOADING: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    NETWORK_NO_SOURCE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    HAVE_NOTHING: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    HAVE_METADATA: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    HAVE_CURRENT_DATA: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    HAVE_FUTURE_DATA: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    HAVE_ENOUGH_DATA: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "HTMLMediaElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
    charset: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));
        }
    },
    src: {
        get() {
            v_console_log("  [*] HTMLScriptElement -> src[get]", "https://fe-video-qc.xhscdn.com/fe-platform/b44200b8a26b72242ecccf4320cb84570d493d13.js");
            return "https://fe-video-qc.xhscdn.com/fe-platform/b44200b8a26b72242ecccf4320cb84570d493d13.js"
        }, set() {
            v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));
            return "https://fe-video-qc.xhscdn.com/fe-platform/b44200b8a26b72242ecccf4320cb84570d493d13.js"
        }
    },
    type: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> type[set]", [].slice.call(arguments));
            return "https://fe-video-qc.xhscdn.com/fe-platform/b44200b8a26b72242ecccf4320cb84570d493d13.js"
        }
    },
    crossOrigin: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments));
            return "https://fe-video-qc.xhscdn.com/fe-platform/b44200b8a26b72242ecccf4320cb84570d493d13.js"
        }
    },
    [Symbol.toStringTag]: {value: "HTMLScriptElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLImageElement.prototype, {
    src: {
        set() {
            v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLImageElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
    rel: {
        get() {
            v_console_log("  [*] HTMLLinkElement -> rel[get]", "stylesheet");
            return "stylesheet"
        }, set() {
            v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));
            return "stylesheet"
        }
    },
    type: {
        set() {
            v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments));
            return "stylesheet"
        }
    },
    href: {
        set() {
            v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));
            return "stylesheet"
        }
    },
    [Symbol.toStringTag]: {value: "HTMLLinkElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLInputElement.prototype, {
    value: {
        set() {
            v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLInputElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLButtonElement.prototype, {
    disabled: {
        set() {
            v_console_log("  [*] HTMLButtonElement -> disabled[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLButtonElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLIFrameElement.prototype, {
    src: {
        get() {
            v_console_log("  [*] HTMLIFrameElement -> src[get]", "");
            return ""
        }, set() {
            v_console_log("  [*] HTMLIFrameElement -> src[set]", [].slice.call(arguments));
            return ""
        }
    },
    srcdoc: {
        set() {
            v_console_log("  [*] HTMLIFrameElement -> srcdoc[set]", [].slice.call(arguments));
            return ""
        }
    },
    contentWindow: {
        get() {
            v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "HTMLIFrameElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLTemplateElement.prototype, {
    content: {
        get() {
            v_console_log("  [*] HTMLTemplateElement -> content[get]", {});
            return {}
        }
    },
    [Symbol.toStringTag]: {value: "HTMLTemplateElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Window.prototype, {
    TEMPORARY: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    PERSISTENT: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "Window", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {value: "HTMLDocument", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLHeadElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLBodyElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {value: "MimeTypeArray", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {value: "MimeType", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {value: "Location", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceElementTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceEventTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceLongTaskTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceMark", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceMeasure", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_NAVIGATE: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    TYPE_RELOAD: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    TYPE_BACK_FORWARD: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    TYPE_RESERVED: {"value": 255, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "PerformanceNavigation", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformancePaintTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceServerTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLUnknownElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: {value: "Touch", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {value: "TouchEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PointerEvent.prototype, {
    [Symbol.toStringTag]: {value: "PointerEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLDivElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLStyleElement", writable: false, enumerable: false, configurable: true},
})


if (typeof __dirname != 'undefined') {
    __dirname = undefined
}
if (typeof __filename != 'undefined') {
    __filename = undefined
}
if (typeof require != 'undefined') {
    require = undefined
}
if (typeof exports != 'undefined') {
    exports = undefined
}
if (typeof module != 'undefined') {
    module = undefined
}
if (typeof Buffer != 'undefined') {
    Buffer = undefined
}
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
    get(a, b) {
        if (b == 'global') {
            return
        }
        return a[b] || __globalThis__[b]
    },
    set(a, b, c) {
        if (b == 'onclick' && typeof c == 'function') {
            window.addEventListener('click', c)
        }
        if (b == 'onmousedown' && typeof c == 'function') {
            window.addEventListener('mousedown', c)
        }
        if (b == 'onmouseup' && typeof c == 'function') {
            window.addEventListener('mouseup', c)
        }
        __globalThis__[b] = a[b] = c
        return true
    },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty() {
    if (this == window) {
        return v_hasOwnProperty.apply(__globalThis__, arguments)
    }
    return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]: {value: 'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window["0"] = v_new(Window)
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.visualViewport = v_new(VisualViewport)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)

var win = {
    window: window,
    frames: window,
    parent: window,
    self: window,
    top: window,
}

function v_repair_this() {
    win = {
        window: __globalThis__,
        frames: __globalThis__,
        parent: __globalThis__,
        self: __globalThis__,
        top: __globalThis__,
    }
}

Object.defineProperties(window, {
    window: {
        get: function () {
            return win.window
        }, set: function (e) {
            return win.window = e
        }
    },
    frames: {
        get: function () {
            return win.frames
        }, set: function (e) {
            return win.frames = e
        }
    },
    parent: {
        get: function () {
            return win.parent
        }, set: function (e) {
            return win.parent = e
        }
    },
    self: {
        get: function () {
            return win.self
        }, set: function (e) {
            return win.self = e
        }
    },
    top: {
        get: function () {
            return win.top
        }, set: function (e) {
            return win.top = e
        }
    },
})

function _createElement(name) {
    var htmlmap = {
        "HTMLElement": ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
        "HTMLCanvasElement": ["canvas"],
        "HTMLAnchorElement": ["a"],
        "HTMLMediaElement": [],
        "HTMLScriptElement": ["script"],
        "HTMLImageElement": ["img"],
        "HTMLLinkElement": ["link"],
        "HTMLInputElement": ["input"],
        "HTMLButtonElement": ["button"],
        "HTMLIFrameElement": ["iframe"],
        "HTMLTemplateElement": ["template"],
        "HTMLHeadElement": ["head"],
        "HTMLBodyElement": ["body"],
        "HTMLUnknownElement": []
    }
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
        if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1) {
            ret = v_new(window[htmlmapkeys[i]])
            break
        }
    }
    if (!ret) {
        ret = v_new(HTMLUnknownElement)
    }
    if (typeof CSSStyleDeclaration != 'undefined') {
        ret.v_style = v_new(CSSStyleDeclaration)
    }
    ret.v_tagName = name.toUpperCase()
    return ret
}

function init_cookie(cookie) {
    var cache = (cookie || "").trim();
    if (!cache) {
        cache = ''
    } else if (cache.charAt(cache.length - 1) != ';') {
        cache += '; '
    } else {
        cache += ' '
    }
    Object.defineProperty(Document.prototype, 'cookie', {
        get: function () {
            var r = cache.slice(0, cache.length - 2);
            v_console_log('  [*] document -> cookie[get]', r)
            return r
        },
        set: function (c) {
            v_console_log('  [*] document -> cookie[set]', c)
            var ncookie = c.split(";")[0].split("=");
            if (!ncookie.slice(1).join('')) {
                return c
            }
            var key = ncookie[0].trim()
            var val = ncookie.slice(1).join('').trim()
            var newc = key + '=' + val
            var flag = false;
            var temp = cache.split("; ").map(function (a) {
                if (a.split("=")[0] === key) {
                    flag = true;
                    return newc;
                }
                return a;
            })
            cache = temp.join("; ");
            if (!flag) {
                cache += newc + "; ";
            }
            return cache;
        }
    });
}

function v_hook_href(obj, name, initurl) {
    var r = Object.defineProperty(obj, 'href', {
        get: function () {
            if (!(this.protocol) && !(this.hostname)) {
                r = ''
            } else {
                r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
            }
            v_console_log(`  [*] ${name || obj.constructor.name} -> href[get]:`, JSON.stringify(r))
            return r
        },
        set: function (href) {
            href = href.trim()
            v_console_log(`  [*] ${name || obj.constructor.name} -> href[set]:`, JSON.stringify(href))
            if (href.startsWith("http://") || href.startsWith("https://")) {/*ok*/
            } else if (href.startsWith("//")) {
                href = (this.protocol ? this.protocol : 'http:') + href
            } else {
                href = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + '/' + ((href[0] == '/') ? href.slice(1) : href)
            }
            var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            this.protocol = a[1] ? a[1] : "";
            this.hostname = a[2] ? a[2] : "";
            this.port = a[3] ? a[3] : "";
            this.pathname = a[4] ? a[4] : "";
            this.search = a[5] ? a[5] : "";
            this.hash = a[6] ? a[6] : "";
            this.host = this.hostname + (this.port ? ":" + this.port : "");
            this.origin = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
        }
    });
    if (initurl && initurl.trim()) {
        var temp = v_new_toggle;
        v_new_toggle = true;
        r.href = initurl;
        v_new_toggle = temp;
    }
    return r
}

function v_hook_storage() {
    Storage.prototype.clear = v_saf(function () {
        v_console_log(`  [*] Storage -> clear[func]:`);
        var self = this;
        Object.keys(self).forEach(function (key) {
            delete self[key];
        });
    }, 'clear')
    Storage.prototype.getItem = v_saf(function (key) {
        v_console_log(`  [*] Storage -> getItem[func]:`, key);
        var r = (this.hasOwnProperty(key) ? String(this[key]) : null);
        return r
    }, 'getItem')
    Storage.prototype.setItem = v_saf(function (key, val) {
        v_console_log(`  [*] Storage -> setItem[func]:`, key, val);
        this[key] = (val === undefined) ? null : String(val)
    }, 'setItem')
    Storage.prototype.key = v_saf(function (key) {
        v_console_log(`  [*] Storage -> key[func]:`, key);
        return Object.keys(this)[key || 0];
    }, 'key')
    Storage.prototype.removeItem = v_saf(function (key) {
        v_console_log(`  [*] Storage -> removeItem[func]:`, key);
        delete this[key];
    }, 'removeItem')
    Object.defineProperty(Storage.prototype, 'length', {
        get: function () {
            if (this === Storage.prototype) {
                throw TypeError('Illegal invocation')
            }
            return Object.keys(this).length
        }
    })
    window.sessionStorage = new Proxy(sessionStorage, {
        set: function (a, b, c) {
            v_console_log(`  [*] Storage -> [set]:`, b, c);
            return a[b] = String(c)
        }, get: function (a, b) {
            v_console_log(`  [*] Storage -> [get]:`, b, a[b]);
            return a[b]
        },
    })
    window.localStorage = new Proxy(localStorage, {
        set: function (a, b, c) {
            v_console_log(`  [*] Storage -> [set]:`, b, c);
            return a[b] = String(c)
        }, get: function (a, b) {
            v_console_log(`  [*] Storage -> [get]:`, b, a[b]);
            return a[b]
        },
    })
}

function v_init_document() {
    Document.prototype.getElementById = v_saf(function getElementById(name) {
        var r = v_getele(name, 'getElementById');
        v_console_log('  [*] Document -> getElementById', name, r);
        return r
    })
    Document.prototype.querySelector = v_saf(function querySelector(name) {
        var r = v_getele(name, 'querySelector');
        v_console_log('  [*] Document -> querySelector', name, r);
        return r
    })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name) {
        var r = v_geteles(name, 'getElementsByClassName');
        v_console_log('  [*] Document -> getElementsByClassName', name, r);
        return r
    })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name) {
        var r = v_geteles(name, 'getElementsByName');
        v_console_log('  [*] Document -> getElementsByName', name, r);
        return r
    })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name) {
        var r = v_geteles(name, 'getElementsByTagName');
        v_console_log('  [*] Document -> getElementsByTagName', name, r);
        return r
    })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name) {
        var r = v_geteles(name, 'getElementsByTagNameNS');
        v_console_log('  [*] Document -> getElementsByTagNameNS', name, r);
        return r
    })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name) {
        var r = v_geteles(name, 'querySelectorAll');
        v_console_log('  [*] Document -> querySelectorAll', name, r);
        return r
    })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
        head: {
            get() {
                v_console_log("  [*] Document -> head[get]", v_head);
                return v_head
            }
        },
        body: {
            get() {
                v_console_log("  [*] Document -> body[get]", v_body);
                return v_body
            }
        },
    })
}

function v_init_canvas() {
    HTMLCanvasElement.prototype.getContext = function () {
        if (arguments[0] == '2d') {
            var r = v_new(CanvasRenderingContext2D);
            return r
        }
        ;
        if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
            var r = v_new(WebGLRenderingContext);
            r._canvas = this;
            return r
        }
        ;
        return null
    }
    HTMLCanvasElement.prototype.toDataURL = function () {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"
    }
}

var v_start_stamp = +new Date
var v_fake_stamp = +new Date

function v_init_event_target() {
    v_events = {}

    function add_event(_this, x) {
        if (!v_events[x[0]]) {
            v_events[x[0]] = []
        }
        v_events[x[0]].push([_this, x[1].bind(_this)])
    }

    function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
        if (type == 'click') {
            var m = new v_saf(function PointerEvent() {
            })
            m.pointerType = "mouse"
        } else {
            var m = new v_saf(function MouseEvent() {
            })
        }
        m.isTrusted = true
        m.type = type
        m.canBubble = canBubble
        m.cancelable = cancelable
        m.view = view
        m.detail = detail
        m.screenX = screenX;
        m.movementX = screenX
        m.screenY = screenY;
        m.movementY = screenY
        m.clientX = clientX;
        m.layerX = clientX;
        m.offsetX = clientX;
        m.pageX = clientX;
        m.x = clientX;
        m.clientY = clientY;
        m.layerY = clientY;
        m.offsetY = clientY;
        m.pageY = clientY;
        m.y = clientY;
        m.ctrlKey = ctrlKey
        m.altKey = altKey
        m.shiftKey = shiftKey
        m.metaKey = metaKey
        m.button = button
        m.relatedTarget = relatedTarget
        return m
    }

    function make_mouse(type, x, y) {
        return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
    }

    function mouse_click(x, y) {
        for (var i = 0; i < (v_events['click'] || []).length; i++) {
            v_events['click'][i][1](make_mouse('click', x, y))
        }
        for (var i = 0; i < (v_events['mousedown'] || []).length; i++) {
            v_events['mousedown'][i][1](make_mouse('mousedown', x, y))
        }
        for (var i = 0; i < (v_events['mouseup'] || []).length; i++) {
            v_events['mouseup'][i][1](make_mouse('mouseup', x, y))
        }
    }

    var offr = Math.random()

    function make_touch(_this, type, x, y, timeStamp) {
        var offx = Math.random()
        var offy = Math.random()
        var t = v_new(new v_saf(function Touch() {
        }))
        t = clientX = offx + x
        t = clientY = offy + y
        t = force = 1
        t = identifier = 0
        t = pageX = offx + x
        t = pageY = offy + y
        t = radiusX = 28 + offr
        t = radiusY = 28 + offr
        t = rotationAngle = 0
        t = screenX = 0
        t = screenY = 0
        var e = v_new(new v_saf(function TouchEvent() {
        }))
        e.isTrusted = true
        e.altKey = false
        e.bubbles = true
        e.cancelBubble = false
        e.cancelable = false
        e.changedTouches = e.targetTouches = e.touches = [t]
        e.composed = true
        e.ctrlKey = false
        e.currentTarget = null
        e.defaultPrevented = false
        e.detail = 0
        e.eventPhase = 0
        e.metaKey = false
        e.path = _this == window ? [window] : [_this, window]
        e.returnValue = true
        e.shiftKey = false
        e.sourceCapabilities = new v_saf(function InputDeviceCapabilities() {
            this.firesTouchEvents = true
        })
        e.srcElement = _this
        e.target = _this
        e.type = type
        e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random() * 20) - v_start_stamp)
        e.view = window
        e.which = 0
        return e
    }

    function make_trace(x1, y1, x2, y2) {
        // 贝塞尔曲线
        function step_len(x1, y1, x2, y2) {
            var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
            return (ln / 10) ^ 0
        }

        var slen = step_len(x1, y1, x2, y2)
        if (slen < 3) {
            return []
        }

        function factorial(x) {
            for (var y = 1; x > 1; x--) {
                y *= x
            }
            return y;
        }

        var lp = Math.random()
        var rp = Math.random()
        var xx1 = (x1 + (x2 - x1) / 12 * (4 - lp * 4)) ^ 0
        var yy1 = (y1 + (y2 - y1) / 12 * (8 + lp * 4)) ^ 0
        var xx2 = (x1 + (x2 - x1) / 12 * (8 + rp * 4)) ^ 0
        var yy2 = (y1 + (y2 - y1) / 12 * (4 - rp * 4)) ^ 0
        var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
        var N = points.length
        var n = N - 1
        var traces = []
        var step = slen
        for (var T = 0; T < step + 1; T++) {
            var t = T * (1 / step)
            var x = 0
            var y = 0
            for (var i = 0; i < N; i++) {
                var B = factorial(n) * t ** i * (1 - t) ** (n - i) / (factorial(i) * factorial(n - i))
                x += points[i][0] * B
                y += points[i][1] * B
            }
            traces.push([x ^ 0, y ^ 0])
        }
        return traces
    }

    function touch(x1, y1, x2, y2) {
        if (x2 == undefined && y2 == undefined) {
            x2 = x1
            y2 = y1
        }
        var traces = make_trace(x1, y1, x2, y2)
        console.log('traces:', traces)
        for (var i = 0; i < (v_events['touchstart'] || []).length; i++) {
            v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1))
        }
        for (var j = 0; j < traces.length; j++) {
            var x = traces[j][0]
            var y = traces[j][0]
            for (var i = 0; i < (v_events['touchmove'] || []).length; i++) {
                v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y))
            }
        }
        for (var i = 0; i < (v_events['touchend'] || []).length; i++) {
            v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2))
        }
    }

    function mouse_move(x1, y1, x2, y2) {
        if (x2 == undefined && y2 == undefined) {
            x2 = x1
            y2 = y1
        }
        var traces = make_trace(x1, y1, x2, y2)
        console.log('traces:', traces)
        for (var j = 0; j < traces.length; j++) {
            var x = traces[j][0]
            var y = traces[j][0]
            for (var i = 0; i < (v_events['mousemove'] || []).length; i++) {
                v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y))
            }
        }
    }

    window.make_mouse = make_mouse
    window.mouse_click = mouse_click
    window.mouse_move = mouse_move
    window.touch = touch
    EventTarget.prototype.addEventListener = function () {
        v_console_log('  [*] EventTarget -> addEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments));
        add_event(this, [].slice.call(arguments));
        return null
    }
    EventTarget.prototype.dispatchEvent = function () {
        v_console_log('  [*] EventTarget -> dispatchEvent[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments));
        add_event(this, [].slice.call(arguments));
        return null
    }
    EventTarget.prototype.removeEventListener = function () {
        v_console_log('  [*] EventTarget -> removeEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments));
        add_event(this, [].slice.call(arguments));
        return null
    }
}

function v_init_Element_prototype() {
    Element.prototype.getAnimations = Element.prototype.getAnimations || v_saf(function getAnimations() {
        v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttribute = Element.prototype.getAttribute || v_saf(function getAttribute() {
        v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNS = Element.prototype.getAttributeNS || v_saf(function getAttributeNS() {
        v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNames = Element.prototype.getAttributeNames || v_saf(function getAttributeNames() {
        v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNode = Element.prototype.getAttributeNode || v_saf(function getAttributeNode() {
        v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNodeNS = Element.prototype.getAttributeNodeNS || v_saf(function getAttributeNodeNS() {
        v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));
    })
    Element.prototype.getBoundingClientRect = Element.prototype.getBoundingClientRect || v_saf(function getBoundingClientRect() {
        v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));
    })
    Element.prototype.getClientRects = Element.prototype.getClientRects || v_saf(function getClientRects() {
        v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));
    })
    Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName() {
        v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));
    })
    Element.prototype.getElementsByTagName = Element.prototype.getElementsByTagName || v_saf(function getElementsByTagName() {
        v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));
    })
    Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS() {
        v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));
    })
    Element.prototype.getInnerHTML = Element.prototype.getInnerHTML || v_saf(function getInnerHTML() {
        v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));
    })
    Element.prototype.hasAttribute = Element.prototype.hasAttribute || v_saf(function hasAttribute() {
        v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));
    })
    Element.prototype.hasAttributeNS = Element.prototype.hasAttributeNS || v_saf(function hasAttributeNS() {
        v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));
    })
    Element.prototype.hasAttributes = Element.prototype.hasAttributes || v_saf(function hasAttributes() {
        v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));
    })
    Element.prototype.hasPointerCapture = Element.prototype.hasPointerCapture || v_saf(function hasPointerCapture() {
        v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));
    })
    Element.prototype.webkitMatchesSelector = Element.prototype.webkitMatchesSelector || v_saf(function webkitMatchesSelector() {
        v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));
    })
}

function v_init_DOMTokenList_prototype() {
    DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add() {
        v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains() {
        v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries() {
        v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach() {
        v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item() {
        v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys() {
        v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length() {
        v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove() {
        v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace() {
        v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports() {
        v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle() {
        v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));
    })
}

function v_init_CSSStyleDeclaration_prototype() {
    CSSStyleDeclaration.prototype["zoom"] = ''
    CSSStyleDeclaration.prototype["resize"] = ''
    CSSStyleDeclaration.prototype["text-rendering"] = ''
    CSSStyleDeclaration.prototype["text-align-last"] = ''
}

function v_init_PointerEvent_prototype() {
    PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents() {
        v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));
    })
    PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents() {
        v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));
    })
}

function v_init_PerformanceTiming_prototype() {
    try {
        Object.defineProperties(PerformanceTiming.prototype, {
            connectEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd() {
                    v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));
                })
            },
            connectStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart() {
                    v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));
                })
            },
            domComplete: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete() {
                    v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));
                })
            },
            domContentLoadedEventEnd: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domContentLoadedEventEnd() {
                    v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));
                })
            },
            domContentLoadedEventStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domContentLoadedEventStart() {
                    v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));
                })
            },
            domInteractive: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domInteractive() {
                    v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));
                })
            },
            domLoading: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading() {
                    v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));
                })
            },
            domainLookupEnd: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domainLookupEnd() {
                    v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));
                })
            },
            domainLookupStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domainLookupStart() {
                    v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));
                })
            },
            fetchStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart() {
                    v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));
                })
            },
            loadEventEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd() {
                    v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));
                })
            },
            loadEventStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function loadEventStart() {
                    v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));
                })
            },
            navigationStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function navigationStart() {
                    v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));
                })
            },
            redirectEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd() {
                    v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));
                })
            },
            redirectStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart() {
                    v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));
                })
            },
            requestStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart() {
                    v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));
                })
            },
            responseEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd() {
                    v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));
                })
            },
            responseStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart() {
                    v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));
                })
            },
            secureConnectionStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function secureConnectionStart() {
                    v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));
                })
            },
            unloadEventEnd: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function unloadEventEnd() {
                    v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));
                })
            },
            unloadEventStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function unloadEventStart() {
                    v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));
                })
            },
        })
    } catch (e) {
    }
}

function mk_atob_btoa(r) {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    return {
        atob: function (r) {
            var a, e, o, h, c, i, n;
            for (i = r.length, c = 0, n = ""; c < i;) {
                do {
                    a = t[255 & r.charCodeAt(c++)]
                } while (c < i && -1 == a);
                if (-1 == a) break;
                do {
                    e = t[255 & r.charCodeAt(c++)]
                } while (c < i && -1 == e);
                if (-1 == e) break;
                n += String.fromCharCode(a << 2 | (48 & e) >> 4);
                do {
                    if (61 == (o = 255 & r.charCodeAt(c++))) return n;
                    o = t[o]
                } while (c < i && -1 == o);
                if (-1 == o) break;
                n += String.fromCharCode((15 & e) << 4 | (60 & o) >> 2);
                do {
                    if (61 == (h = 255 & r.charCodeAt(c++))) return n;
                    h = t[h]
                } while (c < i && -1 == h);
                if (-1 == h) break;
                n += String.fromCharCode((3 & o) << 6 | h)
            }
            return n
        }, btoa: function (r) {
            var t, e, o, h, c, i;
            for (o = r.length, e = 0, t = ""; e < o;) {
                if (h = 255 & r.charCodeAt(e++), e == o) {
                    t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4), t += "==";
                    break
                }
                if (c = r.charCodeAt(e++), e == o) {
                    t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2), t += "=";
                    break
                }
                i = r.charCodeAt(e++), t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2 | (192 & i) >> 6), t += a.charAt(63 & i)
            }
            return t
        }
    }
}

var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

// init_cookie("abRequestId=3f05c5ae-4d59-5011-9c16-21824f738cbc; webBuild=3.20.3; xsecappid=xhs-pc-web; a1=18c8ae581c2wwrewa11o1ksoxjnrqypnbwxa42ua400000226429; webId=0e299ca3b15a4e530252d6bae5bc42d4; abRequestId=5a6f88dd-ecf6-590c-a144-74962d4eb737;web_session=040069b47bc81a0c4fa6664ab1374bdeb37d65")
v_hook_href(window.location, 'location', "https://www.xiaohongshu.com/explore")
Location.prototype.toString = v_saf(function toString() {
    return "https://www.xiaohongshu.com/explore"
})
window.alert = v_saf(function alert() {
})
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1920
window.innerHeight = 370
window.outerHeight = 1032
window.outerWidth = 1920
window.isSecureContext = true
window.origin = location.origin

function v_getele(name, func) {
    if (name == "input.search-input" && func == "querySelector") {
        return v_new(HTMLInputElement)
    }
    if (name == "div.search-icon" && func == "querySelector") {
        return v_new(HTMLDivElement)
    }
    if (name == "#app" && func == "querySelector") {
        return v_new(HTMLDivElement)
    }
    if (name == "__XHS_AB_FLAGS__" && func == "getElementById") {
        return v_new(HTMLDivElement)
    }
    if (name == "body" && func == "querySelector") {
        return v_new(HTMLBodyElement)
    }
    if (name == "#more-information" && func == "querySelector") {
        return v_new(HTMLDivElement)
    }
    if (name == "#link-guide" && func == "querySelector") {
        return v_new(HTMLAnchorElement)
    }
    if (name == "#mfContainer" && func == "querySelector") {
        return v_new(HTMLDivElement)
    }
    if (name == "#global" && func == "querySelector") {
        return v_new(HTMLDivElement)
    }
    return null
}

function v_geteles(name, func) {
    if (name == "script" && func == "getElementsByTagName") {
        return [v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement)]
    }
    if (name == "link" && func == "getElementsByTagName") {
        return [v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement)]
    }
    if (name == "style" && func == "getElementsByTagName") {
        return [v_new(HTMLStyleElement), v_new(HTMLStyleElement)]
    }
    if (name == "adsbox" && func == "getElementsByClassName") {
        return []
    }
    if (name == "body" && func == "getElementsByTagName") {
        return [v_new(HTMLBodyElement)]
    }
    return null
}

var v_Date = Date;
var v_base_time = +new Date;
(function () {
    function ftime() {
        return new v_Date() - v_base_time + v_to_time
    }

    Date = function (_Date) {
        var bind = Function.bind;
        var unbind = bind.bind(bind);

        function instantiate(constructor, args) {
            return new (unbind(constructor, null).apply(null, args));
        }

        var names = Object.getOwnPropertyNames(_Date);
        for (var i = 0; i < names.length; i++) {
            if (names[i] in Date)
                continue;
            var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
            Object.defineProperty(Date, names[i], desc);
        }

        function Date() {
            var date = instantiate(_Date, [ftime()]);
            return date;
        }

        Date.prototype = _Date.prototype
        return v_saf(Date);
    }(Date);
    Date.now = v_saf(function now() {
        return ftime()
    })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

v_repair_this() // 修复 window 指向global
v_new_toggle = undefined
v_console_log = function () {
} // 关闭日志输出;


// !function () {
//     "use strict";
//     var e, t, n, r, o, i = {}, a = {};
//     window.v_require = u;
//
//     function u(e) {
//         var t = a[e];
//         if (void 0 !== t)
//             return t.exports;
//         var n = a[e] = {
//             id: e,
//             loaded: !1,
//             exports: {}
//         };
//         return i[e].call(n.exports, n, n.exports, u),
//             n.loaded = !0,
//             n.exports
//     }
//
//     u.m = i,
//         u.amdO = {},
//         e = [],
//         u.O = function (t, n, r, o) {
//             if (!n) {
//                 var i = 1 / 0;
//                 for (d = 0; d < e.length; d++) {
//                     n = e[d][0],
//                         r = e[d][1],
//                         o = e[d][2];
//                     for (var a = !0, c = 0; c < n.length; c++)
//                         (!1 & o || i >= o) && Object.keys(u.O).every((function (e) {
//                                 return u.O[e](n[c])
//                             }
//                         )) ? n.splice(c--, 1) : (a = !1,
//                         o < i && (i = o));
//                     if (a) {
//                         e.splice(d--, 1);
//                         var f = r();
//                         void 0 !== f && (t = f)
//                     }
//                 }
//                 return t
//             }
//             o = o || 0;
//             for (var d = e.length; d > 0 && e[d - 1][2] > o; d--)
//                 e[d] = e[d - 1];
//             e[d] = [n, r, o]
//         }
//         ,
//         u.n = function (e) {
//             var t = e && e.__esModule ? function () {
//                         return e.default
//                     }
//                     : function () {
//                         return e
//                     }
//             ;
//             return u.d(t, {
//                 a: t
//             }),
//                 t
//         }
//         ,
//         n = Object.getPrototypeOf ? function (e) {
//                 return Object.getPrototypeOf(e)
//             }
//             : function (e) {
//                 return e.__proto__
//             }
//         ,
//         u.t = function (e, r) {
//             if (1 & r && (e = this(e)),
//             8 & r)
//                 return e;
//             if ("object" == typeof e && e) {
//                 if (4 & r && e.__esModule)
//                     return e;
//                 if (16 & r && "function" == typeof e.then)
//                     return e
//             }
//             var o = Object.create(null);
//             u.r(o);
//             var i = {};
//             t = t || [null, n({}), n([]), n(n)];
//             for (var a = 2 & r && e; "object" == typeof a && !~t.indexOf(a); a = n(a))
//                 Object.getOwnPropertyNames(a).forEach((function (t) {
//                         i[t] = function () {
//                             return e[t]
//                         }
//                     }
//                 ));
//             return i.default = function () {
//                 return e
//             }
//                 ,
//                 u.d(o, i),
//                 o
//         }
//         ,
//         u.d = function (e, t) {
//             for (var n in t)
//                 u.o(t, n) && !u.o(e, n) && Object.defineProperty(e, n, {
//                     enumerable: !0,
//                     get: t[n]
//                 })
//         }
//         ,
//         u.f = {},
//         u.e = function (e) {
//             return Promise.all(Object.keys(u.f).reduce((function (t, n) {
//                     return u.f[n](e, t),
//                         t
//                 }
//             ), []))
//         }
//         ,
//         u.u = function (e) {
//             return "js/" + ({
//                 57: "Note",
//                 114: "Activity",
//                 288: "Search",
//                 302: "NPS",
//                 323: "User",
//                 337: "Track",
//                 438: "Login",
//                 462: "minor",
//                 635: "FeedToNote",
//                 741: "Notification",
//                 921: "xhs-web-player",
//                 987: "Explore"
//             }[e] || e) + "." + {
//                 7: "d24a8b1",
//                 43: "0cae0d5",
//                 57: "f6422bc",
//                 72: "65cf356",
//                 75: "5307e99",
//                 96: "f391395",
//                 114: "53a6c2f",
//                 141: "2fea744",
//                 235: "7bd9ba7",
//                 240: "a909212",
//                 241: "976a255",
//                 248: "b50728a",
//                 268: "b633891",
//                 285: "49deb0a",
//                 288: "d515726",
//                 302: "f4b0ed6",
//                 305: "b9bc182",
//                 323: "fe3773c",
//                 337: "da86cbd",
//                 385: "931d0aa",
//                 438: "27489a0",
//                 462: "dbb9997",
//                 635: "1db479f",
//                 639: "887142a",
//                 646: "27e84f1",
//                 721: "360b388",
//                 741: "8c19707",
//                 859: "7761eaa",
//                 865: "c45d4f2",
//                 921: "c87d9ca",
//                 964: "fd3a157",
//                 987: "7708967"
//             }[e] + ".chunk.js"
//         }
//         ,
//         u.miniCssF = function (e) {
//             return "css/" + ({
//                 57: "Note",
//                 114: "Activity",
//                 288: "Search",
//                 302: "NPS",
//                 323: "User",
//                 438: "Login",
//                 462: "minor",
//                 635: "FeedToNote",
//                 741: "Notification"
//             }[e] || e) + "." + {
//                 7: "5b30e59",
//                 43: "dfaa3cf",
//                 57: "fc59c65",
//                 114: "d3f42a8",
//                 141: "191361a",
//                 240: "ee46276",
//                 285: "9035aa0",
//                 288: "b801ea0",
//                 302: "65f7ee7",
//                 323: "8d8ef85",
//                 438: "63b1cc6",
//                 462: "ca94d28",
//                 635: "88a4ce1",
//                 639: "09766fa",
//                 741: "adedae4"
//             }[e] + ".chunk.css"
//         }
//         ,
//         u.g = function () {
//             if ("object" == typeof globalThis)
//                 return globalThis;
//             try {
//                 return this || new Function("return this")()
//             } catch (e) {
//                 if ("object" == typeof window)
//                     return window
//             }
//         }(),
//         u.o = function (e, t) {
//             return Object.prototype.hasOwnProperty.call(e, t)
//         }
//         ,
//         r = {},
//         o = "xhs-pc-web:",
//         u.l = function (e, t, n, i) {
//             if (r[e])
//                 r[e].push(t);
//             else {
//                 var a, c;
//                 if (void 0 !== n)
//                     for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
//                         var l = f[d];
//                         if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + n) {
//                             a = l;
//                             break
//                         }
//                     }
//                 a || (c = !0,
//                     (a = document.createElement("script")).charset = "utf-8",
//                     a.timeout = 120,
//                 u.nc && a.setAttribute("nonce", u.nc),
//                     a.setAttribute("data-webpack", o + n),
//                     a.src = e),
//                     r[e] = [t];
//                 var s = function (t, n) {
//                     a.onerror = a.onload = null,
//                         clearTimeout(p);
//                     var o = r[e];
//                     if (delete r[e],
//                     a.parentNode && a.parentNode.removeChild(a),
//                     o && o.forEach((function (e) {
//                             return e(n)
//                         }
//                     )),
//                         t)
//                         return t(n)
//                 }
//                     , p = setTimeout(s.bind(null, void 0, {
//                     type: "timeout",
//                     target: a
//                 }), 12e4);
//                 a.onerror = s.bind(null, a.onerror),
//                     a.onload = s.bind(null, a.onload),
//                 c && document.head.appendChild(a)
//             }
//         }
//         ,
//         u.r = function (e) {
//             "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
//                 value: "Module"
//             }),
//                 Object.defineProperty(e, "__esModule", {
//                     value: !0
//                 })
//         }
//         ,
//         u.nmd = function (e) {
//             return e.paths = [],
//             e.children || (e.children = []),
//                 e
//         }
//         ,
//         u.p = "//fe-static.xhscdn.com/formula-static/xhs-pc-web/public/",
//         function () {
//             if ("undefined" != typeof document) {
//                 var e = function (e) {
//                     return new Promise((function (t, n) {
//                             var r = u.miniCssF(e)
//                                 , o = u.p + r;
//                             if (function (e, t) {
//                                 for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
//                                     var o = (a = n[r]).getAttribute("data-href") || a.getAttribute("href");
//                                     if ("stylesheet" === a.rel && (o === e || o === t))
//                                         return a
//                                 }
//                                 var i = document.getElementsByTagName("style");
//                                 for (r = 0; r < i.length; r++) {
//                                     var a;
//                                     if ((o = (a = i[r]).getAttribute("data-href")) === e || o === t)
//                                         return a
//                                 }
//                             }(r, o))
//                                 return t();
//                             !function (e, t, n, r, o) {
//                                 var i = document.createElement("link");
//                                 i.rel = "stylesheet",
//                                     i.type = "text/css",
//                                     i.onerror = i.onload = function (n) {
//                                         if (i.onerror = i.onload = null,
//                                         "load" === n.type)
//                                             r();
//                                         else {
//                                             var a = n && ("load" === n.type ? "missing" : n.type)
//                                                 , u = n && n.target && n.target.href || t
//                                                 , c = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
//                                             c.code = "CSS_CHUNK_LOAD_FAILED",
//                                                 c.type = a,
//                                                 c.request = u,
//                                             i.parentNode && i.parentNode.removeChild(i),
//                                                 o(c)
//                                         }
//                                     }
//                                     ,
//                                     i.href = t,
//                                     n ? n.parentNode.insertBefore(i, n.nextSibling) : document.head.appendChild(i)
//                             }(e, o, null, t, n)
//                         }
//                     ))
//                 }
//                     , t = {
//                     252: 0
//                 };
//                 u.f.miniCss = function (n, r) {
//                     t[n] ? r.push(t[n]) : 0 !== t[n] && {
//                         7: 1,
//                         43: 1,
//                         57: 1,
//                         114: 1,
//                         141: 1,
//                         240: 1,
//                         285: 1,
//                         288: 1,
//                         302: 1,
//                         323: 1,
//                         438: 1,
//                         462: 1,
//                         635: 1,
//                         639: 1,
//                         741: 1
//                     }[n] && r.push(t[n] = e(n).then((function () {
//                             t[n] = 0
//                         }
//                     ), (function (e) {
//                             throw delete t[n],
//                                 e
//                         }
//                     )))
//                 }
//             }
//         }(),
//         function () {
//             var e = {
//                 252: 0
//             };
//             u.f.j = function (t, n) {
//                 var r = u.o(e, t) ? e[t] : void 0;
//                 if (0 !== r)
//                     if (r)
//                         n.push(r[2]);
//                     else if (252 != t) {
//                         var o = new Promise((function (n, o) {
//                                 r = e[t] = [n, o]
//                             }
//                         ));
//                         n.push(r[2] = o);
//                         var i = u.p + u.u(t)
//                             , a = new Error;
//                         u.l(i, (function (n) {
//                                 if (u.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
//                                     r)) {
//                                     var o = n && ("load" === n.type ? "missing" : n.type)
//                                         , i = n && n.target && n.target.src;
//                                     a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
//                                         a.name = "ChunkLoadError",
//                                         a.type = o,
//                                         a.request = i,
//                                         r[1](a)
//                                 }
//                             }
//                         ), "chunk-" + t, t)
//                     } else
//                         e[t] = 0
//             }
//                 ,
//                 u.O.j = function (t) {
//                     return 0 === e[t]
//                 }
//             ;
//             var t = function (t, n) {
//                 var r, o, i = n[0], a = n[1], c = n[2], f = 0;
//                 if (i.some((function (t) {
//                         return 0 !== e[t]
//                     }
//                 ))) {
//                     for (r in a)
//                         u.o(a, r) && (u.m[r] = a[r]);
//                     if (c)
//                         var d = c(u)
//                 }
//                 for (t && t(n); f < i.length; f++)
//                     o = i[f],
//                     u.o(e, o) && e[o] && e[o][0](),
//                         e[o] = 0;
//                 return u.O(d)
//             }
//                 , n = self.webpackChunkxhs_pc_web = self.webpackChunkxhs_pc_web || [];
//             n.forEach(t.bind(null, 0)),
//                 n.push = t.bind(null, n.push.bind(n))
//         }()
// }();


!(function () {
        function Sanji() {
            var _ace_2725e = 2147483647
                , _ace_a72ba = 1
                , _ace_c9a41 = 0
                , _ace_e36bd = !!_ace_a72ba
                , _ace_512 = !!_ace_c9a41;
            return function (_ace_4752e, _ace_aa949, _ace_be07c) {
                var _ace_a3718 = []
                    , _ace_9750 = []
                    , _ace_66 = {}
                    , _ace_238b0 = []
                    , _ace_420ea = {
                    _ace_5ee37: _ace_4752e
                }
                    , _ace_d4acc = {}
                    , _ace_6458 = _ace_c9a41
                    , _ace_0edd5 = [];
                var decode = function (j) {
                    if (!j) {
                        return ""
                    }
                    var n = function (e) {
                        var f = []
                            , t = e.length;
                        var u = 0;
                        for (var u = 0; u < t; u++) {
                            var w = e.charCodeAt(u);
                            if (((w >> 7) & 255) == 0) {
                                f.push(e.charAt(u))
                            } else {
                                if (((w >> 5) & 255) == 6) {
                                    var b = e.charCodeAt(++u);
                                    var a = (w & 31) << 6;
                                    var c = b & 63;
                                    var v = a | c;
                                    f.push(String.fromCharCode(v))
                                } else {
                                    if (((w >> 4) & 255) == 14) {
                                        var b = e.charCodeAt(++u);
                                        var d = e.charCodeAt(++u);
                                        var a = (w << 4) | ((b >> 2) & 15);
                                        var c = ((b & 3) << 6) | (d & 63);
                                        var v = ((a & 255) << 8) | c;
                                        f.push(String.fromCharCode(v))
                                    }
                                }
                            }
                        }
                        return f.join("")
                    };
                    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                    var p = j.length;
                    var l = 0;
                    var m = [];
                    while (l < p) {
                        var s = k.indexOf(j.charAt(l++));
                        var r = k.indexOf(j.charAt(l++));
                        var q = k.indexOf(j.charAt(l++));
                        var o = k.indexOf(j.charAt(l++));
                        var i = (s << 2) | (r >> 4);
                        var h = ((r & 15) << 4) | (q >> 2);
                        var g = ((q & 3) << 6) | o;
                        m.push(String.fromCharCode(i));
                        if (q != 64) {
                            m.push(String.fromCharCode(h))
                        }
                        if (o != 64) {
                            m.push(String.fromCharCode(g))
                        }
                    }
                    return n(m.join(""))
                };
                var _ace_b81ca = function (_ace_d656a, _ace_7e97a, _ace_5ed3b, _ace_0a916) {
                    return {
                        _ace_4de55: _ace_d656a,
                        _ace_936: _ace_7e97a,
                        _ace_47589: _ace_5ed3b,
                        _ace_38c9c: _ace_0a916
                    };
                };
                var _ace_8cba0 = function (_ace_0a916) {
                    return _ace_0a916._ace_38c9c ? _ace_0a916._ace_936[_ace_0a916._ace_47589] : _ace_0a916._ace_4de55;
                };
                var _ace_44c663 = function (_ace_3b92a, _ace_9670d) {
                    return _ace_9670d.hasOwnProperty(_ace_3b92a) ? _ace_e36bd : _ace_512;
                };
                var _ace_44c662 = function (_ace_3b92a, _ace_9670d) {
                    if (_ace_44c663(_ace_3b92a, _ace_9670d)) {
                        return _ace_b81ca(_ace_c9a41, _ace_9670d, _ace_3b92a, _ace_a72ba);
                    }
                    var _ace_4d487;
                    if (_ace_9670d._ace_eb1d) {
                        _ace_4d487 = _ace_44c662(_ace_3b92a, _ace_9670d._ace_eb1d);
                        if (_ace_4d487) {
                            return _ace_4d487;
                        }
                    }
                    if (_ace_9670d._ace_b0920) {
                        _ace_4d487 = _ace_44c662(_ace_3b92a, _ace_9670d._ace_b0920);
                        if (_ace_4d487) {
                            return _ace_4d487;
                        }
                    }
                    return _ace_512;
                };
                var _ace_44c66 = function (_ace_3b92a) {
                    var _ace_4d487 = _ace_44c662(_ace_3b92a, _ace_66);
                    if (_ace_4d487) {
                        return _ace_4d487;
                    }
                    return _ace_b81ca(_ace_c9a41, _ace_66, _ace_3b92a, _ace_a72ba);
                };
                var _ace_a0dd0 = function () {
                    _ace_a3718 = (_ace_66._ace_85500) ? _ace_66._ace_85500 : _ace_238b0;
                    _ace_66 = (_ace_66._ace_b0920) ? _ace_66._ace_b0920 : _ace_66;
                    _ace_6458--
                };
                var _ace_929a = function (_ace_1c1e0) {
                    _ace_66 = {
                        _ace_b0920: _ace_66,
                        _ace_eb1d: _ace_1c1e0,
                        _ace_85500: _ace_a3718
                    };
                    _ace_a3718 = [];
                    _ace_6458++
                };
                var _ace_c7cc7 = function () {
                    _ace_0edd5.push(_ace_b81ca(_ace_6458, _ace_c9a41, _ace_c9a41, _ace_c9a41))
                };
                var _ace_c2272 = function () {
                    return _ace_8cba0(_ace_0edd5.pop())
                };
                var _ace_01154 = function (_ace_37051, _ace_0630) {
                    return _ace_d4acc[_ace_37051] = _ace_0630;
                };
                var _ace_84d = function (_ace_37051) {
                    return _ace_d4acc[_ace_37051];
                };
                var _ace_dcca5 = [_ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41), _ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41), _ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41), _ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41), _ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41)];
                var _ace_4d11 = [_ace_be07c, function _ace_ad126(_ace_5ed3b) {
                    return _ace_dcca5[_ace_5ed3b];
                }
                    , function (_ace_5ed3b) {
                        return _ace_b81ca(_ace_c9a41, _ace_420ea._ace_b0594, _ace_5ed3b, _ace_a72ba);
                    }
                    , function (_ace_5ed3b) {
                        return _ace_44c66(_ace_5ed3b);
                    }
                    , function (_ace_5ed3b) {
                        return _ace_b81ca(_ace_c9a41, _ace_4752e, _ace_aa949.d[_ace_5ed3b], _ace_a72ba);
                    }
                    , function (_ace_5ed3b) {
                        return _ace_b81ca(_ace_420ea._ace_5ee37, _ace_c9a41, _ace_c9a41, _ace_c9a41);
                    }
                    , function (_ace_5ed3b) {
                        return _ace_b81ca(_ace_c9a41, _ace_aa949.d, _ace_5ed3b, _ace_a72ba);
                    }
                    , function (_ace_5ed3b) {
                        return _ace_b81ca(_ace_420ea._ace_b0594, _ace_be07c, _ace_be07c, _ace_c9a41);
                    }
                    , function (_ace_5ed3b) {
                        return _ace_b81ca(_ace_c9a41, _ace_d4acc, _ace_5ed3b, _ace_c9a41)
                    }
                ];
                var _ace_ae44 = function (_ace_28434, _ace_5ed3b) {
                    return _ace_4d11[_ace_28434] ? _ace_4d11[_ace_28434](_ace_5ed3b) : _ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41);
                };
                var _ace_34d1 = function (_ace_28434, _ace_5ed3b) {
                    return _ace_8cba0(_ace_ae44(_ace_28434, _ace_5ed3b));
                };
                var _ace_1ae3c = function (_ace_d656a, _ace_7e97a, _ace_5ed3b, _ace_0a916) {
                    _ace_dcca5[_ace_c9a41] = _ace_b81ca(_ace_d656a, _ace_7e97a, _ace_5ed3b, _ace_0a916)
                };
                var _ace_99485 = function (_ace_2d9a) {
                    var _ace_7d4cc = _ace_c9a41;
                    while (_ace_7d4cc < _ace_2d9a.length) {
                        var _ace_b34db = _ace_2d9a[_ace_7d4cc];
                        var _ace_416e1 = _ace_aec23[_ace_b34db[_ace_c9a41]];
                        _ace_7d4cc = _ace_416e1(_ace_b34db[1], _ace_b34db[2], _ace_b34db[3], _ace_b34db[4], _ace_7d4cc, _ace_75a05, _ace_2d9a);
                    }
                };
                var _ace_2437 = function (_ace_a135, _ace_7577, _ace_b34db, _ace_2d9a) {
                    var _ace_54be = _ace_8cba0(_ace_a135);
                    var _ace_d4347 = _ace_8cba0(_ace_7577);
                    if (_ace_54be == 2147483647) {
                        return _ace_b34db;
                    }
                    while (_ace_54be < _ace_d4347) {
                        var x = _ace_2d9a[_ace_54be];
                        var _ace_416e1 = _ace_aec23[x[_ace_c9a41]];
                        _ace_54be = _ace_416e1(x[1], x[2], x[3], x[4], _ace_54be, _ace_75a05, _ace_2d9a);
                    }
                    return _ace_54be;
                };
                var _ace_ea2b3 = function (_ace_d939, _ace_2d9a) {
                    var _ace_0c1a0 = _ace_a3718.splice(_ace_a3718.length - 6, 6);
                    var _ace_00c3d = _ace_0c1a0[4]._ace_4de55 != 2147483647;
                    try {
                        _ace_d939 = _ace_2437(_ace_0c1a0[0], _ace_0c1a0[1], _ace_d939, _ace_2d9a);
                    } catch (e) {
                        _ace_dcca5[2] = _ace_b81ca(e, _ace_c9a41, _ace_c9a41, _ace_c9a41);
                        _ace_d939 = _ace_2437(_ace_0c1a0[2], _ace_0c1a0[3], _ace_d939, _ace_2d9a);
                        _ace_dcca5[2] = _ace_b81ca(_ace_c9a41, _ace_c9a41, _ace_c9a41, _ace_c9a41);
                    } finally {
                        _ace_d939 = _ace_2437(_ace_0c1a0[4], _ace_0c1a0[5], _ace_d939, _ace_2d9a);
                    }
                    return _ace_0c1a0[5]._ace_4de55 > _ace_d939 ? _ace_0c1a0[5]._ace_4de55 : _ace_d939;
                };
                var _ace_75a05 = decode(_ace_aa949.b).split('').reduce(function (_ace_664b, _ace_b34db) {
                    if ((!_ace_664b.length) || _ace_664b[_ace_664b.length - _ace_a72ba].length == 5) {
                        _ace_664b.push([]);
                    }
                    _ace_664b[_ace_664b.length - _ace_a72ba].push(-_ace_a72ba * 1 + _ace_b34db.charCodeAt());
                    return _ace_664b;
                }, []);
                var _ace_aec23 = [function (p0, p1, p2, p3, p4, p5, p6) {
                    _ace_1ae3c(_ace_34d1(p0, p1) / _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                    return ++p4;
                }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(0, _ace_8cba0(_ace_ae44(p0, p1)), _ace_34d1(p2, p3), 1);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_2c526 = _ace_34d1(p0, p1);
                        _ace_1ae3c(_ace_a3718.splice(_ace_a3718.length - _ace_2c526, _ace_2c526).map(_ace_8cba0), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return _ace_ea2b3(p4, p6);
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_a0dd0();
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_9750.push(_ace_dcca5[0]);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_25a6 = _ace_ae44(p0, p1)
                            , _ace_d2389 = _ace_34d1(p0, p1);
                        _ace_1ae3c(_ace_d2389++, _ace_be07c, _ace_be07c, 0);
                        _ace_25a6._ace_936[_ace_25a6._ace_47589] = _ace_d2389;
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) & _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) >>> _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) % _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) + _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return (!_ace_8cba0(_ace_dcca5[0])) ? _ace_34d1(p0, p1) : ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) == _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(typeof _ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_dcca5[0] = _ace_a3718[_ace_a3718.length - 1];
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) && _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(~_ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(+_ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_25a6 = _ace_ae44(p0, p1);
                        _ace_1ae3c(delete _ace_25a6._ace_936[_ace_25a6._ace_47589], _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_a0dd0();
                        _ace_1ae3c(_ace_be07c, _ace_be07c, _ace_be07c, 0, 0);
                        _ace_c2272();
                        return Infinity;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_163c1 = _ace_34d1(p0, p1);
                        if (_ace_a3718.length < _ace_163c1) {
                            return ++p4;
                        }
                        var _ace_bdcc = _ace_a3718.splice(_ace_a3718.length - _ace_163c1, _ace_163c1).map(_ace_8cba0)
                            , _ace_25a6 = _ace_a3718.pop()
                            , _ace_8712 = _ace_8cba0(_ace_25a6);
                        _ace_bdcc.unshift(null);
                        _ace_1ae3c(new (Function.prototype.bind.apply(_ace_8712, _ace_bdcc)), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) * _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_dcca5[4] = _ace_9750.pop();
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_dcca5[3] = _ace_b81ca(_ace_a3718.length, 0, 0, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_88c3 = _ace_34d1(p0, p1);
                        _ace_1ae3c(_ace_84d(_ace_88c3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) < _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_25a6 = _ace_ae44(p0, p1)
                            , _ace_d2389 = _ace_34d1(p0, p1) - 1;
                        _ace_25a6._ace_936[_ace_25a6._ace_47589] = _ace_d2389;
                        _ace_1ae3c(_ace_d2389, _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_c7cc7();
                        _ace_929a(_ace_420ea._ace_eb1d);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return _ace_34d1(p0, p1);
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) << _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) instanceof _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return _ace_2725e;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        throw _ace_a3718.pop();
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) - _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        debugger;
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_88c3 = _ace_34d1(p0, p1)
                            , _ace_d2389 = {};
                        _ace_1ae3c(_ace_01154(_ace_88c3, _ace_d2389), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_dcca5[4] = _ace_9750[_ace_9750.length - 1];
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) != _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(-_ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) | _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) in _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(!_ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c({}, _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_66[p1] = undefined;
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        return _ace_8cba0(_ace_dcca5[0]) ? _ace_34d1(p0, p1) : ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_929a(null);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_25a6 = _ace_ae44(p0, p1)
                            , _ace_d2389 = _ace_34d1(p0, p1) + 1;
                        _ace_25a6._ace_936[_ace_25a6._ace_47589] = _ace_d2389;
                        _ace_1ae3c(_ace_d2389, _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) >= _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) <= _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_163c1 = _ace_34d1(p0, p1);
                        if (_ace_a3718.length < _ace_163c1) {
                            return ++p4;
                        }
                        var _ace_bdcc = _ace_a3718.splice(_ace_a3718.length - _ace_163c1, _ace_163c1).map(_ace_8cba0)
                            , _ace_25a6 = _ace_a3718.pop()
                            , _ace_8712 = _ace_8cba0(_ace_25a6);
                        _ace_1ae3c(_ace_8712.apply(typeof _ace_25a6._ace_936 == "undefined" ? _ace_4752e : _ace_25a6._ace_936, _ace_bdcc), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_a3718.push(_ace_dcca5[0]);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_25a6 = _ace_ae44(p0, p1)
                            , _ace_d2389 = _ace_34d1(p2, p3);
                        _ace_1ae3c(_ace_25a6._ace_936[_ace_25a6._ace_47589] = _ace_d2389, _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) >> _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_dcca5[1] = _ace_a3718.pop();
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1), _ace_be07c, _ace_be07c, 0);
                        var _ace_388a4 = _ace_c2272();
                        while (_ace_388a4 < _ace_6458) {
                            _ace_a0dd0();
                        }
                        return Infinity;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) === _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_404c = _ace_75a05.slice(_ace_34d1(p0, p1), _ace_34d1(p2, p3) + 1)
                            , _ace_71423 = _ace_66;
                        _ace_1ae3c(function () {
                            _ace_420ea = {
                                _ace_5ee37: this || _ace_4752e,
                                _ace_84c79: _ace_420ea,
                                _ace_b0594: arguments,
                                _ace_eb1d: _ace_71423
                            };
                            _ace_99485(_ace_404c);
                            _ace_420ea = _ace_420ea._ace_84c79;
                            return _ace_8cba0(_ace_dcca5[0]);
                        }, _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) || _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) ^ _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        var _ace_25a6 = _ace_ae44(p0, p1)
                            , _ace_d2389 = _ace_34d1(p0, p1);
                        _ace_1ae3c(_ace_d2389--, _ace_be07c, _ace_be07c, 0);
                        _ace_25a6._ace_936[_ace_25a6._ace_47589] = _ace_d2389;
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) > _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                    , function (p0, p1, p2, p3, p4, p5, p6) {
                        _ace_1ae3c(_ace_34d1(p0, p1) !== _ace_34d1(p2, p3), _ace_be07c, _ace_be07c, 0);
                        return ++p4;
                    }
                ];
                return _ace_99485(_ace_75a05);
            }
                ;
        }
        ;Sanji()(window, {
            "b": "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",
            "d": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "$", "_", "[", "]", 79, 1902, 0, 1903, 1966, 1967, 2293, 2527, 4375, 4483, 5346, 5347, 5467, 5468, 5587, 5588, 5741, 5742, 5874, 5875, 6050, 6051, 6225, 6226, 6323, 6324, 6499, 6500, 6601, 6602, 6792, 6793, 6864, 6865, 6978, 6979, 7088, 7089, 7162, 7163, 7296, 7297, 8620, 8621, 8698, 8699, 8732, 8733, 8794, 10758, 10863, 10864, 11071, "window", 1, 381, "", 2, false, null, 64, 9, 2294, 2526, "+", "/", "=", 309, 124, 147, 170, 209, 3, 4, 15, 6, 63, "isNaN", 244, 255, 111, 215, 67, 75, 128, 100, 211, 127, 103, 2048, 148, 192, 12, 224, 23, 4376, 4482, 123, 65, 66, 120, 16, 69, 16843776, 65536, 16843780, 16842756, 66564, 1024, 16778244, 16777216, 1028, 16778240, 66560, 16842752, 65540, 16777220, 2146402272, 2147450880, 32768, 1081376, 1048576, 32, 2146435040, 2147450848, 2147483616, 2146402304, 2.147483648E9, 1081344, 1048608, 2146435072, 32800, 520, 134349312, 134348808, 134218240, 131592, 131080, 134217736, 131072, 134349320, 134348800, 134217728, 8, 512, 131584, 134218248, 8396801, 8321, 8396928, 8388737, 8388609, 8193, 8396800, 8396929, 129, 8388736, 8192, 8388608, 8320, 256, 34078976, 34078720, 1107296512, 524288, 1073741824, 1074266368, 33554688, 1107820544, 524544, 33554432, 1074266112, 1073742080, 1107820800, 1107296256, 536870928, 541065216, 16384, 541081616, 4194304, 536887296, 4210704, 4194320, 536870912, 16400, 536887312, 4210688, 541065232, 541081600, 2097152, 69206018, 67110914, 2099202, 69208064, 69208066, 67108866, 67108864, 2050, 67110912, 2097154, 69206016, 2099200, 268439616, 4096, 262144, 268701760, 268435456, 262208, 268697600, 266240, 268701696, 266304, 268435520, 268439552, 4160, 268697664, 1288, 1289, 1327, 1314, 1323, 30, 1383, 1359, 62, 96, 1380, 94, 1711, 252645135, 65535, 858993459, 16711935, 1431655765, 31, 1582, 1571, 28, 24, 1496, 1481, 1709, 1391, 1831, 1815, 1771, 2147483647, 56, 81, 36, 828, 827, 862, 48, 54, 107, " ", 165, 180, 288, 284, 263, 264, 283, "|", 233, 442, ";", 402, true, 187050025, 472920585, 186915882, 876157969, 255199502, 806945584, 220596020, 958210835, 757275681, 940378667, 489892883, 705504304, 354103316, 688857884, 890312192, 219096591, 622400037, 254088489, 907618332, 52759587, 907877143, 53870614, 839463457, 389417746, 975774727, 372382245, 437136414, 909246726, 168694017, 473575703, 52697872, 1010440969, 655, "{", "}", "JSON", "-", 18, 115, 114, 117, 113, 116, 11, 109, 82, 150, 138, 126, 122, 71, 169, 172, 34, 55, 61, 158, 156, 25, 168, 171, 162, 161, 164, ".", "\"", "'", 40, 88, 87, 133, 95, 98, 74, 46, 175, 174, 177, ",", 187, 68, 52, 108, 110, 104, 106, 99, 5, 7, 70, 41, 0.02, 76, 45, "!", 130, 1318, 1317, 1320, 191, 220, 247, 276, 306, 346, 384, 421, 466, 507, 546, 583, 619, 658, 693, 731, 769, 796, 817, 868, 913, 959, 1002, "\\", 1030, 1067, 1027, 1159, 1120, 1128, 1147, 1155, 1089, 1175, 1229, 1268, 1311, 72, 26, 60, 8795, 8828, 8829, 8843, 8844, 8891, 8892, 8930, 8931, 8969, 8970, 9004, 9005, 9040, 9041, 10435, 10436, 10495, 10496, 10593, 10594, 10621, 10622, 10718, 10719, 10741, 10742, 10757, 14, 1732584193, 271733879, 1732584194, 271733878, 680876936, 389564586, 17, 606105819, 22, 1044525330, 176418897, 1200080426, 1473231341, 45705983, 1770035416, 1958414417, 10, 42063, 1990404162, 1804603682, 13, 40341101, 1502002290, 1236535329, 165796510, 1069501632, 643717713, 20, 373897302, 701558691, 38016083, 660478335, 405537848, 568446438, 1019803690, 187363961, 1163531501, 1444681467, 51403784, 1735328473, 1926607734, 378558, 2022574463, 1839030562, 35309556, 1530992060, 1272893353, 155497632, 1094730640, 681279174, 358537222, 722521979, 76029189, 640364487, 421815835, 530742520, 995338651, 198630844, 1126891415, 1416354905, 21, 57434055, 1700485571, 1894986606, 1051523, 2054922799, 1873313359, 30611744, 1560198380, 1309151649, 145523070, 1120210379, 718787259, 343485551, "undefined", 53, 93, 102, 59, 97, 141, 11072, 11083, 11084, 11110, 11111, 11118, ":"]
        });
    }
)();

// function x_s(url, param,ck) {
//     document.cookie = ck
//     if (!param.includes("{")) {
//     // 变量为空（undefined、null、false、0、NaN 都被视为“假”）
//         return window._webmsxyw(url, '')["X-s"];
// } else {
//     // 变量不为空
// }
//     return window._webmsxyw(url, JSON.parse(param))["X-s"];
// }

// console.log(x_s("/api/sns/web/v1/homefeed", '{"cursor_score":"1.7025252519650025E9","num":35,"refresh_type":3,"note_index":35,"unread_begin_note_id":"","unread_end_note_id":"","unread_note_count":0,"category":"homefeed_recommend","search_key":"","need_num":10,"image_formats":["jpg","webp","avif"]}'));
function get_xs(api, data, a1) {
    if(data === ''){
        data = undefined
    }
    window.document.cookie = "a1=" + a1 + ';'
    return window._webmsxyw(api, data)
}
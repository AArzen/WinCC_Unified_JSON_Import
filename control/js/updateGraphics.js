
function update() {
        const button = document.getElementById('fileButton');

        if (!button) {
                console.error("Element #fileButton not found!");
                return;
        }

        const width = WebCC.Properties.ButtonWidth;
        const height = WebCC.Properties.ButtonHeight;
        const color = WebCC.Properties.ButtonColor;
        const colorPush = WebCC.Properties.ButtonPushColor;
        const colorHover = WebCC.Properties.ButtonHoverColor;
        const text = WebCC.Properties.ButtonText;
        const border_radius = WebCC.Properties.ButtonBorderRadius;
        const font_size = WebCC.Properties.ButtonFontSize;

        /*console.log("Set ButtonWidth:", width);
        console.log("Set ButtonHeight:", height);
        console.log("Set ButtonColor:", color);
        console.log("Set ButtonColorPush:", colorPush);
        console.log("Set ButtonColorPush:", colorHover);
        console.log("Set ButtonText:", text);
        console.log("Set ButtonBorderRadius:", border_radius);
        console.log("Set ButtonBorderRadius:", font_size);*/

        // Set button width & height
        if (width && !isNaN(width)) {
                button.style.setProperty('--button-width', width + 'px');
        } else {
                console.warn("Value error ButtonWidth:", width);
        }

        if (height && !isNaN(height)) {
                button.style.setProperty('--button-height', height + 'px');
        } else {
                console.warn("Value error ButtonHeight:", height);
        }

        button.style.setProperty('--button-bg', toColor(color));
        button.style.setProperty('--button-push-bg', toColor(colorPush));
        button.style.setProperty('--button-hover-bg', toColor(colorHover));
        button.style.setProperty('--button-border-radius', border_radius + 'px');
        button.style.setProperty('--button-font-site', font_size + 'px');

        if (text) {
                button.textContent = text;
        }
}

// Color WinCC format in to CSS rgba()
function toColor(num) {
        num >>>= 0;
        var b = num & 0xFF,
                g = (num & 0xFF00) >>> 8,
                r = (num & 0xFF0000) >>> 16,
                a = ((num & 0xFF000000) >>> 24) / 255;

        return 'rgba(' + [r, g, b, a].join(',') + ')';
}

window.update = update;

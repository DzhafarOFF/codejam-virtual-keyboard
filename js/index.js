window.addEventListener('DOMContentLoaded', () => {
    const Keyboard = {

        elements: {
            main: null,
            keys: [],
        },

        init() {
            this.elements.textArea = document.createElement('textarea');
            this.elements.textArea.classList.add('keyboard__output');

            this.elements.main = document.createElement('div');
            this.elements.main.classList.add('keyboard');
            this.elements.main.appendChild(this.createKeys());

            this.elements.keys = this.elements.main.querySelectorAll('.keyboard__key');
            document.body.appendChild(this.elements.textArea);
            document.body.appendChild(this.elements.main);
        },

        createKeys() {
            const fragment = document.createDocumentFragment();
            const keyLayout = [
                '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
                'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
                'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
                'space',
            ];

            keyLayout.forEach((key) => {
                const keyElement = document.createElement('button');

                keyElement.classList.add('keyboard__key');

                keyElement.textContent = key.toLowerCase();

                keyElement.addEventListener('click', () => {
                    this.elements.textArea.value += keyElement.textContent;
                });

                fragment.appendChild(keyElement);
            });

            return fragment;
        },
    };

    Keyboard.init();
});

let _content = document.createElement('div');
_content.id = "content";

export function setContent(content) {
    _content.replaceChildren(...content);
}

export function getContent() {
    return _content;
}
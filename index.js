"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vallpass(password) {
    if (password.length < 6) {
        return { isValid: false, message: "Пароль должен содержать не менее 6 символов" };
    }
    return { isValid: true };
}
const element = document.getElementById('myElement');
element.addEventListener('click', () => {
    // Если класс 'active' есть — удалит, если нет — добавит
    element.classList.toggle('active');
});
//# sourceMappingURL=index.js.map

function vallpass(password: string): { isValid: boolean; message?: string } {
    if (password.length < 6) {
        return { isValid: false, message: "Пароль должен содержать не менее 6 символов" };
    }
    return { isValid: true };
}



const element = document.getElementById('myElement') as HTMLDivElement | null;

if (element) {
  element.addEventListener('click', (event: MouseEvent) => {
    element.classList.toggle('active');
  });
} else {
  console.error('Элемент с id "myElement" не найден');
}
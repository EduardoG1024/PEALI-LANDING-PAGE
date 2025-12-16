import { supabase } from "./key.js";

const LoginBtn = document.getElementById('Entra');
const statusUser = document.getElementById('statusUser');

LoginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    const {data, error} = await supabase
    .from('peali_usuarios')
    .select('peali_user, peali_pass')
    .eq('peali_user', user)
    .single()

    if (error || !data) {
        statusUser.textContent = 'Usuario o contraseña incorrectos';
        return;
    }
    
    if (user === data.peali_user && pass === data.peali_pass ) {
        sessionStorage.setItem('admin', data.peali_user);
        window.location = "dashboard.html";
    } else {
        statusUser.textContent = 'Usuario o contraseña incorrectos';
    }
});
console.log(sessionStorage.getItem('admin'));
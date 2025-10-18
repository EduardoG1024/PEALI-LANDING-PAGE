const OpenOneDrive = document.querySelector('.IconCloud');

function openOneDrive() {
    window.open("https://1drv.ms/f/c/193cb13e0f350610/ElOrYJprCZJMrROQPy4aG_IB_WUD-UA254Anp62zqYAMww?e=ehXsDWhttps://1drv.ms/f/c/193cb13e0f350610/ElOrYJprCZJMrROQPy4aG_IB_WUD-UA254Anp62zqYAMww?e=ehXsDW", "_blank", "width=600,height=400")
};
OpenOneDrive.addEventListener("click", () => {
    openOneDrive();
});
// Nombre superior


// Sistema de Mensajes/Anuncios
const supabase = window.supabase.createClient(
    'https://nptkkyutlmvmvjiaigqf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wdGtreXV0bG12bXZqaWFpZ3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTg4MjEsImV4cCI6MjA3NjI5NDgyMX0.rEfOUxO1ElubL20lX95QQ5N0q0ID5j4j-AMvyp_fWXo'
);
// Verificar usuario
const publicarBtn = document.getElementById('publicar');
const mostrador = document.getElementById('mensajesContenedor');
const statusmensaje = document.getElementById('statusmensaje');
const userBar = document.getElementById('user-top');
const escribe = document.getElementById('escriba');

const UserAdmin = sessionStorage.getItem('admin');
if (UserAdmin == 'PabloIniestra') {
    publicarBtn.style.display = 'flex';
    userBar.innerHTML = `Bienvenido @${UserAdmin}`;
    escribe.style.display = 'flex';

} else {
    userBar.innerHTML = `Bienvenido @${UserAdmin}`;
}


// Subir mensaje
publicarBtn.addEventListener('click', async() => {
    const mensajeTexto = document.getElementById('mensajeTexto').value.trim();
    if (!mensajeTexto) {
        statusmensaje.textContent = 'LLene el campo requerido';
    } else {
        const { data, error } = await supabase
        .from('peali_anuncios')
        .insert({ 
            contenido_mensaje: mensajeTexto
        })
        statusmensaje.textContent = 'El mensaje se guardo, recargue la pagina';
        console.log(data);
    }
});

// Ver mensajes
async function verMensajes() {
    const { data, error} = await supabase
    .from('peali_anuncios')
    .select('contenido_mensaje')
    .gt('id', 2)
    .order('id', { ascending: false})
    data.forEach(mensajeBox => {
        const Box = document.createElement('div');
        Box.className = 'Box';
        Box.textContent = mensajeBox.contenido_mensaje;
        mostrador.appendChild(Box);
    })
}
verMensajes();
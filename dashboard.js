const OpenOneDrive = document.querySelector('.IconCloud');

function openOneDrive() {
    window.open("https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8xOTNjYjEzZTBmMzUwNjEwL0VsT3JZSnByQ1pKTXJST1FQeTRhR19JQlgtampxNDR0VF91REo2dkRtZVloSlE%5FZT1LZ0YxTUY&id=193CB13E0F350610%21s9a60ab53096b4c92ad13903f2e1a1bf2&cid=193CB13E0F350610", "_blank", "width=600,height=400")
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
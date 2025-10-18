const supabase = window.supabase.createClient(
    'https://nptkkyutlmvmvjiaigqf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wdGtreXV0bG12bXZqaWFpZ3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTg4MjEsImV4cCI6MjA3NjI5NDgyMX0.rEfOUxO1ElubL20lX95QQ5N0q0ID5j4j-AMvyp_fWXo'
);

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
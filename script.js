function showSidebar (){
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'flex';
        }
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar');
            const noneDisplay = document.querySelectorAll('.noneDisplay');
            noneDisplay.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (sidebar.style.display === "flex") {
                        sidebar.style.display ="none";
                    }
                })
            })
            sidebar.style.display = 'none';
        }
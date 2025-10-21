const search = {
    init() {
        this.setupSearch();
    },

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const postsGrid = document.getElementById('postsGrid');
        
        if (!searchInput || !postsGrid) return;

        const posts = Array.from(postsGrid.querySelectorAll('.post-item'));

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            posts.forEach(post => {
                const title = post.querySelector('.post-title').textContent.toLowerCase();
                const tag = post.querySelector('.tag').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || tag.includes(searchTerm)) {
                    post.style.display = 'flex';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    search.init();
});
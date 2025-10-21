// Main application initialization
const app = {
    init() {
        this.loadProjects();
        this.loadPosts();
        this.setupEventListeners();
        this.setupSmoothScroll();
    },

    // Sample data - can be moved to external JSON files
    projects: [
        {
            icon: '🚀',
            title: 'Sidekiq',
            description: 'Simple, efficient background processing for Ruby. Used by thousands of companies worldwide.',
            link: 'https://sidekiq.org',
            linkText: 'Learn more →'
        },
        {
            icon: '⚙️',
            title: 'Faktory',
            description: 'Language-agnostic job server for polyglot environments.',
            link: 'https://github.com/contribsys/faktory',
            linkText: 'Learn more →'
        },
        {
            icon: '💎',
            title: 'Open Source',
            description: 'Contributing to Ruby ecosystem since 2007. Maintainer of several popular gems.',
            link: 'https://github.com/mperham',
            linkText: 'View repos →'
        }
    ],

    posts: [
        {
            title: 'Sidekiq 8.0: Profiling',
            link: 'https://www.mikeperham.com/2025/04/08/sidekiq-8.0-profiling/',
            date: 'April 8, 2025',
            tag: 'Sidekiq'
        },
        {
            title: 'Sidekiq 8.0: Improvements to the Web UI',
            link: 'https://www.mikeperham.com/2025/04/01/sidekiq-8.0-improvements-to-the-web-ui/',
            date: 'April 1, 2025',
            tag: 'Sidekiq'
        },
        {
            title: 'Introducing Sidekiq 8.0',
            link: 'https://www.mikeperham.com/2025/03/05/introducing-sidekiq-8.0/',
            date: 'March 5, 2025',
            tag: 'Release'
        },
        {
            title: 'Conventional Commits',
            link: 'https://www.mikeperham.com/2025/01/30/conventional-commits/',
            date: 'January 30, 2025',
            tag: 'Development'
        },
        {
            title: 'Sponsoring Hanami',
            link: 'https://www.mikeperham.com/2025/01/17/sponsoring-hanami/',
            date: 'January 17, 2025',
            tag: 'Open Source'
        },
        {
            title: 'Iteration and Sidekiq 7.3.0',
            link: 'https://www.mikeperham.com/2024/07/03/iteration-and-sidekiq-7.3.0/',
            date: 'July 3, 2024',
            tag: 'Sidekiq'
        },
        {
            title: 'Redis Licensing Changes and You',
            link: 'https://www.mikeperham.com/2024/04/22/redis-licensing-changes-and-you/',
            date: 'April 22, 2024',
            tag: 'Redis'
        },
        {
            title: 'How does Sidekiq work?',
            link: 'https://www.mikeperham.com/2024/02/22/how-does-sidekiq-work/',
            date: 'February 22, 2024',
            tag: 'Tutorial'
        }
    ],

    loadProjects() {
        const featuredGrid = document.getElementById('featuredGrid');
        if (!featuredGrid) return;

        featuredGrid.innerHTML = this.projects.map(project => `
            <div class="featured-card">
                <div class="card-icon">${project.icon}</div>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.description}</p>
                <a href="${project.link}" class="card-link">${project.linkText}</a>
            </div>
        `).join('');
    },

    loadPosts() {
        const postsGrid = document.getElementById('postsGrid');
        if (!postsGrid) return;

        postsGrid.innerHTML = this.posts.map(post => `
            <div class="post-item">
                <div class="post-content">
                    <a href="${post.link}" class="post-title">${post.title}</a>
                    <span class="post-date">${post.date}</span>
                </div>
                <span class="tag">${post.tag}</span>
            </div>
        `).join('');
    },

    setupEventListeners() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                // Implement load more functionality
                alert('More posts would load here!');
            });
        }
    },

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
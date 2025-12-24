        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const sidebar = document.getElementById('sidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            
            mobileMenuButton.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                sidebarOverlay.classList.toggle('active');
            });
            
            sidebarOverlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });
            
            // Navigation functionality
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.section-content');
            
            // Set first nav item and section as active
            if (navItems.length > 0) {
                navItems[0].classList.add('active');
            }
            
            // Add click event to each nav item
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    sidebar.classList.remove('active');
                    sidebarOverlay.classList.remove('active');
                    
                    // Get the target section id
                    const targetSection = this.getAttribute('data-section');
                    
                    // Remove active class from all nav items and sections
                    navItems.forEach(nav => nav.classList.remove('active'));
                    sections.forEach(section => section.classList.remove('active'));
                    
                    // Add active class to clicked nav item
                    this.classList.add('active');
                    
                    // Show target section
                    const targetElement = document.getElementById(targetSection);
                    if (targetElement) {
                        targetElement.classList.add('active');
                    }
                    
                    // Scroll to top of content area
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
            
            // Copy button functionality
            document.querySelectorAll('.copy-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const codeId = this.getAttribute('data-code');
                    const codeElement = document.getElementById(codeId);
                    
                    if (codeElement) {
                        const codeText = codeElement.textContent;
                        
                        // Copy to clipboard
                        navigator.clipboard.writeText(codeText).then(() => {
                            // Show copied feedback
                            const originalText = this.innerHTML;
                            this.innerHTML = '<i class="fas fa-check mr-1"></i> Copied!';
                            this.classList.remove('bg-blue-800');
                            this.classList.add('bg-green-700');
                            
                            // Reset button after 2 seconds
                            setTimeout(() => {
                                this.innerHTML = originalText;
                                this.classList.remove('bg-green-700');
                                this.classList.add('bg-blue-800');
                            }, 2000);
                        }).catch(err => {
                            console.error('Failed to copy: ', err);
                        });
                    }
                });
            });
            
            // Print button functionality
            document.getElementById('printBtn').addEventListener('click', function() {
                window.print();
            });
            
            // Download PDF button (placeholder)
            document.getElementById('downloadBtn').addEventListener('click', function() {
                alert('PDF download functionality would be implemented here. In a production environment, this would generate and download a PDF version of the manual.');
            });
            
            // Scroll to top button
            const scrollToTopButton = document.getElementById('scrollToTop');
            
            // Show/hide scroll to top button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    scrollToTopButton.style.display = 'flex';
                } else {
                    scrollToTopButton.style.display = 'none';
                }
            });
            
            // Scroll to top functionality
            scrollToTopButton.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Auto-hide mobile menu when clicking on a link on larger screens
            function checkWindowSize() {
                if (window.innerWidth >= 1024) {
                    sidebar.classList.remove('active');
                    sidebarOverlay.classList.remove('active');
                }
            }
            
            window.addEventListener('resize', checkWindowSize);
            
            // Training checklist functionality
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const parentDiv = this.parentElement.parentElement;
                    if (this.checked) {
                        parentDiv.classList.add('line-through', 'text-green-600');
                    } else {
                        parentDiv.classList.remove('line-through', 'text-green-600');
                    }
                });
            });
        });

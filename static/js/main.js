// main.js — students will add JavaScript here as features are built

// Video Modal functionality
(function() {
    const modal = document.getElementById('video-modal');
    const openBtn = document.getElementById('open-modal');
    const closeBtn = document.getElementById('close-modal');
    const video = document.getElementById('modal-video');

    // Placeholder YouTube URL (replace with actual video ID later)
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!modal || !openBtn || !closeBtn || !video) return;

    // Open modal
    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        video.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    function closeModal() {
        video.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on overlay click (outside modal)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();

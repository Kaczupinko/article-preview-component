document.addEventListener('DOMContentLoaded', function() {
    var shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            var shareOptions = document.getElementById('shareOptions');
            if (shareOptions) {
                shareOptions.classList.toggle('hidden');
            }
        });
    }
});
            document.addEventListener('mouseover', hoverVideo, false);
            var vid = document.getElementsByTagName("video");
            [].forEach.call(vid, function(item) {
                item.addEventListener('mouseover', hoverVideo, false)
                item.addEventListener('mouseout', hideVideo, false)
            });

            function hoverVideo(e) {
                this.play();
            }

            function hideVideo(e) {
                this.pause();
            }

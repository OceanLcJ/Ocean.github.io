var posts=["posts/243f166a.html","posts/195f3944.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
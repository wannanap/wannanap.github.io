var posts=["2023/05/09/博客搭建/","2023/05/19/AppleID美区注册/","2023/05/18/图床搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
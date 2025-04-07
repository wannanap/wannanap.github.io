var posts=["2024/07/12/test/","2023/05/19/AppleID美区注册/","2023/05/09/博客搭建/","2023/05/18/搭建图床/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
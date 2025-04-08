var posts=["2023/05/19/AppleID美区注册/","2023/05/09/博客搭建/","2025/04/08/GitHubPages自定义域名/","2023/05/18/图床搭建/","2025/04/08/设置cdn加速/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
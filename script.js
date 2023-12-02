// 这是一个示例，它会在点击导航栏的链接时，让对应的内容区域高亮显示
// 你可以根据你的需要，添加更多的交互和动画效果

// 获取所有的导航栏链接
var links = document.querySelectorAll("#header nav ul li a");

// 获取所有的内容区域
var sections = document.querySelectorAll("#content div");

// 给每个链接添加点击事件监听器
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // 阻止默认的跳转行为
    event.preventDefault();
    // 获取点击的链接的href属性，它是对应的内容区域的id
    var id = link.getAttribute("href");
    // 获取对应的内容区域
    var section = document.querySelector(id);
    // 移除所有内容区域的高亮样式
    sections.forEach(function (section) {
      section.classList.remove("highlight");
    });
    // 给点击的内容区域添加高亮样式
    section.classList.add("highlight");
  });
});

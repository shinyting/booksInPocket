# booksInPocket
一个简单的图书管理系统，包括功能有：图书列表页，图书详情页，编辑页，个人信息


###主要技术点

jqueryMobile
windows下使用grunt貌似有点问题，bower install jquerymobile 后无法编译获取需要的文件  
所以在jQuerymobile官网下载了1.4.5版本的文件，将其中的js和css文件分别copy至public下的JavaScript和css文件夹  
然后再将其引入到index.html中

###准备工作

使用node+express搭建服务，选用模板为html，需要相应模块辅助  
先搭建基本页面，再考虑数据库，数据库暂定mongoose
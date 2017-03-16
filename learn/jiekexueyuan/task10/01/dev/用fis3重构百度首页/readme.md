
##开发环境
###软件版本
|软件|操作系统|nodejs|fis|
|---|---|---|---|---|
|版本|OS X 10.11.2|v4.2.3|v3.3.13|

###所需要的依赖：
1. fis-optimizer-html-minifier
2. fis3-hook-cmd
3. fis3-postpackager-loader

##关于作业说明
基本的思路是，将项目的文件分为静态资源和页面资源。（本来应该把seajs依赖的html代码也搞成静态资源，但这样做就只剩一个index页面了，太少了，为了练习就把依赖的html也做为页面处理啦）
‘moreVideodata.html’是一个特殊情况，这个文件是模拟ajax返回json数据的。所以这个文件就当做单另的处理了。
源文件结构：
```
root
|-index                 //由于index页面也是模块化的，使用到的组成页面的模块都存在这里
|-module                //保存了可以公共的模块
|-seajs                 //seajs相关文件
|-node_modules          //nodejs模块和依赖
|-index.html            //首页
|-moreVideodata.html    //ajax数据模拟
|-package.json          //nodejs配置信息
|-fis-conf.js           //fis项目流程配置
```
导出的目录是按照如下规则导出：
```
root
|-version               //这个版本也可以去掉，我理解依据具体的项目情况来设置。
   |-js                 //所有的js文件
   |-css                //所有的CSS文件
   |-htmls              //所有的html文件
   |-images             //所有的图片文件
   |-index.html         //首页
   |-moreVideodata.html //ajax数据模拟
```
所有的静态文件均打上了hash码，包括JS，CSS，图像文件。
所有的CSS和JS文件均进行了压缩操作。
部署的建议采用releas命令输出到自己希望的文件夹下。如：
```
fis3 release -d ../dist
```  
将输出的文件夹作为网站的根目录，按照上面的例子请将dist文件夹作为网站根目录。然后访问下面的链接即可：
```
http://[your server ip]/[version in your fis config file]/
```
在我的机器上是：
```
http://127.0.0.1/1.0.0/index.html
```
编译部署后的代码可以正常运行，除了'moreVideodata.html'中的资源外，应该没有404问题。
**本次作业除了对在JS中的静态资源设置了__uri()，和将index.html中的seajs.config移到了fis-config中，其他的代码均未做修改。**


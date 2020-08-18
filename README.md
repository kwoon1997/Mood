# <div align="center">简易博客系统</div>


<div align="center">
    <img src="https://image.raindays.cn/image/github/nuxt.png">
    <img src="https://image.raindays.cn/image/github/vuecli.png">
</div>

## 🎃 陌生人，你好呀~~

(欢迎提出建议和想法，感谢支持！！过段时间再来一点一点优化，有很多不足之处，还请见谅！！后面也会用React来重构一遍！！)s
这是一个入门全栈之路的小项目，从设计、前端、后端、服务端，一路狂飙的学习，发量正在欣喜若狂~~

接触过WordPress，Hexo等第三方网站系统，虽说简单，但是感觉太过于冗余臃肿，显得过于杂乱，各种限制和体验不好等等原因。

所以决定书写一片属于自己的天地，**我是创造者，也是追寻者**。

前后台均为绞尽脑汁的设计，整体风格为简约风，人的心灵到达一定阶段，心思愈渐愈偏向于简单，**大道极简也许才是最终的归宿**。

在线卑微，求个star🥺

- 项目部署
- 本地开发
- 项目代码
- 前台页面
- 后台管理
- 闲言细语

<br>

## ⚽️ 项目部署

按照这个教程，你不懂代码，也能拥有属于自己的一个网站系统，后台设置均已完善，覆盖了正常博客的功能！！

> 1. 在GitHub拉取`web`、`server`、`config` 3个文件夹和 `docker-compose.yml` 1个文件。
> 
> 2. 修改`config`文件夹里面的`nginx.conf`文件，需要指定自己的域名，文件里面有注释说明。
> 
> 3. 在服务器目录，创建`data`文件夹作为项目目录，并上传刚才拉取的`3个文件夹`和`1个文件`
>
> 4. 打开服务器终端，安装`docker`（安装教程参考：https://docs.docker.com/engine/install/ ）
> 
> 5. 安装成功后，进入刚才创建的`data`目录，运行`docker-compose up -d`，进行部署
>
> 6. 运行`docker-compose ps` or `docker ps -a` 看看是否正常运行，完美~~
>
>（注：到第5步，如果提示此命令不存在的话，需要根据提示进行安装`docker-compose`，我记得好像是需要的，在这儿我就不费时间去折腾了~~ ）

ok， 搞定， 就是这么简单，docker牛逼

前台网站：`http://aa.com`，后台则为：`http://aa.com/admin`，到这里就没问题了~~

然后划重点：**先进入后台，设置基本信息**，前台才能正常访问，否则报错，ok完美，赶紧回家吃个饭庆祝庆祝~~

**一句话搞定部署，docker真香（爆破音）**

<br>

## 🍿 本地开发

1. 首先，需要在电脑安装数据库`mongodb`，并且运行`mongodb`服务。

2. 在本地的hosts文件添加以下内容：

```
127.0.0.1 web
127.0.0.1 server
127.0.0.1 mongodb
```

3. 项目的启动

```
npm install    ## 每个目录必须
npm run dev    ## web
npm run serve  ## admin & server
```

4. 开启之后，需要先进入管理后台，**填写首屏的信息**，才能正常访问前台，否则前台就会报错。（额...这里偷懒了没做处理，也没必要处理🧐）

5. 到这里就ok了，如果有建议/优化/bug的，可以随时`Issues` or `邮件`我，感谢支持！！

其他；

`localhost:27017`，出现一串英文，则`mongodb`运行成功

(一开始服务端控制台如报错，链接超时等等，均为`mongodb`运行没成功，不熟悉的话还是挺坑的，请大家了解一下吧！！)

(Mac用户可参考一下这篇`mongodb`的运行，[具体应该是这样的，我忘了](https://wsydxiangwang.github.io/%E5%90%8E%E7%AB%AF/mongo/1.html#mac))

<br>

## 🍔 项目代码

- 页面设计
  - 下三流设计师，均为绞尽脑汁的设计
  - 前台些许借鉴于**素锦**（开源项目）
- 前台页面
  - vue的服务端渲染框架Nuxt.js
  - 样式均为绞尽脑汁的手写
- 后台页面
  - vue-cli、element-ui
- 后端
  - Node.js、MongoDB、docker
- 前后台：已适配PC和Mobile
  - 发现了有些手机兼容异常的情况，我就一部小米，不好测试，所以请见谅（PC模拟器无敌）..

（待定：讲解前后台实现的具体功能和代码逻辑）

<br>

## 🍎 前台页面

[前台页面就不贴图了，大家可以直接看我的网站](https://raindays.cn)

很多人看到网站，只要是自己弄的网站，都叫做**博客**

嗯？不是很喜欢这个词，我比较喜欢称之为：**心情小镇** or **心灵驿站**

页面说起来很简单，功能也很简单，简单到可能只有首页首屏，能让人感受到一丝丝的惊艳。

主要针对路人、游客、所有人开放的，无需注册账号、即可评论和查看。

来看你的网站，是给你面子，评个论也是对你有意思。难不成还想我注册个账号，才让我评论和查看文章啊？？告辞（友好性满分🤓）

```
# 首页
# 文章详情
# 文章列表
# 短语列表
# 订阅通知
# 个人介绍
# 下雨天页
```

一共7个页面，算是比较简单，正常的个人网站，上面该有功能都有，该有的动画过渡也都有，花里胡哨的没有。

无论何种产品，用户体验永远是最前置的，不仅仅是视觉上、交互上...

（如果你有自己特别想要的功能，可以自己改源代码，或者找我也可以，但是要收钱，收多少看心情吧（一般都是十万八万的收😂））

最亮眼的功能，莫过于文章页有独有的背景音乐，书写一篇心情文章，都可以根据自己的心情来选择适合的背景音乐，一般心情文章以静、温柔、安详为主。（love you）

（你非要弄个蹦迪的音乐、史诗级的纯音乐，我也不敢有意见啊👯~~）

> 麻雀虽小五脏俱全，完整的展现出一个人的情感，内心的所想所得


<br>

## 🍏 后台管理

后台只有管理员才能进入，所以只放后台的页面图片🤔


### 登录

第一次进入后台需先进行注册账号，账号只能注册一次，避免被那啥，如有遗忘，自行操作数据库🤣

输入框效果模仿的掘金，人们总是对牛逼的事物，羡慕不已😏~~

![](https://image.raindays.cn/image/article/1.png)

![](https://image.raindays.cn/image/article/2.png)



<br >

### 首页

所有数据的汇总，好比每个月的生活费，如果不记账，一年到头来，你是否知道自己吃了多少，裤兜又剩几张。

土豪&&月光族另当别论，有富婆请联系我一下，邮箱在底部 😂

算了，我还是直接给吧：1915398623@qq.com 😏

![](https://image.raindays.cn/image/article/3.png)

<br >


### 发布文章

上传背景图和背景音乐，默认上传到服务器，可在setting选择

为了网站性能，建议压缩图片，并且上传尺寸按照规定的来

隐藏文章，怎么说呢，开心就好~~

编辑器为主流[**Markdown**](https://www.jianshu.com/p/q81RER/)，如果还不会，真心建议你学一下，三个步骤就一分钟学会：

1. 拿出笔和纸，写
2. 拿出手机拍，纸
3. 上传到掘金，发

一分钟从入门到放弃，改用手拿笔写字，拍照发文章，懂得创新的人永远走在最前沿 😂

> 别人笑我太疯癫，我笑他人看不穿

![](https://image.raindays.cn/image/article/4.png)


![](https://image.raindays.cn/image/article/5.png)


<br>

### 评论

可删除、回复评论，查看当前评论的文章，就是不允许编辑...

人家说的都是心里话，就算天王老子来了，也不给特权！！👻


![](https://image.raindays.cn/image/article/6.png)


![](https://image.raindays.cn/image/article/7.png)

<br>

### 设置

**注意：首屏信息需要填写完整，前台才能正常访问（备案信息自选）**

- 后台信息：昵称头像等等（头像是前后台统一的）
- 网站信息：网站名，描述，SEO等等
- 前台页面：首页信息、不同页面的背景音乐、底部备案信息
- 个人介绍：前台的个人介绍页，让大家认识你一下吧~~（[可参考我的网站](https://raindays.cn/about)）
- 上传文件：上传图片和音乐，可指定上传位置，默认为服务器（可选阿里云OSS）
- 邮件类型：目前仅支持QQ、163邮箱（其他需要的邮箱可自行扩展）
- 评论功能：昵称、邮箱、管理员标识（前台页面突出管理员的标识）
- 评论标识：也就是管理员标识，按照填写的评论邮箱和昵称进行确认
- 评论通知：发布评论时，发送邮件通知被回复者
- 订阅通知：发布文章时，群发邮件通知已订阅的邮箱
- PASS码：开启通知功能，需要填写此码，具体在邮箱设置（开启SMTP服务器）可获得，需跟填写的邮箱一致
- 修改密码：需要原密码，忘了你自己看着办吧~~ 
（小窍门：浏览器已保存的账号密码，均可查看F12）

（基础信息，务必填写完整，以免出现无知的bug，解决bug找我一个十块钱，不讲价，除非给我介绍个女朋友🥺）

![](https://image.raindays.cn/image/article/8.png)

![](https://image.raindays.cn/image/article/9.png)


<br >


### 前台页面LOGO

- 找到目录，替换里面的图片（需4张，可参考原有的图片）（/web/static/image/logo/）
- 首页logo两张：456*200（一白一黑透明）
- 子页面的logo：200*200
- 标签栏的ico图标：随意

另：logo的尺寸类似即可，可自己调试，上传五花八门的图片当logo也是可以的，主要看个人爱好
注：logo支持`iconfont`图标，具体可以看源码（为了一些不懂操作的人，所以这里使用图片）


> 这个设计没想到吧，要不要来给我打个分啊，快来评论，啊哈哈哈~~

[在线卑微，GitHub在这里，第一次发帖求个star🥺](https://github.com/wsydxiangwang/Mood)

<br>



## 🍋 闲言细语

俗话说：“做什么就要有个做什么的样子，一刻都不能马虎”。

技术笔记有它存在的意义，纸质书认清了自我的价值，永远懂得自己的生存之道。

毕竟，无规矩不成方圆！

对于我的网站，很多网友问有没有模板，肯定没有啊，这可是我自己手写出来的啊。当然，我明白问这些问题的同学，目前的能力或想法仍需经历时间的磨练。

所以，我决定开源出来，让那些即使是小白鼠、小白兔、小白菜都能上手操作的一个发文章、做笔记、个人介绍的简单系统。

经过这段时间夜以继日的折腾，终于结束了，以实际操作来巩固过往所学，更加深入认识了`JavaScript`，其中问题最多的非`nuxt`莫属，代码的学习之路无非就是一路挖坑填坑。

> 只要心有所归，沿途的风景不管好与坏，一定会成为回忆中最美、最难以忘怀的存在，不虚此行。

过于依赖某些事物，也许事事会有顾虑，不能任凭自我追寻，也许在某一天会一言不发，那么我存在的意义又是什么？？

我时常提醒自己，保持学习，不断进步才是最终的归宿，只有属于自己的，才是最终的安全感来源。

**不懂？？不会？？** **没关系，我可以学**，学不会就要更加的努力，付出两倍、三倍的时间和真心去学，迟早能有学会的那一天。

<br>

## 🌽 最后

分享自己的一个全栈简单项目给大家，感兴趣的可以学习一下，有什么**建议/bug/优化可以提一下**，感谢！！。

最最最重要的一点，求个star🥺

到这儿应该没啥问题了吧，如果有啥漏洞补缺的，请联系我一下，谢谢啦~~

我能做到的事，你也可以；别人会的，我们一样可以做到，请相信自己，这个世界上没有什么事情是不可能的，加油！！

致迷途道路上的我们，感谢大家的支持，欢迎指点一二，接受指点和建议（不接受喷 /小心脏承受不住😩）

期待与有技术要求的同学一同共事，鄙人邮箱：1915398623@qq.com

（一开始码着码着，感觉有点不对劲，这话好像有点多了，又不能算是心情文章，赶紧删减一下，技术大佬估计最烦的就是长篇大论吧~~😂😂）

<br>

生命中的未知数总是千变万化的，让人不得不屈服于现实，在25天后，正式加入前端人才库，开始寻找新的方向和机会。

———— 七月 25, 2020 12:30

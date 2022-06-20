"use strict";(function(){const t={cache:!0};t.doc={id:"id",field:["title","content"],store:["title","href","section"]};const e=FlexSearch.create("balance",t);window.bookSearchIndex=e,e.add({id:0,href:"/wiki/dev/",title:"Development Handbook",section:"Wikis",content:` 开发手册 # 这是开发手册
阅读笔记：零拷贝及一些引申内容 你还在为 TCP 重传、滑动窗口、流量控制、拥塞控制发愁吗？看完图解就不愁了 Clean Boilerplate of Go, Domain-Driven Design, Clean Architecture, Gin and GORM.
Practical Go Lessons
`}),e.add({id:1,href:"/wiki/dev/go/",title:"Golang",section:"Development Handbook",content:` 学习资料 # Golang Gin 实践 gin源码分析 Golang 常见问题收录 # Golang 常见问题 # Go sync.Pool 浅析 [典藏版]Golang调度器GPM原理与调度全分析 开源项目 # Plugin 热更新问题 解析范式 # Go Channel的实现
G-P-M模型
G: 表示goroutine，存储了goroutine的执行stack信息、goroutine状态以及goroutine的任务函数等；另外G对象是可以重用的。 P: 表示逻辑processor，P的数量决定了系统内最大可并行的G的数量（前提：系统的物理cpu核数\u0026gt;=P的数量）；P的最大作用还是其拥有的各种G对象队列、链表、一些cache和状态。 M: M代表着真正的执行计算资源。在绑定有效的p后，进入schedule循环；而schedule循环的机制大致是从各种队列、p的本地队列中获取G，切换到G的执行栈上并执行G的函数，调用goexit做清理工作并回到m，如此反复。M并不保留G状态，这是G可以跨M调度的基础。 `}),e.add({id:2,href:"/wiki/part1/",title:"工作和生活效率",section:"Wikis",content:` HPBP # HRBP 方法论 # HRBP 方法论：阿里Review怎么玩？
`}),e.add({id:3,href:"/wiki/dev/coding-style/",title:"Coding Style",section:"Development Handbook",content:` Coding Style # Code Review # 如何在团队中做好Code Review
13 Practices for Better Code Reviews
`}),e.add({id:4,href:"/wiki/linux/",title:"Linux",section:"Wikis",content:` Linux Practice # 适用人群 # 建议人群：有一定 Linux 使用经验。
序语 # 本该是我在日常工作中使用到的一些 linux 小技巧或实践，不一定对每一个人有用，但应该会有一些参考意义。
如果你也有简单易用的技巧，欢迎 PR，一起成长吧！
`}),e.add({id:5,href:"/wiki/osinit/mac/",title:"MAC",section:"OS Setup",content:" Mac 初始化 # Homebrew 安装 # https://docs.brew.sh/Installation\n/bin/bash -c \u0026#34;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)\u0026#34; 安装常用软件 # brew install wget brew install nodejs brew install tree brew install jq brew install hugo brew install gh brew install golangci-lint # readlink brew install coreutils "}),e.add({id:6,href:"/wiki/osinit/ubuntu/",title:"Ubuntu",section:"OS Setup",content:" Ubuntu 初始化 # "}),e.add({id:7,href:"/wiki/kube/",title:"Cloud Navtive",section:"Wikis",content:` Overview # Hack with kube.
Kubernetes 源码阅读 - 田飞雨
`}),e.add({id:8,href:"/wiki/dev/github/",title:"Git and Github",section:"Development Handbook",content:` Git and Github 使用 # Git Command: # 将本地分支推送到远程主干分支
git push origin dev:main Maintain a repo without permission git remote add upstream https://github.com/bfenetworks/bfe.git git fetch upstream git checkout develop git merge upstream/develop git rebase upstream/develop Refer: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork git config setting git config --global core.hooksPath .github/hooks git config --global core.excludefile .gitignore_global git config --global url.\u0026#39;ssh://git@github.com\u0026#39;.insteadOf https://github.com Github Commit. For Close Github Issue, commit message should as follow: close #x closes #x closed #x fix #x fixes #x fixed #x resolve #x resolves #x resolved #x add new quick sort algorithm, fixes #4, resolve #6, closed #12 git submodule update --init -f vendor/github.com/mholt/caddy git remote add ups https://github.com/airdb/b git push -u ups local_branch:master -f Github Command Line brew install github/gh/gh gh --repo bbhj/lbs issue status gh --repo bbhj/lbs issue view 1 Delete branch or tag git branch -D dev git push origin --delete dev git tag -d v1.0 git push --delete origin v1.0 `}),e.add({id:9,href:"/wiki/osinit/",title:"OS Setup",section:"Wikis",content:" 系统初始化 # 安装常用工具软件及开发环境 初始化配置 安装 Agent "}),e.add({id:10,href:"/wiki/part3/",title:"Serverless 实战 - 无服务器编程",section:"Wikis",content:` Serverless 实战 - 无服务器编程 # Serverless 是什么？ # Serverless 架构是不是就不要服务器了？回答这个问题，我们需要了解下 Serverless 是什么。
Serverless 架构近几年频繁出现在一些技术架构大会的演讲标题中，很多人对于 Serverless，只是从字面意义上理解——无服务器架构，但是它真正的含义是开发者再也不用过多考虑服务器的问题，当然，这并不代表完全去除服务器，而是我们依靠第三方资源服务器后端。
从 2014 年开始，经过这么多年的发展，各大云服务商基本都提供了 Serverless 服务。 比如 Amazon Web Services(AWS) Lambda, 阿里云函数计算(Function Compute), 腾讯云函数计算(Serverless Compute Function).
选型 # 由于现有服务使用腾讯云，所以开通了serverless 服务。 本文将使用 腾讯云 serverless + Golang 方案。
实战内容 # 实战准备：手把手带你准备一个实验环境，部署实战项目，开通和配置用到的数据库，Make 使用。
实战 1: 规范设计，详细介绍开发中的 10 大常见的规范，例如目录规范、日志规范、错误码规范、Commit 规范等，带你掌握设计常见规范的方法，为高效开发一个高质量、易阅读、易维护的 Go 应用打好基础。
实战 2: 基础功能设计或开发，教你设计和开发 Go 应用开发中的基础功能，这些功能会影响整个应用的构建方式，例如日志包、错误包、错误码等。
实战 3: 服务开发，带你解析一个企业级的 Go 项目代码，进而学会如何开发 Go 应用。同时，详细讲解 Go 开发阶段的各个技能点，例如如何设计和开发 API 服务、Go SDK、客户端工具、错误码、日志包等。
实战 4: 服务测试。这个模块围绕实战项目，讲解单元测试、功能测试、性能分析和性能调优的方法，交付给你一个性能和稳定性都经过充分测试、生产级可用的服务。
实战 5: 六边形架构
`}),e.add({id:11,href:"/wiki/arch/ldc/",title:"Ldc",section:"系统架构",content:`浅谈双十一背后的支付宝LDC架构和其CAP分析
https://tbwork.org/2019/11/10/ant-ldc-arch/
`}),e.add({id:12,href:"/wiki/arch/question/",title:"Question",section:"系统架构",content:`在新项目开发中如何？
在老项目维护中如何？
在技术构架演化中如何？
`}),e.add({id:13,href:"/wiki/dev/coding-style/document/",title:"Document",section:"Coding Style",content:` 中文文案排版指北 # 统一中文文案、排版的相关用法，降低团队成员之间的沟通成本，增强网站气质。
目录 # 空格 中英文之间需要增加空格 中文与数字之间需要增加空格 数字与单位之间需要增加空格 全角标点与其他字符之间不加空格 -ms-text-autospace to the rescue? 标点符号 不重复使用标点符号 全角和半角 使用全角中文标点 数字使用半角字符 遇到完整的英文整句、特殊名词，其內容使用半角标点 名词 专有名词使用正确的大小写 不要使用不地道的缩写 争议 链接之间增加空格 简体中文使用直角引号 工具 谁在这样做？ 参考文献 空格 # 「有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。
与大家共勉之。」—— vinta/paranoid-auto-spacing
中英文之间需要增加空格 # 正确：
在 LeanCloud 上，数据存储是围绕 AVObject 进行的。
错误：
在LeanCloud上，数据存储是围绕AVObject进行的。
在 LeanCloud上，数据存储是围绕AVObject 进行的。
完整的正确用法：
在 LeanCloud 上，数据存储是围绕 AVObject 进行的。每个 AVObject 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 AVObject 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。
例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。
中文与数字之间需要增加空格 # 正确：
今天出去买菜花了 5000 元。
错误：
今天出去买菜花了 5000元。
今天出去买菜花了5000元。
数字与单位之间需要增加空格 # 正确：
我家的光纤入户宽带有 10 Gbps，SSD 一共有 20 TB。
错误：
我家的光纤入户宽带有 10Gbps，SSD 一共有 10TB。
例外：度／百分比与数字之间不需要增加空格：
正确：
今天是 233° 的高温。
新 MacBook Pro 有 15% 的 CPU 性能提升。
错误：
今天是 233 ° 的高温。
新 MacBook Pro 有 15 % 的 CPU 性能提升。
全角标点与其他字符之间不加空格 # 正确：
刚刚买了一部 iPhone，好开心！
错误：
刚刚买了一部 iPhone ，好开心！
-ms-text-autospace to the rescue? # Microsoft 有个 -ms-text-autospace 的 CSS 属性可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 OS X、iOS 的用户界面目前并不存在这个特性，所以请继续保持随手加空格的习惯。
标点符号 # 不重复使用标点符号 # 正确：
德国队竟然战胜了巴西队！
她竟然对你说「喵」？！
错误：
德国队竟然战胜了巴西队！！
德国队竟然战胜了巴西队！！！！！！！！
她竟然对你说「喵」？？！！
她竟然对你说「喵」？！？！？？！！
全角和半角 # 不明白什么是全角（全形）与半角（半形）符号？请查看维基百科词条『 全角和半角』。
使用全角中文标点 # 正确：
嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！
核磁共振成像（NMRI）是什么原理都不知道？JFGI！
错误：
嗨! 你知道嘛? 今天前台的小妹跟我说 \u0026ldquo;喵\u0026rdquo; 了哎!
嗨!你知道嘛?今天前台的小妹跟我说\u0026quot;喵\u0026quot;了哎!
核磁共振成像 (NMRI) 是什么原理都不知道? JFGI!
核磁共振成像(NMRI)是什么原理都不知道?JFGI!
数字使用半角字符 # 正确：
这件蛋糕只卖 1000 元。
错误：
这件蛋糕只卖 １０００ 元。
例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全角数字的。
遇到完整的英文整句、特殊名词，其內容使用半角标点 # 正确：
乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
推荐你阅读《Hackers \u0026amp; Painters: Big Ideas from the Computer Age》，非常的有趣。
错误：
乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。
名词 # 专有名词使用正确的大小写 # 大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论內容，在这里只对部分易错用法进行简述。
正确：
使用 GitHub 登录
我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。
错误：
使用 github 登录
使用 GITHUB 登录
使用 Github 登录
使用 gitHub 登录
使用 gｲんĤЦ8 登录
我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。
我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。
我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。
我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。
我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。
注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标准的大小写规范进行书写；并通过 text-transform: uppercase;／text-transform: lowercase; 对表现形式进行定义。
不要使用不地道的缩写 # 正确：
我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。
错误：
我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。
争议 # 以下用法略带有个人色彩，即：无论是否遵循下述规则，从语法的角度来讲都是正确的。
链接之间增加空格 # 用法：
请 提交一个 issue 并分配给相关同事。
访问我们网站的最新动态，请 点击这里 进行订阅！
对比用法：
请 提交一个 issue 并分配给相关同事。
访问我们网站的最新动态，请 点击这里进行订阅！
简体中文使用直角引号 # 用法：
「老师，『有条不紊』的『紊』是什么意思？」
对比用法：
“老师，‘有条不紊’的‘紊’是什么意思？”
工具 # | 仓库
语言 vinta/paranoid-auto-spacing JavaScript huei90/pangu.node Node.js huacnlee/auto-correct Ruby sparanoid/space-lover PHP (WordPress) nauxliu/auto-correct PHP ricoa/copywriting-correct PHP hotoo/pangu.vim Vim sparanoid/grunt-auto-spacing Node.js (Grunt) hjiang/scripts/add-space-between-latin-and-cjk Python 谁在这样做？ # 网站 文案 UGC Apple 中国 Yes N/A Apple 香港 Yes N/A Apple 台湾 Yes N/A Microsoft 中国 Yes N/A Microsoft 香港 Yes N/A Microsoft 台湾 Yes N/A LeanCloud Yes N/A 知乎 Yes 部分用户达成 V2EX Yes Yes SegmentFault Yes 部分用户达成 Apple4us Yes N/A 豌豆荚 Yes N/A Ruby China Yes 标题达成 PHPHub Yes 标题达成 少数派 Yes N/A 参考文献 # Guidelines for Using Capital Letters Letter case - Wikipedia Punctuation - Oxford Dictionaries Punctuation - The Purdue OWL How to Use English Punctuation Corrently - wikiHow 格式 - openSUSE 全角和半角 - 维基百科 引号 - 维基百科 疑问惊叹号 - 维基百科 `}),e.add({id:14,href:"/wiki/dev/coding-style/go-coding-style/",title:"Go Coding Style",section:"Coding Style",content:` Golang 编码规范指南 # 关于代码规范，每个公司、甚至每个团队都有不同的规范，并且有不同的理解。
这份编码规范是参考别的规范，结合自己的实际情况而修订的，并尝试着让身边的朋友也遵守这个。 核心的目的还是为了便于广阅读，减少可避免的 bug 和安全隐患。
如果你的代码没有办法找到下面的规范，那么就遵循标准库的规范，多阅读标准库的源码，标准库的代码可以说是写代码参考的标杆。
行长约定 # 一行最长不超过 80 个字符，超过的请使用换行展示，尽量保持格式优雅。 如果使用 vim，请确认 ~/.vimrc 中设置有 set textwidth=80
网络在线, 频次随机(由讲师时间决定)
package 名字 # 保持 package 的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，尽量和标准库不要冲突。
import 规范 # import 在多行的情况下，goimports 会自动帮你格式化，但是我们这里还是规范一下import的一些规范，如果你在一个文件里面引入了一个package，还是建议采用如下格式：
import ( \u0026quot;fmt\u0026quot; ) 如果你的包引入了三种类型的包，标准库包，程序内部包，第三方包，建议采用如下方式进行组织你的包：
import ( \u0026quot;encoding/json\u0026quot; \u0026quot;strings\u0026quot; \u0026quot;github.com/astaxie/beego\u0026quot; \u0026quot;github.com/go-sql-driver/mysql\u0026quot; \u0026quot;myproject/models\u0026quot; \u0026quot;myproject/controller\u0026quot; \u0026quot;myproject/utils\u0026quot; ) 有顺序的引入包，不同的类型采用空格分离，第一种实标准库，第二是第三方包, 第三是项目包。
在项目中不要使用相对路径引入包：
import \u0026quot;../net\u0026quot; // 这是不好的导入 import \u0026quot;github.com/name/repo/net\u0026quot; // 这是正确的做法 变量申明 # 变量名采用驼峰标准，不要使用 _ 来命名变量名，多个变量申明放在一起
在函数外部申明必须使用 var,不要采用 :=，容易踩到变量的作用域的问题。
自定义类型的string循环问题 # 如果自定义的类型定义了 String 方法，那么在打印的时候会产生隐藏的一些 bug
type MyInt int func (m MyInt) String() string { return fmt.Sprint(m) //BUG:死循环 } func(m MyInt) String() string { return fmt.Sprint(int(m)) //这是安全的,因为我们内部进行了类型转换 } 避免返回命名的参数 # 返回变量及值，尽量在 func 行进行定义, 方便理解函数输入、输出。 func foo(a int, b int) (status, msg string, flag bool){ }
错误处理 # 错误处理的原则就是不能丢弃任何有返回 err 的调用，不要采用 _ 丢弃，必须全部处理。接到错误，要么返回 err，要么实在不行就 panic， 或者使用 Log 记录下来。
error 信息 # error 的信息不要采用大写字母，尽量保持你的错误简短，但是要足够表达你的错误的意思。
长句子打印或者调用，使用参数进行格式化分行 # 我们在调用 fmt.Sprint 或者 log.Sprint 之类的函数时，有时候会遇到很长的句子，我们需要在参数调用处进行多行分割：
下面是错误的方式： log.Printf(\u0026ldquo;A long format string: %s %d %d %s\u0026rdquo;, myStringParameter, len(a), expected.Size, defrobnicate(“Anotherlongstringparameter”, expected.Growth.Nanoseconds() / 1e6))
应该是如下的方式：
log.Printf( \u0026quot;A long format string: %s %d %d %s\u0026quot;, myStringParameter, len(a), expected.Size, defrobnicate( “Anotherlongstringparameter”, expected.Growth.Nanoseconds() / 1e6, ), ) 注意闭包的调用 # 在循环中调用函数或者goroutine方法，一定要采用显示的变量调用，不要再闭包函数里面调用循环的参数
for i := 0; i \u0026lt; limit; i++ { go func(){ DoSomething(i) }() //错误的做法 go func(i int){ DoSomething(i) }(i)//正确的做法 } http://golang.org/doc/articles/race_detector.html#Race_on_loop_counter
在逻辑处理中禁用 panic # 在main包中只有当实在不可运行的情况采用panic，例如文件无法打开，数据库无法连接导致程序无法
正常运行，但是对于其他的 package 对外的接口不能有 panic，只能在包内采用。
强烈建议在main包中使用 log.Fatal 来记录错误，这样就可以由 log 来结束程序。
注释规范 # 注释可以帮我们很好的完成文档的工作，写得好的注释可以方便我们以后的维护。
注释符号与注释内容之前有且只有一个空格。如 // i += 2。 注释的缩进，与当前代码缩进保持一致, 禁止从首字符进行注释。 难以理解或是不符合 unix 常规的代码，需要上func 上方描述，并说明输入及输出。 详细的如何写注释可以参考：http://golang.org/doc/effective_go.html#commentary
bug注释 # 针对代码中出现的bug，可以采用如下教程使用特殊的注释，在godocs可以做到注释高亮：
// BUG(dean): This divides by zero. var i float = 1/0 struct规范 # struct申明和初始化格式采用多行： 定义如下：
type User struct{ Username string Email string } 初始化如下：
u := User { Username: \u0026quot;dean\u0026quot;, Email: \u0026quot;dean@airdb.com\u0026quot;, } recieved是值类型还是指针类型 # 到底是采用值类型还是指针类型主要参考如下原则：
func(w Win) Tally(playerPlayer) int // w不会有任何改变 func(w *Win) Tally(playerPlayer) int // w会改变数据
更多的请参考：https://code.google.com/p/go-wiki/wiki/CodeReviewComments#Receiver_Type
带 mutex 的 struct 必须是指针 receivers # 如果你定义的 struct 中带有 mutex, 那么你的 receivers 必须是指针
`}),e.add({id:15,href:"/wiki/dev/emoji-list/",title:"Emoji List",section:"Development Handbook",content:` emoji-list # emoji表情列表
目录 # 人物 自然 事物 地点 符号 人物 # :bowtie: :bowtie: :smile: :smile: :laughing: :laughing: :blush: :blush: :smiley: :smiley: :relaxed: :relaxed: :smirk: :smirk: :heart_eyes: :heart_eyes: :kissing_heart: :kissing_heart: :kissing_closed_eyes: :kissing_closed_eyes: :flushed: :flushed: :relieved: :relieved: :satisfied: :satisfied: :grin: :grin: :wink: :wink: :stuck_out_tongue_winking_eye: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes: :stuck_out_tongue_closed_eyes: :grinning: :grinning: :kissing: :kissing: :kissing_smiling_eyes: :kissing_smiling_eyes: :stuck_out_tongue: :stuck_out_tongue: :sleeping: :sleeping: :worried: :worried: :frowning: :frowning: :anguished: :anguished: :open_mouth: :open_mouth: :grimacing: :grimacing: :confused: :confused: :hushed: :hushed: :expressionless: :expressionless: :unamused: :unamused: :sweat_smile: :sweat_smile: :sweat: :sweat: :disappointed_relieved: :disappointed_relieved: :weary: :weary: :pensive: :pensive: :disappointed: :disappointed: :confounded: :confounded: :fearful: :fearful: :cold_sweat: :cold_sweat: :persevere: :persevere: :cry: :cry: :sob: :sob: :joy: :joy: :astonished: :astonished: :scream: :scream: :neckbeard: :neckbeard: :tired_face: :tired_face: :angry: :angry: :rage: :rage: :triumph: :triumph: :sleepy: :sleepy: :yum: :yum: :mask: :mask: :sunglasses: :sunglasses: :dizzy_face: :dizzy_face: :imp: :imp: :smiling_imp: :smiling_imp: :neutral_face: :neutral_face: :no_mouth: :no_mouth: :innocent: :innocent: :alien: :alien: :yellow_heart: :yellow_heart: :blue_heart: :blue_heart: :purple_heart: :purple_heart: :heart: :heart: :green_heart: :green_heart: :broken_heart: :broken_heart: :heartbeat: :heartbeat: :heartpulse: :heartpulse: :two_hearts: :two_hearts: :revolving_hearts: :revolving_hearts: :cupid: :cupid: :sparkling_heart: :sparkling_heart: :sparkles: :sparkles: :star: :star: :star2: :star2: :dizzy: :dizzy: :boom: :boom: :collision: :collision: :anger: :anger: :exclamation: :exclamation: :question: :question: :grey_exclamation: :grey_exclamation: :grey_question: :grey_question: :zzz: :zzz: :dash: :dash: :sweat_drops: :sweat_drops: :notes: :notes: :musical_note: :musical_note: :fire: :fire: :hankey: :hankey: :poop: :poop: :shit: :shit: :+1: :+1: :thumbsup: :thumbsup: :-1: :-1: :thumbsdown: :thumbsdown: :ok_hand: :ok_hand: :punch: :punch: :facepunch: :facepunch: :fist: :fist: :v: :v: :wave: :wave: :hand: :hand: :raised_hand: :raised_hand: :open_hands: :open_hands: :point_up: :point_up: :point_down: :point_down: :point_left: :point_left: :point_right: :point_right: :raised_hands: :raised_hands: :pray: :pray: :point_up_2: :point_up_2: :clap: :clap: :muscle: :muscle: :metal: :metal: :fu: :fu: :walking: :walking: :runner: :runner: :running: :running: :couple: :couple: :family: :family: :two_men_holding_hands: :two_men_holding_hands: :two_women_holding_hands: :two_women_holding_hands: :dancer: :dancer: :dancers: :dancers: :ok_woman: :ok_woman: :no_good: :no_good: :information_desk_person: :information_desk_person: :raising_hand: :raising_hand: :bride_with_veil: :bride_with_veil: :person_with_pouting_face: :person_with_pouting_face: :person_frowning: :person_frowning: :bow: :bow: :couplekiss: :couplekiss: :couple_with_heart: :couple_with_heart: :massage: :massage: :haircut: :haircut: :nail_care: :nail_care: :boy: :boy: :girl: :girl: :woman: :woman: :man: :man: :baby: :baby: :older_woman: :older_woman: :older_man: :older_man: :person_with_blond_hair: :person_with_blond_hair: :man_with_gua_pi_mao: :man_with_gua_pi_mao: :man_with_turban: :man_with_turban: :construction_worker: :construction_worker: :cop: :cop: :angel: :angel: :princess: :princess: :smiley_cat: :smiley_cat: :smile_cat: :smile_cat: :heart_eyes_cat: :heart_eyes_cat: :kissing_cat: :kissing_cat: :smirk_cat: :smirk_cat: :scream_cat: :scream_cat: :crying_cat_face: :crying_cat_face: :joy_cat: :joy_cat: :pouting_cat: :pouting_cat: :japanese_ogre: :japanese_ogre: :japanese_goblin: :japanese_goblin: :see_no_evil: :see_no_evil: :hear_no_evil: :hear_no_evil: :speak_no_evil: :speak_no_evil: :guardsman: :guardsman: :skull: :skull: :feet: :feet: :lips: :lips: :kiss: :kiss: :droplet: :droplet: :ear: :ear: :eyes: :eyes: :nose: :nose: :tongue: :tongue: :love_letter: :love_letter: :bust_in_silhouette: :bust_in_silhouette: :busts_in_silhouette: :busts_in_silhouette: :speech_balloon: :speech_balloon: :thought_balloon: :thought_balloon: :feelsgood: :feelsgood: :finnadie: :finnadie: :goberserk: :goberserk: :godmode: :godmode: :hurtrealbad: :hurtrealbad: :rage1: :rage1: :rage2: :rage2: :rage3: :rage3: :rage4: :rage4: :suspect: :suspect: :trollface: :trollface: 自然 # :sunny: :sunny: :umbrella: :umbrella: :cloud: :cloud: :snowflake: :snowflake: :snowman: :snowman: :zap: :zap: :cyclone: :cyclone: :foggy: :foggy: :ocean: :ocean: :cat: :cat: :dog: :dog: :mouse: :mouse: :hamster: :hamster: :rabbit: :rabbit: :wolf: :wolf: :frog: :frog: :tiger: :tiger: :koala: :koala: :bear: :bear: :pig: :pig: :pig_nose: :pig_nose: :cow: :cow: :boar: :boar: :monkey_face: :monkey_face: :monkey: :monkey: :horse: :horse: :racehorse: :racehorse: :camel: :camel: :sheep: :sheep: :elephant: :elephant: :panda_face: :panda_face: :snake: :snake: :bird: :bird: :baby_chick: :baby_chick: :hatched_chick: :hatched_chick: :hatching_chick: :hatching_chick: :chicken: :chicken: :penguin: :penguin: :turtle: :turtle: :bug: :bug: :honeybee: :honeybee: :ant: :ant: :beetle: :beetle: :snail: :snail: :octopus: :octopus: :tropical_fish: :tropical_fish: :fish: :fish: :whale: :whale: :whale2: :whale2: :dolphin: :dolphin: :cow2: :cow2: :ram: :ram: :rat: :rat: :water_buffalo: :water_buffalo: :tiger2: :tiger2: :rabbit2: :rabbit2: :dragon: :dragon: :goat: :goat: :rooster: :rooster: :dog2: :dog2: :pig2: :pig2: :mouse2: :mouse2: :ox: :ox: :dragon_face: :dragon_face: :blowfish: :blowfish: :crocodile: :crocodile: :dromedary_camel: :dromedary_camel: :leopard: :leopard: :cat2: :cat2: :poodle: :poodle: :paw_prints: :paw_prints: :bouquet: :bouquet: :cherry_blossom: :cherry_blossom: :tulip: :tulip: :four_leaf_clover: :four_leaf_clover: :rose: :rose: :sunflower: :sunflower: :hibiscus: :hibiscus: :maple_leaf: :maple_leaf: :leaves: :leaves: :fallen_leaf: :fallen_leaf: :herb: :herb: :mushroom: :mushroom: :cactus: :cactus: :palm_tree: :palm_tree: :evergreen_tree: :evergreen_tree: :deciduous_tree: :deciduous_tree: :chestnut: :chestnut: :seedling: :seedling: :blossom: :blossom: :ear_of_rice: :ear_of_rice: :shell: :shell: :globe_with_meridians: :globe_with_meridians: :sun_with_face: :sun_with_face: :full_moon_with_face: :full_moon_with_face: :new_moon_with_face: :new_moon_with_face: :new_moon: :new_moon: :waxing_crescent_moon: :waxing_crescent_moon: :first_quarter_moon: :first_quarter_moon: :waxing_gibbous_moon: :waxing_gibbous_moon: :full_moon: :full_moon: :waning_gibbous_moon: :waning_gibbous_moon: :last_quarter_moon: :last_quarter_moon: :waning_crescent_moon: :waning_crescent_moon: :last_quarter_moon_with_face: :last_quarter_moon_with_face: :first_quarter_moon_with_face: :first_quarter_moon_with_face: :moon: :moon: :earth_africa: :earth_africa: :earth_americas: :earth_americas: :earth_asia: :earth_asia: :volcano: :volcano: :milky_way: :milky_way: :partly_sunny: :partly_sunny: :octocat: :octocat: :squirrel: :squirrel: 事物 # :bamboo: :bamboo: :gift_heart: :gift_heart: :dolls: :dolls: :school_satchel: :school_satchel: :mortar_board: :mortar_board: :flags: :flags: :fireworks: :fireworks: :sparkler: :sparkler: :wind_chime: :wind_chime: :rice_scene: :rice_scene: :jack_o_lantern: :jack_o_lantern: :ghost: :ghost: :santa: :santa: :christmas_tree: :christmas_tree: :gift: :gift: :bell: :bell: :no_bell: :no_bell: :tanabata_tree: :tanabata_tree: :tada: :tada: :confetti_ball: :confetti_ball: :balloon: :balloon: :crystal_ball: :crystal_ball: :cd: :cd: :dvd: :dvd: :floppy_disk: :floppy_disk: :camera: :camera: :video_camera: :video_camera: :movie_camera: :movie_camera: :computer: :computer: :tv: :tv: :iphone: :iphone: :phone: :phone: :telephone: :telephone: :telephone_receiver: :telephone_receiver: :pager: :pager: :fax: :fax: :minidisc: :minidisc: :vhs: :vhs: :sound: :sound: :speaker: :speaker: :mute: :mute: :loudspeaker: :loudspeaker: :mega: :mega: :hourglass: :hourglass: :hourglass_flowing_sand: :hourglass_flowing_sand: :alarm_clock: :alarm_clock: :watch: :watch: :radio: :radio: :satellite: :satellite: :loop: :loop: :mag: :mag: :mag_right: :mag_right: :unlock: :unlock: :lock: :lock: :lock_with_ink_pen: :lock_with_ink_pen: :closed_lock_with_key: :closed_lock_with_key: :key: :key: :bulb: :bulb: :flashlight: :flashlight: :high_brightness: :high_brightness: :low_brightness: :low_brightness: :electric_plug: :electric_plug: :battery: :battery: :calling: :calling: :email: :email: :mailbox: :mailbox: :postbox: :postbox: :bath: :bath: :bathtub: :bathtub: :shower: :shower: :toilet: :toilet: :wrench: :wrench: :nut_and_bolt: :nut_and_bolt: :hammer: :hammer: :seat: :seat: :moneybag: :moneybag: :yen: :yen: :dollar: :dollar: :pound: :pound: :euro: :euro: :credit_card: :credit_card: :money_with_wings: :money_with_wings: :e-mail: :e-mail: :inbox_tray: :inbox_tray: :outbox_tray: :outbox_tray: :envelope: :envelope: :incoming_envelope: :incoming_envelope: :postal_horn: :postal_horn: :mailbox_closed: :mailbox_closed: :mailbox_with_mail: :mailbox_with_mail: :mailbox_with_no_mail: :mailbox_with_no_mail: :door: :door: :smoking: :smoking: :bomb: :bomb: :gun: :gun: :hocho: :hocho: :pill: :pill: :syringe: :syringe: :page_facing_up: :page_facing_up: :page_with_curl: :page_with_curl: :bookmark_tabs: :bookmark_tabs: :bar_chart: :bar_chart: :chart_with_upwards_trend: :chart_with_upwards_trend: :chart_with_downwards_trend: :chart_with_downwards_trend: :scroll: :scroll: :clipboard: :clipboard: :calendar: :calendar: :date: :date: :card_index: :card_index: :file_folder: :file_folder: :open_file_folder: :open_file_folder: :scissors: :scissors: :pushpin: :pushpin: :paperclip: :paperclip: :black_nib: :black_nib: :pencil2: :pencil2: :straight_ruler: :straight_ruler: :triangular_ruler: :triangular_ruler: :closed_book: :closed_book: :green_book: :green_book: :blue_book: :blue_book: :orange_book: :orange_book: :notebook: :notebook: :notebook_with_decorative_cover: :notebook_with_decorative_cover: :ledger: :ledger: :books: :books: :bookmark: :bookmark: :name_badge: :name_badge: :microscope: :microscope: :telescope: :telescope: :newspaper: :newspaper: :football: :football: :basketball: :basketball: :soccer: :soccer: :baseball: :baseball: :tennis: :tennis: :8ball: :8ball: :rugby_football: :rugby_football: :bowling: :bowling: :golf: :golf: :mountain_bicyclist: :mountain_bicyclist: :bicyclist: :bicyclist: :horse_racing: :horse_racing: :snowboarder: :snowboarder: :swimmer: :swimmer: :surfer: :surfer: :ski: :ski: :spades: :spades: :hearts: :hearts: :clubs: :clubs: :diamonds: :diamonds: :gem: :gem: :ring: :ring: :trophy: :trophy: :musical_score: :musical_score: :musical_keyboard: :musical_keyboard: :violin: :violin: :space_invader: :space_invader: :video_game: :video_game: :black_joker: :black_joker: :flower_playing_cards: :flower_playing_cards: :game_die: :game_die: :dart: :dart: :mahjong: :mahjong: :clapper: :clapper: :memo: :memo: :pencil: :pencil: :book: :book: :art: :art: :microphone: :microphone: :headphones: :headphones: :trumpet: :trumpet: :saxophone: :saxophone: :guitar: :guitar: :shoe: :shoe: :sandal: :sandal: :high_heel: :high_heel: :lipstick: :lipstick: :boot: :boot: :shirt: :shirt: :tshirt: :tshirt: :necktie: :necktie: :womans_clothes: :womans_clothes: :dress: :dress: :running_shirt_with_sash: :running_shirt_with_sash: :jeans: :jeans: :kimono: :kimono: :bikini: :bikini: :ribbon: :ribbon: :tophat: :tophat: :crown: :crown: :womans_hat: :womans_hat: :mans_shoe: :mans_shoe: :closed_umbrella: :closed_umbrella: :briefcase: :briefcase: :handbag: :handbag: :pouch: :pouch: :purse: :purse: :eyeglasses: :eyeglasses: :fishing_pole_and_fish: :fishing_pole_and_fish: :coffee: :coffee: :tea: :tea: :sake: :sake: :baby_bottle: :baby_bottle: :beer: :beer: :beers: :beers: :cocktail: :cocktail: :tropical_drink: :tropical_drink: :wine_glass: :wine_glass: :fork_and_knife: :fork_and_knife: :pizza: :pizza: :hamburger: :hamburger: :fries: :fries: :poultry_leg: :poultry_leg: :meat_on_bone: :meat_on_bone: :spaghetti: :spaghetti: :curry: :curry: :fried_shrimp: :fried_shrimp: :bento: :bento: :sushi: :sushi: :fish_cake: :fish_cake: :rice_ball: :rice_ball: :rice_cracker: :rice_cracker: :rice: :rice: :ramen: :ramen: :stew: :stew: :oden: :oden: :dango: :dango: :egg: :egg: :bread: :bread: :doughnut: :doughnut: :custard: :custard: :icecream: :icecream: :ice_cream: :ice_cream: :shaved_ice: :shaved_ice: :birthday: :birthday: :cake: :cake: :cookie: :cookie: :chocolate_bar: :chocolate_bar: :candy: :candy: :lollipop: :lollipop: :honey_pot: :honey_pot: :apple: :apple: :green_apple: :green_apple: :tangerine: :tangerine: :lemon: :lemon: :cherries: :cherries: :grapes: :grapes: :watermelon: :watermelon: :strawberry: :strawberry: :peach: :peach: :melon: :melon: :banana: :banana: :pear: :pear: :pineapple: :pineapple: :sweet_potato: :sweet_potato: :eggplant: :eggplant: :tomato: :tomato: :corn: :corn: 地点 # :house: :house: :house_with_garden: :house_with_garden: :school: :school: :office: :office: :post_office: :post_office: :hospital: :hospital: :bank: :bank: :convenience_store: :convenience_store: :love_hotel: :love_hotel: :hotel: :hotel: :wedding: :wedding: :church: :church: :department_store: :department_store: :european_post_office: :european_post_office: :city_sunrise: :city_sunrise: :city_sunset: :city_sunset: :japanese_castle: :japanese_castle: :european_castle: :european_castle: :tent: :tent: :factory: :factory: :tokyo_tower: :tokyo_tower: :japan: :japan: :mount_fuji: :mount_fuji: :sunrise_over_mountains: :sunrise_over_mountains: :sunrise: :sunrise: :stars: :stars: :statue_of_liberty: :statue_of_liberty: :bridge_at_night: :bridge_at_night: :carousel_horse: :carousel_horse: :rainbow: :rainbow: :ferris_wheel: :ferris_wheel: :fountain: :fountain: :roller_coaster: :roller_coaster: :ship: :ship: :speedboat: :speedboat: :boat: :boat: :sailboat: :sailboat: :rowboat: :rowboat: :anchor: :anchor: :rocket: :rocket: :airplane: :airplane: :helicopter: :helicopter: :steam_locomotive: :steam_locomotive: :tram: :tram: :mountain_railway: :mountain_railway: :bike: :bike: :aerial_tramway: :aerial_tramway: :suspension_railway: :suspension_railway: :mountain_cableway: :mountain_cableway: :tractor: :tractor: :blue_car: :blue_car: :oncoming_automobile: :oncoming_automobile: :car: :car: :red_car: :red_car: :taxi: :taxi: :oncoming_taxi: :oncoming_taxi: :articulated_lorry: :articulated_lorry: :bus: :bus: :oncoming_bus: :oncoming_bus: :rotating_light: :rotating_light: :police_car: :police_car: :oncoming_police_car: :oncoming_police_car: :fire_engine: :fire_engine: :ambulance: :ambulance: :minibus: :minibus: :truck: :truck: :train: :train: :station: :station: :train2: :train2: :bullettrain_front: :bullettrain_front: :bullettrain_side: :bullettrain_side: :light_rail: :light_rail: :monorail: :monorail: :railway_car: :railway_car: :trolleybus: :trolleybus: :ticket: :ticket: :fuelpump: :fuelpump: :vertical_traffic_light: :vertical_traffic_light: :traffic_light: :traffic_light: :warning: :warning: :construction: :construction: :beginner: :beginner: :atm: :atm: :slot_machine: :slot_machine: :busstop: :busstop: :barber: :barber: :hotsprings: :hotsprings: :checkered_flag: :checkered_flag: :crossed_flags: :crossed_flags: :izakaya_lantern: :izakaya_lantern: :moyai: :moyai: :circus_tent: :circus_tent: :performing_arts: :performing_arts: :round_pushpin: :round_pushpin: :triangular_flag_on_post: :triangular_flag_on_post: :jp: :jp: :kr: :kr: :cn: :cn: :us: :us: :fr: :fr: :es: :es: :it: :it: :ru: :ru: :gb: :gb: :uk: :uk: :de: :de: 符号 # :one: :one: :two: :two: :three: :three: :four: :four: :five: :five: :six: :six: :seven: :seven: :eight: :eight: :nine: :nine: :keycap_ten: :keycap_ten: :1234: :1234: :zero: :zero: :hash: :hash: :symbols: :symbols: :arrow_backward: :arrow_backward: :arrow_down: :arrow_down: :arrow_forward: :arrow_forward: :arrow_left: :arrow_left: :capital_abcd: :capital_abcd: :abcd: :abcd: :abc: :abc: :arrow_lower_left: :arrow_lower_left: :arrow_lower_right: :arrow_lower_right: :arrow_right: :arrow_right: :arrow_up: :arrow_up: :arrow_upper_left: :arrow_upper_left: :arrow_upper_right: :arrow_upper_right: :arrow_double_down: :arrow_double_down: :arrow_double_up: :arrow_double_up: :arrow_down_small: :arrow_down_small: :arrow_heading_down: :arrow_heading_down: :arrow_heading_up: :arrow_heading_up: :leftwards_arrow_with_hook: :leftwards_arrow_with_hook: :arrow_right_hook: :arrow_right_hook: :left_right_arrow: :left_right_arrow: :arrow_up_down: :arrow_up_down: :arrow_up_small: :arrow_up_small: :arrows_clockwise: :arrows_clockwise: :arrows_counterclockwise: :arrows_counterclockwise: :rewind: :rewind: :fast_forward: :fast_forward: :information_source: :information_source: :ok: :ok: :twisted_rightwards_arrows: :twisted_rightwards_arrows: :repeat: :repeat: :repeat_one: :repeat_one: :new: :new: :top: :top: :up: :up: :cool: :cool: :free: :free: :ng: :ng: :cinema: :cinema: :koko: :koko: :signal_strength: :signal_strength: :u5272: :u5272: :u5408: :u5408: :u55b6: :u55b6: :u6307: :u6307: :u6708: :u6708: :u6709: :u6709: :u6e80: :u6e80: :u7121: :u7121: :u7533: :u7533: :u7a7a: :u7a7a: :u7981: :u7981: :sa: :sa: :restroom: :restroom: :mens: :mens: :womens: :womens: :baby_symbol: :baby_symbol: :no_smoking: :no_smoking: :parking: :parking: :wheelchair: :wheelchair: :metro: :metro: :baggage_claim: :baggage_claim: :accept: :accept: :wc: :wc: :potable_water: :potable_water: :put_litter_in_its_place: :put_litter_in_its_place: :secret: :secret: :congratulations: :congratulations: :m: :m: :passport_control: :passport_control: :left_luggage: :left_luggage: :customs: :customs: :ideograph_advantage: :ideograph_advantage: :cl: :cl: :sos: :sos: :id: :id: :no_entry_sign: :no_entry_sign: :underage: :underage: :no_mobile_phones: :no_mobile_phones: :do_not_litter: :do_not_litter: :non-potable_water: :non-potable_water: :no_bicycles: :no_bicycles: :no_pedestrians: :no_pedestrians: :children_crossing: :children_crossing: :no_entry: :no_entry: :eight_spoked_asterisk: :eight_spoked_asterisk: :eight_pointed_black_star: :eight_pointed_black_star: :heart_decoration: :heart_decoration: :vs: :vs: :vibration_mode: :vibration_mode: :mobile_phone_off: :mobile_phone_off: :chart: :chart: :currency_exchange: :currency_exchange: :aries: :aries: :taurus: :taurus: :gemini: :gemini: :cancer: :cancer: :leo: :leo: :virgo: :virgo: :libra: :libra: :scorpius: :scorpius: :sagittarius: :sagittarius: :capricorn: :capricorn: :aquarius: :aquarius: :pisces: :pisces: :ophiuchus: :ophiuchus: :six_pointed_star: :six_pointed_star: :negative_squared_cross_mark: :negative_squared_cross_mark: :a: :a: :b: :b: :ab: :ab: :o2: :o2: :diamond_shape_with_a_dot_inside: :diamond_shape_with_a_dot_inside: :recycle: :recycle: :end: :end: :on: :on: :soon: :soon: :clock1: :clock1: :clock130: :clock130: :clock10: :clock10: :clock1030: :clock1030: :clock11: :clock11: :clock1130: :clock1130: :clock12: :clock12: :clock1230: :clock1230: :clock2: :clock2: :clock230: :clock230: :clock3: :clock3: :clock330: :clock330: :clock4: :clock4: :clock430: :clock430: :clock5: :clock5: :clock530: :clock530: :clock6: :clock6: :clock630: :clock630: :clock7: :clock7: :clock730: :clock730: :clock8: :clock8: :clock830: :clock830: :clock9: :clock9: :clock930: :clock930: :heavy_dollar_sign: :heavy_dollar_sign: :copyright: :copyright: :registered: :registered: :tm: :tm: :x: :x: :heavy_exclamation_mark: :heavy_exclamation_mark: :bangbang: :bangbang: :interrobang: :interrobang: :o: :o: :heavy_multiplication_x: :heavy_multiplication_x: :heavy_plus_sign: :heavy_plus_sign: :heavy_minus_sign: :heavy_minus_sign: :heavy_division_sign: :heavy_division_sign: :white_flower: :white_flower: :100: :100: :heavy_check_mark: :heavy_check_mark: :ballot_box_with_check: :ballot_box_with_check: :radio_button: :radio_button: :link: :link: :curly_loop: :curly_loop: :wavy_dash: :wavy_dash: :part_alternation_mark: :part_alternation_mark: :trident: :trident: :black_square: :black_square: :white_square: :white_square: :white_check_mark: :white_check_mark: :black_square_button: :black_square_button: :white_square_button: :white_square_button: :black_circle: :black_circle: :white_circle: :white_circle: :red_circle: :red_circle: :large_blue_circle: :large_blue_circle: :large_blue_diamond: :large_blue_diamond: :large_orange_diamond: :large_orange_diamond: :small_blue_diamond: :small_blue_diamond: :small_orange_diamond: :small_orange_diamond: :small_red_triangle: :small_red_triangle: :small_red_triangle_down: :small_red_triangle_down: :shipit: :shipit: `}),e.add({id:16,href:"/wiki/dev/github/actions/",title:"Actions",section:"Git and Github",content:` Github Actions # Github Actions 是一套基于 github 的自动化执行框架，可以自定义各种 workflow 及工具来满足 CI, CD 相关的各种需求。
创建一个容器的 action # Github Demo: airdb actions
Refer: https://help.github.com/en/actions/creating-actions/creating-a-docker-container-action
主体思路：
通过执行 docker run 命令实现 actions 操作。
Workflow:
action.yml 中配置, 启用自定义的 action , 增加 input 变量作为 docker run 参数 调用自定义的 action , 从 env 中获取 GITHUB_EVENT_PATH, 读取 event.json 全部内容 代码中进行自定义操作 设置输出, 如 echo \u0026ldquo;::set-output name=time::\$time\u0026rdquo; `}),e.add({id:17,href:"/wiki/dev/github/fork/",title:"Fork",section:"Git and Github",content:` Github 技巧 # Gitlab 或 Github Fork 后如何同步源的新更新内容？ # 给 fork 配置远程库 # 查看远程状态 git remote -v
确定一个将被同步给 fork 远程的上游仓库 git remote add upstream https://github.com/bfenetworks/bfe
再次查看状态确认是否配置成功。 git remote -v
同步 fork # 从上游仓库 fetch 分支和提交点，提交给本地 master，并会被存储在一个本地分支 upstream/master git fetch upstream 切换到本地主分支(如果不在的话) git checkout develop
把 upstream/master 分支合并到本地 master 上，这样就完成了同步，并且不会丢掉本地修改的内容。 git merge upstream/develop
如果想更新到 GitHub 的 fork 上，直接 git push origin develop
`}),e.add({id:18,href:"/wiki/dev/github/git_branch_manage/",title:"Git Branch Manage",section:"Git and Github",content:` Git 分支的约束和管理 # 来源： dxyoo7
一、分支说明 # master # 主分支，用作生产分支，里面的代码是准备部署到生产环境的。master 永远处于稳定状态，这个分支代码可以随时用来部署。 master 不提交代码，只合并代码。 合并代码到 master 的操作，由项目对应的集成管理员专人负责。 各分支要定期将 master 代码合并进来，避免后续分支合并到 master 时容易产生冲突，以减轻集成管理员的合并负担。 发版之后，要打 tag 。 develop # 从哪个分支分离开来：master 可以合并到哪个分支上：release Develop（开发）分支，包含了项目最新的功能和代码，所有开发都在 develop 上进行。一般情况下小的修改直接在这个分支上提交代码。
release # 从哪个分支分离开来：develop 必须要合并到哪个分支上：develop 与 master 分支的命名规范：release-* Release （发行）分支，是为发行正式的生产版本做准备。当开发的差不多了，准备发行就可以创建一个发行分支，在这个分支上可以做一些小的 bug 修复，准备发行的元数据，比如版本号，发行日期之类的。这时候，develop 分支可以继续接收新的提交，为下一个发行做准备。
feature # 从哪个分支分离开来：develop 必须要合并到哪个分支上：develop 分支的命名规范：除了 master，develop，release-，或者 hotfix- 以外的名字都可以 Feature（功能） 分支，有时候也叫 Topic 分支。在这种分支上去开发新的功能。当开发功能的时候，这个功能属于哪个目标发行还不知道。功能如果一直在开发，对应的这个功能分支就可以一直存在，不过到最后还是要合并到 develop 分支上，或者如果不想要开发的这个功能了，可以直接扔掉它。 Feature 分支一般只在开发者的 repo 里，而不是在 origin 上。
hotfix # 从哪个分支分离开来：master 必须要合并到哪个分支上：develop 与 master 分支的命名规范：hotfix-* 当在生产版本上遇到 bug，你需要立即修复的时候，可以创建一个 Hotfix 分支，这个分支可以基于生产环境使用的对应的在 master 分支上的 tag 来创建。
bugfix # 从哪个分支分离开来：master 必须要合并到哪个分支上：develop 与 master 分支的命名规范：hotfix-* 等同于hotfix，只是紧急性没有hotfix那么急迫。
如下图所示： 二、分支开发 # 新版本开始：每个人从最新develop上checkout一个本地分支做开发； 本阶段：禁止直接在develop上开发； 如预期需要协助，可以几个人协同一个远端分支开发；一般会在远端创建version-develop分支
开发周期：一个版本的迭代周期，我们分成3个里程碑(v1, v2, v3); v1版本：开发完成，会merge各自分支到develop；此时develop才进入下一个开发周期； 同时发布v1包给测试； v1的Bug，大家可以选择在develop上直接修改，或者继续在各自的本地分支上修改； v2、v3版本：建议还是在各自的本地分支上继续开发； 完成feature后，同样merge回develop； 三、分支操作参考 # master # # 合并release分支 git checkout master git pull origin master --rebase git merge --no-ff release git tag V1.0 git push origin master # 或者合并hotfix分支 git checkout master git pull origin master --rebase git merge --no-ff release git tag V1.1 git push origin master develop # # 创建develop分支(第一次) git checkout master git pull origin master --rebase git checkout -b develop git push origin develop # 合并一般的feature分支（推送到远程的feature分支） git checkout develop git pull origin develop --rebase git merge --no-ff feature git push origin develop # 合并较小的feature分支（不推送到远程的feature分支） # 1)获取最新develpo分支内容 git checkout develop git pull origin develop --rebase # 2）回合develop git checkout feature git rebase develop # 3）merge feature git merge --no-ff feature git push origin develop release # # 从develop切出realse分支 git checkout -b release # 合并develop分支 git pull origin release --rebase git merge --no-ff develop git push origin develop feature # # 从develop切出feature分支 1) #拉取最新develop分支代码 git checkout develop git pull origin develop --rebase 2）#切出新的feature分支 git checkout -b feature 3) #合并到develop(merge) git checkout develop git pull origin develop --rebase git merge --no-ff feature git push origin develop 3) #合并到develop(rebase) git checkout develop git pull origin develop --rebase git checkout feature git rebase develop # 如果有冲突，修改好后，执行以下（千万不要执行git commit XX） || git add . || git rebase --continue git checkout develop git merge --no-ff feature git push origin develop hotfix # 从master切出hotfix分支 # git checkout master git pull origin master \u0026ndash;rebase git checkout -b hotfix
master合并分支hotfix # git checkout master git pull origin master \u0026ndash;rebase git merge \u0026ndash;no-ff hotfix git tag V1.1 git push origin master
develop合并分支hotfix # git checkout develop git pull origin develop \u0026ndash;rebase git merge \u0026ndash;no-ff hotfix git push origin develop
bugfix # 同hotfix，但不一定是从master分支切出.
`}),e.add({id:19,href:"/wiki/dev/github/how_to_github_pull_request/",title:"How to Github Pull Request",section:"Git and Github",content:` 如何参与贡献: # Github 提交 PR, 地址: github.com/airdb/fun Github 提交 issues, 地址: github.com/airdb/fun/issues 写邮件给 info@airdb.com Github 如何提交 PR # step 1:
Fork GitHub 上的 Repository 到贡献者的 Repository
step 2:
clone 代码到本地 git clone github.com/airdb/fun
step 3:
检查当前 Git Repository
git remote -v origin https://github.com/airdb/fun (fetch) origin https://github.com/airdb/fun (push) step 4:
新建立贡献者 Git Repository 的连接
git remote add pullrequest https://github.com/deanchina/docs step 5:
新建工作分支
git checkout -b devel git branch * devel master step 6:
修改文件
step 7:
提交到贡献者 Github 上
git add . git commit -m\u0026#34;pull request\u0026#34; step 8
发起 PR (Pull Request) 登录 GitHub Repository 点击Pull Requests, 再点击New pull requests按钮
`}),e.add({id:20,href:"/wiki/dev/github/issue/",title:"Issue",section:"Git and Github",content:` Github Issue 的用法 # Reference
Issues 的属性 # GitHub 中每一个仓库都会有对应的一个issues的功能，issues 中可以新建多个 issue，每一个 issue 就像一篇文章，有标题和内容，还有评论。另外，每个issue都有唯一的编号 #n。 issue 可以设置: Opened 和 Closed 两种状态。
issue 还可以有额外的属性：
\`Labels\`，标签。包括 \`bug\`、\`invalid\` 等，可以自定义。表示 issue 的类型，解决的方式。 \`Milestone\`，里程碑。通常用来做版本管理，v0.1、v1.0 之类的，也可以是任意自定义字符串。一个里程碑对应的所有 issue 都被关闭后，这个里程碑会被自动认为已经达成。 \`Assignee\`，责任人。指定这个 issue 由谁负责来解决。 个人如何利用issues的功能？ # GitHub 的 issue 功能，对个人而言，就如同 TODO list。
可以把所有想要在下一步完成的工作，如feature 添加、bug 修复等，都写成一个个的 issue ，放在上面。既可以作为提醒，也可以统一管理。 另外，每一次 commit 都可以选择性的与某个 issue 关联。比如在 message 中添加 #n，就可以与第 n 个 issue 进行关联。 commit message title, #1 这个提交会作为一个 comment ，出现在编号为1的 issue 记录中。 如果添加：
fix #n fixes #n fixed #n close #n closes #n closed #n resolve #x resolves #x resolved #x add new quick sort algorithm, fixes #4, resolve #6, closed #12 充分利用这些功能，让每一个 commit 的意义更加明确，可以起到了良好的过程管理作用，使得这个Git库的项目进度更加显然。而且，这也是项目后期，写文档的绝佳素材。
团队如何利用issues的功能？ # 对团队而言，这就是一个协作系统。
其实，GitHub 的 issues，就是一个轻量级协作系统。它的 comment 支持GitHub Flavored Markdown，可以进行内容丰富的交流。
Git 本身就是分布式的代码版本控制软件，是为了程序员的协作而设计的。而 issues 的 Assignee 功能，就是这个在线协作系统的核心，足以让一群线上的开发者，一起完成一个软件项目。
作为一个路人如何给别人的项目提bug？ # 用 issues 给别人的项目提 bug。
Tips: Github Project 可以转化为 issues.
`}),e.add({id:21,href:"/wiki/dev/github/makefile/",title:"Makefile",section:"Git and Github",content:" Makefile # Command line arguments # myos = $(word 1, $@) ifndef $myos myos = \u0026#34;$(shell uname | tr A-Z a-z)\u0026#34; endif Examples # Go Makefile # -include .env VERSION := $(shell git describe --tags) BUILD := $(shell git rev-parse --short HEAD) PROJECTNAME := $(shell basename \u0026#34;$(PWD)\u0026#34;) # Go related variables. GOBASE := $(shell pwd) GOPATH := $(GOBASE)/vendor:$(GOBASE) GOBIN := $(GOBASE)/bin GOFILES := $(wildcard *.go) # Use linker flags to provide version/build settings LDFLAGS=-ldflags \u0026#34;-X=main.Version=$(VERSION) -X=main.Build=$(BUILD)\u0026#34; # Redirect error output to a file, so we can show it in development mode. STDERR := /tmp/.$(PROJECTNAME)-stderr.txt # PID file will keep the process id of the server PID := /tmp/.$(PROJECTNAME).pid # Make is verbose in Linux. Make it silent. MAKEFLAGS += --silent ## install: Install missing dependencies. Runs `go get` internally. e.g; make install get=github.com/foo/bar install: go-get ## start: Start in development mode. Auto-starts when code changes. start: @bash -c \u0026#34;trap \u0026#39;make stop\u0026#39; EXIT; $(MAKE) clean compile start-server watch run=\u0026#39;make clean compile start-server\u0026#39;\u0026#34; ## stop: Stop development mode. stop: stop-server start-server: stop-server @echo \u0026#34; \u0026gt; $(PROJECTNAME) is available at $(ADDR)\u0026#34; @-$(GOBIN)/$(PROJECTNAME) 2\u0026gt;\u0026amp;1 \u0026amp; echo $$! \u0026gt; $(PID) @cat $(PID) | sed \u0026#34;/^/s/^/ \\\u0026gt; PID: /\u0026#34; stop-server: @-touch $(PID) @-kill `cat $(PID)` 2\u0026gt; /dev/null || true @-rm $(PID) ## watch: Run given command when code changes. e.g; make watch run=\u0026#34;echo \u0026#39;hey\u0026#39;\u0026#34; watch: @GOPATH=$(GOPATH) GOBIN=$(GOBIN) yolo -i . -e vendor -e bin -c \u0026#34;$(run)\u0026#34; restart-server: stop-server start-server ## compile: Compile the binary. compile: @-touch $(STDERR) @-rm $(STDERR) @-$(MAKE) -s go-compile 2\u0026gt; $(STDERR) @cat $(STDERR) | sed -e \u0026#39;1s/.*/\\nError:\\n/\u0026#39; | sed \u0026#39;s/make\\[.*/ /\u0026#39; | sed \u0026#34;/^/s/^/ /\u0026#34; 1\u0026gt;\u0026amp;2 ## exec: Run given command, wrapped with custom GOPATH. e.g; make exec run=\u0026#34;go test ./...\u0026#34; exec: @GOPATH=$(GOPATH) GOBIN=$(GOBIN) $(run) ## clean: Clean build files. Runs `go clean` internally. clean: @-rm $(GOBIN)/$(PROJECTNAME) 2\u0026gt; /dev/null @-$(MAKE) go-clean go-compile: go-get go-build go-build: @echo \u0026#34; \u0026gt; Building binary...\u0026#34; @GOPATH=$(GOPATH) GOBIN=$(GOBIN) go build $(LDFLAGS) -o $(GOBIN)/$(PROJECTNAME) $(GOFILES) go-generate: @echo \u0026#34; \u0026gt; Generating dependency files...\u0026#34; @GOPATH=$(GOPATH) GOBIN=$(GOBIN) go generate $(generate) go-get: @echo \u0026#34; \u0026gt; Checking if there is any missing dependencies...\u0026#34; @GOPATH=$(GOPATH) GOBIN=$(GOBIN) go get $(get) go-install: @GOPATH=$(GOPATH) GOBIN=$(GOBIN) go install $(GOFILES) go-clean: @echo \u0026#34; \u0026gt; Cleaning build cache\u0026#34; @GOPATH=$(GOPATH) GOBIN=$(GOBIN) go clean .PHONY: help all: help help: Makefile @echo @echo \u0026#34; Choose a command run in \u0026#34;$(PROJECTNAME)\u0026#34;:\u0026#34; @echo @sed -n \u0026#39;s/^##//p\u0026#39; $\u0026lt; | column -t -s \u0026#39;:\u0026#39; | sed -e \u0026#39;s/^/ /\u0026#39; @echo "}),e.add({id:22,href:"/wiki/dev/go/coredns/",title:"Coredns",section:"Golang",content:` CoreDNS 开发 # 插件开发 # 参考： https://github.com/coredns/rrl
集成插件 # 将插件放置在 coredns/plugin/ 目录下 将指令添加到 core/dnsserver/zdirectives.go Directives 数组中 增加插件到 plugin.cfg core/plugin/zplugin.go
`}),e.add({id:23,href:"/wiki/dev/go/pprof/memory_leak/",title:"Memory Leak",section:"Golang",content:` go pprof与线上事故：一次成功的定位与失败的复现
Memory Leaking Scenarios # Gin pprof # import \u0026#34;github.com/gin-contrib/pprof\u0026#34; pprof.Register(router) Case Sets # Case1: https://github.com/golang/go/issues/25484
yes, the way used by strings.Builder, is a more efficient way.
func ByteSlice2String(bs []byte) string { return *(*string)(unsafe.Pointer(\u0026amp;bs)) } For reference, this is the source referred to
https://www.openmymind.net/Go-Slices-And-The-Case-Of-The-Missing-Memory/
`}),e.add({id:24,href:"/wiki/dev/go/serverless-tencent/",title:"Serverless Tencent",section:"Golang",content:` 腾讯云 Serverless # 讨论区： https://github.com/serverless/serverless-tencent/discussions
安装 # npm install -g serverless 环境配置 # serverless 配置文件 .env # tencent serverless config STAGE=test SERVERLESS_PLATFORM_VENDOR=tencent GLOBAL_ACCELERATOR_NA=true TENCENT_APP_ID=xxx TENCENT_SECRET_ID=XXX TENCENT_SECRET_KEY=XXX TENCENT_REGION=ap-shanghai 不过.env 文件管理繁琐， 建议使用 credential 来存储全局 secret, 全局授权身份
# 国际用户，使用如下命令部署 SERVERLESS_PLATFORM_VENDOR=tencent GLOBAL_ACCELERATOR_NA=true sls deploy --stage test serverless.yaml 配置文件 Ref: https://github.com/serverless-components/tencent-scf/blob/master/docs/configure.md.
Demo: [https://github.com/airdb/scf-go]
部署 # SERVERLESS_PLATFORM_VENDOR=tencent GLOBAL_ACCELERATOR_NA=true sls deploy --stage test 查看日志 # SERVERLESS_PLATFORM_VENDOR=tencent GLOBAL_ACCELERATOR_NA=true sls logs --tail --stage test `}),e.add({id:25,href:"/wiki/dev/go/tools/",title:"Tools",section:"Golang",content:` Golang Command Line tools # Linux pipes in Golang
使用Go语言在MacOS创建一个自定义的命令行工具
你应该定期更新 Homebrew
`}),e.add({id:26,href:"/wiki/dev/standard/case/",title:"Case",section:"Development Handbook",content:` 好好写代码 # Bad Cases # Please don\u0026rsquo;t waste maintainers\u0026rsquo; time on your KPI grabbing patches (AKA, don\u0026rsquo;t be a KPI jerk)
`}),e.add({id:27,href:"/wiki/kube/1-kubernetes-on-macOS/",title:"1 Kubernetes on MAC Os",section:"Cloud Navtive",content:` Minikube Installation # Requirements # Minikube requires that VT-x/AMD-v virtualization is enabled in BIOS. To check that this is enabled on OSX / macOS run:
sysctl -a | grep machdep.cpu.features | grep VMX --color=auto If there\u0026rsquo;s output, you\u0026rsquo;re good!
Prerequisites # kubectl docker (for Mac) minikube virtualbox brew update \u0026amp;\u0026amp; brew install kubectl \u0026amp;\u0026amp; brew cask install docker minikube virtualbox Verify # docker --version # Docker version 17.09.0-ce, build afdb6d4 docker-compose --version # docker-compose version 1.16.1, build 6d1ac21 docker-machine --version # docker-machine version 0.12.2, build 9371605 minikube version # minikube version: v0.22.3 kubectl version --client # Client Version: version.Info{Major:\u0026quot;1\u0026quot;, Minor:\u0026quot;8\u0026quot;, GitVersion:\u0026quot;v1.8.1\u0026quot;, GitCommit:\u0026quot;f38e43b221d08850172a9a4ea785a86a3ffa3b3a\u0026quot;, GitTreeState:\u0026quot;clean\u0026quot;, BuildDate:\u0026quot;2017-10-12T00:45:05Z\u0026quot;, GoVersion:\u0026quot;go1.9.1\u0026quot;, Compiler:\u0026quot;gc\u0026quot;, Platform:\u0026quot;darwin/amd64\u0026quot;} Start # minikube start This can take a while, expected output:
Starting local Kubernetes cluster... Kubectl is now configured to use the cluster. Great! You now have a running Kubernetes cluster locally. Minikube started a virtual machine for you, and a Kubernetes cluster is now running in that VM.
Check k8s # kubectl get nodes Should output something like:
NAME STATUS ROLES AGE VERSION minikube Ready \u0026lt;none\u0026gt; 40s v1.7.5 Use minikube\u0026rsquo;s built-in docker daemon: # eval \$(minikube docker-env) Add this line to .bash_profile or .zshrc or \u0026hellip; if you want to use minikube\u0026rsquo;s daemon by default (or if you do not want to set this every time you open a new terminal).
You can revert back to the host docker daemon by running:
eval \$(docker-machine env -u) If you now run docker ps, it should now output something like:
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES e97128790bf9 gcr.io/google-containers/kube-addon-manager \u0026#34;/opt/kube-addons.sh\u0026#34; 22 seconds ago Up 22 seconds k8s_kube-addon-manager_kube-addon-manager-minikube_kube-system_c654b2f084cf26941c334a2c3d6db53d_0 69707e54d1d0 gcr.io/google_containers/pause-amd64:3.0 \u0026#34;/pause\u0026#34; 33 seconds ago Up 33 seconds k8s_POD_kube-addon-manager-minikube_kube-system_c654b2f084cf26941c334a2c3d6db53d_0 Build, deploy and run an image on your local k8s setup # First setup a local registry, so Kubernetes can pull the image(s) from there:
docker run -d -p 5000:5000 --restart=always --name registry registry:2 Build # First of, store all files (Dockerfile, my-app.yml, index.html) in this gist locally in some new (empty) directory.
You can build the Dockerfile below locally if you want to follow this guide to the letter. Store the Dockerfile locally, preferably in an empty directory and run:
docker build . --tag my-app You should now have an image named \u0026lsquo;my-app\u0026rsquo; locally, check by using docker images (or your own image of course). You can then publish it to your local docker registry:
docker tag my-app localhost:5000/my-app:0.1.0 Running docker images should now output the following:
REPOSITORY TAG IMAGE ID CREATED SIZE my-app latest cc949ad8c8d3 44 seconds ago 89.3MB localhost:5000/my-app 0.1.0 cc949ad8c8d3 44 seconds ago 89.3MB httpd 2.4-alpine fe26194c0b94 7 days ago 89.3MB Deploy and run # Store the file below my-app.yml on your system and run the following:
kubectl create -f my-app.yml You should now see your pod and your service:
kubectl get all The configuration exposes my-app outside of the cluster, you can get the address to access it by running:
minikube service my-app --url This should give an output like http://192.168.99.100:30304 (the port will most likely differ). Go there with your favorite browser, you should see \u0026ldquo;Hello world!\u0026rdquo;. You just accessed your application from outside of your local Kubernetes cluster!
Kubernetes GUI # minikube dashboard Delete deployment of my-app # kubectl delete deploy my-app kubectl delete service my-app You\u0026rsquo;re now good to go and deploy other images!
Reset everything # minikube stop; minikube delete; rm -rf ~/.minikube ~/.kube; brew uninstall kubectl; brew cask uninstall docker virtualbox minikube; Version # Last tested on 2019 Jul 1st macOS Mojave 10.14.5
`}),e.add({id:28,href:"/wiki/kube/2-ingress-exmaple/",title:"2 Ingress Exmaple",section:"Cloud Navtive",content:` Kubernetes Ingress with Nginx Example # refer
How to Use Nginx Ingress Controller # Installation Guide # Start by creating the “mandatory” resources for Nginx Ingress in your cluster. kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
gg
Then, enable the ingress add-on for Minikube. minikube addons enable ingress
Check that it’s all set up correctly. kubectl get pods --all-namespaces | grep ingress-nginx
Create the resources \u0026amp; the Ingress in the cluster # example code
kubectl apply -f apple.yaml kubectl apply -f banana.yaml kubectl create -f ingress.yaml Test # \$ curl -kL http://\$(minikube ip)/apple apple
\$curl -kL http://\$(minikube ip)/banana banana
\$curl -kL http://\$(minikube ip)/apple default backend - 404
Summary # A Kubernetes Ingress is a robust way to expose your services outside the cluster. It lets you consolidate your routing rules to a single resource, and gives you powerful options for configuring these rules.
`}),e.add({id:29,href:"/wiki/kube/5-helm/",title:"5 Helm",section:"Cloud Navtive",content:` Helm V3 Installation # Requirements # helm repo add stable https://kubernetes-charts.storage.googleapis.com
install Mysql # mysql
helm install mysql --set mysqlRootPassword=secret stable/mysql MYSQL_ROOT_PASSWORD=\$(kubectl get secret --namespace default mysql -o jsonpath=\u0026#34;{.data.mysql-root-password}\u0026#34; | base64 --decode; echo) kubectl port-forward svc/mysql 3306 `}),e.add({id:30,href:"/wiki/kube/9-faq/",title:"9 Faq",section:"Cloud Navtive",content:` Kube \u0026amp; Helm FAQ # Minikube # (How to completely purge minikube config or reset IP back to 192.168.99.100)[https://stackoverflow.com/questions/53871053/how-to-completely-purge-minikube-config-or-reset-ip-back-to-192-168-99-100] ~/Library/VirtualBox/HostInterfaceNetworking-vboxnet0-Dhcpd.leases
`}),e.add({id:31,href:"/wiki/kube/helm/",title:"Helm",section:"Cloud Navtive",content:`Airdb Helm
Helm Package Repo. Heml index.yaml
Usage # helm repo add airdb https://www.airdb.com/helm/ helm repo update helm search repo helm/mychart helm install airdb/mychat Helm V3 Env and Search # helm env helm search repo airdb Create or Update Helm Chart Repo # git clone https://github.com/airdb/helm/ cd helm helm repo index ./ --url https://www.airdb.com/helm/ helm package mychart Update the index.yaml file based on your chart. helm repo index --merge index.yaml --url https://www.airdb.com/helm/ . Other Repos # helm repo add stable https://kubernetes-charts.storage.googleapis.com `}),e.add({id:32,href:"/wiki/linux/service/dhcp/",title:"DHCP",section:"Service",content:` DHCP # Dynamic Host Configuration Protocol
Reference # tftp server: https://github.com/tftp-go-team/hooktftp
一个网络启动服务器，支持pxe: https://github.com/pojntfx/bofied
Best Practice
dhcp/conf/dhcpd.conf # include \u0026quot;/var/www/html/autoinstall/dhcp/host\u0026quot;; ddns-update-style interim; ignore client-updates; allow unknown-clients; ping-check true; option perform-mask-discovery true; option router-discovery true; #option ntp-servers 10.4.18.10,10.4.18.11; # hz ntp #option time-offset -18000; # Eastern Standard Time. #option domain-name-servers 10.0.1.127,203.196.0.6; option domain-search \u0026quot;airdb.io\u0026quot;; default-lease-time 3600; max-lease-time 4800; group host_pool { default-lease-time 600; max-lease-time 600; allow bootp; allow booting; filename \u0026quot;/pxelinux.0\u0026quot;; option dhcp-renewal-time 10; subnet 10.0.0.0 netmask 255.255.255.0 { option subnet-mask 255.255.255.0; option routers 10.0.0.1; #default routes range dynamic-bootp 10.0.0.2 10.0.0.200; } } dhcp/conf/hosts # host rmc1.airdb.io {hardware ethernet 00:01:02:03:04:80 ;fixed-address 10.0.0.253 ;} host dean.airdb.io { hardware ethernet f0:76:1c:02:b1:10 ;fixed-address 10.0.0.251;} host dhcp_01 { hardware ethernet 00:8c:fa:eb:b4:bc ;fixed-address 10.0.0.01 ;} host h_02 { hardware ethernet 00:8c:fa:eb:b2:d4 ;fixed-address 10.0.0.02 ;} host h_03 { hardware ethernet 00:8c:fa:eb:b4:0c ;fixed-address 10.0.0.03 ;} host h_04 { hardware ethernet 00:8c:fa:eb:b8:08 ;fixed-address 10.0.0.04 ;} host h_05 { hardware ethernet 00:8c:fa:eb:b4:d0 ;fixed-address 10.0.0.05 ;} host h_06 { hardware ethernet 00:8c:fa:eb:b4:78 ;fixed-address 10.0.0.06 ;} /etc/xinetd.d/tftp # service tftp { socket_type	= dgram protocol	= udp wait	= yes user	= root server	= /usr/sbin/in.tftpd server_args	= -B 1380 -v -s /var/www/html/autoinstall/tftpboot disable	= no per_source	= 11 cps	= 100 2 flags	= IPv4 } `}),e.add({id:33,href:"/wiki/linux/service/monitor/",title:"Monitor",section:"Service",content:` Monitor # Host Monitor # Linux系统内存使用率该怎么计算
psutil module # Go: https://github.com/shirou/gopsutil
Python: https://github.com/giampaolo/psutil
`}),e.add({id:34,href:"/wiki/linux/service/nginx/",title:"Nginx",section:"Service",content:" Nginx # 公共配置 # 说明： conf/nginx.conf 中存放在公共配置中， conf.d/upstream.conf 中存放upstream配置， conf.d/host.conf 中存放 location 等其他配置。\n# For more information on configuration, see: # * Official English Documentation: http://nginx.org/en/docs/ # * Official Russian Documentation: http://nginx.org/ru/docs/ worker_processes auto; error_log logs/error.log; pid run/nginx.pid; # Load dynamic modules. See /usr/share/nginx/README.dynamic. # include /usr/share/nginx/modules/*.conf; events { worker_connections 2048; } http { include /etc/nginx/mime.types; default_type application/octet-stream; #log_format main \u0026#39;$remote_addr - $host [$time_local] \u0026#34;$request\u0026#34; \u0026#39; \u0026#39;$status $body_bytes_sent \u0026#34;$http_referer\u0026#34; \u0026#39; \u0026#39;\u0026#34;$http_user_agent\u0026#34; \u0026#34;$http_x_forwarded_for\u0026#34;\u0026#39;; log_format main \u0026#39;$time_iso8601|$status|$remote_addr|$host|$server_port|$server_protocol|$request_method|$host$request_uri|$request_filename|$content_type|$bytes_sent|$body_bytes_sent|$request_time|$http_user_agent|$http_Tencent_LeakScan|$upstream_addr|$http_referer\u0026#39;; error_log logs/error.log; keepalive_timeout 30; server_names_hash_max_size 512; server_names_hash_bucket_size 128; server_tokens off; sendfile on; tcp_nopush off; tcp_nodelay on; #keepalive_timeout 3 10; client_max_body_size 8m; client_header_timeout 30; client_body_timeout 30; send_timeout 30; #fastcgi_connect_timeout 300; #fastcgi_send_timeout 300; #fastcgi_read_timeout 300; fastcgi_buffer_size 64k; fastcgi_buffers 8 64k; fastcgi_busy_buffers_size 128k; fastcgi_intercept_errors on; gzip on; gzip_min_length 1024; gzip_buffers 4 8k; gzip_http_version 1.0; gzip_comp_level 1; gzip_vary on; gzip_types text/plain text/css application/x-javascripts text/xml application/xml application/xml+rss text/javascript; proxy_next_upstream error timeout invalid_header http_500 http_503; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_intercept_errors on; proxy_redirect off; port_in_redirect off; # Load modular configuration files from the /etc/nginx/conf.d directory. # See http://nginx.org/en/docs/ngx_core_module.html#include # dor more information. include conf.d/*.conf; ipip_db /data/app/nginx/modules/17monipdb.datx 60m; ipip_parse_ip $remote_addr; # ipip_parse_ip $http_x_forwarded_for; proxy_set_header ip $http_x_forwarded_for; proxy_set_header country_code $ipip_country_code; proxy_set_header country $ipip_country_name; proxy_set_header province $ipip_region_name; proxy_set_header city $ipip_city_name; proxy_set_header owner $ipip_owner_domain; proxy_set_header isp $ipip_isp_domain; proxy_set_header idc $ipip_idc; proxy_set_header latitude $ipip_latitude; proxy_set_header longitude $ipip_longitude; } "}),e.add({id:35,href:"/wiki/linux/shell/bash-completion/",title:"Bash Completion",section:"Shell",content:` Bash Command for Developer # Bash Completion # Reference
Bash completion is a bash function that allows you to auto complete commands or arguments by typing partially commands or arguments, then pressing the [Tab] key. This will help you when writing the bash command in terminal.
Installation # \$ brew install bash-completion Bash completion will be installed in /usr/local/etc/bash_completion.d. For it to work, add this to your ~/.bash_profile:
\$ echo \u0026#34;[ -f /usr/local/etc/bash_completion ] \u0026amp;\u0026amp; . /usr/local/etc/bash_completion\u0026#34; \u0026gt;\u0026gt; ~/.bash_profile Restart your bash session:
\$ source ~/.bash_profile More # You can list additional completion packages are available by typing:
\$ brew search completion And you can install them using brew install commands, for example:
\$ brew install docker-completion You can also manually add a bash completion file into /usr/local/etc/bash_completion.d
`}),e.add({id:36,href:"/wiki/linux/shell/bash-prog/",title:"Bash Prog",section:"Shell",content:" Bash Programming # 学习地址 # BASH Programming - Introduction HOW-TO\n编程规范 # Google Shell Code Style\n一些 Debug 技巧 # set -x set -e export PS4=\u0026#39;+${BASH_SOURCE}:${LINENO}:${FUNCNAME[0]}: \u0026#39; echo \u0026#34;Today is $(date %Y-%m-%d)\u0026#34; set +x 说明： PS4 The value of this parameter is expanded as with PS1 and the value is printed before each command bash displays during an execution trace. The first character of PS4 is replicated multiple times, as neces-sary, to indicate multiple levels of indirection. The default is ”+ ”.\n::: tip 日志输出\n_log() { if [ \u0026#34;$_DEBUG\u0026#34; == \u0026#34;true\u0026#34; ]; then echo 1\u0026gt;\u0026amp;2 \u0026#34;$@\u0026#34; fi } :::\n"}),e.add({id:37,href:"/wiki/linux/shell/bash/",title:"Bash",section:"Shell",content:" Bash # Profile 执行顺序 # 登录 Linux 时，首先启动 /etc/profile 文件，然后再启动用户目录下的 ~/.bash_profile、 ~/.bash_login或 ~/.profile文件中的其中一个, 一般还会执行 ~/.bashrc文件。\n~/.bash_logout，每次退出系统或退出bash shell时,执行该文件。\n❗️注意: 部分系统只读取~/.bashrc (不读取 ~/.bash_prfoile), 如 BusyBox\nBash 环境变量 # # 公共 $LOGNAME: 登录用户名 $HOME: 当前用户家目录 export PS1=\u0026#34;[\\u@\\H \\W]\\\\$ \u0026#34; export HISTTIMEFORMAT=\u0026#34;%F %T `whoami` \u0026#34; export TMOUT=600 # 600 秒内用户无操作就字段断开终端 常用别名 # alias ipsort=\u0026#34;sort -t\u0026#34;.\u0026#34; -k1,1n -k2,2n -k3,3n -k4,4n\u0026#34; alias ipsortr=\u0026#34;sort -t\u0026#34;.\u0026#34; -k1,1nr -k2,2nr -k3,3nr -k4,4nr\u0026#34; 常用命令 # date +\u0026#34;%s\u0026#34; # uninx timestamp date -d @1548987653 # linux, unix timestamp 转 \u0026#34;Fri Feb 1 10:20:53 CST 2019\u0026#34; sudo date -d 1548987653 # mac, unix timestamp 转 \u0026#34;Fri Feb 1 10:20:53 CST 2019\u0026#34; jq # Command-line JSON processor, Download from https://github.com/stedolan/jq "}),e.add({id:38,href:"/wiki/linux/shell/ssh/",title:"SSH",section:"Shell",content:` SSH # ssh(Secure Shell) 是典型的 C/S 框架，包含服务端(sshd) 和 客户端(ssh)
客户端 ssh # 管理大规模机群的时候会觉得经常输入yes比较麻烦，尤其是主机重装后，还需要清理 known_hosts 文件，可以进行配置一下，这样用起来更顺手。 配置 \$HOME/.ssh/config如下:
StrictHostKeyChecking no UserKnownHostsFile /dev/null ConnectTimeout 3 或
alias ssh=\u0026#34;ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o \\ ConnectTimeout=3\u0026#34; 服务端 sshd # 配置文件 /etc/ssh/sshd_config
Banner /etc/ssh/banner_file # 登录主机时显示的一个 banner，可以是欢迎语 PasswordAuthentication no PermitRootLogin yes # 允许root用户远程登录 生成证书 # ssh-keygen -b 2048 -C \$HOSTNAME
排障 # 如果目标机器无法 ssh，可以使用 -v 参数排查详情。
::: warning 个别主机，可能会设置 /etc/hosts.allow 或 /etc/hosts.deny。 :::
`}),e.add({id:39,href:"/wiki/linux/shell/tools/",title:"Tools",section:"Shell",content:` Command for Developer # 收藏一些很好的开发工具。
brew (MacOS) # 查看可以升级的软件 brew outdated
CI (Continuous Integration) # github cli
terraform
docker # sudo docker exec -it -e COLUMNS=\$(tput cols) -e LINES=\$(tput lines) airdb/go bash tmux: 一个优秀的终端复用软件，类似GNU Screen jq: Command-line JSON processor, https://github.com/stedolan/jq `}),e.add({id:40,href:"/wiki/linux/shell/vim/",title:"Vim",section:"Shell",content:` VIM # vundle 搭建很方便
git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim
修改 .vimrc
打开vim在底行模式下输入 BundleInstall
如果还需要其他插件，可以使用 BundleSearch 进行在线查找插件
配置文件内容 # filetype off syntax on set rtp+=~/.vim/bundle/Vundle.vim call vundle#begin() \u0026#34; 加载插件 Plugin \u0026#39;VundleVim/Vundle.vim\u0026#39; Plugin \u0026#39;scrooloose/nerdtree\u0026#39; Plugin \u0026#39;vim-airline/vim-airline\u0026#39; Plugin \u0026#39;fatih/vim-go\u0026#39; Plugin \u0026#39;vim-airline/vim-airline-themes\u0026#39; Plugin \u0026#39;michaelHL/awesome-vim-colorschemes\u0026#39; Plugin \u0026#39;Tagbar\u0026#39; Plugin \u0026#39;Tabular\u0026#39; call vundle#end() filetype plugin indent on \u0026#34; required \u0026#34; 打开自动定位到最后编辑的位置, 需要确认.viminfo当前用户可写 if has(\u0026#34;autocmd\u0026#34;) au BufReadPost * if line(\u0026#34;\u0026#39;\\\u0026#34;\u0026#34;) \u0026gt; 1 \u0026amp;\u0026amp; line(\u0026#34;\u0026#39;\\\u0026#34;\u0026#34;) \u0026lt;= line(\u0026#34;\$\u0026#34;) | exe \u0026#34;normal! g\u0026#39;\\\u0026#34;\u0026#34; | endif endif \u0026#34; 快捷键 map \u0026lt;C-h\u0026gt; \u0026lt;C-w\u0026gt;\u0026lt;C-h\u0026gt; map \u0026lt;C-j\u0026gt; \u0026lt;C-w\u0026gt;\u0026lt;C-j\u0026gt; map \u0026lt;C-l\u0026gt; \u0026lt;C-w\u0026gt;\u0026lt;C-l\u0026gt; map \u0026lt;C-k\u0026gt; \u0026lt;C-w\u0026gt;\u0026lt;C-k\u0026gt; \u0026#34;\u0026lt;F2\u0026gt;设置是否显示行号 nnoremap \u0026lt;silent\u0026gt; \u0026lt;F2\u0026gt; :set number!\u0026lt;CR\u0026gt; \u0026#34;空格打开关闭折叠 nnoremap \u0026lt;space\u0026gt; @=((foldclosed(line(\u0026#39;.\u0026#39;)) \u0026lt; 0) ? \u0026#39;zc\u0026#39; : \u0026#39;zo\u0026#39;)\u0026lt;CR\u0026gt; 由于已经将 bash profile，vimrc 等存放在 github 私有仓库中，所以上述配置内容较少。
有问题的同学，可以随时联系
`}),e.add({id:41,href:"/wiki/osinit/mac-faq/",title:"MAC Faq",section:"OS Setup",content:` Mac 常见问题处理 # 修改主机名 # sudo scutil \u0026ndash;set HostName 新的主机名
github remote: Permission to .git denied to user. # 解决方案
这个解决方案其实很简单。首先，我用的是mac电脑，mac电脑有个keychain的应用即钥匙串访问，这里存储了github先前访问的密码，所以每次push的时候都会读取这个本地用户名及密码，所以才被github denied。
解决步骤哦依次如下：打开 应用程序 \u0026mdash;-\u0026gt; 钥匙串访问 \u0026mdash;-\u0026gt;双击，即可进入到钥匙串访问记录保存页面，选择github.com名称的应用，右键删除即可。
修改磁盘名 # diskutil info disk1s1
diskutil rename oldname newname
Mac下解决LC_CTYPE警告的最简单方法 # terminal 去掉set locale environment
SSH连接服务器一段时间不操作之后卡死的问题 # 卡死是因为LIUNX安全设置问题，在一段时间内没有使用数据的情况下会自动断开，解决方法就是让本地或者服务器隔一段时间发送一个请求给对方即可
~/.ssh/config 中增加如下配置即可。 #每隔50秒就向服务器发送一个请求 ServerAliveInterval 50 #允许超时的次数，一般都会响应 ServerAliveCountMax 3
`}),e.add({id:42,href:"/wiki/osinit/ubuntu-faq/",title:"Ubuntu Faq",section:"OS Setup",content:" Ubuntu FAQ # 更新证书链问题 # apt list --installed | grep ca-certificates apt-get update DEBIAN_FRONTEND=noninteractive apt-get install -y --reinstall ca-certificates "}),e.add({id:43,href:"/wiki/part1/4-ways-to-learn/",title:"4 Ways to Learn",section:"工作和生活效率",content:` 四种学习方法 (来源：搜狐, 侵删) # 一、费曼学习法： # 费曼学习法的灵感源于诺贝尔物理奖获得者理查德费曼（Richard Feynman），运用费曼技巧,你只需花上20分钟就能深入理解知识点,而且记忆深刻,难以遗忘。知识有两种类型，我们绝大多数人关注的都是错误的那类。第一类知识注重了解某个事物的名称。第二类知识注重了解某件事物。这可不是一回事儿。著名的诺贝尔物理学家理查德·费曼（Richard Feynman）能够理解这二者间的差别，这也是他成功最重要的原因之一。事实上，他创造了一种学习方法，确保他会比别人对事物了解得更透彻。
运用步骤：
1、获取知识（某概念） ，理解你所要学习的材料的内容。
2、讲解/复述 你所获得的主要内容。
3、用你自己的方式以 潜意识的形式 再次 复述 你所学到的知识。
4、这一步是一个 可循环过程 ：不满意——纠错反馈；满意——尝试运用更简单精炼的语言概括。再用你所学到的知识解决实际问题，加以运用。
5、反思 。 反思你在思考的时候在哪里卡了壳，着重这个地方，再次理解。这个过程至关重要！
6、检验。 通过不断的进行实践检验才能巩固你对于该知识点的理解。
二、思维导图学习法： # 思维导图法又称为心智图法（Mind mapping），是一项流行的全脑式学习方法，它能够将各种点子、想法以及它们之间的关联性以图像视觉的景象呈现。它能够将一些核心概念、事物与另一些概念、事物形象地概念组织起来，输入我们脑内的记忆树图。它允许我们对复杂的概念、信息、数据进行组织加工，以更形象、易懂的形式展现在我们面前。
思维导图法总是从一些中心概念、问题入手。 非常典型的是一些与中心概念线形连接关键字、短语或图像。
我们中的大多数人都是视觉导向的，通过运用结构、关键字、颜色、图像、超链接（以及声音），将外部概念引入我们的思维和生活。简而言之，心智图法就是将中心概念与关联概念连接起来的一种方法。 不同于我们在学校里所学到的直线性思考方法，心智图法通过训练运用全脑思考，来刺激我们的想象力和创造力。因此，它被认为是全面调动分析能力和创造能力的一种思考方法。
思维导图的要点：
1、将主要概念、想法放置于图的中心位置。 最好用图片来表示它。
2、尽量使用大空间，以便稍后你有足够的空间添加其他内容。
3、如果有帮助的话，可以使用不同的颜色和大写字母。 个性化你的心智图。
4、在心智图上寻找、发现关系。
5、为次级主体建立次级中心。
三、西蒙学习法 # 是指诺贝尔经济学奖获得者西蒙教授提出的一个理论：“对于一个有一定基础的人来说，只要真正肯下功夫，在6个月内就可以掌握任何一门学问。”
西蒙教授立论所依据的实验心理的研究成果表明：一个人1分钟到1分半钟可以记忆一个信息，心理学把这样一个信息称为“块”，估记每一门学问所包含的信息量大约是5万块，如果1分钟能记忆1“块”，那么5万块大约需要1000个小时，以每星期学习40小时计算，要掌握一门学问大约需要用6个月。
为了形象地说明，把西蒙学习法比做一把锥子。正如居里夫人所说，“知识的专一性像锥尖，精力的集中好比是锥子的作用力，时间的连续性好比是不停顿地使锥子往前钻进。” 西蒙学习法所支配的学习活动，呈现出一种尖锐猛烈、持续不断的态势。
为了感谢西蒙的这个研究成果，教育心理学界称这种学习法为西蒙学习法，又名 “锥形学习法”。
这种“锥形学习法”的高效原理在于，连续的长时间学习本身包涵对之前学习内容的应用，这样就省去了大量的复习时间。如果用烧水来做比喻，“锥形学习法”是连续的加热，所以热量散失的少；普通的间断学习是烧一会儿就停止加热，一段时间以后再继续加热，这样许多热量就白白散失了。两相比较，自然是持续“加热”效果显著了。
原理：烧一壶开水，如果断断续续地烧，1万个小时也烧不开，如果连续烧，1个小时就够用了。
四、SQ3R学习法 # 这种学习方法是由罗宾逊提出来的并盛行于美国大专院校。据了解，这种方法颇受中国大学生的喜爱，他们觉得这种方法人人都可以试用，都会取得一定的效果。
SQ3R代表：
纵览（Survey）
提问（Question）
阅读（Read）
背诵（Recite）
复习 (Revise）
1、纵览编辑
纵览就是对全书进行快速的浏览，弄清这本书的基本内容，对作者的基本观点有一个初步印象.一般来说，先阅读作者的序言（前言）或后记，了解作者写这本书的意图和目的，继而仔细查阅其目录和索引，如有可能，略读各章的提要或小结，确定全书阅读，或取其某些章节精读。纵览往往可以了解到最新信息，启发自己的思路。
2、提问编辑
大学生在学习过程中，不仅要学会解决问题，而更重要的是学会提出问题。在读书时，要透过书中表面字句去捕捉问题，敢于在无疑处生疑，提出自己的设想。同时，要认真琢磨其中的某些观点，并把它和自己所掌握的有关观点相对比、相联系，进行评论，提出问题。有了问题，就会进一步去探索，从而可能提炼出新观点。
3、阅读编辑
阅读的目的是为了正确理解和深入掌握文章的精髓，对重点章节学深吃透，做到融会贯通，使其成为自己知识结构的牢固基础。读书的最佳境界是“读懂书上没有的东西”。就是要懂得从明看出暗，从静看出动，从是看出非。读书要能看出书本含蓄之处，也就是书本的言外意、弦外音，这要靠读者自己去思考、捕捉和体会。书的东西，是死的,静止化了，而科学知识却日新月异，要能从过去的书本中看到现在，从现在的书本中想到将来，这样就能\u0026quot;激活\u0026quot;死的知识。书本知识是一定时代人们认识水平的记录，因而带有时代的烙印。瑕瑜相杂、正误互见。看出或指出书本中的谬误、漏洞，并非专家、权威莫属，每一位深思的读者都能发现。因此，要养成思考的习惯，边读边想，必有所得。
4、背诵编辑
不是指逐句的复诵或默记，而是指在理解的基础上，集中精力把有关章节的中心思想和基本观点牢记在脑中，当然，不排除把某些重要的基本概念背诵出来。
5、复习编辑
需要长时间保留在记忆中的材料必须反复复习。注意每次复习，在内容上要有所开拓，有所发展。
SQ3R学习法原则上适用于所有的学科领域。
`}),e.add({id:44,href:"/wiki/part1/efficient-communication/",title:"Efficient Communication",section:"工作和生活效率",content:` 高效沟通 # Efficient communication
老板要善于提问 # 1. 引导 # 用提问的方式，\u0026quot;倒逼\u0026quot; 员工找到答案，从而提高员工的对与感与成就感。 永远不要给员工答案，要让员工给你答案，而且不要只给一个答案，一定要给多个答案。 2. 倾听 # 心态平和，毫无偏见，全面接收和理解对方的信息，而且不是只听自己想听的信息。 3. 共情 # 换位思考, 站在对方的立场设身处地思考和处理问题，晓之以理，动之以情。 (避免指责对方) 4. 高维 # 提升自己的格局观，能从全局利益、长远利益思考问题，解决问题。( 不纠结某一个细节) 5. 反馈 # 建立反馈机制，及时发现问题、解决问题、形成正向循环。 1-2-3 反馈机制（指定时间内处理不了问题，及时向上反馈） 好好说话的艺术 # 跟员工沟通 # 一对一会议 # 工作状态 个人发展 公司组织 员工对自己的看法 每半月一次 时间（30-60分钟） 绩效沟通 # 沟通一定要放在平时， 不要搞成像秋后算账一样！ 因为你是管理者， 不是地方监工 但要注意的是，反馈的过程中， 不是我在指责员工，而是我的帮助员工，一定要有帮扶的态度，这样员工会更容易接受。
特立独行的员工 # 当在一个人身上花的精力和时间成本，大于你到外面找一个更好的人或者能力相当的人来替代他的时候，你就要坚决地把他替换掉。
挽留离职员工 # 实在挽留不成的时候，也要注意经营好这份情意。 劝退员工 # 任何人都应该有可以纠正错误的机会，公司应该给员工这样的机会，员工也应该给公司同样的机会。 跟客户沟通 # 吸引客户的兴趣、帮客户发现问题和管理客户的期望。 跟老板沟通 # 了解你的的老板，赢得老板的信任，管理老板的期望，非暴力\u0026quot;怼\u0026quot; 老板。 `}),e.add({id:45,href:"/wiki/part1/m1-ability/",title:"M1 Ability",section:"工作和生活效率",content:` 快速提升一线管理者的战斗力 # 1. 认知升级 # 如何学习优秀管理者的底层思维模型？ 何为优秀的管理者？ 何为优秀的 Leader? 如何做到阴阳同体，Leader 的二维修炼？ 领导力如何快速修炼？
目标：认知升级, 构建优秀管理者的思维模型
2. 建团队 # 优秀员工的画像是什么样的？ 如何制作出优秀员工的画像？ 如何利用优秀员工画像选对人、培养人、淘汰人？ 如何提升团队的凝聚力？
目标：掌握建团队的关键能力
3. 定目标 # 如何正确理解团队目标？ 如何正确分解目标？ 如何统一团队目标和员工个人目标？ 如何运用PDCA达成团队目标？
目标：掌握定目标的关键能力
4. 追过程 # 追过程中常用的有效沟通如何做？ 如何和不同沟通风格的人沟通？ 目标达成不理想，如何有效沟通？ 追过程中常用的有效辅导如何做？ 不同类型员工的有效辅导方法？
目标：掌握追过程的关键能力
5. 拿结果 # 好过程和好结果的哪个更重要？ 如何通过Review帮助员工和团队获得成长？ 如何通过Review形成可持续拿结果的方法？
目标：总结出可持续拿结果的方法
`}),e.add({id:46,href:"/wiki/part1/README/",title:"Readme",section:"工作和生活效率",content:` 公共部分 # 公共部分内容
`}),e.add({id:47,href:"/wiki/part2/cicd/",title:"Cicd",section:"Part2",content:` Code Wiki # Code Part # dev
`}),e.add({id:48,href:"/wiki/part2/gateway/",title:"Gateway",section:"Part2",content:` Gateway # 《深入理解BFE》
智能网关趋势 # HTTPS
Quic
GTC (Global Traffic Control 全局流量控制） # 工作原理 分布式监控 调度计算 下发执行
场景 网络出口故障 网络出口拥塞，被攻击 网络接入系统故障 区域性联通故障
GSLB (Global Server Load Balancing 全局服务器负载平衡) # 目的 降低对DNS 调度的依赖 加快止损速度
场景 内部服务故障 服务发布 内部服务压力不均 业务突增
`}),e.add({id:49,href:"/wiki/part2/kube/",title:"Kube",section:"Part2",content:` Code Wiki # Code Part # dev
`}),e.add({id:50,href:"/wiki/part2/linux/",title:"Linux",section:"Part2",content:` Linux Wiki # Basic # Linux
`}),e.add({id:51,href:"/wiki/part2/ops/",title:"Ops",section:"Part2",content:` 运维 # 接入 # 四层接入
七层接入
CDN
IP 库
Nginx
服务集群 # 发布
容器
调度
容灾
数据一致性
容灾
多活
预案演练
CI/CD # 持续集成
持续部署
数据库 # 同步
数据恢复
缓存 # 中间件 # Kafka
消息中间件 MQ
数据安全及运维安全 # WAF
大数据及分布式计算 # Hadoop
Ceph
Hive
人工智能 # 语音识别 ASR
人脸识别
自然语言处理 NLP
`}),e.add({id:52,href:"/wiki/part2/osinit/",title:"Osinit",section:"Part2",content:` OS Init # 主机容器初始化 # [osinit]https://init.airdb.host/
osinit Repo
软件包管理 # Ubunut PPA ( https://launchpad.net/~airdb)
sudo apt-add-repository ppa:airdb/adb
`}),e.add({id:53,href:"/wiki/part2/README/",title:"Readme",section:"Part2",content:` Application 性能优化 # Linux 底层优化 # CPU￼ # 进程和 CPU 原理
进程、线程与协程 CPU 调度 中断系统 CPU 缓存 NUMA 性能指标
平均复杂 CPU 使用率：用户 CPU, 系统CPU，iowait, 软中断，硬中断，窃取 CPU，客户 CPU. 上下文切换：自愿切换，非自愿切换 CPU 缓存命中率 性能剖析
top/htop/ps vmstat mpstat pidstat strace perf execsnoop proc 文件系统 调优方法
CPU 绑定 affinity 进程 CPU 资源限制 进程优先级调整 中断负载均衡 CPU 缓存 NUMA 优化 内存 # 内存原理
地址空间 虚拟内存 内存分配与回收 缓存与缓冲区 swap 性能指标
系统内存使用 进程内存使用 缓存与缓冲区命中率 性能剖析
free top sar vmstat cachestat cachetop memleak proc 文件系统 调优方法
利用缓存与缓冲区 减少 SWAP 使用 减少动态内存分配 优化 NUMA 限制进程内存资源 HugePage 网络 # 网络原理
网络配置 TCP/IP 协议 网络收据收发 高级路由 网络 QOS 网络防火墙 性能指标
吞吐量：BPS, QPS, PPS 延迟 丢包 TCP 重传 性能剖析
ethtool sar ping netstat/ss ifstat ifconfig tcpdump iptables traceroute ipcontrack perf 调优方法
网卡调优：MTU， 队列长度，链路聚合 协议调优：HTTP, TCP, overlay 资源控制：QoS 内核调优：NAT 优化，功能卸载，负载均衡，DPDK 磁盘IO￼ # 磁盘原理
磁盘管理 磁盘内型，RAID 选型 磁盘接口 磁盘 I/O 栈 性能指标
使用率 IOPS 吞吐量 IO Wait 性能剖析
dstat sar iostat pidstat iotop iolatency blktrace fio perf 调优方法
系统调用 I/O 资源控制, 写对齐 充分利用缓存 RAID I/O 隔离 文件系统 # 文件原理：
虚拟文件系统 文件系统 IO 栈 文件系统缓 文件系统种类 性能指标：
容量 IOPS 缓存命中率 性能剖析
df strace vmstat sar perf proc 文件系统 调优方法
文件系统内型 利用文件系统缓存 I/O 隔离 Linux 内核优化 # 内核原理
内核态 模型 性能指标
性能剖析
BPF perf proc 文件系统 调优方法
内核参数 应用层优化 # 应用程序 # 性能指标
吞吐量 响应时间 资源使用率 性能剖析
USE 方法：使用率，饱和度，初五 进程剖析：进程状态，资源使用率，I/O 剖析， 系统调用，热点函数，动态追踪 APM 调优方法
逻辑优化 编程语言 算法调优 非阻塞 I/O 利用缓存与缓冲区 异步处理与并发 垃圾回收 架构设计 # 空间换时间
缓存 缓冲区 冗余数据 时间换空间：
压缩编码 页面交换 并行处理
多线程 多进程 协程 分布式 异步处理
异步 I/O 消息队列 事件通知 ￼
性能监控 # 时间序列分析
历史趋势分析 性能模型构建 未来趋势预测 服务调用追踪
服务调用流程跟踪 服务调用性能分析 服务调用链拓扑展示 数据可视化
趋势图 散点图 热图 饼图 告警通知
阈值选择 动态阈值 报警策略 通知渠道 性能测试 # 明确需求
系统资源需求 应用程序需求 环境假设
合理的假设 生产环境模拟 生产负载模拟 性能测试
基准测试 负载测试 压力测试 结果分析
应用程序瓶颈 数据库瓶颈 系统资源瓶颈 `}),e.add({id:54,href:"/wiki/part2/snapcraft/",title:"Snapcraft",section:"Part2",content:" Ubuntu Snapcraft # snapcraft push --release edge *.snap Pushing airdb_1.0_amd64.snap After pushing, an attempt will be made to release to \u0026#39;edge\u0026#39; Preparing to push \u0026#39;/home/ubuntu/airdb/airdb_1.0_amd64.snap\u0026#39; to the store. Pushing airdb_1.0_amd64.snap [===================================================================================================================] 100% Processing...| Ready to release! Revision 1 of \u0026#39;airdb\u0026#39; created. Track Arch Channel Version Revision latest amd64 stable - - candidate - - beta - - edge 1.0 1 The \u0026#39;edge\u0026#39; channel is now open. snap/snapcraft.yaml name: airdb version: \u0026#39;1.0\u0026#39; summary: An interactive web server. description: | HTTPLab let you inspect HTTP requests and forge responses. confinement: devmode #base: core18 parts: airdb-adb: plugin: nil source: http://ftp.gnu.org/gnu/hello/hello-2.10.tar.gz plugin: autotools apps: airdb: command: bin/hello Commands # snapcraft register xxx-project snapcraft clean airdb-adb -s pull snapcraft push stable stable *.snap snapcraft push --release edge *.snap "}),e.add({id:55,href:"/wiki/part2/sre/",title:"Sre",section:"Part2",content:` SRE 介绍 # Site Reliability Engineering
一、SRE起源和发展 # IT领域一直有很多趋势和流行关键词，比如微服务和DevOps，现在国内又兴起了SRE，它在传统运维之外又纳入更多的开发和流程部分。SRE是Site Reliability Engineer的简称，由谷歌公司首先提出，一开始是公司内部定义的一个工种。谷歌的SRE工程师对Borg分布式集群管理系统以及在此之上运行的Gmail、Google Docs、Web Search等以及各种APP应用进行运维。
这个岗位的工程师具有开发能力，又了解一些系统管理的知识，他们把一些最佳实践、方式、流程、方法都固化成代码，用这种方式去应对规模性的扩张，去应对复杂度的上升。从名字其实就可以看出SRE不只是做Operation方面的工作，更多是保障整个服务的稳定性。
SRE不仅仅是对分布式系统运维工程师的职业要求，还涉及运维的自动化、开发运维一体化、持续集成持续开发等理念、监控系统、部署、容量规划、可靠性技术和实践和运维团队建设等方面的内容。可为云服务提供商提高分布式系统的资源利用率，降低运营和运维成本，让系统可靠和稳定地运行，提升用户体验。
随着互联网的快速发展，分布式系统规模急剧扩展，新型系统的运维要求对传统运维理念提出了新的挑战。随着谷歌对大规模分布式集群和互联网应用运维经验的积累，SRE的实践理念得到国外各大互联网公司的采纳和应用。Site Reliability Engineer逐渐朝着Site Reliability Engineering的理论化方向发展。
由于互联网行业的特性和对速度的追求，一般这些新理念和新技术的发端和普及都是从互联网企业开始，国内也不例外。虽然很多国内互联网企业并没有明确提及SRE这个岗位名称，但是据我所知他们也是在向着SRE理念提及的很多方向在前进，比如自动化、工具化、平台化等等。不管国内称之为PE、运维工程师还是其他什么，其实做的事情也就是SRE在倡导的DevOps的运维实践
二、定位、方向与职责 # 总结一下，SRE
从岗位的角度上看：运维工程师升级版 从运维的方式上看：自动化、智能化、工具化、平台化 从工作的结果上看：保证系统稳定的前提下提高系统效率，平衡系统稳定性和用户体验的关系
三、实践 # 从SRE成功实践的几大要素看：
1、具有研发能力 2、一定要设定服务的SLA 3、有余量的预估 4、 SRE与研发有共享的资源工具 5、 SRE承担不超过50%的运维工作量 6、 每个事故都要做事后分析，并要聚焦于流程和技术。 LINUX云计算SRE工程师课程体系 # 入门 # 模块1、 Linux新手快速基础入门 模块2、 面试必备-企业级Shell脚本编程实战 模块3、 Linux系统结构、内核、进程管理高级进阶 模块4、网络管理及互联网通信机制实战 模块5、互联网常见服务应用实战 模块6、网络安全、加密协议及安全通信服务实战 模块7、安全加固-Linux内核级防火墙lptables 模块8、企业级Web服务与LA/NMP架构 模块9、 实战百万并发架构核心-Nginx服务及高级进阶实战 模块10、中间件Tomcat服务集群部署与JVM优化实战 模块11、亿级PV站点架构LVS负载均衡群解决方案 模块12、DBA必备-Mysql数据库入门到集群架构实战全解 模块13、Ansible快速安装部署与运维自动化实战 模块14、网络安全VPN及JumpServer堡垒跳板机实战 模块15、监控神器-Zabbix运维监控实战部署
进阶 # 模块16、4-7层负载均衡Haproxy生产环境应用实战 模块17、Keepalived高可用集群实战进阶 模块18、Nosql存储Redis、Mongodb入门到精通 模块19、指标采集、监控系统Prometheus实战 模块20、注册中心Zookeeper集群与部署 模块21、消息队列kafka生产环境应用方案 模块22、ELK企业级海量日志系统实战进阶 模块24、Docker容器虚拟化实战进阶 模块23、Gitlab及Jenkins实现C/CD可持续化集成实战 模块25、主机虚拟化技术与KVM应用实战 模块26、阿里云计算平台应用实战 模块27、微服务dubbo分布式框架应用 模块28、系统稳定性建设(SRE) 模块29、Kubernetes专家级生产环境实战应用 模块30、自动化与DevOps实践
`}),e.add({id:56,href:"/wiki/part4/defensive-programming/",title:"Defensive Programming",section:"Part4",content:` Defensive Programming # Reference # http://teaching.csse.uwa.edu.au/units/CITS1001/handouts/L14-defensive-programming.pdf
Rules on how to employ Defensive Programming in your codebase: # Protect your code from invalid data coming from outside, wherever you decide outside is. External systems, files, or any call from outside of the module/component. Establish “trust boundaries” — everything outside of the boundary is dangerous, everything inside of the boundary is safe. In the barricade code, validate all input data.
After you have checked for bad data, decide how to handle it. Defensive Programming is NOT about swallowing errors or hiding bugs. Choose a strategy to deal with bad data: return an error and stop right away (fast fail), return a neutral value, substitute data values… Make sure that the strategy is clear and consistent.
Don’t assume that a function call or method call outside of your code will work as advertised. Make sure that you understand and test error handling around external APIs and libraries.
Use assertions to document assumptions and to highlight “impossible” conditions. This is especially important in large systems that have been maintained by different people over time, or in high-reliability code.
Add diagnostic code, logging and tracing intelligently to help explain what’s going on at run-time, especially if you run into a problem.
Standardize error handling. Decide how to handle “normal errors” or “expected errors” and warnings, and do all of this consistently.
`}),e.add({id:57,href:"/wiki/part4/exec_base64/",title:"Exec Base64",section:"Part4",content:`Base64 入侵
PyPI 官方仓库遭遇request恶意包投毒
[dean.airdb.local test]\$ echo -e \u0026ldquo;import os; os.system(\u0026quot;ls\u0026quot;)\u0026rdquo; | base64 aW1wb3J0IG9zOyBvcy5zeXN0ZW0oImxzIikK
[dean.airdb.local test]\$ python -c \u0026ldquo;import base64; exec(base64.b64decode(\u0026lsquo;aW1wb3J0IG9zOyBvcy5zeXN0ZW0oImxzIikK\u0026rsquo;))\u0026rdquo; test test.log
[dean.airdb.local test]\$ echo -e aW1wb3J0IG9zOyBvcy5zeXN0ZW0oImxzIikK | base64 -d import os; os.system(\u0026ldquo;ls\u0026rdquo;)
`}),e.add({id:58,href:"/wiki/saas/",title:"Saas",section:"Wikis",content:` Reference # erad
erda doc
Wakatime
`}),e.add({id:59,href:"/wiki/dev/vuejs/vue-chrome-extension/",title:"Chrome 插件制作",section:"Development Handbook",content:` # 创建项目 # vue create --preset kocal/vue-web-extension my-extension cd my-extension npm run serve 载入 # chrome 浏览器输入 chrome://extensions, 加载插件选择 my-extension/dist 目录。 加载成功即可生效。
参考 # https://developer.chrome.com/docs/extensions/reference/commands/
`}),e.add({id:60,href:"/wiki/training/implement-a-plugin-for-coredns/",title:"CoreDNS 插件开发",section:"训练板块",content:" CoreDNS 插件开发 # "}),e.add({id:61,href:"/wiki/arch/ddd/",title:"DDD - 领域驱动开发",section:"系统架构",content:` Domain-Drive Desgin # 实体 # 当一个对象由其标识（而不是属性）区分时，这种对象称为实体（Entity）。 例：最简单的，公安系统的身份信息录入，对于人的模拟，即认为是实体，因为每个人是独一无二的，且其具有唯一标识（如公安系统分发的身份证号码）。 在实践上建议将属性的验证放到实体中。
值对象 # 当一个对象用于对事务进行描述而没有唯一标识时，它被称作值对象（Value Object）。 例：比如颜色信息，我们只需要知道{“name”:“黑色”，”css”:“#000000”}这样的值信息就能够满足要求了，这避免了我们对标识追踪带来的系统复杂性。 值对象很重要，在习惯了使用数据库的数据建模后，很容易将所有对象看作实体。使用值对象，可以更好地做系统优化、精简设计。 它具有不变性、相等性和可替换性。
在实践中，需要保证值对象创建后就不能被修改，即不允许外部再修改其属性。在不同上下文集成时，会出现模型概念的公用，如商品模型会存在于电商的各个上下文中。在订单上下文中如果你只关注下单时商品信息快照，那么将商品对象视为值对象是很好的选择。
聚合根 # Aggregate(聚合）是一组相关对象的集合，作为一个整体被外界访问，聚合根（Aggregate Root）是这个聚合的根节点。 聚合是一个非常重要的概念，核心领域往往都需要用聚合来表达。其次，聚合在技术上有非常高的价值，可以指导详细设计。
聚合由根实体，值对象和实体组成。
领域服务 # 一些重要的领域行为或操作，可以归类为领域服务。它既不是实体，也不是值对象的范畴。 当我们采用了微服务架构风格，一切领域逻辑的对外暴露均需要通过领域服务来进行。如原本由聚合根暴露的业务逻辑也需要依托于领域服务。
领域事件 # 领域事件是对领域内发生的活动进行的建模。
Reference:
The Clean Architecture 美团-领域驱动设计在互联网业务开发中的实践 浅析DDD(领域驱动设计) DDD 领域驱动设计 - 架构（分层/六边形/RESTful） 领域驱动设计（DDD）：分层架构的三种模式 Golang领域模型-六边形架构
`}),e.add({id:62,href:"/wiki/dev/standard/sec/",title:"DevSecOps",section:"Development Handbook",content:` 面向开发人员梳理的代码安全指南 # Tencent: https://github.com/tencent/secguide
原文: https://mp.weixin.qq.com/s/yzg5uVnoJDTyaH2Wn8Vo7w
设计理念 # 代码安全指南的内容呈树状结构展开，共分5层，如下：
`}),e.add({id:63,href:"/wiki/part1/okr/",title:"OKR",section:"工作和生活效率",content:`通过对 OKR 的学习和理解，应用到工作和生活，以此提升自我能力，提升家庭幸福感。
家庭 OKR # 2021 年度家庭 OKR 拆解 # Objective 目标 Key Results 关键结果 备注 O1 提升财务表现 KR1: 通过职业收入和投资收入, 实现家庭年收入超过 XXX, 累计存款超过，净资产超过 XXX 剔除车辆资产 KR2: 通过家庭理财和投资，实现非职业收入超过 XXX, 占比至 XX% L3 Name C L3 Name D KR3: 通过理财投资方式，帮孩子实现年度收支盈余, 以及出生到现在的累计收支打平 L3 如有 L3 Name D O2 促进家庭假设 KR1: 完成车辆购置, 双周至少1次周边游, 调节家庭成员心情和促进孩子成长 L3 Name A L3 Name B KR2: 每月至少1次与家人的深度交流和问题解决, 来消除家庭潜在矛盾 L3 Name C L3 Name D KR3: 每月至少抽出4小时时间来参与孩子的启蒙教育，至少陪同上20次早教 L3 Name C L3 Name D O3 个人能力提升 KR1: 提升专业知识储备(团队管理、项止管理和经济学理论), 且累计完成100+ 篇深度思考文章沉淀 L3 Name A L3 Name B KR2: 提升方法论快速复制能力， 在所负责的工作方向上实现业务突破，并拿到1-2 个成功案例 L3 Name C L3 Name D KR3: 经营家庭相关方法论输出，帮助身边朋友成长，同时提升个人影响力 L3 Name C L3 Name D O4 健康升级保障 KR1: 通过规律作息和加强运动，确保身体各项指标稳定在正常值，不过分追求体重单一指标 L3 Name A L3 Name B KR2: 升级保险保障计划，从单纯抗风险升级到关注就医品质和体验 L3 Name C L3 Name D KR3: 建立医疗相关知识库，除熟记就医常识外，梳理国内主流医院、擅长领域及专家，并建立联系渠道或方式 L3 Name C L3 Name D 个人成长方法论 # tips: 对于不同个体，实践时需要考虑不同的处境，问题的优先级，定制自己的具体实践。 别人的问题，可能也是你的问题，但不一定是你的主要问题。
`}),e.add({id:64,href:"/wiki/iot/raspberry/",title:"Raspberry 树莓派",section:"Wikis",content:` 树莓派系统烧录 # https://stepneverstop.github.io/burn-system2raspberry-in-macos.html
系统配置 # 重新插拔usb
cd /Volumes/boot # 进入根系统 配置网络 # wpa_supplicant.conf
\`\` country=CN ctrl_interface=DIR=/var/run/wpa_supplicant Group=netdev update_config=1
network={ ssid=\u0026ldquo;Wifi1的名字\u0026rdquo; psk=\u0026ldquo;密码\u0026rdquo; priority=优先级，越大越优先 }
network={ ssid=\u0026ldquo;Wifi2的名字\u0026rdquo; psk=\u0026ldquo;密码\u0026rdquo; priority=优先级 }
### 开启 sshd 服务 touch ssh
### 显示器无输出 解决树莓派4B外接显示屏没反应, 追加如下内容到 config.txt 目录 hdmi_force_hotplug=1 config_hdmi_boost=4 hdmi_group=2 hdmi_mode=9 hdmi_drive=2 hdmi_ignore_edid=0xa5000080 disable_overscan=1
### homebrige https://github.com/oznu/docker-homebridge/wiki/Homebridge-on-Raspberry-Pi ## Bluetooth 树莓派（Raspberry Pi 4）开启和连接蓝牙 https://blog.csdn.net/Cool2050/article/details/105615831 `}),e.add({id:65,href:"/wiki/dev/pm/",title:"产品学习",section:"Development Handbook",content:" 产品学习 # 订单系统：从0到1设计思路 "}),e.add({id:66,href:"/wiki/arch/hexagonal/",title:"六边形实践",section:"系统架构",content:` Golang领域模型-六边形架构
前言： 六边形架构又称“端口适配器架构”，实际上也是一种分层架构，只不过由上下或者左右变成了内部与外部。其核心理念就是应用通过端口与外部进行交互的。核心的业务逻辑（领域模型）与外部资源（数据库等资源）完全隔离，仅通过适配器进行交互，解决了业务逻辑与用户数据交错的问题，很好的实现了前后端分离。
分层架构问题： # 某些逻辑处理或某些数据处理该放在哪一层？ 该分多少层？ 平层和跨层调用是否合理? 项目目录 # domain - 领域模型 aggregate - 聚合 entity - 实体 dto - 传输对象 po - 持久化对象 *.go - 领域服务
adapter - 端口适配器 controller - 输入适配器 repository - 输出适配器
server - 服务端程序入口 conf - 配置文件 main.go - 主函数 infra - 基础设施 *go - 基础设施组件 domain 领域模型目录
对应六边形的内部，主要放领域服务service的代码。子目录分为aggregate聚合根目录、entity实体目录。 adapter 适配器目录
对应六边形的外部，主要是输入和输出的适配器。controller子目录负责 http的api输入，repository子目录负责实体的读写。dto子目录是controller或repository的外部输入输出对象。po子目录是数据库的持久化对象，这些对象是生成的。
The Clean Architecture Struct # internal/ ├── app │ ├── adapter │ │ ├── mysql │ │ │ ├── model │ │ │ │ └── user.go │ │ │ └── conn.go │ │ ├── repository │ │ │ └── user.go │ │ ├── view │ │ │ └── index.tmpl │ │ └── controller.go │ ├── application │ │ ├── service │ │ │ └── exchange.go │ │ └── usecase │ │ ├── user.go │ │ └── user_test.go │ └── domain │ ├── factory │ │ └── user.go │ ├── repository │ │ └── user.go │ ├── service │ │ └── user.go │ ├── valueobject │ │ └── user.go │ └── user.go └── version └── build.go 六边形项目目录结构 # adapter 适配器目录 # controller - 输入适配器 repository - 输出适配器 domain - 领域模型 # aggregate - 聚合 entity - 实体 dto - 传输对象 po - 持久化对象 *.go - 领域服务 `}),e.add({id:67,href:"/wiki/emotion/l1/",title:"内卷问题",section:"情感训练",content:` 分类 # 工作内卷 婚姻内卷 人物分析 # p1 - 王开心
优点： 沟通能力 1. 讲故事引入 2. 完整的表达心路历程，经理 3. 聆听 4. 愿意改变，努力方向
在学习了解 \u0026ldquo;从虚无到虚无\u0026rdquo; 我的理解： 对生命，对哲学佛学，奉献的思考，必然是生命的终点， 但是什么时候适合自己， 而不是一开始就适合。 我的建议： 要有自己的方向和目标，而不是别人的。
内卷建议： 1. 弹簧，度 自趋力 2. 材质，出生不同， 处境 3. 使劲， 柯达死于数码相机死于智能手机，具备降维打击的能力 4. 长期主义者， 适当躺平，放弃
老师建议： 1. 以终为始 2. 没有别人，只有自己。 对方优点， 自发的改变 3. 主动解决问题的人，才是有能力的人
男人和女人的两个特点(年龄不相关) # 男人： 帝王性, 小孩性 女人： 母爱性, 公主性 如何营造家庭氛围？ 1. 仪式感， 纪念日 早拥吻， 晚卧谈， 心灵沟通 2. 肯定对方的价值，表达温暖 3. 想要得到是什么
汇总 # 家庭关系tips: 爱妻如存银行，爱越存越富裕！
总结：
1. 接纳自己，适当认怂 2. 必要和别人比，复盘 3. 身心愉悦 4. 以终为始 5. 放掉输赢思维 6. 关注自己能改变的， 向内提升，影响别人，不要试图改变 7. 内卷如弹簧 8. 提高自己的人生维度， 降维打击 9. 材质不同，发挥优势，弥补短板 10. 长期主义者，个人建议多做做公益 11. 外面没有别人，只有自己，先成人，再成事 `}),e.add({id:68,href:"/wiki/part4/ids/indentify-proxy/",title:"如何识别代理",section:"用户行为安全",content:` 代理ip常见的一些功能 # 1.突破自身ip访问限制，现在有许多的网站都对ip地址访问进行了限制，这时则可以通过代理ip来突破限制，让自己进入网站。
2.提高访问速度，通常代理ip服务器都设置一个较大的硬盘缓冲区，当有外信息市，则直接由缓冲区中取出信息，传给用户，以提高访问速度。
3.隐藏真实ip达到匿名效果，可以通过代理ip上网，隐藏真实的ip地址，避免受到黑客攻击。
4.突破ip封锁，例如要抓取一个网站的数据，但是网站对每个ip所能抓取的数据做了限制，这时我们使用代理ip，不停地切换ip，就可以突破限制，从而提高工作效率。
代理的级别 # 根据代理匿名程度的不同，可以划分为透明代理、普通匿名代理、欺骗匿名代理和高匿代理。 如何识别代理 # 一、反向探测技术 扫描IP是不是开通了80，8080, 443等代理服务器经常开通的端口，显然一个普通的用户IP不太可能开通如上的端口。
二、HTTP头部的X_Forwarded_For
开通了HTTP代理的IP可以通过此法来识别是不是代理IP；如果带有XFF信息，该IP是代理IP无疑。
三、Keep-alive报文 如果带有Proxy-Connection的Keep-alive报文，该IP毫无疑问是代理IP。
四、查看IP上端口 如果一个IP有的端口大于10000，那么该IP大多也存在问题，普通的家庭IP开这么大的端口几乎是不可能的。
这四种代理IP检测的方法几乎都是公开的，一些大公司为了避免恶意IP还会采取其他方法。比如利用网络爬虫爬取代理IP并作以标记，更有甚者，会通过业务建模收集恶意IP，然后再通过协议扫描的方式来判断这些IP是不是代理IP。
如何确定使用的代理是否为高匿名代理 # 验证接口：http://httpbin.org/get
验证方法：设置好代理，请求此接口（只需要带一个UA即可），解析响应的json文件，获取匿名程度。
a.如果origin中包含自己真实的IP，则为透明代理；
b.如果响应中包含Proxy-Connection参数，则为匿名代理；
c.其他情况则为高匿代理；
怎样快速判断代理ip是否可用 # telnet
Reference # https://www.wanbianip.com/News-newsInfo-id-213.html https://www.dailiproxy.com/how-to-detect-if-an-ip-address-is-a-proxy/
`}),e.add({id:69,href:"/wiki/training/2-disaster-recovery/",title:"容灾方案",section:"训练板块",content:" DNS 容灾 # GEO Location Weight Network provider 机房、AZ 容灾 4层 网络容灾 - NLB # anycast DPVS and other LB 机房容灾 7层 应用容灾 # 前端 - CDN 容灾 前端 - 全局配置，服务降级策略，防止前端，app 重试导致雪崩。 前端 - Regional 配置, 服务降级策略 APP 移动端 后端 - 限速限流 后端 - 网络调度 接入调度, DoH, DNS over TLS, etc\u0026hellip; 消息队列 - 熔断, 限流 推广、营销策略 "}),e.add({id:70,href:"/wiki/part1/okr/method/",title:"工作方法或原则",section:"OKR",content:` SMART 原则 # 指标必须是具体的（Specific） 指标必须是可以衡量的（Measurable） 指标必须是可以达到的（Attainable） 指标是要与其他目标具有一定的相关性(Relevant) 指标必须具有明确的截止期限（Time-bound） 字母 典型对应 更多对应 S Specific（明确） Significant（重要）, Stretching（延伸）, Simple（简易） M Measurable（可衡量） Meaningful（有意义）, Motivational（激励）, Manageable（可管理） A Achievable（可达成） Appropriate（适宜）, Attainable（可达成）, Agreed（同意）, Assignable（可分配）,Actionable（可行动）,Action-oriented（行动导向）, Ambitious（雄心） R Relevant（相关） Realistic（实际）, Results/Results-focused/Results-oriented, Resourced（资源）, Rewarding（奖励） T Time-bound （时限） Time-oriented（时间定向）, Time framed（时限）, Timed（时限）,
Time-based（基于时间）, Timeboxed（时限）, Timely（及时）, Time-Specific（明确时间）, Timetabled（表定时间）, Time limited（时限）, Trackable（可跟踪）, Tangible（明白） SWOT 分析法 # `}),e.add({id:71,href:"/wiki/emotion/",title:"情感训练",section:"Wikis",content:` 为什么我要进行情感训练 # 追求更好的美好生活
我的问题 # 沟通能力 共情能力 我的目标 # 解决个人在家庭及婚姻中的潜在问题，追求更高质量的情感生活。
我当前的情况和理解 # 人生拆解为3个阶段, 每个阶段的主题 # 1. 成长与成家 # 远行，看不同的风景，了解不同的风土人情 多与人交流，外向，学着表达。 了解更多人的生活，了解他们的价值观，世界观。 一技之长，解决生存之根本 交好友，拜良师，遇贵人，练秉性，结良缘 学好语言，沟通表达，准确的表达自己的想法和情绪 2. 生活与梦想 # 梳理自己的经历，学识， 树立自己的知识体系 树立自己的价值观，世界观(如有) 确定自己的方向和目标，了解清楚自己追求的到底是什么 总结理论，更要多多实践。 博采众长，百家争鸣，最终创立自己的流派和思想。 长期维护良师益友关系，经营家庭婚恋关系 提升认知和财富，提升阶层、品味 省视自己的目标，梦想与追求，调整为适合自己的，拆分、实施、调整、落地。 这个阶段禁忌好为人师，少评论批评别人，多一些聆听即可。 3. 立德与育人 # 树立自己的德行 树立家庭或家族文化 给亲人，徒弟指导方向， 以德育人 做好倾听，陪伴，尤其是对家人。 多一些对生命，哲学佛学，奉献的思考，这些必然是生命的终点。 贯穿人一生的： # 习惯 沟通 耐心 情绪 `}),e.add({id:72,href:"/wiki/linux/shell/tcpdump/",title:"抓包",section:"Shell",content:` 抓取 udp dns 包 # sudo timeout 60 tcpdump -i any -n port 53 sudo tcpdump -i any -nn udp and port 53 sudo tcpdump -i bond0.1000 -nnAAAA | grep -A 20 -B 3 airdb.io 抓取 Client Hello 包 # sudo tcpdump \u0026ldquo;tcp port 443 and (tcp[((tcp[12] \u0026amp; 0xf0) \u0026raquo;2)] = 0x16) \u0026amp;\u0026amp; (tcp[((tcp[12] \u0026amp; 0xf0) \u0026raquo;2)+5] = 0x01)\u0026rdquo; -w client-hello.pcap
`}),e.add({id:73,href:"/wiki/dev/db/",title:"数据库",section:"Development Handbook",content:`1、数据库的三范式是什么?
2、DDL、DML、DCL、TCL分表代码什么含义？
3、熟悉MySQL的整体架构吗？
4、说说存储引擎 Inno DB和MyISAM的区别
5、熟悉哪些日志文件？
6、熟悉慢查询吗？
7、MySQL优化手段有哪些？
8、什么是事务？
9、事务的四大特性是什么？
10、说说Mysql的四种隔离级别
11、MySQL默认隔离级别是哪个？
12、知道MySQL中哪些锁？
13、并发读写容易带来什么问题？
14、说说你对MySQL中MVCC的认识
15、是如何解决幻读的？
15、索引是什么？
17、MySQL索引数据结构有哪几种？
18、有哪些类型的索引呢？
19、Hash和BTree作为MySQL索引，说说你对此有什么想法？
20、索引优化有哪些方式？
21、哪些场景建议创建索引？
22、哪些场景不建议使用索引？
23、用过explain吗？怎么用的？
24、熟悉MySQL锁优化吗？
25、熟悉哪些MySQL调优策略？
`}),e.add({id:74,href:"/wiki/part1/time-management/",title:"时间管理",section:"工作和生活效率",content:` 时间管理 # 如何一天完成4个人的工作量?
07:00 - 09:00 是大脑的黄金时间, 可以用来写文章，看书，学外语。 09:00 - 12:00 适合罐头工作法, 找一个安静无打扰的空间, 保持高度的专注。 13:00 - 16:00 是人在一天当中最困的时候，可以适当小睡, 也可以通过变化工作场所来恢复。 16:00 - 18:00 人会升起一种紧迫感, 想着一天不能就这样结束了，进入高效工作。 18:00 - 19:00 适合通过运动来让大脑重启。 19:00 - 21:00 是大脑的第二个黄金时间, 适合再做一些自我投资。 21:00 以后为了不失眠，还是尽早放松吧。 `}),e.add({id:75,href:"/wiki/training/3-traffic-replay/",title:"流量录制",section:"训练板块",content:` UDP 流量录制 # 压测 DNS https://github.com/airdb/goreplay-udp
Application # 压测 gateway, webapi https://github.com/buger/goreplay `}),e.add({id:76,href:"/wiki/dev/mq/",title:"消息队列",section:"Development Handbook",content:` 高性能万亿级消息吞吐Pulsar设计原理
`}),e.add({id:77,href:"/wiki/part4/crawler/",title:"爬虫",section:"Part4",content:` https://docs.crawlab.cn/zh/Spider/ConfigurableSpider.html
https://github.com/gocolly/colly https://github.com/crawlab-team/crawlab
`}),e.add({id:78,href:"/wiki/training/1-setup-os-and-environment/",title:"环境设置",section:"训练板块",content:" Mac # brew Windows # ubuntu shell and network Common # github.com vscode golang hugo (for recording documents) "}),e.add({id:79,href:"/wiki/part4/ids/",title:"用户行为安全",section:"Part4",content:` 爬虫检测技术 # 行为检测: 通过分析网页上用户的操作（鼠标的移动、点击、滚动行为和浏览行为）来判断操作者是否是机器控制的网络爬虫。
指纹识别: 通过分析设备和浏览器的信息来判断访问者是否为网络爬虫。
虽然指纹识别有被攻破和绕过的可能，但是指纹识别相较于行为检测，可以比较快速地对访问者做出识别和判断，将那些看了几篇教程就撸起袖子一通乱干的爬虫死死地摁在地上。
JA3(s) 的使用原理 # Q: 为什么 Ja3 的计算结果能够用于识别 TSL/SSL 指纹信息？ A: 这其实源于John Althouse的一个研究结果：同一个服务器对同一个客户端的多次请求返回相同的响应信息。
Ja3 不同 # chrome 指纹: 192, 0-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53, 0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21, 29-23-24, 0
edge
192, 0-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53, 0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513-21, 29-23-24, 0
新版edge也是用的chromium的内核，Extention扩展多了一个17513
csharp的HttpClient 指纹: 3072, 49196-49195-49200-49199-159-158-49188-49187-49192-49191-49162-49161-49172-49171-157-156-61-60-53-47-10, 0-10-11-13-35-23-65281, 29-23-24, 0
Fiddler 指纹: 3072, 49196-49195-49200-49199-159-158-49188-49187-49192-49191-49162-49161-49172-49171-157-156-61-60-53-47-10, 0-10-11-13-35-23-65281, 29-23-24, 0
因为Fiddler是csharp写的，应该用的都是微软的封装的ssl实现吧。 所以和csharp的HttpClient是一样的指纹。
java JDK自带的HttpsURLConnection
指纹: 3072, 49187-49191-60-49189-49193-103-64-49161-49171-47-49156-49166-51-50-49195-49199-156-49197-49201-158-162-49160-49170-10-49155-49165-22-19-255, 10-11-13, 23-1-3-19-21-6-7-9-10-24-11-12-25-13-14-15-16-17-2-18-4-5-20-8-22, 0
明显可以看出来 EllipticCurve 多了很多！
区分指纹
IDS Intrusion Detection System 改进的TLS指纹增强用户行为安全分析能力
通过-ja3s-实现-tls-指纹识别
JA3(S)，简单而有效的 TLS 指纹
nginx-ssl-ja3
混淆加密流量规避检测：黑客利用加密流量趋势明显
SSL-指纹识别和绕过
浏览器指纹追踪技术简述
TLS Fingerprinting in the Real World
Python常见的反爬手段和反反爬虫方法
爬虫风险管理
基于Web的爬虫识别算法
`}),e.add({id:80,href:"/wiki/arch/",title:"系统架构",section:"Wikis",content:` 怎么提高自己的系统架构水平 DDD 实战课
什么是架构 # 架构 是指构成一个系统的主要元素及它们之间的主要关联，这些元素和关联能够反映该系统的本质特征。
选择架构应该了解架构的来源和所要解决的问题，从业务和问题出发，避免滥用架构。
分层架构 # 分层架构是一种历史悠久的架构，通过分层架构，可以将系统按不同职责组织成有序层次，由于这种划分往往比较容易界定，也算是最常见和最受欢迎的一种架构
DDD分层架构 # 不过从分层架构图中可以发现，将基础设施层放入底层是存在缺点的，领域层依赖于基础设施层，这对领域层的内聚性产生影响。一个解决方案就是依赖倒置。
依赖倒置 # 高层模块不应该依赖于底层模块，两者都应该依赖于抽象 抽象不应该依赖于实现细节，实现细节应该依赖于接口 DIP分层
采用了依赖注入方式后，其实可以发现事实上已经没有分层概念了。无论高层还是底层，实际只依赖于抽象，整个分层好像被推平了，这就引入下一个架构六边形架构。
六边形架构（Hexagonal architecture） # 六边形架构是Alistair Cockburn在2005年提出，解决了传统的分层架构所带来的问题，实际上它也是一种分层架构，只不过不是上下或左右，而是变成了内部和外部
六边形架构的功能非常强大，可以作为基层架构并用于支持系统的其他架构。
六边形的内部代表了application和domain层。外部代表应用的驱动逻辑、基础设施或其他应用。内部通过端口和外部系统通信，端口代表了一定协议，以API呈现。
`}),e.add({id:81,href:"/wiki/linux/network/",title:"网络",section:"Linux",content:`姜知笔记: https://www.gingerdoc.com/
`}),e.add({id:82,href:"/wiki/training/",title:"训练板块",section:"Wikis",content:`目标：练习常用的技能
`})})()
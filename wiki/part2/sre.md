# SRE 介绍

Site Reliability Engineering

## 一、SRE起源和发展

IT领域一直有很多趋势和流行关键词，比如微服务和DevOps，现在国内又兴起了SRE，它在传统运维之外又纳入更多的开发和流程部分。SRE是Site Reliability Engineer的简称，由谷歌公司首先提出，一开始是公司内部定义的一个工种。谷歌的SRE工程师对Borg分布式集群管理系统以及在此之上运行的Gmail、Google Docs、Web Search等以及各种APP应用进行运维。

这个岗位的工程师具有开发能力，又了解一些系统管理的知识，他们把一些最佳实践、方式、流程、方法都固化成代码，用这种方式去应对规模性的扩张，去应对复杂度的上升。从名字其实就可以看出SRE不只是做Operation方面的工作，更多是保障整个服务的稳定性。


SRE不仅仅是对分布式系统运维工程师的职业要求，还涉及运维的自动化、开发运维一体化、持续集成持续开发等理念、监控系统、部署、容量规划、可靠性技术和实践和运维团队建设等方面的内容。可为云服务提供商提高分布式系统的资源利用率，降低运营和运维成本，让系统可靠和稳定地运行，提升用户体验。

随着互联网的快速发展，分布式系统规模急剧扩展，新型系统的运维要求对传统运维理念提出了新的挑战。随着谷歌对大规模分布式集群和互联网应用运维经验的积累，SRE的实践理念得到国外各大互联网公司的采纳和应用。Site Reliability Engineer逐渐朝着Site Reliability Engineering的理论化方向发展。


由于互联网行业的特性和对速度的追求，一般这些新理念和新技术的发端和普及都是从互联网企业开始，国内也不例外。虽然很多国内互联网企业并没有明确提及SRE这个岗位名称，但是据我所知他们也是在向着SRE理念提及的很多方向在前进，比如自动化、工具化、平台化等等。不管国内称之为PE、运维工程师还是其他什么，其实做的事情也就是SRE在倡导的DevOps的运维实践



## 二、定位、方向与职责

总结一下，SRE

从岗位的角度上看：运维工程师升级版
从运维的方式上看：自动化、智能化、工具化、平台化
从工作的结果上看：保证系统稳定的前提下提高系统效率，平衡系统稳定性和用户体验的关系

## 三、实践

从SRE成功实践的几大要素看：

- 1、具有研发能力
- 2、一定要设定服务的SLA
- 3、有余量的预估
- 4、 SRE与研发有共享的资源工具
- 5、 SRE承担不超过50%的运维工作量
- 6、 每个事故都要做事后分析，并要聚焦于流程和技术。
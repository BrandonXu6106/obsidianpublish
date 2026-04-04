---
title: LCD OLED QLED mini-LED等显示技术的区别
source: https://www.bilibili.com/video/BV1Me4y1k72b/?vd_source=b7647c28b9310a1aceb6a792c0f7fe07
author:
  - Brandon
created: 2026-02-18
description: LCD IPS TN VA OLED MINI-LED Micro-LED QLED QD-OLED W-OLED，如果你有了解过显示器或者手机屏幕，这些名词想必或多或少听过几个。有些名词可能只差一个字母，但实际的价格和显示效果会是天差地别，这期节目我们将从最底层的原理详细了解上面这些名词代表的含义以及他们的工作原理。, 视频播放量 1691757、弹幕量 4595、点赞数 96400、投硬币枚数 69202、收藏人数 55780、转发人数 18978, 视频作者 硬件茶谈, 作者简介 商业合作VX：yang_10-14淘宝电脑店：硬件茶谈京东电脑店：硬件茶谈店电脑主机定制：yang_10-14，相关视频：【硬核科普】全网最简洁易懂的OLED与LCD屏幕工作原理与优劣科普，【硬件科普】OLED显示器成熟了吗？——WOLED QD-OLED 大尺寸OLED技术详解，【硬核科普】从零开始认识显卡，打游戏别买OLED显示器，miniled显示器最痛苦的一集。，LCD屏幕的工作原理是怎样的？，MiniLED 和 OLED 的优缺点！，真正的画质天花板，micro LED，不同亮度的显示器体验差别有多大？OLED、MiniLED、NanoIPS怎么选？，液晶真是个好东西~LCD液晶屏有什么缺点？
tags:
  - b站
  - 显示器
  - 屏幕
  - OLED
  - LED
  - LCD
  - miniLED
  - QLED
---
![](https://www.bilibili.com/video/BV1Me4y1k72b/?vd_source=b7647c28b9310a1aceb6a792c0f7fe07)

## 1. LCD与LED的区别
市面上最常见的显示技术：
**LCD**（ Liquid Crystal Display）**「液晶显示屏幕」**
**LED**  （Light-emitting diode）**「发光二极体」**

两者区别
LCD:  ==自身不发光== 靠==背光层发白光== ==液晶层==控制偏振角度从而控制亮度（控制进光量）
- LCD：白光背光层
- QLED：蓝光背光层
- MiniLED：白光分区背光层

LED：简单可理解为可==发单种光的灯珠== 如以下广告牌的灯珠就为LED灯珠
- LED：二极管，自发光
- OLED：有机物，自发光
- W-OLED：有机物，自发光
- QD-OLED：有机物，自发光
- Micro-LED：无机物，自发光

## 2. LCD介绍
### 2.1. 结构图：
- 单像素点的**结构图**：![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181742764.png)
- **核心层**：偏振片、液晶![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181746457.png)


### 2.2. 工作原理
1. **光**：是一种波，在==水平和垂直==方向都有==分量==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181749214.png)
2. **垂直偏正片**：一束光==穿过==一层==特制==的==垂直偏振片==，==出来==的光的波形，是只在==垂直==方向上具有==分量==的偏振光![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181751865.png)
3. **双层**垂直偏正片：光可以==正常透过==的![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181752694.png)
4. **一层**保持**垂直**，**一层**发生 **旋转**：
	- 垂直方向的光在==倾斜角度==上还是具有一定分量的，==部分光线==还是==可以射过==第二层偏振片![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181754107.png)
	- 随着偏振片的==角度越来越大==，垂直的光在水平方向上的分量越来越小，光越来越弱![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181756444.png)
	- 两个偏振片呈90度==垂直关系==，==所有的光==都会被第二层偏振片==拦下==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181758844.png)

5. **液晶层**：
	- 对通过了==第一层==偏振片的==偏振光==进行==偏转==，==让==光能==透过第二层==偏振片![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181806065.png)
	- 液晶层内包含了大量的==液晶分子==，通过往液晶分子下面的==TFT薄膜晶体管==输入==电压==，联通正负极电路构成==回路==，控制==液晶分子偏转==，从而控制==光线的偏转角度==，进而控制此==像素的亮度==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181807213.png)
	- 但是只能显示==黑白画面==
6. **彩色滤光片**
	- 把==白光过滤==成==红绿蓝==三种颜色的光![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181810447.png)
	- 通过控制==红绿蓝==三个子像素的==亮度==(液晶分子)，就能混合出各种各样的==颜色![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181816112.png)
7. 无数**像素点排列**
	- 构成我们在屏幕这头所看到的==完整的画面==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181817147.png)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181818315.png)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181818598.png)
	- ==分辨率==：==像素点的数目==就是屏幕的分辨率--3840×2160=8294400 像素点
8. **背光**：
	- 由一条==LED灯带==，配合==匀光板==实现的==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181822213.png)
	- 所有的像素点会==共享一整块大的背光![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181822423.png)
	- 在==屏幕开启==时，==背光==是==常亮==的，即便全屏显示黑色，也只是让==液晶==分子==不对光线做偏转==，背光仍然发光的![202602181825622.png](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181825622.png)
	- 但，物理性质等原因，==液晶分子==即便处于==关合==状态，==也会==对光线有一定的==轻微偏转==，导致一部分==光线泄露==出去，使得LCD屏幕在显示纯黑画面的时候，显示的其实是亮度大幅度递减的==灰色==，而不是真正意义的纯黑，这会导致画面中该暗的部分==不够暗==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181829459.png)
	- 深色内容不够深，色彩没层次，==对比度偏低== ![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181829845.png)
	- ps：显示器漏光(≠光线泄露)：指屏幕固定和封装出现瑕疵，导致背光从显示器边框而不是像素点漏出去，出现大面积光晕![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181832009.png)
### 2.3. VA屏/IPS屏/TN屏的区别
同：都属于**LCD**屏幕![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181834520.png)
异：**液晶分子**的**排列和偏转方向**不同
- 未施加电压：![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181838819.png)
- 施加电压：![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181839993.png)

理论显示效果
- VA：电影--画面好，响应慢
- IPS：普适性
- TN：FPS电竞--响应快，画面差![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181840315.png)

VA高端产品：响应速度非常接近IPS，无拖影问题

### 2.4. QLED屏(伪LED)
QLED是在LCD的基础上对**背光进行改进**：![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181847737.png)
**原理**：使用**蓝光**照射**不同粒径**的**量子点材料**，它们会**发射**出波长不同 **颜色不同**的光线![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181850988.png)
**运用**
- 将**两种**不同粒径的**量子点材料**，均匀的**涂抹到基板**上![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181852816.png)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181853844.png)
- 通过**蓝色背光**的**照射**，就可以发射出纯度非常高的**红光和绿光**，再**加上蓝色**的背光，混合出来的白光可以实现**更广泛的色域**覆盖，画面更鲜艳![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181853234.png)

**本质**：还是==LCD==的范畴(≠OLED)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181857293.png)
QLED的显示器可以是IPS也可以是TN

### 2.5. mini-LED显示器
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181902089.png)
**mini-LED也是LCD的范畴**
- 将LCD原本一**整块的背光**，替换成了数个可单独控制亮度的**分区背光**![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181903234.png)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181903397.png)
- 在显示暗色和黑色时，单独控制==区域背光变暗或者关闭==，提高对比度
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181904776.png)
**优点**：更容易实现==高阶的HDR效果==
- hdr是==视频格式==，不是显示器标准。
	- hdr10，支持0-1000nit亮度调节。
	- hdr10+，支持0-4000nit。
	- 杜比视界，支持0-10000nit。

**缺点**：
- 市售绝大多数mini-LED，分区背光的数量约为500或者1000，这就意味着有大量的像素点会共享一块背光，在显示小范围高亮物体如鼠标时，周边会产生==光晕现象==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181910784.png)
	- 正面看不易察觉，==侧面看很明显==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181911612.png)
	- 解决办法：分区背光等级调节![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181912980.png)
- ==调校难度==增加：
	- LCD屏幕你只需要控制液晶层来==调整颜色和亮度==，而mini-LED你要==同时控制背光和液晶层==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602190048865.png)

## 3. LED介绍
>LED即发光二极管，是一种常见的**发光器件**，通过电子与空穴复合释放能量发光。
>它在照明领域应用广泛。可高效地将**电能转换为光能**，在现代社会具有广泛的用途，如照明、平板显示、医疗器件等。

### 3.1. 什么是LED
小卖铺LED屏：由大量的**小LED灯珠** (就是**发光二极管**) 构成的
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181915493.png)
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181915794.png)
给电极通电 **电越多** **亮度越高**，通过控制灯珠的**亮度和开关**，可以**组合**出想要的**图案和文字**
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181916646.png)
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181916172.png)
局限：但**单颗**LED灯珠**只能显示一种颜色**，如果要显示彩色，我们需要给每个像素点，**额外增加**上绿色和蓝色LED灯珠，**形成彩色**LED屏幕![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181918938.png)
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181918668.png)
不过这种LED**灯珠比较大**，如果用作**手机或者电脑显示器**，**单位面积能塞下的灯珠数量少**，分辨率不够 清晰度会很差![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181919931.png)
### 3.2. 微型LED
#### 3.2.1. OLED 
 >**有机**发光二极管（ **Organic** Light Emitting Diode） 

**发现**：工程师发现给某些==荧光材料通电==后，他们自己会==发出==红绿蓝各种颜色的==光线==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181925500.png)
**运用**：先印刷好==薄膜电路==，然后通过==化学蒸镀==手段，让红绿蓝==对应==的发光==材料附着==在薄膜电路上，最后只需要给薄膜电路通电，就能控制荧光材料发光了![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181927635.png)
**本质**：由于OLED可以单独控制每个子像素的亮度和开关，所以他相当于==像素级别的分区背光==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181929010.png)
**优点**：
- ==对比度极高==且==不存在光晕==现象，荧光材料本身也能发出很浓的红绿蓝三色光，==色域覆盖==非常的广
- ==没有液晶层== 使得他的==厚度很薄== ==响应速度极快==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181932443.png)
- 薄膜电路和荧光材料都可以弯曲，也可以很容易实现 ==曲面屏==和==折叠屏==
- 少了常亮背光 ==功耗==也会比LCD==低不少==

**缺点**：
- 有机物发光==材料==，==寿命==比较短 容易==老化==
- 红绿蓝三种==颜色材料==的==寿命还不一样==
	- 烧屏现象：某个像素点长期显示某种颜色，时间一长，对应颜色的==亮度==就会==衰减==，最后导致屏幕上出现==色彩残留==和==色差==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181937011.png)
- PWM调光和等效分辨率下降等问题![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181939369.png)


**解决办法**：
- 为减少有机物材料寿命，绝大多数大尺寸OLED的==峰值亮度==，都还没有突破1000nit，全屏显示白色亮度也会骤降


#### 3.2.2. W-OLED
>白光有机发光二极管（White Organic Lighting-Emitting Diode）

**目的**：那为了缓解OLED==烧屏==的问题
**原理**：不直接用荧光材料发出红绿蓝光线了，而在薄膜电路上，蒸镀只能发射==白色光==的==荧光材料==，再在前面增加一块==彩色滤光==，过滤出红绿蓝三色光![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181944920.png)
**优点**：三个像素点==老化速度会比较接近==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181944994.png)
**缺点**：RGB滤光片会==过滤==掉一部分光线，这会导致显示纯白色的时候亮度不足![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181945699.png)
**解决办法**：W-OLED还额外==增加==了一个==白色子像素==来提高HDR峰值亮度![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181948163.png)
**注意**：==w-oled==是点对点(对应四个子像素)的==真4k==，==rgmw==是==假4k==(对应3个子像素)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181951884.png)
**白色子像素的影响**：会对红绿蓝像素产生光线串扰，会==”冲淡”==屏幕的==色彩==，尤其是明亮、鲜艳的场景中，颜色表现不如常规OLED的
	
#### 3.2.3. QD-OLED
**目的**：为了==解决W-OLED色彩淡的问题==
原理：==参考QLED的技术==，在==薄膜电路==上蒸镀上只能发射==蓝色光==的==荧光材料==，再在上面覆盖一层==量子点薄膜==，通过蓝光==激发==量子点材料以此来发射==红色和绿色光==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602181955743.png)
**优点**：
- 缓解传统OLED三色材料==寿命不一的问题==
- 而且由于没有白色像素点导致的串扰，高亮度下==色域不会减少==
- 并且可以提供==更高的亮度==，再加上量子点材料本身就能发射==更广范围的颜色==


**缺点**：
- 没有LCD偏振片，==外界的环境光==如果照射到屏幕上，也会==激发量子点材料==，对屏幕本身的==光线产生污染==
	- 室内使用，影响不大


#### 3.2.4. 共有问题
**都是使用有机荧光材料**，材料老化，寿命短，要想根治，只能用无机材料
![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602182004508.png)
#### 3.2.5. micro-LED
面向未来的显示技术：将**无机材料**的LED发光**二极管做的足够小**，再将他们统一迁移到屏幕基板上，然后再将他们统一迁移到屏幕基板上![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602182007352.png)![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602182008685.png)
**优点**：
- 没有背光和液晶，可以单独控制像素点亮度和开关，他继承了==OLED的全部优点==![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602182009786.png)
- ==烧屏和PWM调光==以及==等效分辨率下降==等问题全部都==解决==掉

**缺点**：
- ==巨量转移技术==：现有的技术已经可以把LED灯珠做的==足够小==，但是如何把这么多灯珠全部整齐的摆放和焊接在控制电路上，成为了新的难题，现阶段还==没有办法低成本完成巨量转移==
- micro-LED显示技术还未大规模普及，消费级产品，售价极高


## 4. 总结
**LCD → QLED → Mini-LED → OLED → W-OLED →  QD-OLED → Micro-LED**![](https://int-1330323257.cos.ap-guangzhou.myqcloud.com//obsidian/pic/202602182015485.png)

**LCD**: 「液晶显示屏幕」 （ Liquid Crystal Display）<u>自身不发光</u> 靠<u>背光层</u>发白光 <u>液晶层</u>控制偏振角度从而<u>控制亮度</u>（控制进光量）
缺点：所有像素共享一块背光，即使显示黑色，背光也不关闭，并不是透彻的纯黑

- **VA IPS TN**：为液晶分子排列和偏转的方式
- **QLED**「量子点发光二极管」（Quantum Dot Light Emitting Diodes）: 在LCD的基础上对背光进行改进，用蓝光照射不同粒径的量子点材料，会发出颜色不同的光，那么就在基板上涂上不同颜色的量子点材料，加上==蓝色背光==，使得亮度更高，色域覆盖更广
- **MINI-LED**「次毫米发光二极体」：将LCD一整块的白色背光替换成了数个可单独控制亮度的==分区背光==
- 优点：在显示局部暗色和黑色时，可以单独控制那块区域的背光变暗或关闭，这样实现了更高对比度，黑色更黑更纯，更容易实现高阶HDR效果
- 缺点：mini LED在显示小范围的高亮度时，会将那一整块区域的背光都调亮，这样这个区域如果还有黑色部分，就会出现光晕现象

  

**LED**：「发光二极体」Light-emitting diode），简单可理解为<u>可发单种光</u>的灯珠 如以下广告牌的灯珠就为LED灯珠

- **OLED**「==有机==发光二极体」（Organic Light-Emitting Diode）：给某些荧光材料通电后，它们自己会发出红绿蓝各种颜色的光线。我们让红绿蓝的荧光材料附着在薄膜电路上，就能控制每个子像素发光。这样每个像素能单独控制亮度，对比度非常高，也没有光晕问题。
- 优点：对比度极高，响应速度极快，对比LCD的液晶结构，其薄膜电路和荧光材料可以进行弯曲，如曲面屏和折叠屏，没有了常亮背光，功耗更低
- 缺点：发光材料为有机物，容易老化，且由于红绿蓝三色块工作时间与亮度随画面内容而改变，导致三色块老化程度不一，如果某像素点长期显示某种颜色，对应颜色的亮度就会衰减，最后导致屏幕上出现色彩残留与色差（烧屏）。厂商为了控制烧屏，会限制其峰值亮度（现未突破1000nit）。因为其发光特性，不同的调光方式（PWM与DC）也会影响其体验

  

- **W-OLED**「白光==有机==发光二极体」（White Organic Light-Emitting Diode）：用白光代替OLED的红绿蓝荧光，在其加上红绿蓝滤光片，控制红绿蓝下对应的白光亮度就可解决OLED的老化速度不一，即烧屏
- 缺点：滤光片会过滤掉一部分光线，导致显示纯白色时亮度不足，为此额外增加了一个白色子像素来提高HDR峰值亮度，且在高亮画面时白色子像素会对红绿蓝像素产生干扰


- **QD-OLED:** 三星参考Q-LED，在薄膜电路上蒸镀只能发射蓝色光的==有机==荧光材料，在其上面覆盖一层量子点薄膜，通过蓝光激发量子点材料以此来发射红绿光，由于没有白色像素点导致的串扰，高亮度下色域不会减少，亮度不会降低
- 缺点：环境光会激发量子点薄膜，对屏幕本身的光线进行污染

PS: **因为其有机材料的特性 无论如何改良结构和优化材料，都无法避免老化寿命短的问题**

- **Micro-LED**「微型发光二极管」：将LED==无机==发光二极管做的极小，再将其统一迁移到屏幕基板
- 优点：由于没有液晶和背光，而且可以单独控制像素点亮度和开关，继承了OLED的全部优点且解决了有机材料老化（烧屏）和调光问题
- 缺点：贵贵贵，现阶段无法低成本完成全部整齐拜访且焊接到控制电路上，属于未来的技术
注意事项
===================================

### 使用框架说明：

1. 本应用程序使用新版框架，具体如下：
* 请求框架使用okHttp+retrofit+Gson
* 图片处理使用frascro
* 数据库使用GreenDao
* 设计风格使用Material Design
* 设计模式使用mvp
      
### 应用说明：

1. 本应用共两个分支，master为主分支，打包专用，dev为开发分支，开发专用
* 只有在dev上测试调通的代码才能合并到master分支上
* 应用的配置信息(网络地址、第三方Lib等信息)统一放到[baidai.gradle](baidai.gradle)中配置
* 加载本地json假数据:配置 -[baidai.gradle](baidai.gradle)文件中的nativeJson值为true，在-[json文件夹](app/src/main/assets/json)下以URL注解的部分的命名(“/”替换为"__")TXT文件，把json写入就可以了

### retrofit:

     API管理框架，配合OKHttp使用，目前使用的是2.0.1版本
     1、在网络访问时，会默认对value进行encoded（key不会），所以如果value有特殊字符(%/$等)时，
     需要制定注解为 @Query(value = "key", encodeValue = false)，如果需要对key加密也需要制定.
     2、对于 Retrofit 2.0中新的URL定义方式：
     - Base URL: 总是以 /结尾
     - @Url: 不要以 / 开头
 详情: -[Query](Query/)
 
### 目录结构说明：
> gradle 应用使用gradle版本
>idea 应用配置记录及编译记录
>app
>>build 编译生成文件夹
>>doc 存放应用相关文档
>>keystore 存放签名文件
>>libs 存放外部导入的jar包
>>src 
>>>androidTest 应用测试用例
>>>main
>>>>java 
>>>>>application 存放全局变量及应用初始化信息
>>>>>config 应用配置信息
>>>>>ui 所有功能模块
>>>>>base 所有基类
>>>>>slide 以侧滑栏为例说明
>>>>>activity 存放activity文件
>>>>>adapter 存放适配器文件
>>>>>api 存放api接口
>>>>>bean 存放数据模型
>>>>>fragment 存放fragment文件
>>>>>model 存放接口操作文件
>>>>>presenter 存放业务逻辑类文件
>>>>>view 存放界面操作类接口
>>>>>utils 工具类
>>>>>widget 自定义控件
>>>>jniLibs 存放所有so文件

>>build.gradle 应用版本管理配置

>viewpageindicator 外部关联项目indicator
>build.gradle 访问资源路径、gradle版本定义
>image 项目截图

### 视差效果
![ ](images/视差-效果.gif) 

### 动态模糊
    动态模糊采用魅族的动态模糊框架或者华为动态模糊框架
[Flyme的动态模糊] (http://open-wiki.flyme.cn/index.php?title=%E5%8A%A8%E6%80%81%E6%A8%A1%E7%B3%8A)
[华为的动态模糊] (http://developer.huawei.com/wiki/index.php?title=%E6%BB%A4%E9%95%9C%E4%BB%8B%E7%BB%8D)

### 银联支付错误

    【应答码】8100009 TN过期
https://open.unionpay.com/ajweb/help/respCode/detail?id=942

    【应答码】9100004 测试和真实环境切换不对
https://open.unionpay.com/ajweb/help/faq/list?id=40&level=0&from=0&keyword=%E5%88%87%E6%8D%A2%E7%94%9F%E4%BA%A7
 
###版本发布流程，
1，修改gradle里面的versionName和vesionCode  
versionName为对应的版本号例如2.0.0，当前线上版本：4.0.7
versionCode自加1即可，当前线上版本：51

2，gradle release 正式环境的版本，友盟统计渠道号用默认的百代的即可  
（注意环境地址的确认，问后台正式环境地址是否切换）  

3，将打包好的apk，用360加固工具加固，并签出对应渠道下的包  

4，分发给对应的负责人，运营-刘盼。百代渠道的给耿万山，版本信息如版本号，升级版本修改的内容描述提交给叶乃宝  

5，待他们发布完成后，需用旧版本升级验证  
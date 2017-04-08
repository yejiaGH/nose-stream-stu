什么是stream
把大的数据块切分成小段，缓缓流动

Node.js stream
提供了统一的Stream API
所有I/O都用到了stream
net/http/fs/zlib/crypto
=============================
Readable stream 原理
数据的旅程
  把底层数据放到Readable stream的buffer中，监听读完就清空buffer。
  对于Stream来说，调用者的读操作是被动的，写操作是主动的
缓冲区
  默认16KB,可自动扩大，最大不能超过8M。
  参数highWaterMark
两种流模式
  流动模式（stream1.0版本）
    底层数据不断对读取者push数据
  手动模式
    底层数据先写到buffer,读取者对buffer监听，等buffer处理完毕以后清空，底层数据再push新的数据
两种数据模式
  对象模式
    缓冲区默认16个，最大不限，最小1个
  非对象模式
    默认16KB,可自动扩大，最大不能超过8M
  非对象模式下，数据可以实Bsuffer或String类型
实现者与调用者
  实现者与调用者的API不同
  只读流的实现者要产生数据，只写流的实现者要接收数据

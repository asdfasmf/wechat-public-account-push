export const config = { 
        // 公众号配置
    // 公众号appId
    appId: "wxde332d0cba1d9a38
",
    // 公众号appSecret
    appSecret: "728134e32728c4a41d5ae20981e3dad7
",
    // 模板消息id
    templateId: "oKUCp6AZEtly18HWkCLvRWKXWh1k",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [7Ya4SJ779om7d-tJBoq2f9_-KHfk0a7oV_8LvfsTojk],

    province: "广东",
    // 所在城市
    city: "惠州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1993", "date": "12-27", "type": 'new'},
      {"name": "家公", "year": "1993", "date": "08-09", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2015-05-01",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

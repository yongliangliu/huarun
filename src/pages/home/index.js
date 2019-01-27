import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import MySwiper from '../../components/MySwiper';
import GoodsList from '../../components/GoodsList';
import Feed from '../../components/feed/feed'

import img1 from '../../images/other/24213.jpg'

import './index.scss';

@connect(({ home, cart, loading }) => ({
  ...home,
  ...cart,
  ...loading,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  constructor() {
    super(...arguments)
    this.state = {
      currentNavtab: 0,
      feed:[
        {
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img1,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img1,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 3,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George3',
            'feed_source_txt': '赞了回答3',
            'feed_source_img': img1,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 4,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca4',
            'feed_source_txt': '赞了回答4',
            'feed_source_img': img1,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 5,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex5',
            'feed_source_txt': '回答了问题5',
            'feed_source_img': img1,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 6,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George6',
            'feed_source_txt': '赞了回答6',
            'feed_source_img': img1,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 7,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca7',
            'feed_source_txt': '赞了回答7',
            'feed_source_img': img1,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 8,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex8',
            'feed_source_txt': '回答了问题8',
            'feed_source_img': img1,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        }
      ],
    }
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
    });
    this.props.dispatch({
      type: 'home/product',
    });

    // 设置衣袋小红点
    if (this.props.items.length > 0) {
      Taro.setTabBarBadge({
        index: 1,
        text: String(this.props.items.length),
      })
    }else {
      Taro.removeTabBarBadge({
        index: 1,
      })
    }
  };

  //分享
  onShareAppMessage() {
    return {
      title: '基于Taro框架开发的时装衣橱',
      path: '/pages/home/index',
    }
  };

  // 小程序上拉加载
  onReachBottom() {
    this.props.dispatch({
      type: 'home/save',
      payload: {
        page: this.props.page + 1,
      },
    });
    this.props.dispatch({
      type: 'home/product',
    });
  }

  render() {
    const { banner, brands, products_list, effects } = this.props;
    return (
      <View className="home-page">
        <MySwiper banner={banner} home />
        <View className="nav-list">
          { brands.map((item, index) => (
            <View className="nav-item" key={index}>
              <Image mode="widthFix" src={item.image_src}></Image>
            </View>
          ))}
        </View>
        {/* 流量主广告 */}
        {/* {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && <ad unit-id="adunit-dc1c0a38156fa412"></ad>} */}
        <Text className="recommend">为你推荐</Text>
        {/* <GoodsList list={products_list} loading={effects['home/product']} /> */}
            <ScrollView scroll-y className='container discovery withtab'>
              <View className='ctnt0' hidden={this.state.currentNavtab==0 ? false : true}>
                
                  {this.state.feed.map((item, index)=>{
                    return (
                      <Feed
                        key={`dis_${index}`}
                        feed_source_img={item.feed_source_img}
                        feed_source_name={item.feed_source_name}
                        feed_source_txt={item.feed_source_txt}
                        question={item.question}
                        good_num={item.good_num}
                        comment_num={item.comment_num}
                        answer_ctnt={item.answer_ctnt} />
                    )
                  })}
              </View>
           
        </ScrollView>


      </View>
    )
  }
}


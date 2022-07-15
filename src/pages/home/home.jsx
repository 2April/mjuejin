import React, { Component } from "react";

import HomeHeader from "../../components/home-header/home-header";
import SubTag from "../../components/sub-tag/sub-tag";
import InfiniteScroll from "../../components/infinite-scroll/infinite-scroll";
import PostList from "../../components/post-list/post-list";

import { getCategories,  getArticles } from "../../fake-api";

import "./index.scss";

export default class Home extends Component {
  state = {
    categories: [],
    articles: [],
    tagList: [],
    loading: false,
    offset: 0,
  };

  getCategories = async () => {
    const res_categories = await getCategories();
    this.setState({ categories: res_categories.data.categories });
  }

  getTagById = (id) => {
    const { categories } = this.state;
    const category = categories.filter(item => item.category_id === id)[0];

    if (category) {
      const tagList = category.children || [];

      this.setState({ tagList });
    }
  }

  getArticles = async (categoryId, sortType, offset) => {
    const res_articles = await getArticles(categoryId, sortType, offset);

    if (this.state.loading) {
      const articles = this.state.articles.concat(res_articles.data.articles);
      this.setState({ articles, loading: false });
    } else {
      this.setState({ articles: res_articles.data.articles })
    }
  }
  // BUG 进入详情路由后，没有记录当前位置
  loadMore = () => {
    if (this.state.loading) return;

    this.setState({ loading: true });

    const { categoryId, sortType } = this.props.location.state || {};
    let { offset } = this.state;
    offset += 10;
    this.setState({ offset });

    this.getArticles(categoryId, sortType, offset);
  }

  componentDidMount() {
    this.getCategories();
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    const { state } = this.props.location;
    const pre_state = prevProps.location.state;
    
    // 如果路由携带的状态参数改变了，则重新请求数据。
    if (state !== pre_state) {
      window.scrollTo(0, 0);

      const { categoryId, sortType } = state || {};

      this.getArticles(categoryId, sortType);
      this.getTagById(categoryId);
    }
  }

  render() {
    const { categories, tagList, articles } = this.state;
    return (
      <div className="home">
        <HomeHeader categories={categories} />
        <div className="home-content">
          {
            tagList.length ? <SubTag tagList={tagList} /> : null
          }
          <InfiniteScroll loadMore={this.loadMore} listenScroll={this.props.match}>
            <PostList articles={articles} />
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

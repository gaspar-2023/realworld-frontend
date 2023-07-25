<template>
    <ArticlesListNavigation
      v-bind="$attrs"
      :tag="tag"
      :username="username"
    />
  
    <div
      v-if="articlesDownloading"
      class="article-preview"
    >
      Articles are downloading...
    </div>
    <div
      v-else-if="articles.length === 0"
      class="article-preview"
    >
      No articles are here... yet.
    </div>
    <template v-else>
      <ArticlesListArticlePreview
        v-for="(article, index) in articles"
        :key="article.slug"
        :article="article"
        @update="newArticle => updateArticle(index, newArticle)"
      />
  
      <AppPagination
        :count="articlesCount"
        :page="page"
        @page-change="changePage"
      />
    </template>
  </template>
  
  <script setup lang="ts">
  import { useArticles } from 'src/composable/useArticles'
  // 分页器组件
  import AppPagination from './AppPagination.vue'
  // 文章列表预览组件
  import ArticlesListArticlePreview from './ArticlesListArticlePreview.vue'
  // 文章列表导航
  import ArticlesListNavigation from './ArticlesListNavigation.vue'
  
  const {
    fetchArticles, 				// 一个方法，用于获取文章列表
    articlesDownloading,	// 一个布尔值，用于判断文章是否正在下载
    articlesCount,				// 文章总数
    articles,							// 文章列表
    updateArticle,				// 一个方法，用于更新文章
    page,									// 当前页面
    changePage,						// 一个方法，用于更改页面
    tag,									// 标签名称
    username,							// 用户名
  } = useArticles()
  
  await fetchArticles()
  
  </script>
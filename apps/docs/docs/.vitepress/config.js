/**
 * @type {import('vitepress').UserConfig}
 */

export default {
  title: "開発ドキュメント",
  description: "開発ドキュメントのテンプレート",
  themeConfig: {
    sidebar: {
      "/guide/":[
        {
          text: 'ドキュメントの運用について',
          collapsible: true,
          items: [
            { text: 'はじめに', link: '/guide/' },
            { text: '開発での命名規則', link: '/guide/rule' },
            { text: 'デプロイ', link: '/guide/deploy' },
          ]
        }
      ],
      "/dev-rule/": [
        {
          text: "開発ルール",
          collapsible: true,
          items: [
            {text:'はじめに', link:'/dev-rule/'},
            {text:'ワークフロー', link:'/dev-rule/workflow/'},
            {text:'デプロイ', link:'/dev-rule/deploy'},
          ]
        }
      ]
    }
  }
}

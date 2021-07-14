const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Gstarcad web开发工程师",
  tagline: "web 全栈教程",
  url: "https://gstarcad63.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gstarcad63", // Usually your GitHub org/user name.
  projectName: "gstarcad-blog", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Gstarcad", // h1 标题
      logo: {
        alt: "My Blog Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          // to: "docs/",
          // activeBasePath: "docs", // 路径
          // label: "文档",
          // position: "right",
          // items: [
          //   {
          //     label: "博客",
          //     to: "blog",
          //   },
          // ],
        },

        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "教程",
        },
        { to: "blog", label: "博客", position: "right" },

        {
          href: "https://github.com/gstarcad63",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "教程",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "laravel 中文社区",
              href: "https://learnku.com/users/67821/",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/gstarcad63",
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} 此项目. 使用 Docusaurus 构建.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,

          editUrl: "/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },
};

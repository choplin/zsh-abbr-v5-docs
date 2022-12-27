import * as dotenv from 'dotenv';
dotenv.config()
import { defaultTheme } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { tocPlugin } from '@vuepress/plugin-toc';

export default {
  // https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#fefefe",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    // social metas
    [
      "meta",
      { property: "og:title", content: "zsh-abbr" },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://zsh-abbr.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: "zsh-abbr" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://zsh-abbr.olets.dev/images/zsh-abbr.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: "zsh-abbr" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://zsh-abbr.olets.dev/images/zsh-abbr.png",
      },
    ],

    // Fathom analytics
    [
      "script",
      {
        src: "https://innovate-remarkable.olets.dev/script.js",
        'data-site': "PSZVZLUT",
        'defer': true,
      }
    ],

    // Font
    [
      "link", {
        "rel": "preconnect",
        "href": "https://fonts.googleapis.com"
      },
    ],
    [
      "link", {
        "rel": "preconnect",
        "href": "https://fonts.gstatic.com",
        "crossorigin": "true",
      },
    ],
    [
      "link", {
        "href": "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        "rel": "stylesheet",
      },
    ],
  ],

  // site config
  // https://v2.vuepress.vuejs.org/guide/configuration.html#site-config
  lang: "en-US",
  title: "zsh-abbr",
  description: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",

  markdown: {
    links: {
      externalAttrs: {
        class: "external-link",
        rel: "",
        target: "",
      }
    }
  },

  // theme and its config
  theme: defaultTheme({
    algolia: {
      apiKey: process.env.SEARCH_KEY,
      appId: process.env.APPLICATION_ID,
      indexName: process.env.INDEX_NAME,
    },
    contributors: false,
    lastUpdated: false,
    repo: "olets/zsh-abbr/tree/v5",
    docsDir: "docs",
    docsRepo: "olets/zsh-abbr-v5-docs",
    navbar: [
      {
        text: "Changelog",
        link: "https://github.com/olets/zsh-abbr/blob/main/CHANGELOG",
      },
      {
        text: "License",
        link: "https://github.com/olets/zsh-abbr/blob/main/LICENSE",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Introduction",
          link: "/",
        },
        "/installation",
        "/essential-commands",
        {
          text: "Reference",
          link: "/reference",
          children: [
            "/scope",
            "/type",
            "/commands",
            "/advanced",
            "/performance",
          ],
        },
        {
          text: "Contributing",
          link: "/contributing/",
          children: [
            {
              text: "Sponsoring",
              link: "/contributing#sponsoring",
            },
          ],
        },
        "/community",
        "/migrating-between-versions",
        "/uninstalling",
      ],
    },
    sidebarDepth: 3,
    themePlugins: {
      externalLinkIcon: false,
    },
  }),

  // plugins
  plugins: [
    // https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html
    docsearchPlugin({
      apiKey: process.env.SEARCH_KEY,
      appId: process.env.APPLICATION_ID,
      indexName: process.env.INDEX_NAME,
    }),
    // https://v2.vuepress.vuejs.org/reference/plugin/shiki.html
    shikiPlugin({
      // only github-dark and slack-dark pass color accessibility
      theme: "github-dark",
    }),
    tocPlugin(),
  ],
};

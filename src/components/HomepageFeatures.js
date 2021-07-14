import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "易于使用",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Docusaurus 的设计从一开始就很容易安装并用于让您的网站快速启动和运行。</>
    ),
  },
  {
    title: "专注于重要的事情",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus
        让您专注于您的文档，而我们会做这些杂事。继续并将您的文档移动到docs目录中。
      </>
    ),
  },
  {
    title: "由 React 提供支持",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        通过重用 React 来扩展或自定义您的网站布局。Docusaurus
        可以在重复使用相同的页眉和页脚的同时进行扩展。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Tabs } from "antd";
import { compMap } from "../../utils";

interface HomePageProps {
  categories: string[];
}

export const HomePage = ({ categories }: HomePageProps) => {
  return (
    <Tabs defaultActiveKey="0" centered>
      {categories.map((cat, ind) => {
        const ComponentToRender = compMap[cat as keyof typeof compMap];
        return (
          <Tabs.TabPane key={ind} tab={cat}>
            <ComponentToRender />
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
};

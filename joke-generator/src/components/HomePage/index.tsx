
import React from 'react';
import { Tabs } from 'antd';

interface HomePageProps{
    categories:string[]
}

export const HomePage = ({categories}:HomePageProps) =>{
  return(
    <Tabs
    defaultActiveKey="1"
    centered
    items={categories.map((cat, ind) => {
      return {
        label: `${cat}`,
        key: `${ind}`,
        children: `Content of Tab Pane ${ind}`,
      };
    })}
  />
  )
}
